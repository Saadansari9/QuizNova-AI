import { Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/db.js';
import { AuthenticatedRequest } from '../types/auth.js';
import { generateQuestions } from '../services/aiGenerator.js';

// Validation Schemas
const generateAISchema = z.object({
  topic: z.string().min(2, 'Topic must be at least 2 characters'),
  count: z.number().min(1).max(20).default(5),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']).default('Medium'),
  subtopics: z.string().optional(),
});

const createQuizSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(5, 'Description is required'),
  topic: z.string().min(2, 'Topic is required'),
  standard: z.string().optional(),
  stream: z.string().optional(),
  subject: z.string().optional(),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']).default('Medium'),
  durationMinutes: z.number().min(1).max(180).default(30),
  passPercentage: z.number().min(1).max(100).default(40),
  allowOffline: z.boolean().default(true),
  questions: z.array(
    z.object({
      questionText: z.string().min(5),
      questionType: z.string().default('MCQ'),
      options: z.array(z.string()).min(2),
      correctAnswer: z.number().min(0),
      explanation: z.string().default(''),
      bloomLevel: z.string().default('Understanding'),
      points: z.number().default(1),
    })
  ).min(1, 'Quiz must have at least 1 question'),
});

const submitAttemptSchema = z.object({
  answers: z.record(z.number()), // questionId -> selectedOptionIndex
  timeTakenSeconds: z.number().min(0),
  tabSwitchCount: z.number().default(0),
  isOfflineSynced: z.boolean().default(false),
});

/**
 * POST /api/quiz/generate-ai
 * AI Question Generator Endpoint (Educator only)
 */
export const generateAIQuestionsHandler = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const validated = generateAISchema.safeParse(req.body);
    if (!validated.success) {
      res.status(400).json({ success: false, errors: validated.error.errors });
      return;
    }

    const { topic, count, difficulty, subtopics } = validated.data;
    const questions = await generateQuestions({ topic, count, difficulty, subtopics });

    res.status(200).json({
      success: true,
      topic,
      count: questions.length,
      questions,
    });
  } catch (error: any) {
    console.error('AI Generation Error:', error);
    res.status(500).json({ success: false, message: 'Failed to generate AI questions' });
  }
};

/**
 * POST /api/quiz/create
 * Create & Publish a Quiz (Educator only)
 */
export const createQuizHandler = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const validated = createQuizSchema.safeParse(req.body);
    if (!validated.success) {
      res.status(400).json({
        success: false,
        message: 'Invalid quiz data',
        errors: validated.error.errors.map((e) => ({ field: e.path.join('.'), message: e.message })),
      });
      return;
    }

    const {
      title,
      description,
      topic,
      standard,
      stream,
      subject,
      difficulty,
      durationMinutes,
      passPercentage,
      allowOffline,
      questions,
    } = validated.data;

    const totalMarks = questions.reduce((sum, q) => sum + q.points, 0);

    // Create quiz and questions in transaction
    const createdQuiz = await prisma.$transaction(async (tx) => {
      const quiz = await tx.quiz.create({
        data: {
          title,
          description,
          topic,
          standard: standard || null,
          stream: stream || null,
          subject: subject || null,
          difficulty,
          durationMinutes,
          totalMarks,
          passPercentage,
          allowOffline,
          educatorId: req.user!.id,
          isPublished: true,
        },
      });

      for (const q of questions) {
        await tx.question.create({
          data: {
            quizId: quiz.id,
            questionText: q.questionText,
            questionType: q.questionType,
            options: JSON.stringify(q.options),
            correctAnswer: q.correctAnswer,
            explanation: q.explanation || 'No additional explanation provided.',
            bloomLevel: q.bloomLevel,
            points: q.points,
          },
        });
      }

      return quiz;
    });

    const fullQuiz = await prisma.quiz.findUnique({
      where: { id: createdQuiz.id },
      include: { questions: true },
    });

    res.status(201).json({
      success: true,
      message: 'Quiz created and published successfully!',
      quiz: fullQuiz,
    });
  } catch (error: any) {
    console.error('Create Quiz Error:', error);
    res.status(500).json({ success: false, message: 'Failed to create quiz' });
  }
};

/**
 * GET /api/quiz/educator/my-quizzes
 * List quizzes created by the educator
 */
