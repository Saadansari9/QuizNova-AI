const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'frontend', 'src');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 1. types/quiz.ts
const typesQuiz = `export interface Question {
  id?: string;
  questionText: string;
  questionType: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  bloomLevel: string;
  points: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  durationMinutes: number;
  totalMarks: number;
  passPercentage: number;
  isPublished: boolean;
  allowOffline: boolean;
  educatorId?: string;
  educator?: { name: string };
  questions?: Question[];
  _count?: { questions: number; attempts?: number };
  attempts?: Array<{
    id: string;
    score: number;
    maxScore: number;
    percentage: number;
    isPassed: boolean;
    completedAt: string;
  }>;
  createdAt: string;
}

export interface QuestionReviewItem {
  questionId: string;
  questionText: string;
  options: string[];
  selectedOption: number | null;
  correctAnswer: number;
  isCorrect: boolean;
  points: number;
  bloomLevel: string;
  explanation: string;
}

export interface AttemptResult {
  id: string;
  score: number;
  maxScore: number;
  percentage: number;
  isPassed: boolean;
  timeTakenSeconds: number;
  tabSwitchCount: number;
  aiFeedbackSummary: string;
  isOfflineSynced: boolean;
  completedAt: string;
  student?: { id: string; name: string; email: string };
  quiz: {
    id: string;
    title: string;
    topic: string;
    difficulty: string;
    durationMinutes: number;
    passPercentage: number;
    educatorName?: string;
  };
  questionReview: QuestionReviewItem[];
}

export interface EducatorAnalytics {
  stats: {
    totalQuizzes: number;
    totalAttempts: number;
    averagePercentage: number;
    passRate: number;
  };
  recentSubmissions: Array<{
    attemptId: string;
    quizTitle: string;
    studentName: string;
    score: number;
    maxScore: number;
    percentage: number;
    isPassed: boolean;
    completedAt: string;
  }>;
}

export interface StudentAnalytics {
  stats: {
    totalAttempted: number;
    passedAttempts: number;
    averageScore: number;
  };
  recentHistory: Array<{
    id: string;
    score: number;
    maxScore: number;
    percentage: number;
    isPassed: boolean;
    timeTakenSeconds: number;
    completedAt: string;
    quiz: {
      title: string;
      topic: string;
      difficulty: string;
    };
  }>;
}

export interface OfflinePackage {
  packageVersion: string;
  quizId: string;
  title: string;
  description: string;
  topic: string;
  difficulty: string;
  durationMinutes: number;
  totalMarks: number;
  passPercentage: number;
  exportedAt: string;
  questions: Array<{
    id: string;
    questionText: string;
    questionType: string;
    options: string[];
    points: number;
    bloomLevel: string;
  }>;
  checksum: string;
}

export interface OfflineAttemptRecord {
  id: string;
  quizId: string;
  quizTitle: string;
  topic: string;
  answers: Record<string, number>;
  timeTakenSeconds: number;
  tabSwitchCount: number;
  completedAt: string;
  synced: boolean;
}
`;

// 2. lib/offlineStorage.ts
const libOfflineStorage = `import { OfflinePackage, OfflineAttemptRecord } from '@/types/quiz';

const OFFLINE_QUIZZES_KEY = 'quiznova_offline_quizzes';
const OFFLINE_ATTEMPTS_KEY = 'quiznova_offline_attempts';

export const saveQuizForOffline = (pkg: OfflinePackage): void => {
  if (typeof window === 'undefined') return;
  const existing = getOfflineQuizzes();
  const filtered = existing.filter((q) => q.quizId !== pkg.quizId);
  filtered.push(pkg);
  localStorage.setItem(OFFLINE_QUIZZES_KEY, JSON.stringify(filtered));
};

export const getOfflineQuizzes = (): OfflinePackage[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(OFFLINE_QUIZZES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const removeOfflineQuiz = (quizId: string): void => {
  if (typeof window === 'undefined') return;
  const existing = getOfflineQuizzes().filter((q) => q.quizId !== quizId);
  localStorage.setItem(OFFLINE_QUIZZES_KEY, JSON.stringify(existing));
};

export const recordOfflineAttempt = (attempt: OfflineAttemptRecord): void => {
  if (typeof window === 'undefined') return;
  const attempts = getOfflineAttempts();
  attempts.push(attempt);
  localStorage.setItem(OFFLINE_ATTEMPTS_KEY, JSON.stringify(attempts));
};

export const getOfflineAttempts = (): OfflineAttemptRecord[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(OFFLINE_ATTEMPTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const clearSyncedAttempts = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(OFFLINE_ATTEMPTS_KEY);
};
`;

ensureDir(path.join(srcDir, 'types'));
ensureDir(path.join(srcDir, 'lib'));

fs.writeFileSync(path.join(srcDir, 'types', 'quiz.ts'), typesQuiz, 'utf8');
fs.writeFileSync(path.join(srcDir, 'lib', 'offlineStorage.ts'), libOfflineStorage, 'utf8');

console.log('Types and offline storage helper created!');