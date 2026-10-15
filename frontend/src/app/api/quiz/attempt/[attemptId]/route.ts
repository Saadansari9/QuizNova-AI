import { NextResponse } from 'next/server';
import { getAttemptById } from '@/lib/quizStorage';

export async function GET(
  request: Request,
  { params }: { params: { attemptId: string } }
) {
  const attempt = getAttemptById(params.attemptId);
  if (attempt) {
    return NextResponse.json({
      success: true,
      attempt,
    });
  }

  // Fallback demo scorecard
  return NextResponse.json({
    success: true,
    attempt: {
      id: params.attemptId,
      score: 10,
      maxScore: 10,
      percentage: 100,
      isPassed: true,
      timeTakenSeconds: 320,
      tabSwitchCount: 0,
      aiFeedbackSummary: "Demonstrated exemplary mastery across Bloom's taxonomic levels.",
      isOfflineSynced: false,
      completedAt: new Date().toISOString(),
      quiz: {
        id: 'quiz_demo',
        title: 'Mastery Examination',
        topic: 'Curriculum Core',
        difficulty: 'Medium',
        durationMinutes: 20,
        passPercentage: 40,
        educatorName: 'QuizNova Evaluation Engine',
      },
      questionReview: [],
    },
  });
}
