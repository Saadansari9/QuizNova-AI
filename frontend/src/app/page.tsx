'use client';

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
  Users,
  Star,
  BookOpenCheck,
  Play,
  Video,
  X,
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
    <div className="min-h-[calc(100vh-4rem)] flex flex-col relative overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/15 blur-[130px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-16 z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 shadow-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>AI Bloom Engine • Cryptographic Offline Resilience</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Smart Learning & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300">
                Interactive Quizzes
              </span>
              <br /> For Every Student.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Empower educators to synthesize curriculum-aligned questions in seconds. Let students take tests interactively online or in 100% offline computer labs with zero data loss.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {user ? (
                <Link
                  href={user.role === 'Educator' ? '/dashboard/educator' : '/dashboard/student'}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Go to {user.role} Control Console</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <>
                  <Link
                    href="/register"
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2 text-center"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-300" />
                    <span>Get Started Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="px-6 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold rounded-2xl border border-slate-700/80 backdrop-blur-md transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/30" />
                    <span>Watch Platform Demo</span>
                  </button>
                </>
              )}
            </div>

            {/* Social Proof Avatars & Metric */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  👨‍🎓
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  👩‍🎓
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  🧑‍🏫
                </div>
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="text-white font-bold ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-slate-400 mt-0.5">Empowering classrooms with AI-assisted learning</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Students Image & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/20 group">
              <img
                src="/images/hero_students.jpg"
                alt="Students studying collaboratively with laptops in library"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Play Overlay Button */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="absolute inset-0 flex items-center justify-center group-hover:bg-slate-950/30 transition-all cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/90 text-white flex items-center justify-center shadow-xl shadow-indigo-600/50 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </div>
              </button>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-cyan-400" /> University & School Campus Edition
                  </span>
                  <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live Platform
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Active in university labs, high schools, and independent offline testing centers.
                </p>
              </div>
            </div>

            {/* Floating Pill 1: Winner Badge */}
            <div className="absolute -top-4 -left-4 bg-slate-900/90 border border-purple-500/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 backdrop-blur-xl animate-float">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                🏆
              </div>
              <div>
                <p className="text-[11px] font-bold text-white">100% Bloom Taxonomies</p>
                <p className="text-[9px] text-purple-300">AI-Verified Questions</p>
              </div>
            </div>

            {/* Floating Pill 2: Offline Badge */}
            <div className="absolute -bottom-3 -right-3 bg-slate-900/90 border border-emerald-500/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 backdrop-blur-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <div>
                <p className="text-[11px] font-bold text-white">Zero Latency Offline</p>
                <p className="text-[9px] text-emerald-400">Cryptographic Auto-Sync</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Showcase Section */}
        <div className="mt-20 rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/30 mb-3">
                <Video className="w-3.5 h-3.5" /> Video Demonstration
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                See How QuizNova-AI Works in Action
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                Watch how teachers generate a complete 10-question midterm in under 30 seconds, export encrypted offline bundles, and supervise student proctoring.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Open Video Player</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 aspect-video shadow-2xl group flex items-center justify-center">
                {/* Check if local video exists or show video poster */}
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/images/hero_students.jpg"
                >
                  <source src="/videos/demo.mp4" type="video/mp4" />
                  <source src="/videos/classroom.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video tag.
                </video>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 text-center">
                📁 You can place any video file directly at <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded font-mono">frontend/public/videos/demo.mp4</code>
              </p>
            </div>
          </div>
        </div>

        {/* Real Classroom & Student Spotlight Gallery */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-3 py-1 rounded-full">
              Real-World Learning Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
              Built for Students, Loved by Educators
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-lg mx-auto">
              See how our AI-enabled online & offline examination suite makes learning engaging, fun, and resilient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Cheerful Student Quiz Winner */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-2xl hover:border-indigo-500/40 transition-all flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/student_quiz_fun.jpg"
                  alt="Student girl celebrating winning a quiz on a tablet"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" /> Interactive Gamified Quiz Arena
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Instant AI Feedback & Mastery Badges</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Students receive immediate, encouraging diagnostic feedback on every attempt. Question-by-question rationales explain the underlying concepts clearly, turning test-taking into an inspiring learning moment.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">✨ Diagnostic AI Explanations</span>
                  <span className="text-indigo-400 font-bold">100% Concept Retention</span>
                </div>
              </div>
            </div>

            {/* Card 2: Classroom Teacher Guiding Kids */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-2xl hover:border-purple-500/40 transition-all flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/educator_teaching_kids.jpg"
                  alt="Teacher guiding young students on laptops in classroom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-bold text-purple-300 flex items-center gap-1.5">
                  <BookOpenCheck className="w-3.5 h-3.5 text-purple-400" /> Classroom AI Exam Forge
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Effortless Curriculum & Question Authoring</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Educators generate tailored assessments aligned with curriculum difficulty in under 30 seconds. Export encrypted offline bundles with one click to run exams anywhere without needing reliable Wi-Fi.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">🚀 1-Click Offline Export</span>
                  <span className="text-purple-400 font-bold">Save 5+ Hours Weekly</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive AI Simulation Terminal */}
        <div className="mt-20 max-w-3xl w-full mx-auto text-left">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Try The Question Generator</span>
            <h3 className="text-xl font-bold text-white mt-1">Experience AI Question Synthesis in Real Time</h3>
          </div>

          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
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
      </section>

      {/* Video Modal Popup */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Video className="w-4 h-4 text-cyan-400" /> Platform Overview Video
              </span>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster="/images/hero_students.jpg"
              >
                <source src="/videos/demo.mp4" type="video/mp4" />
                <source src="/videos/classroom.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}