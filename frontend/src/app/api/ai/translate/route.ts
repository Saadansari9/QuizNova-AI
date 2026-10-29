import { NextResponse } from 'next/server';
import { translateWithAI } from '@/lib/geminiService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text, targetLanguage, apiKey } = body;

    if (!text || !targetLanguage) {
      return NextResponse.json(
        { success: false, message: 'Text and targetLanguage are required' },
        { status: 400 }
      );
    }

    const result = await translateWithAI({
      text,
      targetLanguage,
      apiKey,
    });

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Translation failed' },
      { status: 500 }
    );
  }
}
