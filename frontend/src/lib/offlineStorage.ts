import { OfflinePackage, OfflineAttemptRecord } from '@/types/quiz';

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
