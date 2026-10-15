import { NextResponse } from 'next/server';
import { getStudentAnalytics } from '@/lib/quizStorage';

export async function GET() {
  const analytics = getStudentAnalytics();
  return NextResponse.json({
    success: true,
    ...analytics,
  });
}
