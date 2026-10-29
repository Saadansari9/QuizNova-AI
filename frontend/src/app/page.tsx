'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { QuizNovaVideoPlayer } from '@/components/QuizNovaVideoPlayer';
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
  Users,
  Star,
  BookOpenCheck,
  Play,
  Video,
  X,
  Gamepad2,
  Sword,
  Trophy,
} from 'lucide-react';

export default function HomePage() {
  const { user } = useAuth();

  const [activeTopic, setActiveTopic] = useState('Operating Systems');
  const [showVideoModal, setShowVideoModal] = useState(false);

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
    <div className="min-h-[calc(100vh-4rem)] flex flex-col relative overflow-hidden bg-[#0c0d14] text-white">
      {/* Retro scanline & grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e1e2f_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10 pb-16 z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 text-left">
            {/* Retro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFD000] text-black font-minecraft text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0_0_#000] mb-6">
              <span className="w-2.5 h-2.5 bg-black animate-ping"></span>
              <span>[ ARCADE ENGINE • BLOOM TAXONOMY v2.0 ]</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-minecraft font-black tracking-tight leading-[1.2] text-white">
              LEVEL UP YOUR KNOWLEDGE WITH{' '}
              <span className="text-[#FFD000] bg-black px-2 py-0.5 border-2 border-[#FFD000] inline-block mt-1 shadow-[4px_4px_0_0_#FF4582]">
                QUIZNOVA AI
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-xl font-mono leading-relaxed border-l-4 border-[#38E5FF] pl-4 bg-slate-900/60 py-2">
              Empower educators to synthesize curriculum-aligned questions in seconds. Let students conquer quizzes interactively online or in 100% offline computer labs with zero data loss.
            </p>

            {/* CTAs in RetroUI Pixel Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {user ? (
                <Link
                  href={user.role === 'Educator' ? '/dashboard/educator' : '/dashboard/student'}
                  className="pixel-btn px-6 py-3.5 bg-[#FFD000] text-black font-minecraft text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Gamepad2 className="w-4 h-4 text-black" />
                  <span>[ RESUME GAME: {user.role} CONSOLE ]</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <>
                  <Link
                    href="/register"
                    className="pixel-btn px-6 py-3.5 bg-[#FF4582] text-white font-minecraft text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#FFD000]" />
                    <span>[ INSERT COIN / GET STARTED ]</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="pixel-btn px-6 py-3.5 bg-[#171926] hover:bg-[#202334] text-[#38E5FF] font-minecraft text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-[#38E5FF] fill-[#38E5FF]" />
                    <span>[ WATCH GAMEPLAY DEMO ]</span>
                  </button>
                </>
              )}
            </div>

            {/* Retro Stats Bar */}
            <div className="mt-8 pt-6 border-t-2 border-black flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-[#121420] border-2 border-black px-3 py-1.5 shadow-[2px_2px_0_0_#000]">
                <Trophy className="w-4 h-4 text-[#FFD000]" />
                <span className="font-minecraft text-xs text-white">RATING: 4.9/5.0</span>
              </div>
              <div className="flex items-center gap-2 bg-[#121420] border-2 border-black px-3 py-1.5 shadow-[2px_2px_0_0_#000]">
                <Zap className="w-4 h-4 text-[#38E5FF]" />
                <span className="font-minecraft text-xs text-[#38E5FF]">OFFLINE SYNC: 100% READY</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Retro Pixel Border Frame */}
          <div className="lg:col-span-5 relative">
            <div className="pixel-box bg-[#171926] p-2 relative group">
              <div className="relative border-2 border-black overflow-hidden bg-black aspect-4/3">
                <img
                  src="/images/hero_students.jpg"
                  alt="Students studying collaboratively with laptops in library"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* Retro Play Overlay Button */}
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="absolute inset-0 flex items-center justify-center group-hover:bg-black/30 transition-all cursor-pointer"
                >
                  <div className="pixel-btn p-4 bg-[#FFD000] text-black shadow-[4px_4px_0_0_#000] group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-black" />
                  </div>
                </button>

                <div className="absolute bottom-2 left-2 right-2 p-3 bg-black/90 border-2 border-black font-minecraft text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#38E5FF] flex items-center gap-1.5 uppercase">
                      <GraduationCap className="w-4 h-4 text-[#FFD000]" /> CAMPUS ARCADE EDITION
                    </span>
                    <span className="text-[10px] bg-[#27E279] text-black px-1.5 py-0.5 font-bold uppercase">
                      LIVE
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-slate-300 mt-1">
                    ACTIVE IN UNIVERSITY LABS, HIGH SCHOOLS, & OFFLINE HUBS.
                  </p>
                </div>
              </div>

              {/* Pixel Badges floating */}
              <div className="absolute -top-3 -left-3 bg-[#FF4582] text-white border-2 border-black px-2.5 py-1 font-minecraft text-[10px] uppercase shadow-[3px_3px_0_0_#000] animate-bounce">
                ★ 100% BLOOM TAXONOMY
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#38E5FF] text-black border-2 border-black px-2.5 py-1 font-minecraft text-[10px] uppercase shadow-[3px_3px_0_0_#000]">
                ⚡ ZERO-LATENCY OFFLINE
              </div>
            </div>
          </div>
        </div>

        {/* Video Showcase Section */}
        <div className="mt-16 pixel-box bg-[#171926] p-6 sm:p-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#38E5FF] text-black font-minecraft text-[10px] uppercase border-2 border-black shadow-[2px_2px_0_0_#000] mb-3">
                <Video className="w-3.5 h-3.5" /> [ SYSTEM DEMO TAPE ]
              </span>
              <h2 className="text-xl sm:text-2xl font-minecraft font-black text-white leading-tight">
                SEE HOW QUIZNOVA-AI OPERATES IN REAL-TIME
              </h2>
              <p className="text-xs text-slate-300 mt-3 font-mono leading-relaxed">
                Watch how teachers generate a complete 10-question exam in under 30 seconds, export encrypted offline bundles, and supervise student proctoring.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="pixel-btn px-4 py-2.5 bg-[#FFD000] text-black font-minecraft text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>[ PLAY VIDEO DEMO ]</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuizNovaVideoPlayer />
            </div>
          </div>
        </div>

        {/* Real Classroom & Student Spotlight Gallery */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <span className="font-minecraft text-xs text-[#FFD000] bg-black border-2 border-[#FFD000] px-3 py-1 shadow-[2px_2px_0_0_#FFD000] uppercase">
              [ REAL-WORLD BATTLE IMPACT ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-minecraft font-black text-white mt-4">
              BUILT FOR STUDENTS • PRAISED BY EDUCATORS
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-2 max-w-lg mx-auto">
              Engaging, gamified, and 100% resilient offline examination architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Cheerful Student Quiz Winner */}
            <div className="pixel-box bg-[#171926] p-4 flex flex-col justify-between">
              <div>
                <div className="relative h-56 border-2 border-black overflow-hidden mb-4">
                  <img
                    src="/images/student_quiz_fun.jpg"
                    alt="Student girl celebrating winning a quiz on a tablet"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 bg-[#FFD000] text-black font-minecraft text-[10px] uppercase border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-black" /> QUIZ ARENA CHAMPION
                  </div>
                </div>
                <h3 className="font-minecraft text-base font-bold text-white uppercase">INSTANT AI FEEDBACK & MASTERY BADGES</h3>
                <p className="text-xs font-mono text-slate-300 mt-2 leading-relaxed">
                  Students receive immediate, encouraging diagnostic feedback on every attempt. Question-by-question rationales explain the underlying concepts clearly, turning test-taking into an inspiring learning moment.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-minecraft">
                <span className="text-[#38E5FF]">[ DIAGNOSTIC EXPLANATIONS ]</span>
                <span className="text-[#27E279]">[ 100% RETENTION ]</span>
              </div>
            </div>

            {/* Card 2: Classroom Teacher Guiding Kids */}
            <div className="pixel-box bg-[#171926] p-4 flex flex-col justify-between">
              <div>
                <div className="relative h-56 border-2 border-black overflow-hidden mb-4">
                  <img
                    src="/images/educator_teaching_kids.jpg"
                    alt="Teacher guiding young students on laptops in classroom"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 bg-[#FF4582] text-white font-minecraft text-[10px] uppercase border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center gap-1.5">
                    <BookOpenCheck className="w-3.5 h-3.5 text-white" /> CLASSROOM EXAM FORGE
                  </div>
                </div>
                <h3 className="font-minecraft text-base font-bold text-white uppercase">EFFORTLESS QUESTION AUTHORING</h3>
                <p className="text-xs font-mono text-slate-300 mt-2 leading-relaxed">
                  Educators generate tailored assessments aligned with curriculum difficulty in under 30 seconds. Export encrypted offline bundles with one click to run exams anywhere without needing reliable Wi-Fi.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-minecraft">
                <span className="text-[#FFD000]">[ 1-CLICK EXPORT ]</span>
                <span className="text-[#8A5CFF]">[ SAVE 5+ HOURS ]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive AI Simulation Terminal */}
        <div className="mt-16 max-w-3xl w-full mx-auto text-left">
          <div className="text-center mb-6">
            <span className="font-minecraft text-xs text-[#38E5FF] bg-black border-2 border-[#38E5FF] px-2.5 py-1 shadow-[2px_2px_0_0_#38E5FF] uppercase">
              [ TEST GENERATOR MATRIX ]
            </span>
            <h3 className="font-minecraft text-xl font-bold text-white mt-3 uppercase">
              AI QUESTION SYNTHESIS EMULATOR
            </h3>
          </div>

          <div className="pixel-box bg-[#171926] p-0 overflow-hidden">
            <div className="px-4 py-3 bg-black border-b-2 border-black flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#FF4582] border border-black inline-block"></span>
                <span className="w-3 h-3 bg-[#FFD000] border border-black inline-block"></span>
                <span className="w-3 h-3 bg-[#27E279] border border-black inline-block"></span>
                <span className="ml-2 font-minecraft text-xs text-white flex items-center gap-1.5 uppercase">
                  <Terminal className="w-3.5 h-3.5 text-[#38E5FF]" /> AI QUESTION MATRIX
                </span>
              </div>
              <span className="font-minecraft text-[10px] text-black bg-[#FFD000] px-2 py-0.5 border border-black uppercase font-bold">
                ⚡ NEURAL BLOOM
              </span>
            </div>

            <div className="p-3 bg-[#121420] border-b-2 border-black flex items-center gap-2 overflow-x-auto">
              <span className="font-minecraft text-[11px] text-slate-400 mr-1 flex items-center gap-1 uppercase">
                <Flame className="w-3.5 h-3.5 text-[#FF4582]" /> TOPIC:
              </span>
              {Object.keys(previewData).map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={'font-minecraft text-xs uppercase px-3 py-1.5 border-2 border-black transition-all cursor-pointer ' +
                    (activeTopic === topic
                      ? 'bg-[#FFD000] text-black font-bold shadow-[2px_2px_0_0_#000]'
                      : 'bg-[#1e2030] text-slate-300 hover:text-white hover:bg-[#25283d]')}
                >
                  {topic}
                </button>
              ))}
            </div>

            <div className="p-6 bg-[#0f101a]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-minecraft text-[11px] text-[#38E5FF] bg-black border border-[#38E5FF] px-2 py-1 uppercase shadow-[2px_2px_0_0_#000]">
                  {currentPreview.bloom}
                </span>
                <span className="font-minecraft text-[11px] text-[#27E279] bg-black border border-[#27E279] px-2 py-1 uppercase shadow-[2px_2px_0_0_#000] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                </span>
              </div>

              <p className="font-mono text-sm text-slate-100 mb-5 leading-relaxed bg-[#171926] p-3 border-2 border-black">
                {currentPreview.prompt}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {currentPreview.options.map((opt, i) => (
                  <div
                    key={i}
                    className={'p-3 border-2 border-black font-mono text-xs flex items-center gap-2.5 shadow-[2px_2px_0_0_#000] ' +
                      (i === 0
                        ? 'bg-[#FFD000] text-black font-bold'
                        : 'bg-[#171926] text-slate-200')}
                  >
                    <span className="w-5 h-5 bg-black text-white flex items-center justify-center text-[10px] font-minecraft border border-white/20">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{opt}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-black border-2 border-[#8A5CFF] font-mono text-xs text-[#d3bfff] shadow-[3px_3px_0_0_#8A5CFF]">
                <strong className="font-minecraft text-[#FFD000] uppercase">AI RATIONALE: </strong>
                {currentPreview.answer}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Popup */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-4xl pixel-box bg-[#171926] p-0 overflow-hidden">
            <div className="flex items-center justify-between p-3.5 bg-black border-b-2 border-black">
              <span className="font-minecraft text-xs text-white flex items-center gap-2 uppercase">
                <Video className="w-4 h-4 text-[#38E5FF]" /> [ MISSION BRIEFING: PLATFORM DEMO ]
              </span>
              <button
                onClick={() => setShowVideoModal(false)}
                className="pixel-btn p-1 bg-[#FF4582] text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <QuizNovaVideoPlayer onClose={() => setShowVideoModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}