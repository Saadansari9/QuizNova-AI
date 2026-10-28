import { NextResponse } from 'next/server';
import { generateQuestions } from '@/lib/aiGenerator';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { topic, count, difficulty, apiKey } = body;
    const questions = await generateQuestions({
      topic: topic || 'General Knowledge',
      count: Number(count) || 5,
      difficulty: difficulty || 'Medium',
      apiKey: apiKey || process.env.GEMINI_API_KEY,
    });
    return NextResponse.json({
      success: true,
      questions,
      message: 'Questions synthesized successfully',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to synthesize questions' },
      { status: 500 }
    );
  }
}
