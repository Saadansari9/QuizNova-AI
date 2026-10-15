'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types/auth';
import {
  GraduationCap,
  BookOpenCheck,
  User,
  Mail,
  Phone,
  Lock,
  UserPlus,
  AlertCircle,
  ShieldCheck,
  Zap,
  Sparkles,
  KeyRound,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const { register, googleLogin } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'Student' as UserRole,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccessMsg, setServerSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  // Form Validation
  const validateForm = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      err.name = 'Full name must have at least 2 characters';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = 'Enter a valid academic/personal email';
    }
    if (formData.phoneNumber && formData.phoneNumber.trim().length > 0 && formData.phoneNumber.trim().length < 7) {
      err.phoneNumber = 'Please enter a valid phone number (at least 7 digits)';
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

  // Direct 1-Click Registration (No OTP Block)
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      const result = await register({
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber.trim() || undefined,
        password: formData.password,
        role: formData.role,
      });

      if (result.success) {
        const target = formData.role === 'Educator' ? '/dashboard/educator' : '/dashboard/student';
        window.location.href = target;
        return;
      } else {
        setServerError(result.message || 'Registration failed');
        setIsSubmitting(false);
      }
    } catch (err: any) {
      setServerError(err?.message || 'Registration encountered an error');
      setIsSubmitting(false);
    }
  };

  // 1-Click Google Sign In / Sign Up
  const handleGoogleAuth = async () => {
    try {
      setIsGoogleLoading(true);
      const result = await googleLogin(formData.role);
      if (result.success) {
        const target = formData.role === 'Educator' ? '/dashboard/educator' : '/dashboard/student';
        window.location.href = target;
        return;
      } else {
        setServerError(result.message || 'Google authentication failed');
        setIsGoogleLoading(false);
      }
    } catch (err: any) {
      setServerError(err?.message || 'Google authentication encountered an error');
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/20 to-cyan-500/20 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="w-full max-w-5xl z-10 grid grid-cols-1 md:grid-cols-12 rounded-3xl overflow-hidden bg-slate-900/90 backdrop-blur-2xl border border-slate-800 shadow-2xl">
        {/* Left Side: Real Classroom / Teacher Photo */}
        <div className="hidden md:flex md:col-span-5 relative flex-col justify-between p-8 overflow-hidden bg-slate-950">
          <img
            src="/images/educator_teaching_kids.jpg"
            alt="Teacher guiding students with computers"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30"></div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-extrabold uppercase tracking-wider border border-purple-500/30">
              <Sparkles className="w-3 h-3 text-cyan-300" /> Fast & Secure Academic Registration
            </span>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white leading-snug">
              "Create assessments in seconds, not hours."
            </h3>
            <p className="text-xs text-slate-300 mt-2">
              Transform syllabus notes into rich interactive quizzes with automated Bloom grading and offline synchronization.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-cyan-400 p-[1.5px] mb-3 shadow-lg shadow-purple-500/30">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <UserPlus className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <h1 className="text-2xl font-black text-white tracking-tight">Create Academic Account</h1>
                <p className="text-xs text-slate-400 mt-1">Sign up directly or continue with Google</p>
              </div>

              {serverError && (
                <div className="mb-5 p-3.5 rounded-2xl bg-rose-950/50 border border-rose-800/60 flex items-start gap-3 text-rose-300 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
                  <div>
                    <p className="font-bold">Notice</p>
                    <p className="text-rose-400 mt-0.5">{serverError}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Select Your Academic Role
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, role: 'Student' })}
                      className={'p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ' +
                        (formData.role === 'Student'
                          ? 'border-indigo-500 bg-indigo-950/50 ring-2 ring-indigo-500/30'
                          : 'border-slate-800 bg-slate-950/40 hover:border-slate-700')}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className={'w-6 h-6 rounded-lg flex items-center justify-center ' + (formData.role === 'Student' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400')}>
                          <GraduationCap className="w-3.5 h-3.5" />
                        </div>
                        {formData.role === 'Student' && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Student</p>
                        <p className="text-[9px] text-slate-400 mt-0.5">Take exams, review scores, sync offline</p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, role: 'Educator' })}
                      className={'p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ' +
                        (formData.role === 'Educator'
                          ? 'border-purple-500 bg-purple-950/50 ring-2 ring-purple-500/30'
                          : 'border-slate-800 bg-slate-950/40 hover:border-slate-700')}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className={'w-6 h-6 rounded-lg flex items-center justify-center ' + (formData.role === 'Educator' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400')}>
                          <BookOpenCheck className="w-3.5 h-3.5" />
                        </div>
                        {formData.role === 'Educator' && <span className="w-2 h-2 rounded-full bg-purple-400"></span>}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Educator</p>
                        <p className="text-[9px] text-slate-400 mt-0.5">AI tests, super proctor, export packs</p>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Chen"
                        className={'w-full pl-10 pr-4 py-2 rounded-xl border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ' +
                          (errors.name ? 'border-rose-500/50 bg-rose-950/20' : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500')}
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-[10px] font-normal text-slate-500">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={'w-full pl-10 pr-4 py-2 rounded-xl border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ' +
                          (errors.phoneNumber ? 'border-rose-500/50 bg-rose-950/20' : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500')}
                      />
                    </div>
                    {errors.phoneNumber && <p className="mt-1 text-xs text-rose-400">{errors.phoneNumber}</p>}
                  </div>
                </div>

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
                      placeholder="maya@school.edu"
                      className={'w-full pl-10 pr-4 py-2 rounded-xl border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ' +
                        (errors.email ? 'border-rose-500/50 bg-rose-950/20' : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500')}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Min 6 chars"
                        className={'w-full pl-10 pr-4 py-2 rounded-xl border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ' +
                          (errors.password ? 'border-rose-500/50' : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500')}
                      />
                    </div>
                    {errors.password && <p className="mt-1 text-xs text-rose-400">{errors.password}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        placeholder="Repeat password"
                        className={'w-full pl-10 pr-4 py-2 rounded-xl border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ' +
                          (errors.confirmPassword ? 'border-rose-500/50' : 'border-slate-800 bg-slate-950/60 focus:border-indigo-500')}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-xs text-rose-400">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-4 h-4" />
                        <span>Create Academic Account</span>
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
                    onClick={handleGoogleAuth}
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
                </div>
              </form>

              <div className="mt-5 pt-3 border-t border-slate-800 text-center">
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