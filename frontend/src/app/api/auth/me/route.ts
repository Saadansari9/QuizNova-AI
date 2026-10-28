import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const hasToken = cookieHeader.includes('token=');

  if (!hasToken) {
    return NextResponse.json({ success: false, message: 'Not authenticated' }, { status: 401 });
  }

  return NextResponse.json({
    success: true,
    user: {
      id: 'usr_me',
      name: 'Academic Scholar',
      email: 'scholar@quiznova.edu',
      role: 'Student',
    },
  });
}
