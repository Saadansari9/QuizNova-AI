'use client';

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
  Phone,
  Lock,
  UserPlus,
  AlertCircle,
  Sparkles,
  Gamepad2,
  Shield,
  ArrowRight,
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
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative bg-[#0c0d14]">
      {/* Background retro pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e1e2f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="w-full max-w-5xl z-10 grid grid-cols-1 md:grid-cols-12 pixel-box bg-[#171926] p-0 overflow-hidden">
        {/* Left Side: Retro Arcade Poster Banner */}
        <div className="hidden md:flex md:col-span-5 relative flex-col justify-between p-8 overflow-hidden bg-black border-r-4 border-black">
          <img
            src="/images/educator_teaching_kids.jpg"
            alt="Teacher guiding students with computers"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFD000] text-black font-minecraft text-[10px] uppercase border-2 border-black shadow-[2px_2px_0_0_#000]">
              <Sparkles className="w-3.5 h-3.5" /> [ NEW PLAYER ONBOARDING ]
            </span>
          </div>

          <div className="relative z-10">
            <div className="bg-[#171926] border-2 border-black p-4 shadow-[4px_4px_0_0_#000]">
              <h3 className="font-minecraft text-base text-[#38E5FF] leading-snug uppercase">
                &ldquo;CREATE ASSESSMENTS IN SECONDS, NOT HOURS.&rdquo;
              </h3>
              <p className="text-xs font-mono text-slate-300 mt-2">
                Transform syllabus notes into rich interactive quizzes with automated Bloom grading and offline synchronization.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 font-minecraft text-[10px] text-[#27E279]">
              <Shield className="w-4 h-4 text-[#27E279]" />
              <span>OFFLINE ENCRYPTED SYNC CERTIFIED</span>
            </div>
          </div>
        </div>

        {/* Right Side: Pixel Registration Form */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-[#171926]">
          <div className="mb-5 text-left">
            <div className="inline-flex items-center justify-center p-2.5 bg-[#FF4582] text-white border-2 border-black shadow-[3px_3px_0_0_#000] mb-3">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-minecraft font-black text-white tracking-tight uppercase">
              CREATE ACADEMIC PROFILE
            </h1>
            <p className="font-minecraft text-xs text-slate-400 mt-1 uppercase">
              [ CHOOSE CLASS • SPAWN YOUR ACCOUNT ]
            </p>
          </div>

          {serverError && (
            <div className="mb-4 p-3 bg-[#FF4582]/20 border-2 border-[#FF4582] flex items-start gap-2.5 text-white font-mono text-xs shadow-[2px_2px_0_0_#000]">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#FF4582]" />
              <div>
                <p className="font-minecraft text-[#FFD000] uppercase font-bold">[ SYSTEM ALERT ]</p>
                <p className="text-slate-200 mt-0.5">{serverError}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Character Class (Role) Selection */}
            <div>
              <label className="block font-minecraft text-xs text-[#FFD000] uppercase tracking-wider mb-2">
                [ 1. SELECT CHARACTER CLASS ]
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'Student' })}
                  className={'p-3 border-2 border-black text-left transition-all cursor-pointer flex flex-col justify-between ' +
                    (formData.role === 'Student'
                      ? 'bg-[#38E5FF] text-black shadow-[3px_3px_0_0_#000] translate-x-[-1px] translate-y-[-1px]'
                      : 'bg-[#121420] text-slate-300 hover:bg-[#1c1f30]')}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className={'w-7 h-7 border-2 border-black flex items-center justify-center ' + (formData.role === 'Student' ? 'bg-black text-[#38E5FF]' : 'bg-[#171926] text-slate-400')}>
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    {formData.role === 'Student' && (
                      <span className="font-minecraft text-[10px] bg-black text-[#38E5FF] px-1 font-bold">ACTIVE</span>
                    )}
                  </div>
                  <div>
                    <p className="font-minecraft text-xs font-bold uppercase">STUDENT</p>
                    <p className="text-[10px] font-mono opacity-80 mt-0.5">Take exams, review scores, offline sync</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'Educator' })}
                  className={'p-3 border-2 border-black text-left transition-all cursor-pointer flex flex-col justify-between ' +
                    (formData.role === 'Educator'
                      ? 'bg-[#FFD000] text-black shadow-[3px_3px_0_0_#000] translate-x-[-1px] translate-y-[-1px]'
                      : 'bg-[#121420] text-slate-300 hover:bg-[#1c1f30]')}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className={'w-7 h-7 border-2 border-black flex items-center justify-center ' + (formData.role === 'Educator' ? 'bg-black text-[#FFD000]' : 'bg-[#171926] text-slate-400')}>
                      <BookOpenCheck className="w-4 h-4" />
                    </div>
                    {formData.role === 'Educator' && (
                      <span className="font-minecraft text-[10px] bg-black text-[#FFD000] px-1 font-bold">ACTIVE</span>
                    )}
                  </div>
                  <div>
                    <p className="font-minecraft text-xs font-bold uppercase">EDUCATOR</p>
                    <p className="text-[10px] font-mono opacity-80 mt-0.5">AI question generator, exam forge</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-minecraft text-[11px] text-slate-300 uppercase mb-1">
                  FULL NAME
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Chen"
                    className={'w-full pl-9 pr-3 py-2 bg-[#0c0d14] border-2 border-black text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38E5FF] shadow-[2px_2px_0_0_#000] ' +
                      (errors.name ? 'border-[#FF4582]' : '')}
                  />
                </div>
                {errors.name && <p className="mt-1 text-[10px] font-mono text-[#FF4582]">{errors.name}</p>}
              </div>

              <div>
                <label className="block font-minecraft text-[11px] text-slate-300 uppercase mb-1">
                  PHONE NUMBER <span className="text-[10px] text-slate-500 font-mono">(OPTIONAL)</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={'w-full pl-9 pr-3 py-2 bg-[#0c0d14] border-2 border-black text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38E5FF] shadow-[2px_2px_0_0_#000] ' +
                      (errors.phoneNumber ? 'border-[#FF4582]' : '')}
                  />
                </div>
                {errors.phoneNumber && <p className="mt-1 text-[10px] font-mono text-[#FF4582]">{errors.phoneNumber}</p>}
              </div>
            </div>

            <div>
              <label className="block font-minecraft text-[11px] text-slate-300 uppercase mb-1">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="maya@school.edu"
                  className={'w-full pl-9 pr-3 py-2 bg-[#0c0d14] border-2 border-black text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38E5FF] shadow-[2px_2px_0_0_#000] ' +
                    (errors.email ? 'border-[#FF4582]' : '')}
                />
              </div>
              {errors.email && <p className="mt-1 text-[10px] font-mono text-[#FF4582]">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-minecraft text-[11px] text-slate-300 uppercase mb-1">
                  PASSWORD
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Min 6 chars"
                    className={'w-full pl-9 pr-3 py-2 bg-[#0c0d14] border-2 border-black text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38E5FF] shadow-[2px_2px_0_0_#000] ' +
                      (errors.password ? 'border-[#FF4582]' : '')}
                  />
                </div>
                {errors.password && <p className="mt-1 text-[10px] font-mono text-[#FF4582]">{errors.password}</p>}
              </div>

              <div>
                <label className="block font-minecraft text-[11px] text-slate-300 uppercase mb-1">
                  CONFIRM PASSWORD
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Repeat password"
                    className={'w-full pl-9 pr-3 py-2 bg-[#0c0d14] border-2 border-black text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38E5FF] shadow-[2px_2px_0_0_#000] ' +
                      (errors.confirmPassword ? 'border-[#FF4582]' : '')}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-[10px] font-mono text-[#FF4582]">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full pixel-btn py-3 bg-[#FFD000] text-black font-minecraft text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent animate-spin"></div>
                    <span>SPAWNING PROFILE...</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4 text-black" />
                    <span>[ CREATE ACADEMIC ACCOUNT ]</span>
                  </>
                )}
              </button>

              <div className="relative flex items-center justify-center my-3">
                <div className="border-t-2 border-black w-full"></div>
                <span className="bg-[#171926] px-3 font-minecraft text-[10px] uppercase text-slate-400">
                  OR QUICK AUTH
                </span>
                <div className="border-t-2 border-black w-full"></div>
              </div>

              <button
                type="button"
                onClick={handleGoogleAuth}
                disabled={isGoogleLoading}
                className="w-full pixel-btn py-2.5 bg-[#0c0d14] text-white font-minecraft text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:bg-[#1a1c29]"
              >
                {isGoogleLoading ? (
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent animate-spin"></div>
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
            </div>
          </form>

          <div className="mt-5 pt-3 border-t-2 border-black text-center">
            <p className="font-minecraft text-xs text-slate-400 uppercase">
              ALREADY REGISTERED?{' '}
              <Link href="/login" className="font-bold text-[#FFD000] hover:underline ml-1">
                [ SIGN IN ]
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}