import { NextResponse } from 'next/server';

interface OfficialAccount {
  name: string;
  role: 'Student' | 'Educator';
  passwords: string[];
}

const OFFICIAL_ACCOUNTS: Record<string, OfficialAccount> = {
  'student@quiznova.edu': {
    name: 'Saad Ansari (SSC Board Scholar)',
    role: 'Student',
    passwords: ['Student@123', 'student123', 'password123', '123456'],
  },
  'educator@quiznova.edu': {
    name: 'Prof. Anjali Deshmukh (SSC Exam Chair)',
    role: 'Educator',
    passwords: ['Educator@123', 'educator123', 'password123', '123456'],
  },
  'admin@quiznova.edu': {
    name: 'System Administrator (QuizNova)',
    role: 'Educator',
    passwords: ['Admin@123', 'admin123', 'password123', '123456'],
  },
};

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

    // Check Official Pre-Configured Accounts
    let role: 'Student' | 'Educator' = 'Student';
    let cleanName = 'Saad Ansari';

    if (OFFICIAL_ACCOUNTS[normalizedEmail]) {
      const acc = OFFICIAL_ACCOUNTS[normalizedEmail];
      if (!acc.passwords.includes(password)) {
        return NextResponse.json(
          {
            success: false,
            message: `Invalid password for official ${acc.role} account. (Default: ${acc.passwords[0]})`,
          },
          { status: 401 }
        );
      }
      role = explicitRole || acc.role;
      cleanName = acc.name;
    } else {
      const isEdu =
        explicitRole === 'Educator' ||
        normalizedEmail.includes('educator') ||
        normalizedEmail.includes('teacher') ||
        normalizedEmail.includes('admin') ||
        normalizedEmail.includes('prof');

      role = isEdu ? 'Educator' : 'Student';
      cleanName =
        normalizedEmail
          .split('@')[0]
          .replace(/[._]/g, ' ')
          .replace(/\b\w/g, (c: string) => c.toUpperCase()) ||
        (role === 'Educator' ? 'Prof. Anjali Deshmukh' : 'Saad Ansari');
    }

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
