const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'frontend', 'src');

const loginCode = `'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Mail, Lock, LogIn, AlertCircle, ShieldCheck, CheckCircle2, Zap, Sparkles } from 'lucide-react';

function LoginForm() {
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
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      {/* Glow behind card */}
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-md z-10">
        <div className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-800 p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-[1.5px] mb-4 shadow-lg shadow-indigo-500/30">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Zap className="w-7 h-7 text-indigo-400 fill-indigo-400/20" />
              </div>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Academic Portal Login</h1>
            <p className="text-xs text-slate-400 mt-1.5">Sign in to your Student or Educator account</p>
          </div>

          {serverError && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-950/50 border border-rose-800/60 flex items-start gap-3 text-rose-300 text-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
              <div>
                <p className="font-bold">Authentication Failed</p>
                <p className="text-rose-400 mt-0.5">{serverError}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="student@university.edu"
                  className={'w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ' +
                    (errors.email
                      ? 'border-rose-500/50 bg-rose-950/20 focus:ring-rose-500'
                      : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500 focus:ring-indigo-500/40')}
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Password
                </label>
                <span className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer">
                  Forgot?
                </span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••••••"
                  className={'w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ' +
                    (errors.password
                      ? 'border-rose-500/50 bg-rose-950/20 focus:ring-rose-500'
                      : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500 focus:ring-indigo-500/40')}
                />
              </div>
              {errors.password && <p className="mt-1.5 text-xs text-rose-400">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer hover:scale-[1.02]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying Session...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Sign In to Console</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400">
              Need an academic account?{' '}
              <Link href="/register" className="font-bold text-indigo-400 hover:text-indigo-300 hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Secured with HTTP-Only Signed Cookies & Role Isolation</span>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <LoginForm />
    </Suspense>
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
  ShieldCheck,
  Zap,
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
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/20 to-cyan-500/20 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="w-full max-w-lg z-10">
        <div className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-800 p-8 sm:p-10">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500 to-cyan-400 p-[1.5px] mb-3 shadow-lg shadow-purple-500/30">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Create Academic Account</h1>
            <p className="text-xs text-slate-400 mt-1">Join the AI-Enabled Online & Offline Assessment Network</p>
          </div>

          {serverError && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-950/50 border border-rose-800/60 flex items-start gap-3 text-rose-300 text-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
              <div>
                <p className="font-bold">Notice</p>
                <p className="text-rose-400 mt-0.5">{serverError}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Select Buttons */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                Select Your Academic Role
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'Student' })}
                  className={'p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ' +
                    (formData.role === 'Student'
                      ? 'border-indigo-500 bg-indigo-950/50 ring-2 ring-indigo-500/30'
                      : 'border-slate-800 bg-slate-950/40 hover:border-slate-700')}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className={'w-7 h-7 rounded-lg flex items-center justify-center ' + (formData.role === 'Student' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400')}>
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    {formData.role === 'Student' && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Student</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Take exams, review AI scores, sync offline</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'Educator' })}
                  className={'p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ' +
                    (formData.role === 'Educator'
                      ? 'border-purple-500 bg-purple-950/50 ring-2 ring-purple-500/30'
                      : 'border-slate-800 bg-slate-950/40 hover:border-slate-700')}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className={'w-7 h-7 rounded-lg flex items-center justify-center ' + (formData.role === 'Educator' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400')}>
                      <BookOpenCheck className="w-4 h-4" />
                    </div>
                    {formData.role === 'Educator' && <span className="w-2 h-2 rounded-full bg-purple-400"></span>}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Educator</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Generate AI tests, supervise exams, export packs</p>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Jane Doe"
                  className={'w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ' +
                    (errors.name ? 'border-rose-500/50 bg-rose-950/20' : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500')}
                />
              </div>
              {errors.name && <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@university.edu"
                  className={'w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ' +
                    (errors.email ? 'border-rose-500/50 bg-rose-950/20' : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500')}
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Min 6 chars"
                    className={'w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ' +
                      (errors.password ? 'border-rose-500/50' : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500')}
                  />
                </div>
                {errors.password && <p className="mt-1.5 text-xs text-rose-400">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Repeat password"
                    className={'w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ' +
                      (errors.confirmPassword ? 'border-rose-500/50' : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500')}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1.5 text-xs text-rose-400">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer hover:scale-[1.02]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Register as {formData.role}</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400">
              Already registered?{' '}
              <Link href="/login" className="font-bold text-indigo-400 hover:text-indigo-300 hover:underline">
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

fs.writeFileSync(path.join(srcDir, 'app', '(auth)', 'login', 'page.tsx'), loginCode, 'utf8');
fs.writeFileSync(path.join(srcDir, 'app', '(auth)', 'register', 'page.tsx'), registerCode, 'utf8');
console.log('Login and Register redesigned with cyber aesthetics!');