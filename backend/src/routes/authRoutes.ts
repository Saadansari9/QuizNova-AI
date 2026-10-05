import { Router } from 'express';
import { register, login, logout, getMe, sendOtp } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

// Public authentication & OTP verification routes
router.post('/send-otp', sendOtp);
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Protected user verification route
router.get('/me', authMiddleware, getMe);

export default router;