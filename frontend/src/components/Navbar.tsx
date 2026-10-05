'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import {
  BookOpen,
  LogOut,
  Sparkles,
  Wifi,
  Zap,
  FileText,
  Calendar,
  GraduationCap,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, logout, loading } = useAuth();

  return (
    <nav className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 group-hover:scale-105 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white">
                <Zap className="w-5 h-5 text-indigo-400 fill-indigo-400/30 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white tracking-tight">
                  Quiz<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Nova</span><span className="text-indigo-400">-AI</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-indigo-400" /> State Board
                </span>
              </div>
              <span className="text-[10px] block -mt-0.5 text-slate-400 font-medium tracking-wide">
                Class 9-12 Science • Commerce • Arts
              </span>
            </div>
          </Link>

          {/* Center Department Links (for students) */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/dashboard/student"
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-xl hover:bg-slate-900 transition-colors flex items-center gap-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Exams Arena</span>
            </Link>
            <Link
              href="/pyqs"
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-xl hover:bg-slate-900 transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Board PYQs (1990-2026)</span>
            </Link>
            <Link
              href="/dashboard/student/formulas"
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-xl hover:bg-slate-900 transition-colors flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Formulas</span>
            </Link>
            <Link
              href="/textbooks"
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-xl hover:bg-slate-900 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>All Textbooks</span>
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            {loading ? (
              <div className="h-9 w-24 bg-slate-800 animate-pulse rounded-xl"></div>
            ) : user ? (
              <div className="flex items-center space-x-3">
                <Link
                  href={user.role === 'Educator' ? '/dashboard/educator' : '/dashboard/student'}
                  className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors hidden sm:inline-block"
                >
                  Dashboard
                </Link>

                {/* User Pill */}
                <div className="flex items-center gap-2.5 bg-slate-900/90 border border-slate-800/90 px-3 py-1.5 rounded-2xl shadow-inner">
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-200 leading-tight">{user.name}</p>
                    <span
                      className={'text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.2 rounded-md ' +
                        (user.role === 'Educator'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30')}
                    >
                      {user.role}
                    </span>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="flex items-center space-x-1.5 text-xs font-medium text-slate-400 hover:text-red-400 bg-slate-900 hover:bg-red-950/40 border border-slate-800 hover:border-red-800/40 px-3 py-2 rounded-xl transition-all cursor-pointer"
                  title="Sign out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Exit</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl hover:bg-slate-900 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 px-4 py-2 rounded-xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
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