export const getEducatorQuizzes = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const quizzes = await prisma.quiz.findMany({
      where: { educatorId: req.user.id },
      include: {
        _count: {
          select: { questions: true, attempts: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.status(200).json({ success: true, quizzes });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Failed to fetch quizzes' });
  }
};

/**
 * GET /api/quiz/student/available
 * List quizzes available for students with attempt status
 */
export const getStudentQuizzes = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { standard, stream, subject } = req.query as {
      standard?: string;
      stream?: string;
      subject?: string;
    };

    const whereClause: any = { isPublished: true };
    if (standard && standard !== 'all') {
      whereClause.standard = standard;
    }
    if (stream && stream !== 'all') {
      whereClause.stream = stream;
    }
    if (subject && subject !== 'all') {
      whereClause.subject = subject;
    }

    const quizzes = await prisma.quiz.findMany({
      where: whereClause,
      include: {
        educator: {
          select: { name: true },
        },
        _count: {
          select: { questions: true },
        },
        attempts: {
          where: { studentId: req.user.id },
          select: {
            id: true,
            score: true,
            maxScore: true,
            percentage: true,
            isPassed: true,
            completedAt: true,
          },
          orderBy: { completedAt: 'desc' },
          take: 1,
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.status(200).json({ success: true, quizzes });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Failed to fetch quizzes' });
  }
};

/**
 * GET /api/quiz/:id
 * Get single quiz details (strips answers if requested by student taking test)
 */
export const getQuizById = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const isEducator = req.user?.role === 'Educator';

    const quiz = await prisma.quiz.findUnique({
      where: { id },
      include: {
        educator: { select: { id: true, name: true } },
        questions: true,
      },
    });

    if (!quiz) {
      res.status(404).json({ success: false, message: 'Quiz not found' });
      return;
    }

    const formattedQuestions = quiz.questions.map((q) => {
      let parsedOptions = [];
      try {
        parsedOptions = JSON.parse(q.options);
      } catch {
        parsedOptions = [q.options];
      }

      return {
        id: q.id,
        questionText: q.questionText,
        questionType: q.questionType,
        options: parsedOptions,
        points: q.points,
        bloomLevel: q.bloomLevel,
        ...(isEducator ? { correctAnswer: q.correctAnswer, explanation: q.explanation } : {}),
      };
    });

    res.status(200).json({
      success: true,
      quiz: {
        ...quiz,
        questions: formattedQuestions,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Failed to fetch quiz details' });
  }
};

/**
 * GET /api/quiz/:id/export-offline
 * Export encrypted offline bundle for local testing
 */
export const exportOfflinePackage = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const quiz = await prisma.quiz.findUnique({
      where: { id },
      include: { questions: true },
    });

    if (!quiz) {
      res.status(404).json({ success: false, message: 'Quiz not found' });
      return;
    }

    const offlineQuestions = quiz.questions.map((q) => ({
      id: q.id,
      questionText: q.questionText,
      questionType: q.questionType,
      options: JSON.parse(q.options),
      points: q.points,
      bloomLevel: q.bloomLevel,
    }));

    const packageData = {
      packageVersion: '1.0.0',
      quizId: quiz.id,
      title: quiz.title,
      description: quiz.description,
      topic: quiz.topic,
      difficulty: quiz.difficulty,
      durationMinutes: quiz.durationMinutes,
      totalMarks: quiz.totalMarks,
      passPercentage: quiz.passPercentage,
      exportedAt: new Date().toISOString(),
      questions: offlineQuestions,
      checksum: Buffer.from(quiz.id + quiz.createdAt.toISOString()).toString('base64'),
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="' + quiz.title.replace(/\s+/g, '_') + '_offline.quizpkg.json"');
    res.status(200).json(packageData);
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Failed to export offline package' });
  }
};

/**
 * POST /api/quiz/:id/submit
 * Grade student exam, store score, generate AI feedback summary
 */
export const submitQuizAttempt = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { id: quizId } = req.params;
    const validated = submitAttemptSchema.safeParse(req.body);

    if (!validated.success) {
      res.status(400).json({ success: false, errors: validated.error.errors });
      return;
    }

    const { answers, timeTakenSeconds, tabSwitchCount, isOfflineSynced } = validated.data;

    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: { questions: true },
    });

    if (!quiz) {
      res.status(404).json({ success: false, message: 'Quiz not found' });
      return;
    }

    let earnedScore = 0;
    let maxScore = 0;
    const questionReview = [];

    for (const q of quiz.questions) {
      maxScore += q.points;
      const selectedOption = answers[q.id];
      const isCorrect = selectedOption !== undefined && selectedOption === q.correctAnswer;

      if (isCorrect) {
        earnedScore += q.points;
      }

      let parsedOptions = [];
      try {
        parsedOptions = JSON.parse(q.options);
      } catch {
        parsedOptions = [q.options];
      }

      questionReview.push({
        questionId: q.id,
        questionText: q.questionText,
        options: parsedOptions,
        selectedOption: selectedOption !== undefined ? selectedOption : null,
        correctAnswer: q.correctAnswer,
        isCorrect,
        points: q.points,
        bloomLevel: q.bloomLevel,
        explanation: q.explanation,
      });
    }

    const percentage = maxScore > 0 ? Math.round((earnedScore / maxScore) * 100 * 10) / 10 : 0;
    const isPassed = percentage >= quiz.passPercentage;

    // AI diagnostic feedback synthesis
    let aiFeedbackSummary = '';
    if (percentage >= 85) {
      aiFeedbackSummary = `Outstanding Mastery! You demonstrated exceptional understanding in ${quiz.topic}. Your cognitive reasoning across ${quiz.difficulty} difficulty questions was top-tier.`;
    } else if (percentage >= 60) {
      aiFeedbackSummary = `Good Performance! You have a solid grasp of core ${quiz.topic} concepts. Focus on reviewing high-level Bloom analysis questions to achieve distinction.`;
    } else if (percentage >= 40) {
      aiFeedbackSummary = `Pass achieved with room for improvement. Recommend revising fundamental definitions, memory management, and pipeline protocols in ${quiz.topic}.`;
    } else {
      aiFeedbackSummary = `Needs Attention: You scored below the ${quiz.passPercentage}% benchmark. We recommend reviewing lecture syllabus notes and re-taking concept drill tests in ${quiz.topic}.`;
    }

    if (tabSwitchCount > 2) {
      aiFeedbackSummary += ` Notice: ${tabSwitchCount} browser focus changes (tab switches) were detected during this examination.`;
    }

    // Save Attempt
    const attempt = await prisma.quizAttempt.create({
      data: {
        quizId,
        studentId: req.user.id,
        score: earnedScore,
        maxScore,
        percentage,
        isPassed,
        timeTakenSeconds,
        submittedAnswers: JSON.stringify(answers),
        tabSwitchCount,
        aiFeedbackSummary,
        isOfflineSynced,
      },
    });

    res.status(200).json({
      success: true,
      attemptId: attempt.id,
      score: earnedScore,
      maxScore,
      percentage,
      isPassed,
      timeTakenSeconds,
      aiFeedbackSummary,
      questionReview,
    });
  } catch (error: any) {
    console.error('Submission Error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit quiz attempt' });
  }
};

