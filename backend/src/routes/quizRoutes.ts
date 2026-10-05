import { Router } from 'express';
import { authMiddleware, roleMiddleware } from '../middlewares/authMiddleware.js';
import {
  generateAIQuestionsHandler,
  createQuizHandler,
  getEducatorQuizzes,
  getStudentQuizzes,
  getQuizById,
  exportOfflinePackage,
  submitQuizAttempt,
  syncOfflineAttempts,
  getAttemptResult,
  getEducatorAnalytics,
  getStudentAnalytics,
} from '../controllers/quizController.js';

const router = Router();

// Educator Specific Endpoints
router.post('/generate-ai', authMiddleware, roleMiddleware('Educator'), generateAIQuestionsHandler);
router.post('/create', authMiddleware, roleMiddleware('Educator'), createQuizHandler);
router.get('/educator/my-quizzes', authMiddleware, roleMiddleware('Educator'), getEducatorQuizzes);
router.get('/analytics/educator', authMiddleware, roleMiddleware('Educator'), getEducatorAnalytics);

// Student Specific Endpoints
router.get('/student/available', authMiddleware, getStudentQuizzes);
router.get('/analytics/student', authMiddleware, getStudentAnalytics);
router.post('/sync-offline', authMiddleware, syncOfflineAttempts);

// General Quiz Taking & Results Endpoints
router.get('/:id', authMiddleware, getQuizById);
router.get('/:id/export-offline', authMiddleware, exportOfflinePackage);
router.post('/:id/submit', authMiddleware, submitQuizAttempt);
router.get('/attempt/:id', authMiddleware, getAttemptResult);

export default router;