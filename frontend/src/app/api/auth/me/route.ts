import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const tokenMatch = cookieHeader.split(';').find((c) => c.trim().startsWith('token='));

  if (!tokenMatch) {
    return NextResponse.json({ success: false, message: 'Not authenticated' }, { status: 401 });
  }

  const rawVal = tokenMatch.split('=')[1]?.trim();
  if (rawVal) {
    try {
      const cleanRawVal = decodeURIComponent(rawVal);
      const decodedStr = Buffer.from(cleanRawVal, 'base64').toString('utf-8');
      const parsedUser = JSON.parse(decodedStr);
      if (parsedUser && parsedUser.email) {
        return NextResponse.json({
          success: true,
          user: parsedUser,
        });
      }
    } catch {
      // Not base64 or custom string, fallback below
    }
  }

  // Fallback for active legacy token
  return NextResponse.json({
    success: true,
    user: {
      id: 'usr_me',
      name: 'Saad Ansari',
      email: 'student@quiznova.edu',
      role: 'Student',
    },
  });
}
