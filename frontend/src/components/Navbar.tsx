'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import {
  BookOpen,
  LogOut,
  Sparkles,
  Zap,
  Calendar,
  GraduationCap,
  Gamepad2,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, logout, loading } = useAuth();

  return (
    <nav className="border-b-4 border-black bg-[#0f1422] sticky top-0 z-50 transition-all shadow-[0_4px_0_0_#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Retro Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-indigo-600 border-2 border-black shadow-[2px_2px_0_0_#000000] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
              <Gamepad2 className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-minecraft text-base text-white tracking-wider">
                  QUIZ<span className="text-cyan-400">NOVA</span><span className="text-yellow-400">-AI</span>
                </span>
                <span className="font-minecraft text-[10px] uppercase px-2 py-0.5 bg-yellow-400 text-black border-2 border-black shadow-[2px_2px_0_0_#000000] flex items-center gap-1 font-bold">
                  ★ STATE BOARD
                </span>
              </div>
              <span className="font-minecraft text-[9px] block text-cyan-300 tracking-wide mt-0.5">
                CLASS 9-12 • SCIENCE • COMMERCE • ARTS
              </span>
            </div>
          </Link>

          {/* Center Retro Navigation Links */}
          <div className="hidden lg:flex items-center space-x-2 font-minecraft text-xs">
            <Link
              href="/dashboard/student"
              className="text-slate-200 hover:text-white px-3 py-1.5 border-2 border-transparent hover:border-black hover:bg-indigo-900/60 transition-all flex items-center gap-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>[ EXAMS ARENA ]</span>
            </Link>
            <Link
              href="/pyqs"
              className="text-slate-200 hover:text-white px-3 py-1.5 border-2 border-transparent hover:border-black hover:bg-amber-950/60 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>[ BOARD PYQS ]</span>
            </Link>
            <Link
              href="/dashboard/student/formulas"
              className="text-slate-200 hover:text-white px-3 py-1.5 border-2 border-transparent hover:border-black hover:bg-cyan-950/60 transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>[ FORMULAS ]</span>
            </Link>
            <Link
              href="/textbooks"
              className="text-slate-200 hover:text-white px-3 py-1.5 border-2 border-transparent hover:border-black hover:bg-emerald-950/60 transition-all flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>[ TEXTBOOKS ]</span>
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-3 font-minecraft">
            {loading ? (
              <div className="h-8 w-24 bg-slate-800 border-2 border-black animate-pulse"></div>
            ) : user ? (
              <div className="flex items-center space-x-2">
                <Link
                  href={user.role === 'Educator' ? '/dashboard/educator' : '/dashboard/student'}
                  className="pixel-btn text-[11px] font-bold text-white bg-indigo-700 hover:bg-indigo-600 px-3 py-1.5 hidden sm:inline-block"
                >
                  DASHBOARD
                </Link>

                {/* Retro User Pill */}
                <div className="flex items-center gap-2 bg-[#162032] border-2 border-black shadow-[2px_2px_0_0_#000000] px-2.5 py-1">
                  <div className="w-5 h-5 bg-yellow-400 text-black border border-black flex items-center justify-center text-[10px] font-bold">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'P'}
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-white leading-none">{user.name.slice(0, 10)}</p>
                    <span
                      className={'text-[8px] font-bold uppercase ' +
                        (user.role === 'Educator' ? 'text-purple-400' : 'text-cyan-400')}
                    >
                      {user.role}
                    </span>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="pixel-btn text-[10px] font-bold text-red-300 bg-red-950 hover:bg-red-900 px-2 py-1.5 flex items-center gap-1 cursor-pointer"
                  title="Sign out"
                >
                  <LogOut className="w-3 h-3" />
                  <span className="hidden sm:inline">EXIT</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="pixel-btn text-xs font-bold text-slate-100 bg-[#1e293b] hover:bg-[#334155] px-3.5 py-1.5"
                >
                  SIGN IN
                </Link>
                <Link
                  href="/register"
                  className="pixel-btn text-xs font-bold text-black bg-yellow-400 hover:bg-yellow-300 px-3.5 py-1.5 shadow-[3px_3px_0_0_#000000]"
                >
                  START GAME
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};