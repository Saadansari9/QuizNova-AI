const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'frontend', 'src');

const protectedRouteCode = `'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace('/login');
      } else if (allowedRoles && !allowedRoles.includes(user.role)) {
        if (user.role === 'Educator') {
          router.replace('/dashboard/educator');
        } else {
          router.replace('/dashboard/student');
        }
      }
    }
  }, [user, loading, allowedRoles, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-sm font-medium text-slate-600">Authenticating secure session...</p>
      </div>
    );
  }

  if (!user) return null;
  if (allowedRoles && !allowedRoles.includes(user.role)) return null;

  return <>{children}</>;
};
`;

const navbarCode = `'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { BookOpen, LogOut } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, logout, loading } = useAuth();

  return (
    <nav className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 tracking-tight flex items-center gap-1.5">
                QuizNova <span className="text-xs bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded-full border border-indigo-200/60">AI</span>
              </span>
              <span className="text-[11px] block -mt-1 text-slate-500 font-medium tracking-wide">
                Online & Offline Examination Engine
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-3">
            {loading ? (
              <div className="h-9 w-24 bg-slate-100 animate-pulse rounded-lg"></div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <Link
                  href={user.role === 'Educator' ? '/dashboard/educator' : '/dashboard/student'}
                  className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors hidden sm:inline-block"
                >
                  Dashboard
                </Link>

                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-900 leading-tight">{user.name}</p>
                    <span
                      className={'text-[10px] font-bold uppercase tracking-wider ' +
                        (user.role === 'Educator' ? 'text-purple-600' : 'text-emerald-600')}
                    >
                      {user.role}
                    </span>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="flex items-center space-x-1.5 text-xs font-medium text-slate-600 hover:text-red-600 bg-slate-100 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  title="Sign out of platform"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="text-sm font-medium text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg shadow-sm shadow-indigo-200 transition-all hover:shadow-md"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
`;

const loginCode = `'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Mail, Lock, LogIn, AlertCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/dashboard';
  
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const err: { email?: string; password?: string } = {};
    if (!formData.email.trim()) {
      err.email = 'Email address is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      err.email = 'Please provide a valid email format';
    }

    if (!formData.password) {
      err.password = 'Password is required';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);
    const result = await login(formData.email, formData.password);
    setIsSubmitting(false);

    if (result.success) {
      router.push(redirectUrl);
    } else {
      setServerError(result.message || 'Invalid email or password');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/80 p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 mb-4 border border-indigo-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Academic Portal Login</h1>
            <p className="text-sm text-slate-500 mt-1">Sign in with your Student or Educator account</p>
          </div>

          {serverError && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Authentication Error</p>
                <p className="text-xs mt-0.5 text-red-600">{serverError}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="student@university.edu"
                  className={'w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 ' +
                    (errors.email ? 'border-red-300 focus:ring-red-400 bg-red-50/20' : 'border-slate-300 focus:ring-indigo-500')}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••••••"
                  className={'w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 ' +
                    (errors.password ? 'border-red-300 focus:ring-red-400 bg-red-50/20' : 'border-slate-300 focus:ring-indigo-500')}
                />
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-sm shadow-md shadow-indigo-200 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              Need an academic account?{' '}
              <Link href="/register" className="font-semibold text-indigo-600 hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Encrypted HTTP-Only Token Transmission Active</span>
        </div>
      </div>
    </div>
  );
}
`;

const registerCode = `'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types/auth';
import {
  GraduationCap,
  BookOpenCheck,
  User,
  Mail,
  Lock,
  UserPlus,
  AlertCircle,
} from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Student' as UserRole,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      err.name = 'Full name must have at least 2 characters';
    }
    if (!formData.email.trim() || !/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      err.email = 'Enter a valid academic email';
    }
    if (!formData.password || formData.password.length < 6) {
      err.password = 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      err.confirmPassword = 'Passwords do not match';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);
    const result = await register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    });
    setIsSubmitting(false);

    if (result.success) {
      router.push('/dashboard');
    } else {
      setServerError(result.message || 'Registration failed');
      if (result.errors) {
        const fieldErrors: Record<string, string> = {};
        result.errors.forEach((er) => {
          fieldErrors[er.field] = er.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/80 p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 mb-3 border border-indigo-100">
              <UserPlus className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Create Academic Account</h1>
            <p className="text-sm text-slate-500 mt-1">Quiz Platform Access & Supervision</p>
          </div>

          {serverError && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Notice</p>
                <p className="text-xs mt-0.5 text-red-600">{serverError}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Select Your Academic Role
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'Student' })}
                  className={'p-3 rounded-xl border text-left transition-all ' +
                    (formData.role === 'Student'
                      ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-600/20'
                      : 'border-slate-200 bg-white hover:border-slate-300')}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className={'w-4 h-4 ' + (formData.role === 'Student' ? 'text-indigo-600' : 'text-slate-500')} />
                    <span className="text-sm font-bold text-slate-900">Student</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Take exams & download offline test packs</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'Educator' })}
                  className={'p-3 rounded-xl border text-left transition-all ' +
                    (formData.role === 'Educator'
                      ? 'border-purple-600 bg-purple-50/60 ring-2 ring-purple-600/20'
                      : 'border-slate-200 bg-white hover:border-slate-300')}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpenCheck className={'w-4 h-4 ' + (formData.role === 'Educator' ? 'text-purple-600' : 'text-slate-500')} />
                    <span className="text-sm font-bold text-slate-900">Educator</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Generate AI tests & supervise exams</p>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Jane Doe"
                  className={'w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 ' +
                    (errors.name ? 'border-red-300 focus:ring-red-400 bg-red-50/20' : 'border-slate-300 focus:ring-indigo-500')}
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@university.edu"
                  className={'w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 ' +
                    (errors.email ? 'border-red-300 focus:ring-red-400 bg-red-50/20' : 'border-slate-300 focus:ring-indigo-500')}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Min 6 chars"
                    className={'w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 ' +
                      (errors.password ? 'border-red-300 focus:ring-red-400' : 'border-slate-300 focus:ring-indigo-500')}
                  />
                </div>
                {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Repeat password"
                    className={'w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 ' +
                      (errors.confirmPassword ? 'border-red-300 focus:ring-red-400' : 'border-slate-300 focus:ring-indigo-500')}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-sm shadow-md shadow-indigo-200 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Registering...</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Register as {formData.role}</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              Already registered?{' '}
              <Link href="/login" className="font-semibold text-indigo-600 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(srcDir, 'components', 'ProtectedRoute.tsx'), protectedRouteCode, 'utf8');
fs.writeFileSync(path.join(srcDir, 'components', 'Navbar.tsx'), navbarCode, 'utf8');
fs.writeFileSync(path.join(srcDir, 'app', '(auth)', 'login', 'page.tsx'), loginCode, 'utf8');
fs.writeFileSync(path.join(srcDir, 'app', '(auth)', 'register', 'page.tsx'), registerCode, 'utf8');
console.log('All frontend files updated successfully!');