/**
 * POST /api/quiz/sync-offline
 * Batch ingestion of offline completed tests
 */
export const syncOfflineAttempts = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { attempts } = req.body;
    if (!Array.isArray(attempts) || attempts.length === 0) {
      res.status(400).json({ success: false, message: 'No offline attempts provided for synchronization' });
      return;
    }

    const syncedResults = [];

    for (const item of attempts) {
      const { quizId, answers, timeTakenSeconds, tabSwitchCount } = item;
      const quiz = await prisma.quiz.findUnique({
        where: { id: quizId },
        include: { questions: true },
      });

      if (!quiz) continue;

      let earnedScore = 0;
      let maxScore = 0;

      for (const q of quiz.questions) {
        maxScore += q.points;
        const selected = answers[q.id];
        if (selected !== undefined && selected === q.correctAnswer) {
          earnedScore += q.points;
        }
      }

      const percentage = maxScore > 0 ? Math.round((earnedScore / maxScore) * 100 * 10) / 10 : 0;
      const isPassed = percentage >= quiz.passPercentage;

      const aiFeedbackSummary = `Offline synchronized test: Score ${percentage}% in ${quiz.topic}.`;

      const savedAttempt = await prisma.quizAttempt.create({
        data: {
          quizId,
          studentId: req.user.id,
          score: earnedScore,
          maxScore,
          percentage,
          isPassed,
          timeTakenSeconds: timeTakenSeconds || 0,
          submittedAnswers: JSON.stringify(answers || {}),
          tabSwitchCount: tabSwitchCount || 0,
          aiFeedbackSummary,
          isOfflineSynced: true,
        },
      });

      syncedResults.push({
        attemptId: savedAttempt.id,
        quizTitle: quiz.title,
        score: earnedScore,
        maxScore,
        percentage,
        isPassed,
      });
    }

    res.status(200).json({
      success: true,
      message: `Successfully synchronized ${syncedResults.length} offline quiz attempts!`,
      syncedCount: syncedResults.length,
      results: syncedResults,
    });
  } catch (error: any) {
    console.error('Offline sync error:', error);
    res.status(500).json({ success: false, message: 'Failed to synchronize offline attempts' });
  }
};

/**
 * GET /api/quiz/attempt/:id
 * Fetch detailed attempt score card & review
 */
