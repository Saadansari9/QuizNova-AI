import { NextResponse } from 'next/server';
import { generateCognitiveDiagnosis } from '@/lib/geminiService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { quizTitle, score, totalMarks, bloomBreakdown, apiKey } = body;

    const diagnosis = await generateCognitiveDiagnosis({
      quizTitle: quizTitle || 'State Board Assessment',
      score: Number(score) || 0,
      totalMarks: Number(totalMarks) || 10,
      bloomBreakdown,
      apiKey,
    });

    return NextResponse.json({
      success: true,
      diagnosis,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to generate diagnosis' },
      { status: 500 }
    );
  }
}
