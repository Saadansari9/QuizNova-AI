import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const normalizedEmail = (email || '').toLowerCase().trim();

    if (!normalizedEmail || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const isEdu =
      normalizedEmail.includes('educator') ||
      normalizedEmail.includes('teacher') ||
      normalizedEmail.includes('admin') ||
      normalizedEmail.includes('prof');

    const role = isEdu ? 'Educator' : 'Student';
    const cleanName =
      normalizedEmail
        .split('@')[0]
        .replace(/[._]/g, ' ')
        .replace(/\b\w/g, (c: string) => c.toUpperCase()) || 'Academic Scholar';

    const user = {
      id: 'usr_' + Date.now(),
      name: cleanName,
      email: normalizedEmail,
      role,
      createdAt: new Date().toISOString(),
    };

    const response = NextResponse.json({
      success: true,
      message: `Welcome back, ${user.name}!`,
      user,
    });

    response.cookies.set('token', `active_session_${Date.now()}`, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
      sameSite: 'lax',
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Login failed' },
      { status: 500 }
    );
  }
}
