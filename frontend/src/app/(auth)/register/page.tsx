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
  const { register, sendOtp } = useAuth();

  // Step 1: 'form' | Step 2: 'otp'
  const [step, setStep] = useState<'form' | 'otp'>('form');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'Student' as UserRole,
  });

  // 6-digit OTP array
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [demoOtp, setDemoOtp] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState<number>(0);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccessMsg, setServerSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Resend Countdown Timer
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

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

  // Step 1: Request & Send OTP
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);
    const result = await sendOtp(formData.email, formData.name);
    setIsSubmitting(false);

    if (result.success) {
      setDemoOtp(result.demoOtp || null);
      setServerSuccessMsg(result.message || 'Verification code sent!');
      setResendCooldown(60); // 60s cooldown
      setStep('otp');
    } else {
      setServerError(result.message || 'Failed to send verification code');
    }
  };

  // Handle OTP digit changes
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Pasted full code
      const pasted = value.replace(/\D/g, '').slice(0, 6).split('');
      const newDigits = [...otpDigits];
      pasted.forEach((char, i) => {
        if (i < 6) newDigits[i] = char;
      });
      setOtpDigits(newDigits);
      const nextFocus = Math.min(pasted.length, 5);
      otpInputsRef.current[nextFocus]?.focus();
      return;
    }

    const digit = value.replace(/\D/g, '');
    const newDigits = [...otpDigits];
    newDigits[index] = digit;
    setOtpDigits(newDigits);

    // Auto-advance to next input
    if (digit && index < 5) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  // Handle Backspace navigation
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  };

  // Step 2: Final Verification & Registration
  const handleVerifyAndRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const enteredOtp = otpDigits.join('');
    if (enteredOtp.length !== 6) {
      setServerError('Please enter all 6 digits of your verification code');
      return;
    }

    setIsSubmitting(true);
    const result = await register({
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber.trim() || undefined,
      password: formData.password,
      role: formData.role,
      otp: enteredOtp,
    });
    setIsSubmitting(false);

    if (result.success) {
      router.push('/dashboard');
    } else {
      setServerError(result.message || 'OTP verification failed');
      if (result.errors) {
        const fieldErrors: Record<string, string> = {};
        result.errors.forEach((er) => {
          fieldErrors[er.field] = er.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  // Resend OTP handler
  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    setServerError(null);
    setIsSubmitting(true);
    const result = await sendOtp(formData.email, formData.name);
    setIsSubmitting(false);

    if (result.success) {
      setDemoOtp(result.demoOtp || null);
      setServerSuccessMsg('A new OTP has been generated!');
      setResendCooldown(60);
    } else {
      setServerError(result.message || 'Failed to resend OTP');
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
              <Sparkles className="w-3 h-3 text-cyan-300" /> Secure OTP Verified Registration
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
          {step === 'form' ? (
            /* STEP 1: Registration Credentials Form */
            <>
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-cyan-400 p-[1.5px] mb-3 shadow-lg shadow-purple-500/30">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <UserPlus className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <h1 className="text-2xl font-black text-white tracking-tight">Create Academic Account</h1>
                <p className="text-xs text-slate-400 mt-1">Step 1 of 2: Fill credentials to generate verification OTP</p>
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

              <form onSubmit={handleRequestOtp} className="space-y-3.5">
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer hover:scale-[1.02] mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating OTP...</span>
                    </>
                  ) : (
                    <>
                      <KeyRound className="w-4 h-4" />
                      <span>Generate & Send Verification OTP</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-5 pt-3 border-t border-slate-800 text-center">
                <p className="text-xs text-slate-400">
                  Already registered?{' '}
                  <Link href="/login" className="font-bold text-indigo-400 hover:text-indigo-300 hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </>
          ) : (
            /* STEP 2: 6-Digit OTP Verification Screen */
            <div className="space-y-6">
              <div>
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors mb-4 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Edit Registration Details</span>
                </button>

                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] mb-3 shadow-lg shadow-cyan-500/30">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <KeyRound className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <h1 className="text-2xl font-black text-white tracking-tight">Enter Verification Code</h1>
                <p className="text-xs text-slate-400 mt-1">
                  We sent a 6-digit OTP to <strong className="text-slate-200">{formData.email}</strong>
                </p>
              </div>

              {/* Dev / Demo OTP Helper Box */}
              {demoOtp && (
                <div className="p-3.5 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-xs text-indigo-200 font-semibold">Demo / Evaluator Code:</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const splitted = demoOtp.split('');
                      setOtpDigits(splitted);
                    }}
                    className="px-2.5 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold rounded-lg cursor-pointer transition-colors"
                  >
                    Click to auto-fill: {demoOtp}
                  </button>
                </div>
              )}

              {serverError && (
                <div className="p-3.5 rounded-2xl bg-rose-950/50 border border-rose-800/60 flex items-start gap-3 text-rose-300 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
                  <div>
                    <p className="font-bold">Verification Error</p>
                    <p className="text-rose-400 mt-0.5">{serverError}</p>
                  </div>
                </div>
              )}

              {/* 6-Digit Boxes */}
              <form onSubmit={handleVerifyAndRegister} className="space-y-6">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  {otpDigits.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => { otpInputsRef.current[index] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      autoFocus={index === 0}
                      className="w-11 h-13 sm:w-12 sm:h-14 text-center text-xl font-black text-white bg-slate-950 border border-slate-800 rounded-2xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/40 focus:outline-none transition-all shadow-inner"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>Didn't receive code?</span>
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={resendCooldown > 0 || isSubmitting}
                    className={'font-bold transition-colors cursor-pointer flex items-center gap-1 ' +
                      (resendCooldown > 0 ? 'text-slate-600 cursor-not-allowed' : 'text-cyan-400 hover:text-cyan-300')}
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : 'Resend Code'}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || otpDigits.join('').length !== 6}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-cyan-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying & Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verify OTP & Create Account</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}