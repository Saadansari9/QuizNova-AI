'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  ShieldAlert,
  WifiOff,
  Cpu,
  GraduationCap,
  Layers,
  Award,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Terminal,
  Zap,
} from 'lucide-react';

interface Scene {
  id: number;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  voiceScript: string;
  duration: number; // in seconds
  visualType: 'what_is' | 'how_it_works' | 'benefits' | 'live_demo';
  bulletPoints: { title: string; desc: string; icon: string }[];
  metrics: { label: string; value: string; color: string }[];
}

const SCENES: Scene[] = [
  {
    id: 0,
    badge: 'CHAPTER 1: INTRODUCTION',
    badgeColor: 'bg-[#FF4582] text-white',
    title: 'WHAT IS QUIZNOVA-AI?',
    subtitle: 'An AI-Powered Cognitive Assessment System aligned with Bloom\'s Taxonomy & Maharashtra State Board (SSC/HSC Class 9-12).',
    voiceScript: 'Welcome to QuizNova AI. A next-generation academic examination platform combining Google Gemini AI question synthesis, Bloom\'s Taxonomy cognitive analytics, and zero-latency offline exam execution.',
    duration: 14,
    visualType: 'what_is',
    bulletPoints: [
      {
        title: 'Cognitive Diagnostic Engine',
        desc: 'Questions categorized across all 6 Bloom levels: Remembering, Understanding, Applying, Analyzing, Evaluating, Creating.',
        icon: 'layers',
      },
      {
        title: 'Curriculum-Aligned Syllabus',
        desc: 'Pre-loaded with official Balbharati Class 9-12 textbooks and 36 years of Maharashtra Board past papers (1990-2026).',
        icon: 'book',
      },
      {
        title: 'Hybrid Dual-Mode Execution',
        desc: 'Seamlessly switches between high-speed cloud servers and 100% air-gapped offline test player in school computer labs.',
        icon: 'wifi_off',
      },
    ],
    metrics: [
      { label: 'COGNITIVE LEVELS', value: '6 / 6', color: 'text-[#38E5FF]' },
      { label: 'SYLLABUS COVERAGE', value: 'CLASS 9-12', color: 'text-[#FFD000]' },
      { label: 'AI MODEL', value: 'GEMINI 1.5 FLASH', color: 'text-[#27E279]' },
    ],
  },
  {
    id: 1,
    badge: 'CHAPTER 2: ARCHITECTURE & WORKFLOW',
    badgeColor: 'bg-[#8A5CFF] text-white',
    title: 'HOW QUIZNOVA-AI WORKS',
    subtitle: 'From AI prompt to student test completion in 3 autonomous, fault-tolerant steps.',
    voiceScript: 'Here is how it works. First, teachers synthesize complete quizzes in seconds using Gemini AI. Second, exams export into encrypted offline bundles. Third, students take exams under automated anti-cheating supervision.',
    duration: 16,
    visualType: 'how_it_works',
    bulletPoints: [
      {
        title: 'Step 1: AI Question Forge',
        desc: 'Teachers input topic & difficulty. Gemini AI synthesizes balanced MCQs with rationale, points, and Bloom taxonomy tags in 5s.',
        icon: 'cpu',
      },
      {
        title: 'Step 2: Encrypted Offline Bundles',
        desc: '1-Click export to standalone offline assessment packages. Students take exams with zero internet latency in remote areas.',
        icon: 'wifi_off',
      },
      {
        title: 'Step 3: Web Proctoring Supervision',
        desc: 'Fullscreen lockdown, tab-switch interception, and live webcam AI telemetry detect violations in real-time.',
        icon: 'shield',
      },
    ],
    metrics: [
      { label: 'SYNTHESIS TIME', value: '< 5 SEC', color: 'text-[#38E5FF]' },
      { label: 'ANTI-CHEAT STRIKES', value: '3 MAX', color: 'text-[#FF4582]' },
      { label: 'OFFLINE CACHE', value: 'INDEXEDDB', color: 'text-[#FFD000]' },
    ],
  },
  {
    id: 2,
    badge: 'CHAPTER 3: CORE ADVANTAGES',
    badgeColor: 'bg-[#27E279] text-black',
    title: 'PROVEN BENEFITS & IMPACT',
    subtitle: 'Why schools, universities, and students trust QuizNova-AI for fair, deep learning evaluation.',
    voiceScript: 'The key benefits: Students gain deep conceptual clarity instead of rote memorization. Teachers save hours on exam preparation. Schools eliminate cheating while operating smoothly even during total internet blackouts.',
    duration: 15,
    visualType: 'benefits',
    bulletPoints: [
      {
        title: 'No More Rote Memorization',
        desc: 'Bloom\'s Taxonomy diagnostic radar identifies exactly whether student struggles at remembering facts or analytical reasoning.',
        icon: 'award',
      },
      {
        title: 'Zero Failure Internet Resiliency',
        desc: 'Exams never cancel due to Wi-Fi drops. Cached attempts automatically synchronize once network reconnects.',
        icon: 'zap',
      },
      {
        title: 'Institutional Grade Analytics',
        desc: 'Educators receive instant cohort accuracy distributions, pass percentages, and syllabus weakness heatmaps.',
        icon: 'terminal',
      },
    ],
    metrics: [
      { label: 'EXAM CREATION SPEED', value: '10X FASTER', color: 'text-[#38E5FF]' },
      { label: 'INTERNET DEPENDENCY', value: '0% (OFFLINE)', color: 'text-[#27E279]' },
      { label: 'DIAGNOSTIC ACCURACY', value: '99.4%', color: 'text-[#FFD000]' },
    ],
  },
  {
    id: 3,
    badge: 'CHAPTER 4: READY TO DEPLOY',
    badgeColor: 'bg-[#FFD000] text-black',
    title: 'EXPERIENCE QUIZNOVA-AI NOW',
    subtitle: 'Launch your interactive academic journey as a Student or create tests as an Educator.',
    voiceScript: 'Ready to start? Log in as a student to test your knowledge or access the educator console to create your first AI assessment today.',
    duration: 12,
    visualType: 'live_demo',
    bulletPoints: [
      {
        title: 'Student Quest Portal',
        desc: 'Take timed exams, read Balbharati textbooks, solve past board papers, and view dynamic score reports.',
        icon: 'graduation',
      },
      {
        title: 'Educator Command Studio',
        desc: 'Design quizzes manually or via Google Gemini AI, manage classroom rosters, and download offline test kits.',
        icon: 'cpu',
      },
      {
        title: '1-Click Quick Demo Login',
        desc: 'Instant access without passwords using built-in verified student and teacher profiles.',
        icon: 'zap',
      },
    ],
    metrics: [
      { label: 'ONLINE DEPLOYMENT', value: 'VERCEL LIVE', color: 'text-[#27E279]' },
      { label: 'STUDENT ACCESS', value: 'FREE 1-CLICK', color: 'text-[#38E5FF]' },
      { label: 'READY TO USE', value: 'INSTANT', color: 'text-[#FFD000]' },
    ],
  },
];

