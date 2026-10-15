import { NextResponse } from 'next/server';
import { findQuizById, DEFAULT_QUIZZES } from '@/lib/quizStorage';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const quiz = findQuizById(params.id) || DEFAULT_QUIZZES[0];
  const pkg = {
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
    questions: (quiz.questions || []).map((q, idx) => ({
      id: q.id || 'q_' + idx,
      questionText: q.questionText,
      questionType: q.questionType,
      options: q.options,
      points: q.points || 2,
      bloomLevel: q.bloomLevel || 'Understanding',
    })),
    checksum: 'ck_' + Date.now().toString(36),
  };

  return NextResponse.json(pkg);
}
