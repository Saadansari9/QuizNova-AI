'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { User, UserRole, RegisterCredentials } from '@/types/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  sendOtp: (email: string, name?: string) => Promise<{ success: boolean; message?: string; demoOtp?: string }>;
  register: (data: RegisterCredentials) => Promise<{ success: boolean; message?: string; errors?: Array<{ field: string; message: string }> }>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const checkAuth = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get<{ success: boolean; user: User }>('/auth/me');
      if (res.data.success && res.data.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post<{ success: boolean; message: string; user: User }>('/auth/login', {
        email,
        password,
      });

      if (res.data.success && res.data.user) {
        setUser(res.data.user);
        return { success: true, message: res.data.message };
      }
      return { success: false, message: res.data.message || 'Login failed' };
    } catch (error: any) {
      const message = error.response?.data?.message || 'Invalid email or password';
      return { success: false, message };
    }
  };

  const sendOtp = async (email: string, name?: string) => {
    try {
      const res = await api.post<{
        success: boolean;
        message: string;
        demoOtp?: string;
      }>('/auth/send-otp', { email, name });

      return {
        success: true,
        message: res.data.message,
        demoOtp: res.data.demoOtp,
      };
    } catch (error: any) {
      const message = error.response?.data?.message || 'Failed to send OTP code';
      return { success: false, message };
    }
  };

  const register = async (data: RegisterCredentials) => {
    try {
      const res = await api.post<{
        success: boolean;
        message: string;
        user: User;
        errors?: Array<{ field: string; message: string }>;
      }>('/auth/register', data);

      if (res.data.success && res.data.user) {
        setUser(res.data.user);
        return { success: true, message: res.data.message };
      }
      return {
        success: false,
        message: res.data.message || 'Registration failed',
        errors: res.data.errors,
      };
    } catch (error: any) {
      const message = error.response?.data?.message || 'Failed to register account';
      const errors = error.response?.data?.errors;
      return { success: false, message, errors };
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setUser(null);
      router.push('/login');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, sendOtp, register, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};