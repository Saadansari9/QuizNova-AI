import { NextResponse } from 'next/server';
import { saveCustomQuizLocally } from '@/lib/quizStorage';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const createdQuiz = saveCustomQuizLocally(body);
    return NextResponse.json({
      success: true,
      quiz: createdQuiz,
      message: 'Quiz created and deployed successfully',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to create quiz' },
      { status: 500 }
    );
  }
}
