'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Mail, Lock, LogIn, AlertCircle, ShieldCheck, CheckCircle2, Zap, Sparkles, GraduationCap } from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/dashboard';
  
  const { login, googleLogin } = useAuth();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const validateForm = () => {
    const err: { email?: string; password?: string } = {};
    if (!formData.email.trim()) {
      err.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
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

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    const result = await googleLogin('Student');
    setIsGoogleLoading(false);
    if (result.success) {
      router.push(redirectUrl);
    } else {
      setServerError(result.message || 'Google sign-in failed');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="w-full max-w-4xl z-10 grid grid-cols-1 md:grid-cols-12 rounded-3xl overflow-hidden bg-slate-900/90 backdrop-blur-2xl border border-slate-800 shadow-2xl">
        {/* Left Side: Real Student Photo Banner */}
        <div className="hidden md:flex md:col-span-5 relative flex-col justify-between p-8 overflow-hidden bg-slate-950">
          <img
            src="/images/student_quiz_fun.jpg"
            alt="Smiling student winning a quiz"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30"></div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-extrabold uppercase tracking-wider border border-indigo-500/30">
              <Sparkles className="w-3 h-3 text-cyan-300" /> QuizNova-AI Portal
            </span>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white leading-snug">
              "Taking tests has never been this engaging and motivating."
            </h3>
            <p className="text-xs text-slate-300 mt-2">
              Instant AI diagnostics, Bloom taxonomies, and seamless offline examination sync for every learner.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-[1.5px] mb-3 shadow-lg shadow-indigo-500/30">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Zap className="w-6 h-6 text-indigo-400 fill-indigo-400/20" />
              </div>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Sign In to Console</h1>
            <p className="text-xs text-slate-400 mt-1">Enter your credentials to access your tests and courses</p>
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="student@university.edu"
                  className={'w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ' +
                    (errors.email
                      ? 'border-rose-500/50 bg-rose-950/20 focus:ring-rose-500'
                      : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500 focus:ring-indigo-500/40')}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Password
                </label>
                <span className="text-[11px] text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer">
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
                  className={'w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ' +
                    (errors.password
                      ? 'border-rose-500/50 bg-rose-950/20 focus:ring-rose-500'
                      : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500 focus:ring-indigo-500/40')}
                />
              </div>
              {errors.password && <p className="mt-1 text-xs text-rose-400">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer hover:scale-[1.02]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying Session...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Sign In to Console</span>
                </>
              )}
            </button>

            <div className="relative flex items-center justify-center my-3">
              <div className="border-t border-slate-800 w-full"></div>
              <span className="bg-slate-900 px-3 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Or Continue With
              </span>
              <div className="border-t border-slate-800 w-full"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isGoogleLoading}
              className="w-full py-2.5 bg-slate-950 hover:bg-slate-800/80 border border-slate-700/80 text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:border-slate-600"
            >
              {isGoogleLoading ? (
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              )}
              <span>Continue with Google</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400">
              Need an academic account?{' '}
              <Link href="/register" className="font-bold text-indigo-400 hover:text-indigo-300 hover:underline">
                Create Account
              </Link>
            </p>
          </div>
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