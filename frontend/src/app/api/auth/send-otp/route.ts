import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    const demoOtp = '123456';

    return NextResponse.json({
      success: true,
      message: `Verification OTP dispatched to ${email || 'your email'}`,
      demoOtp,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to dispatch verification OTP' },
      { status: 500 }
    );
  }
}
