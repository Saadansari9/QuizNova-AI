import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // 1. If accessing protected dashboard routes without a token, redirect to login
  // (Exclude public study libraries: textbooks, pyqs, and formulas)
  const isPublicLibrary =
    pathname.startsWith('/dashboard/student/textbooks') ||
    pathname.startsWith('/dashboard/student/pyqs') ||
    pathname.startsWith('/dashboard/student/formulas');

  if (pathname.startsWith('/dashboard') && !isPublicLibrary) {
    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 2. If already logged in and trying to access /login or /register, redirect to /dashboard
  if (pathname === '/login' || pathname === '/register') {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware to relevant routes
export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
