import { NextResponse } from 'next/server';
import { gradeSubjectiveAnswer } from '@/lib/geminiService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { question, studentAnswer, subject, standard, maxMarks, apiKey } = body;

    if (!question || !studentAnswer) {
      return NextResponse.json(
        { success: false, message: 'Question and student answer are required' },
        { status: 400 }
      );
    }

    const evaluation = await gradeSubjectiveAnswer({
      question,
      studentAnswer,
      subject,
      standard,
      maxMarks: Number(maxMarks) || 5,
      apiKey,
    });

    return NextResponse.json({
      success: true,
      evaluation,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to evaluate answer' },
      { status: 500 }
    );
  }
}
