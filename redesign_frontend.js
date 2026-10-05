const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'frontend', 'src');

// 1. Redesigned Navbar
const navbarCode = `'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { BookOpen, LogOut, Sparkles, Wifi, Cpu, ShieldCheck, Zap } from 'lucide-react';

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
                  Quiz<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Nova</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-indigo-400" /> AI 2.0
                </span>
              </div>
              <span className="text-[10px] block -mt-0.5 text-slate-400 font-medium tracking-wide">
                Online & Offline Examination Engine
              </span>
            </div>
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            {/* Live Engine Pulse */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-emerald-400 font-semibold">Engine Live</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 flex items-center gap-1">
                <Wifi className="w-3 h-3 text-cyan-400" /> Sync Ready
              </span>
            </div>

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
`;

// 2. Redesigned Landing Page with Interactive AI Preview
const landingPageCode = `'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import {
  Sparkles,
  Zap,
  WifiOff,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Flame,
  Layers,
  Terminal,
  Activity,
  Award,
} from 'lucide-react';

export default function HomePage() {
  const { user } = useAuth();

  const [activeTopic, setActiveTopic] = useState('Operating Systems');
  const previewData: Record<string, { prompt: string; options: string[]; answer: string; bloom: string }> = {
    'Operating Systems': {
      prompt: 'Which condition is NOT required for Deadlock occurrence according to Coffman criteria?',
      options: ['Mutual Exclusion', 'Hold & Wait', 'Preemption Allowed', 'Circular Wait'],
      answer: 'Preemption Allowed (No Preemption is required for deadlock)',
      bloom: 'Analyzing • Bloom Level IV',
    },
    'Neural Networks': {
      prompt: 'Why does ReLU mitigate the Vanishing Gradient problem compared to Sigmoid?',
      options: ['Derivative is 1 for x > 0', 'Squashes outputs to [-1, 1]', 'Has quadratic complexity', 'Uses softmax internally'],
      answer: 'Constant derivative of 1 for positive activations avoids exponential decay',
      bloom: 'Evaluating • Bloom Level V',
    },
    'Computer Networks': {
      prompt: 'What TCP header mechanism is used to handle dynamic sliding window flow control?',
      options: ['Window Size Field (16-bit)', 'Sequence Number Increment', 'SYN Flag Retransmission', 'Checksum byte parity'],
      answer: 'Advertised Receiver Window (rwnd) in TCP header controls sender pacing',
      bloom: 'Applying • Bloom Level III',
    },
    'Data Structures': {
      prompt: 'What guarantees O(log N) worst-case lookup in a Red-Black balanced tree?',
      options: ['Black-height property balancing', 'All leaves strictly at depth N', 'Using FIFO queue pointers', 'Dynamic linear hashing'],
      answer: 'Black-height uniformity ensures no path is more than 2x longer than any other',
      bloom: 'Understanding • Bloom Level II',
    },
  };

  const currentPreview = previewData[activeTopic];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col relative overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Futuristic Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 shadow-inner backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>AI Bloom Engine • Cryptographic Offline Resilience</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
            Intelligent Examinations. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300">
              Online & Offline Synchronized.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Empower educators to synthesize Bloom\\'s Taxonomy exam sets in seconds. Enable students to take proctored tests seamlessly—even with zero internet in rural campus labs.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {user ? (
              <Link
                href={user.role === 'Educator' ? '/dashboard/educator' : '/dashboard/student'}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Launch {user.role} Control Console</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <>
                <Link
                  href="/register"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span>Start Free Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/login"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold rounded-2xl border border-slate-700/80 backdrop-blur-md transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Faculty / Student Login</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Live Interactive AI Simulation Terminal */}
        <div className="mt-14 max-w-3xl w-full mx-auto text-left">
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Terminal Top Bar */}
            <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-xs font-mono font-medium text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" /> AI Question Synthesis Matrix
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                ⚡ Neural Bloom Engine
              </span>
            </div>

            {/* Interactive Topic Selector Tabs */}
            <div className="p-4 bg-slate-950/40 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto">
              <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-indigo-400" /> Topic:
              </span>
              {Object.keys(previewData).map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={'px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ' +
                    (activeTopic === topic
                      ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30'
                      : 'bg-slate-800/70 text-slate-400 hover:text-white hover:bg-slate-800')}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Simulated Generated Question Card */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider bg-indigo-950/60 border border-indigo-800/50 px-2.5 py-1 rounded-lg">
                  {currentPreview.bloom}
                </span>
                <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/50 border border-emerald-800/40 px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Concept
                </span>
              </div>

              <p className="text-base font-semibold text-slate-100 mb-4">{currentPreview.prompt}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                {currentPreview.options.map((opt, i) => (
                  <div
                    key={i}
                    className={'p-3 rounded-xl border text-xs font-medium flex items-center gap-2.5 ' +
                      (i === 0
                        ? 'border-indigo-500/50 bg-indigo-950/30 text-indigo-200'
                        : 'border-slate-800 bg-slate-950/50 text-slate-300')}
                  >
                    <span className="w-5 h-5 rounded-md bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{opt}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs text-purple-300">
                <strong className="text-purple-200">AI Diagnostic Rationale: </strong>
                {currentPreview.answer}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Triad Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto text-left w-full">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-purple-500/40 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">AI Question Forge</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Educators turn syllabus notes and lecture topics into Bloom\\'s taxonomy assessment questions with instant answer keys.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-cyan-500/40 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <WifiOff className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Encrypted Offline Vault</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Students take offline exams with local storage signatures and auto-sync scores to the server upon reconnection.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-emerald-500/40 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Live Proctoring & RBAC</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Detects tab-switches and focus loss with secure HTTP-only sessions, bcrypt 12 salt rounds, and strict role isolation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
`;

// Write to files
fs.writeFileSync(path.join(srcDir, 'components', 'Navbar.tsx'), navbarCode, 'utf8');
fs.writeFileSync(path.join(srcDir, 'app', 'page.tsx'), landingPageCode, 'utf8');

console.log('Navbar and Landing Page upgraded to cyber creative aesthetic!');