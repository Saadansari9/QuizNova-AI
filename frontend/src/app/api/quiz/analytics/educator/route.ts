import { NextResponse } from 'next/server';
import { getEducatorAnalytics } from '@/lib/quizStorage';

export async function GET() {
  const analytics = getEducatorAnalytics();
  return NextResponse.json({
    success: true,
    ...analytics,
  });
}
