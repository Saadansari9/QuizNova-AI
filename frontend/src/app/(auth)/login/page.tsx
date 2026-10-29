'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types/auth';
import {
  Mail,
  Lock,
  LogIn,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Sparkles,
  GraduationCap,
  Eye,
  EyeOff,
  UserCheck,
  Cpu,
  Layers,
} from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/dashboard';

  const { login, googleLogin } = useAuth();

  const [selectedRole, setSelectedRole] = useState<UserRole>('Student');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
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
    setSuccessMsg(null);

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      const result = await login(formData.email, formData.password, selectedRole);

      if (result.success) {
        setSuccessMsg('Session authorized! Navigating to console...');
        const isEdu =
          selectedRole === 'Educator' ||
          formData.email.toLowerCase().includes('educator') ||
          formData.email.toLowerCase().includes('teacher') ||
          formData.email.toLowerCase().includes('admin');

        const target =
          redirectUrl && redirectUrl !== '/dashboard'
            ? redirectUrl
            : isEdu
            ? '/dashboard/educator'
            : '/dashboard/student';

        setTimeout(() => {
          window.location.href = target;
        }, 400);
      } else {
        setServerError(result.message || 'Invalid email or password');
        setIsSubmitting(false);
      }
    } catch (err: any) {
      setServerError(err?.message || 'Login encountered an unexpected error');
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsGoogleLoading(true);
      setServerError(null);
      const result = await googleLogin(selectedRole);

      if (result.success) {
        setSuccessMsg('Google Scholar verified! Entering console...');
        const target =
          redirectUrl && redirectUrl !== '/dashboard'
            ? redirectUrl
            : selectedRole === 'Educator'
            ? '/dashboard/educator'
            : '/dashboard/student';

        setTimeout(() => {
          window.location.href = target;
        }, 400);
      } else {
        setServerError(result.message || 'Google sign-in failed');
        setIsGoogleLoading(false);
      }
    } catch (err: any) {
      setServerError(err?.message || 'Google sign-in encountered an error');
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative font-minecraft">
      {/* Background Pixel Grid Accents */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-4xl z-10 grid grid-cols-1 md:grid-cols-12 bg-[#121826] border-4 border-black shadow-[10px_10px_0_0_#000000]">
        {/* Left Side: Retro Arcade Poster Banner */}
        <div className="hidden md:flex md:col-span-5 relative flex-col justify-between p-8 overflow-hidden bg-[#0a0d14] border-r-4 border-black">
          <img
            src="/images/student_quiz_fun.jpg"
            alt="Smiling student winning a quiz"
            className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/70 to-transparent"></div>

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-yellow-400 text-black border-2 border-black shadow-[3px_3px_0_0_#000000] text-xs font-bold uppercase tracking-wider">
              ★ SECURE AUTHENTICATION CONSOLE
            </span>
          </div>

          <div className="relative z-10 space-y-4">
            <h3 className="text-xl font-bold text-white leading-tight">
              &quot;SYNC YOUR KNOWLEDGE QUEST IN THE CAMPUS ARENA!&quot;
            </h3>
            <p className="text-xs text-cyan-300 font-normal leading-relaxed">
              Maharashtra State Board syllabus chapters, 6 Bloom cognitive levels &amp; zero-latency offline sync ready.
            </p>

            <div className="pt-4 border-t-2 border-black/80 space-y-2 text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#27E279]"></span>
                <span>Active SSC/HSC 9-12 Syllabus</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38E5FF]"></span>
                <span>Zero-Latency Offline Attempt Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD000]"></span>
                <span>Live Web Proctoring Supervision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Retro Form */}
        <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-[#151c2e]">
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-yellow-400 border-2 border-black shadow-[2px_2px_0_0_#000000]">
                <Zap className="w-6 h-6 text-black fill-black" />
              </div>
              <span className="text-[10px] font-mono text-[#27E279] bg-black px-2 py-0.5 border border-[#27E279]/40">
                ● SYSTEM OPERATIONAL
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
              SIGN IN TO CONSOLE
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">Enter your credentials to access your academic console</p>
          </div>

          {/* Portal Role Selector Toggle */}
          <div className="mb-4">
            <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              ACTIVE ACCESS PORTAL:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedRole('Student');
                  if (formData.email.includes('educator')) {
                    setFormData({ ...formData, email: 'student@quiznova.edu' });
                  }
                }}
                className={`py-2 px-3 text-xs uppercase font-bold border-2 border-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  selectedRole === 'Student'
                    ? 'bg-[#38E5FF] text-black shadow-[3px_3px_0_0_#000]'
                    : 'bg-[#0a0d14] text-slate-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>STUDENT PORTAL</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedRole('Educator');
                  if (formData.email.includes('student')) {
                    setFormData({ ...formData, email: 'educator@quiznova.edu' });
                  }
                }}
                className={`py-2 px-3 text-xs uppercase font-bold border-2 border-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  selectedRole === 'Educator'
                    ? 'bg-[#8A5CFF] text-white shadow-[3px_3px_0_0_#000]'
                    : 'bg-[#0a0d14] text-slate-400 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>EDUCATOR CONSOLE</span>
              </button>
            </div>
          </div>

          {/* Feedback Messages */}
          {serverError && (
            <div className="mb-4 p-3 bg-red-950/80 border-2 border-black shadow-[3px_3px_0_0_#000000] flex items-start gap-2.5 text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" />
              <div>
                <p className="font-bold uppercase tracking-wider">Authentication Error</p>
                <p className="text-red-400 mt-0.5">{serverError}</p>
              </div>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 p-3 bg-emerald-950/90 border-2 border-black shadow-[3px_3px_0_0_#000] flex items-center gap-2.5 text-emerald-300 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="font-bold tracking-wider">{successMsg}</span>
            </div>
          )}

          {/* Standard Login Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold text-yellow-300 uppercase tracking-wider mb-1">
                PLAYER EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={selectedRole === 'Educator' ? 'educator@school.edu' : 'student@school.edu'}
                  className={'w-full pl-9 pr-4 py-2 bg-[#0a0d14] border-2 text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none transition-all ' +
                    (errors.email
                      ? 'border-red-500 shadow-[2px_2px_0_0_#ef4444]'
                      : 'border-black shadow-[2px_2px_0_0_#000000] focus:border-[#38E5FF]')}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-[11px] font-bold text-yellow-300 uppercase tracking-wider">
                  SECURITY KEY / PASSWORD
                </label>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••••••"
                  className={'w-full pl-9 pr-10 py-2 bg-[#0a0d14] border-2 text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none transition-all ' +
                    (errors.password
                      ? 'border-red-500 shadow-[2px_2px_0_0_#ef4444]'
                      : 'border-black shadow-[2px_2px_0_0_#000000] focus:border-[#38E5FF]')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-400 font-mono">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="pixel-btn w-full py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-[3px_3px_0_0_#000000]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>VERIFYING PLAYER...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4 text-black" />
                  <span>[ SIGN IN TO {selectedRole.toUpperCase()} CONSOLE ]</span>
                </>
              )}
            </button>

            <div className="relative flex items-center justify-center my-2">
              <div className="border-t-2 border-black w-full"></div>
              <span className="bg-[#151c2e] px-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                OR
              </span>
              <div className="border-t-2 border-black w-full"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isGoogleLoading}
              className="pixel-btn w-full py-2 bg-[#0a0d14] hover:bg-[#1a2236] border-2 border-black text-white font-bold text-xs flex items-center justify-center gap-2.5 cursor-pointer shadow-[3px_3px_0_0_#000000]"
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
              <span>[ CONTINUE WITH GOOGLE ]</span>
            </button>
          </form>

          <div className="mt-5 pt-3 border-t-2 border-black text-center flex items-center justify-between text-xs">
            <span className="text-slate-400">NEED A FRESH ACCOUNT?</span>
            <Link href="/register" className="font-bold text-cyan-400 hover:text-cyan-300 hover:underline">
              [ REGISTER ACCOUNT ]
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
