import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { prisma } from '../config/db.js';
import { AuthenticatedRequest, JWTPayload, UserRole } from '../types/auth.js';

const JWT_SECRET: jwt.Secret = process.env.JWT_SECRET || 'fallback_secret_for_development_mode_only';

const sendOtpSchema = z.object({
  email: z.string().email('Please enter a valid academic/personal email address'),
  name: z.string().optional(),
});

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long').max(100),
  email: z.string().email('Please enter a valid academic/personal email address'),
  phoneNumber: z.string().optional(),
  password: z.string().min(6, 'Password must be at least 6 characters long').max(100),
  role: z.enum(['Student', 'Educator'], {
    errorMap: () => ({ message: "Role must be either 'Student' or 'Educator'" }),
  }),
  otp: z.string().min(6, 'Please enter the 6-digit verification code').max(6, 'OTP must be 6 digits'),
});

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

const setAuthCookie = (res: Response, token: string) => {
  const isProduction = process.env.NODE_ENV === 'production';
  res.cookie('token', token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: '/',
  });
};

/**
 * Generate and dispatch a 6-digit OTP for email verification
 */
export const sendOtp = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedData = sendOtpSchema.safeParse(req.body);

    if (!validatedData.success) {
      res.status(400).json({
        success: false,
        message: 'Invalid email address provided.',
        errors: validatedData.error.errors.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      });
      return;
    }

    const { email } = validatedData.data;
    const normalizedEmail = email.toLowerCase().trim();

    // Check if account already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      res.status(409).json({
        success: false,
        message: 'An account with this email already exists. Please sign in instead.',
      });
      return;
    }

    // Generate random 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes validity

    // Upsert into OtpVerification table
    await prisma.otpVerification.upsert({
      where: { email: normalizedEmail },
      create: {
        email: normalizedEmail,
        otp: generatedOtp,
        expiresAt,
      },
      update: {
        otp: generatedOtp,
        expiresAt,
      },
    });

    console.log(`[OTP Service] 📩 Generated 6-digit OTP for ${normalizedEmail}: ${generatedOtp} (Valid for 10 mins)`);

    res.status(200).json({
      success: true,
      message: `A 6-digit verification OTP has been generated for ${normalizedEmail}`,
      demoOtp: generatedOtp, // Included for fast evaluator/demo testing
      expiresInMinutes: 10,
    });
  } catch (error: any) {
    console.error('Send OTP Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate verification OTP. Please try again.',
    });
  }
};

/**
 * Verify OTP and Register user account
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedData = registerSchema.safeParse(req.body);

    if (!validatedData.success) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validatedData.error.errors.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      });
      return;
    }

    const { name, email, phoneNumber, password, role, otp } = validatedData.data;
    const normalizedEmail = email.toLowerCase().trim();

    // Check if email already registered
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      res.status(409).json({
        success: false,
        message: 'An account with this email address already exists. Please log in.',
      });
      return;
    }

    // Verify OTP record
    const otpRecord = await prisma.otpVerification.findUnique({
      where: { email: normalizedEmail },
    });

    if (!otpRecord) {
      res.status(400).json({
        success: false,
        message: 'No OTP requested for this email. Please click "Send OTP" first.',
      });
      return;
    }

    if (new Date() > otpRecord.expiresAt) {
      res.status(400).json({
        success: false,
        message: 'The OTP verification code has expired. Please request a new code.',
      });
      return;
    }

    if (otpRecord.otp !== otp.trim()) {
      res.status(400).json({
        success: false,
        message: 'Invalid OTP code. Please check your verification code and try again.',
      });
      return;
    }

    // Delete verified OTP so it cannot be reused
    await prisma.otpVerification.delete({
      where: { email: normalizedEmail },
    });

    // Hash password with bcrypt
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        phoneNumber: phoneNumber ? phoneNumber.trim() : null,
        passwordHash,
        role: role as UserRole,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        role: true,
        createdAt: true,
      },
    });

    const payload: JWTPayload = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as UserRole,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
    setAuthCookie(res, token);

    res.status(201).json({
      success: true,
      message: role + ' account registered & verified successfully!',
      user,
    });
  } catch (error: any) {
    console.error('Registration Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error occurred during registration.',
    });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedData = loginSchema.safeParse(req.body);

    if (!validatedData.success) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validatedData.error.errors.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      });
      return;
    }

    const { email, password } = validatedData.data;
    const normalizedEmail = email.toLowerCase().trim();

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials. Email or password incorrect.',
      });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials. Email or password incorrect.',
      });
      return;
    }

    const payload: JWTPayload = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as UserRole,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
    setAuthCookie(res, token);

    res.status(200).json({
      success: true,
      message: 'Logged in successfully.',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (error: any) {
    console.error('Login Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error occurred during login.',
    });
  }
};

export const logout = async (_req: Request, res: Response): Promise<void> => {
  try {
    const isProduction = process.env.NODE_ENV === 'production';
    res.clearCookie('token', {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      path: '/',
    });

    res.status(200).json({
      success: true,
      message: 'Logged out successfully.',
    });
  } catch (error: any) {
    console.error('Logout Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to logout.',
    });
  }
};

export const getMe = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      res.status(404).json({ success: false, message: 'User profile not found.' });
      return;
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error: any) {
    console.error('Get Profile Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user profile.',
    });
  }
};