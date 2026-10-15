import { NextResponse } from 'next/server';
import { findQuizById, DEFAULT_QUIZZES } from '@/lib/quizStorage';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const quiz = findQuizById(params.id) || DEFAULT_QUIZZES[0];
  return NextResponse.json({
    success: true,
    quiz,
  });
}
