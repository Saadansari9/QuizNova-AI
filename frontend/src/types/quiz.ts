export interface Question {
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
  standard?: string;
  stream?: string;
  subject?: string;
  chapter?: string;
  isPyq?: boolean;
  pyqYear?: number;
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

export interface StudyResource {
  id: string;
  title: string;
  category: 'FORMULA' | 'TEXTBOOK' | 'PYQ_SHEET';
  standard: string;
  stream: string;
  subject: string;
  chapter?: string;
  description: string;
  content: string;
  downloadUrl?: string;
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
