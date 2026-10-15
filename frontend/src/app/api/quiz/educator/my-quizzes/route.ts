import { NextResponse } from 'next/server';
import { getAllQuizzes } from '@/lib/quizStorage';

export async function GET() {
  const quizzes = getAllQuizzes();
  return NextResponse.json({
    success: true,
    quizzes,
  });
}
