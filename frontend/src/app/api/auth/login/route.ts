import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, role: explicitRole } = body;
    const normalizedEmail = (email || '').toLowerCase().trim();

    if (!normalizedEmail || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const isEdu =
      explicitRole === 'Educator' ||
      normalizedEmail.includes('educator') ||
      normalizedEmail.includes('teacher') ||
      normalizedEmail.includes('admin') ||
      normalizedEmail.includes('prof');

    const role = isEdu ? 'Educator' : 'Student';
    const cleanName =
      normalizedEmail
        .split('@')[0]
        .replace(/[._]/g, ' ')
        .replace(/\b\w/g, (c: string) => c.toUpperCase()) ||
      (role === 'Educator' ? 'Prof. Anjali Deshmukh' : 'Saad Ansari');

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

    // Base64 encoded session token containing user metadata
    const tokenVal = Buffer.from(JSON.stringify(user)).toString('base64');

    response.cookies.set('token', tokenVal, {
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
