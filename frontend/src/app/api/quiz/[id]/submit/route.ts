import { NextResponse } from 'next/server';
import { evaluateAndSaveAttempt } from '@/lib/quizStorage';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { answers, timeTakenSeconds, tabSwitchCount } = body;
    const attempt = evaluateAndSaveAttempt(
      params.id,
      answers || {},
      Number(timeTakenSeconds) || 0,
      Number(tabSwitchCount) || 0
    );

    return NextResponse.json({
      success: true,
      attemptId: attempt.id,
      attempt,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to evaluate attempt' },
      { status: 500 }
    );
  }
}