export function QuizNovaVideoPlayer({
  onClose,
  initialUnmuted = false,
}: {
  onClose?: () => void;
  initialUnmuted?: boolean;
}) {
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(!initialUnmuted);
  const [elapsedSceneSec, setElapsedSceneSec] = useState(0);

  const scene = SCENES[currentSceneIdx];
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Play voice narration using browser SpeechSynthesis
  const speakText = useCallback(
    (text: string) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      if (isMuted) return;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.05;
      utterance.lang = 'en-US';

      // Pick high quality voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(
        (v) => (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('David')) && v.lang.startsWith('en')
      );
      if (preferred) utterance.voice = preferred;

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [isMuted]
  );

  // Handle scene change and voice narration
  useEffect(() => {
    setElapsedSceneSec(0);
    if (isPlaying && !isMuted) {
      speakText(scene.voiceScript);
    }
  }, [currentSceneIdx, isPlaying, isMuted, scene.voiceScript, speakText]);

  // Main Scene Playhead Timer
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setElapsedSceneSec((prev) => {
        if (prev + 1 >= scene.duration) {
          // Advance to next scene
          setCurrentSceneIdx((curr) => (curr + 1) % SCENES.length);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, scene.duration]);

  const togglePlay = () => {
    setIsPlaying((prev) => {
      const next = !prev;
      if (!next && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      return next;
    });
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (!next) {
        speakText(scene.voiceScript);
      } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      return next;
    });
  };

  const restartVideo = () => {
    setCurrentSceneIdx(0);
    setElapsedSceneSec(0);
    setIsPlaying(true);
  };

  const sceneProgressPercent = Math.min(100, Math.round((elapsedSceneSec / scene.duration) * 100));

  return (
    <div className="relative w-full min-h-[440px] md:aspect-video bg-[#0c0d14] border-4 border-black text-white font-minecraft flex flex-col justify-between overflow-hidden shadow-[8px_8px_0_0_#000] select-none">
      {/* Background Animated Retro Grid and Cyber Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38E5FF_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 pointer-events-none"></div>

      {/* Top HUD Bar */}
      <div className="relative z-20 flex items-center justify-between p-3 sm:p-4 border-b-2 border-black bg-[#121420]/90 backdrop-blur-sm gap-2">
        <div className="flex items-center gap-2 sm:gap-3 truncate">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF4582] animate-ping shrink-0"></span>
          <span className="text-[10px] sm:text-xs text-[#38E5FF] tracking-wider uppercase flex items-center gap-1.5 font-bold truncate">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD000] shrink-0" /> QUIZNOVA-AI BRIEFING
          </span>
          <span className={`hidden md:inline-block px-2 py-0.5 text-[9px] uppercase font-bold border border-black shadow-[2px_2px_0_0_#000] shrink-0 ${scene.badgeColor}`}>
            {scene.badge}
          </span>
        </div>

        {/* Scene Selection Tabs + Close */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {SCENES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSceneIdx(idx)}
              className={`px-1.5 sm:px-2 py-1 text-[8px] sm:text-[9px] uppercase border border-black transition-all cursor-pointer ${
                currentSceneIdx === idx
                  ? 'bg-[#FFD000] text-black font-black shadow-[2px_2px_0_0_#000]'
                  : 'bg-[#171926] text-slate-400 hover:text-white'
              }`}
            >
              {idx === 0 ? '1. INTRO' : idx === 1 ? '2. WORKING' : idx === 2 ? '3. BENEFITS' : '4. DEMO'}
            </button>
          ))}
          {onClose && (
            <button
              onClick={onClose}
              className="pixel-btn p-1 bg-[#FF4582] text-white hover:bg-red-600 transition-colors cursor-pointer ml-1"
              title="Close Player"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Content Stage */}
      <div className="relative z-10 flex-1 px-4 sm:px-8 py-4 sm:py-6 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Animated Header */}
          <div className="mb-4 text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] sm:text-xs font-mono text-[#38E5FF] bg-black px-2 py-0.5 border border-[#38E5FF]/40 inline-flex items-center gap-1">
                <Terminal className="w-3 h-3 text-[#38E5FF]" /> AI TELEMETRY ENGINE
              </span>
              <span className="text-[10px] font-mono text-[#27E279] bg-black px-2 py-0.5 border border-[#27E279]/40">
                ACTIVE
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-white tracking-wide uppercase drop-shadow-[2px_2px_0_#000]">
              {scene.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {scene.subtitle}
            </p>
          </div>

          {/* Dynamic Interactive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 my-3 text-left">
            {scene.bulletPoints.map((item, bIdx) => (
              <div
                key={bIdx}
                className="pixel-box bg-[#171926]/95 p-3.5 sm:p-4 border-2 border-black shadow-[4px_4px_0_0_#000] hover:border-[#38E5FF] transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#FFD000] text-black border border-black shadow-[1px_1px_0_0_#000]">
                    {item.icon === 'layers' && <Layers className="w-4 h-4" />}
                    {item.icon === 'book' && <BookOpen className="w-4 h-4" />}
                    {item.icon === 'wifi_off' && <WifiOff className="w-4 h-4" />}
                    {item.icon === 'cpu' && <Cpu className="w-4 h-4" />}
                    {item.icon === 'shield' && <ShieldAlert className="w-4 h-4" />}
                    {item.icon === 'award' && <Award className="w-4 h-4" />}
                    {item.icon === 'zap' && <Zap className="w-4 h-4" />}
                    {item.icon === 'terminal' && <Terminal className="w-4 h-4" />}
                    {item.icon === 'graduation' && <GraduationCap className="w-4 h-4" />}
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-white uppercase truncate">
                    {item.title}
                  </h3>
                </div>
                <p className="font-mono text-[10px] sm:text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Real-time Metrics Ticker */}
          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-3 bg-black/80 border-2 border-black">
            {scene.metrics.map((m, mIdx) => (
              <div key={mIdx} className="text-center">
                <span className="block text-[8px] sm:text-[10px] text-slate-400 uppercase font-mono">{m.label}</span>
                <span className={`text-xs sm:text-base font-black ${m.color} tracking-wider`}>{m.value}</span>
              </div>
            ))}
          </div>

          {/* Quick Call to Action on final slide */}
          {scene.visualType === 'live_demo' && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/login"
                className="pixel-btn px-4 py-2 bg-[#FFD000] text-black font-minecraft text-xs uppercase flex items-center gap-1.5 shadow-[3px_3px_0_0_#000]"
              >
                <GraduationCap className="w-4 h-4" /> [ LOG IN AS STUDENT ]
              </Link>
              <Link
                href="/dashboard/educator/create"
                className="pixel-btn px-4 py-2 bg-[#8A5CFF] text-white font-minecraft text-xs uppercase flex items-center gap-1.5 shadow-[3px_3px_0_0_#000]"
              >
                <Cpu className="w-4 h-4" /> [ EDUCATOR AI STUDIO ]
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Cockpit & Scrubbing Timeline Bar */}
      <div className="relative z-20 border-t-2 border-black bg-[#121420]/95 p-3">
        {/* Progress Timeline Scrubber */}
        <div className="w-full bg-slate-900 h-2 border border-black mb-2.5 overflow-hidden relative cursor-pointer">
          <div
            className="h-full bg-gradient-to-r from-[#38E5FF] via-[#FFD000] to-[#27E279] transition-all duration-300"
            style={{
              width: `${((currentSceneIdx * 25) + (sceneProgressPercent * 0.25))}%`,
            }}
          ></div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={togglePlay}
              className="pixel-btn p-1.5 bg-[#FFD000] text-black shadow-[2px_2px_0_0_#000] cursor-pointer"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black" />}
            </button>

            <button
              onClick={restartVideo}
              className="pixel-btn p-1.5 bg-[#171926] text-white hover:text-[#38E5FF] shadow-[2px_2px_0_0_#000] cursor-pointer"
              title="Restart Video"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={toggleMute}
              className={`pixel-btn p-1.5 shadow-[2px_2px_0_0_#000] cursor-pointer flex items-center gap-1 text-[10px] ${
                isMuted ? 'bg-[#171926] text-slate-400' : 'bg-[#27E279] text-black font-bold'
              }`}
              title={isMuted ? 'Unmute AI Narrator' : 'Mute Narrator'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isMuted ? 'UNMUTE NARRATOR' : 'NARRATING LIVE'}</span>
            </button>
          </div>

          <div className="font-mono text-[10px] sm:text-xs text-slate-400">
            SCENE {currentSceneIdx + 1} OF {SCENES.length} · <span className="text-[#38E5FF]">{elapsedSceneSec}s</span> / {scene.duration}s
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSceneIdx((prev) => (prev + 1) % SCENES.length)}
              className="pixel-btn px-2.5 py-1 bg-[#38E5FF] text-black font-bold text-[10px] uppercase shadow-[2px_2px_0_0_#000] cursor-pointer flex items-center gap-1"
            >
              <span>NEXT</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
