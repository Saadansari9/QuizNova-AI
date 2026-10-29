import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role, phoneNumber } = body;
    const normalizedEmail = (email || '').toLowerCase().trim();

    if (!normalizedEmail || !name) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }

    const user = {
      id: 'usr_' + Date.now(),
      name,
      email: normalizedEmail,
      role: role === 'Educator' ? 'Educator' : 'Student',
      phoneNumber: phoneNumber || null,
      createdAt: new Date().toISOString(),
    };

    const response = NextResponse.json({
      success: true,
      message: 'Account registered successfully',
      user,
    });

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
      { success: false, message: error?.message || 'Registration failed' },
      { status: 500 }
    );
  }
}