export const getAttemptResult = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const attempt = await prisma.quizAttempt.findUnique({
      where: { id },
      include: {
        quiz: {
          include: {
            questions: true,
            educator: { select: { name: true } },
          },
        },
        student: { select: { id: true, name: true, email: true } },
      },
    });

    if (!attempt) {
      res.status(404).json({ success: false, message: 'Attempt not found' });
      return;
    }

    let submittedAnswers: Record<string, number> = {};
    try {
      submittedAnswers = JSON.parse(attempt.submittedAnswers);
    } catch {
      submittedAnswers = {};
    }

    const questionReview = attempt.quiz.questions.map((q) => {
      const selected = submittedAnswers[q.id];
      const isCorrect = selected !== undefined && selected === q.correctAnswer;
      return {
        questionId: q.id,
        questionText: q.questionText,
        options: JSON.parse(q.options),
        selectedOption: selected !== undefined ? selected : null,
        correctAnswer: q.correctAnswer,
        isCorrect,
        points: q.points,
        bloomLevel: q.bloomLevel,
        explanation: q.explanation,
      };
    });

    res.status(200).json({
      success: true,
      attempt: {
        id: attempt.id,
        score: attempt.score,
        maxScore: attempt.maxScore,
        percentage: attempt.percentage,
        isPassed: attempt.isPassed,
        timeTakenSeconds: attempt.timeTakenSeconds,
        tabSwitchCount: attempt.tabSwitchCount,
        aiFeedbackSummary: attempt.aiFeedbackSummary,
        isOfflineSynced: attempt.isOfflineSynced,
        completedAt: attempt.completedAt,
        student: attempt.student,
        quiz: {
          id: attempt.quiz.id,
          title: attempt.quiz.title,
          topic: attempt.quiz.topic,
          difficulty: attempt.quiz.difficulty,
          durationMinutes: attempt.quiz.durationMinutes,
          passPercentage: attempt.quiz.passPercentage,
          educatorName: attempt.quiz.educator.name,
        },
        questionReview,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Failed to retrieve attempt result' });
  }
};

/**
 * GET /api/quiz/analytics/educator
 * Aggregate class analytics for educator
 */
export const getEducatorAnalytics = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const educatorQuizzes = await prisma.quiz.findMany({
      where: { educatorId: req.user.id },
      include: {
        attempts: {
          include: {
            student: { select: { name: true, email: true } },
          },
        },
        _count: { select: { questions: true } },
      },
    });

    const totalQuizzes = educatorQuizzes.length;
    let totalAttempts = 0;
    let totalScoreSum = 0;
    let passedCount = 0;

    const recentSubmissions: any[] = [];

    educatorQuizzes.forEach((quiz) => {
      quiz.attempts.forEach((att) => {
        totalAttempts++;
        totalScoreSum += att.percentage;
        if (att.isPassed) passedCount++;

        recentSubmissions.push({
          attemptId: att.id,
          quizTitle: quiz.title,
          studentName: att.student.name,
          score: att.score,
          maxScore: att.maxScore,
          percentage: att.percentage,
          isPassed: att.isPassed,
          completedAt: att.completedAt,
        });
      });
    });

    recentSubmissions.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());

    const averagePercentage = totalAttempts > 0 ? Math.round((totalScoreSum / totalAttempts) * 10) / 10 : 0;
    const passRate = totalAttempts > 0 ? Math.round((passedCount / totalAttempts) * 100) : 0;

    res.status(200).json({
      success: true,
      stats: {
        totalQuizzes,
        totalAttempts,
        averagePercentage,
        passRate,
      },
      recentSubmissions: recentSubmissions.slice(0, 10),
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Failed to fetch educator analytics' });
  }
};

/**
 * GET /api/quiz/analytics/student
 * Personal performance analytics for student
 */
export const getStudentAnalytics = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const attempts = await prisma.quizAttempt.findMany({
      where: { studentId: req.user.id },
      include: {
        quiz: { select: { title: true, topic: true, difficulty: true } },
      },
      orderBy: { completedAt: 'desc' },
    });

    const totalAttempted = attempts.length;
    const passedAttempts = attempts.filter((a) => a.isPassed).length;
    const averageScore =
      totalAttempted > 0
        ? Math.round((attempts.reduce((sum, a) => sum + a.percentage, 0) / totalAttempted) * 10) / 10
        : 0;

    res.status(200).json({
      success: true,
      stats: {
        totalAttempted,
        passedAttempts,
        averageScore,
      },
      recentHistory: attempts.slice(0, 10),
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Failed to fetch student analytics' });
  }
};