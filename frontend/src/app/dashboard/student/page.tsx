'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import { Quiz, StudentAnalytics, OfflinePackage } from '@/types/quiz';
import { saveQuizForOffline, getOfflineQuizzes } from '@/lib/offlineStorage';
import { getAllQuizzes, getStudentAnalytics, findQuizById } from '@/lib/quizStorage';
import {
  GraduationCap,
  Clock,
  WifiOff,
  CheckCircle,
  ArrowRight,
  Award,
  BookOpen,
  Sparkles,
  Download,
  Check,
  BarChart2,
  Zap,
  Flame,
  Filter,
  Compass,
  FlaskConical,
  Briefcase,
  Palette,
  Layers,
  FileText,
  Gamepad2,
  Trophy,
} from 'lucide-react';

export default function StudentDashboard() {
  const { user } = useAuth();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [analytics, setAnalytics] = useState<StudentAnalytics | null>(null);
  const [offlineSavedIds, setOfflineSavedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Maharashtra Board Compartment Filter States
  const [selectedStandard, setSelectedStandard] = useState<string>('all');
  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  const fetchData = async () => {
    try {
      setLoading(true);
      const [qRes, aRes] = await Promise.all([
        api.get('/quiz/student/available'),
        api.get('/quiz/analytics/student'),
      ]);

      if (qRes.data?.success && qRes.data?.quizzes?.length > 0) {
        setQuizzes(qRes.data.quizzes);
      } else {
        setQuizzes(getAllQuizzes());
      }
      if (aRes.data?.success && aRes.data?.stats) {
        setAnalytics(aRes.data);
      } else {
        setAnalytics(getStudentAnalytics());
      }

      const saved = getOfflineQuizzes().map((p) => p.quizId);
      setOfflineSavedIds(saved);
    } catch {
      // Offline / serverless fallback
      setQuizzes(getAllQuizzes());
      setAnalytics(getStudentAnalytics());
      try {
        const saved = getOfflineQuizzes().map((p) => p.quizId);
        setOfflineSavedIds(saved);
      } catch {
        // ignore
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSaveForOffline = async (quizId: string) => {
    try {
      setDownloadingId(quizId);
      let pkg: OfflinePackage | null = null;
      try {
        const res = await api.get('/quiz/' + quizId + '/export-offline');
        if (res.data?.questions) {
          pkg = res.data as OfflinePackage;
        }
      } catch {
        // Fallback to local catalog
      }

      if (!pkg) {
        const localQ = findQuizById(quizId);
        if (localQ) {
          pkg = {
            packageVersion: '1.0.0',
            quizId: localQ.id,
            title: localQ.title,
            description: localQ.description,
            topic: localQ.topic,
            difficulty: localQ.difficulty,
            durationMinutes: localQ.durationMinutes,
            totalMarks: localQ.totalMarks,
            passPercentage: localQ.passPercentage,
            exportedAt: new Date().toISOString(),
            questions: (localQ.questions || []).map((q, idx) => ({
              id: q.id || `q_${idx}`,
              questionText: q.questionText,
              questionType: q.questionType,
              options: q.options,
              points: q.points || 2,
              bloomLevel: q.bloomLevel || 'Understanding',
            })),
            checksum: 'ck_' + Date.now().toString(36),
          };
        }
      }

      if (pkg) {
        saveQuizForOffline(pkg);
        setOfflineSavedIds((prev) => Array.from(new Set([...prev, quizId])));
      } else {
        alert('Could not export quiz for offline mode.');
      }
    } catch (err) {
      alert('Failed to save quiz for offline mode.');
    } finally {
      setDownloadingId(null);
    }
  };

  // Filter quizzes based on Standard, Stream, and Subject
  const filteredQuizzes = useMemo(() => {
    return quizzes.filter((quiz) => {
      // Standard filter
      if (selectedStandard !== 'all') {
        if (!quiz.standard || !quiz.standard.toLowerCase().includes(selectedStandard.toLowerCase().replace(' (ssc)', '').replace(' (hsc)', ''))) {
          return false;
        }
      }

      // Stream filter
      if (selectedStream !== 'all') {
        if (quiz.stream && quiz.stream.toLowerCase() !== selectedStream.toLowerCase()) {
          return false;
        }
      }

      // Subject filter
      if (selectedSubject !== 'all') {
        if (quiz.subject && quiz.subject.toLowerCase() !== selectedSubject.toLowerCase()) {
          return false;
        }
      }

      return true;
    });
  }, [quizzes, selectedStandard, selectedStream, selectedSubject]);

  // Unique subjects available in current view
  const availableSubjects = useMemo(() => {
    const subs = new Set<string>();
    quizzes.forEach((q) => {
      if (q.subject) subs.add(q.subject);
    });
    return Array.from(subs);
  }, [quizzes]);

  return (
    <ProtectedRoute allowedRoles={['Student']}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Student Welcome Banner in Retro Gaming Cabinet Style */}
        <div className="pixel-box bg-[#171926] p-0 mb-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-8 p-6 sm:p-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFD000] text-black font-minecraft text-[10px] uppercase border-2 border-black shadow-[2px_2px_0_0_#000] mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-black" /> [ MAHARASHTRA STATE BOARD ARENA ]
              </span>
              <h1 className="text-2xl sm:text-3xl font-minecraft font-black text-white tracking-tight uppercase">
                WELCOME BACK, {user?.name || 'PLAYER 1'}!
              </h1>
              <p className="font-mono text-xs text-slate-300 mt-2 max-w-xl leading-relaxed">
                Balbharati textbook curriculum exams for Class 9, 10 (SSC), 11 (HSC), and 12 (HSC) across Science, Commerce, and Arts streams with instant AI Bloom diagnostics.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/dashboard/student/ai-grader"
                  className="pixel-btn px-3.5 py-2 bg-[#FFD000] text-black font-minecraft text-xs uppercase flex items-center gap-2 cursor-pointer shadow-[3px_3px_0_0_#000] hover:scale-105 transition-transform"
                >
                  <Sparkles className="w-3.5 h-3.5 text-black" />
                  <span>[ 🤖 AI THEORY & DESCRIPTIVE GRADER ]</span>
                </Link>
                <Link
                  href="/dashboard/student/offline"
                  className="pixel-btn px-3.5 py-2 bg-[#27E279] text-black font-minecraft text-xs uppercase flex items-center gap-2 cursor-pointer"
                >
                  <WifiOff className="w-3.5 h-3.5 text-black" />
                  <span>[ OFFLINE SYNC: {offlineSavedIds.length} SAVED ]</span>
                </Link>
                <div className="px-3 py-2 bg-[#0c0d14] border-2 border-black font-minecraft text-xs text-[#FFD000] flex items-center gap-1.5 shadow-[2px_2px_0_0_#000]">
                  <Flame className="w-3.5 h-3.5 text-[#FF4582]" />
                  <span>SYLLABUS EDITION 2026</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block md:col-span-4 h-full min-h-[220px] relative border-l-4 border-black overflow-hidden bg-black">
              <img
                src="/images/student_quiz_fun.jpg"
                alt="Student quiz winner"
                className="w-full h-full object-cover object-center opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* AI Flagship Suite Banner */}
        <div className="mb-6 pixel-box bg-gradient-to-r from-[#171926] via-[#1a1833] to-[#25152b] p-4 sm:p-5 border-2 border-[#FFD000] shadow-[4px_4px_0_0_#000] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="p-2.5 bg-[#FFD000] text-black border-2 border-black shadow-[2px_2px_0_0_#000] shrink-0">
              <Sparkles className="w-6 h-6 fill-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-minecraft text-xs text-[#FFD000] uppercase font-bold tracking-wider">
                  [ NEW AI ENGINE ]
                </span>
                <span className="bg-[#FF4582] text-white px-2 py-0.5 font-minecraft text-[9px] uppercase border border-black shadow-[1px_1px_0_0_#000]">
                  GEMINI 1.5 FLASH
                </span>
              </div>
              <h3 className="font-minecraft text-sm sm:text-base font-black text-white uppercase mt-0.5">
                AI THEORY & SUBJECTIVE ANSWER EVALUATOR
              </h3>
              <p className="font-mono text-[11px] text-slate-300 mt-0.5">
                Paste any Maharashtra State Board descriptive answer (Science, History, Accounts, Economics, Marathi) for instant rubric marks, key concepts check, and model answers.
              </p>
            </div>
          </div>
          <Link
            href="/dashboard/student/ai-grader"
            className="pixel-btn px-4 py-2.5 bg-[#FFD000] text-black font-minecraft text-xs uppercase flex items-center gap-2 shrink-0 shadow-[3px_3px_0_0_#000] hover:bg-[#27E279] transition-colors cursor-pointer"
          >
            <span>LAUNCH AI GRADER</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Academic Department Portals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button
            type="button"
            onClick={() => {
              setSelectedStandard('all');
              setSelectedStream('all');
              setSelectedSubject('all');
              const el = document.getElementById('available-exams');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                el.classList.add('ring-4', 'ring-[#38E5FF]', 'shadow-[0_0_24px_#38E5FF]');
                setTimeout(() => el.classList.remove('ring-4', 'ring-[#38E5FF]', 'shadow-[0_0_24px_#38E5FF]'), 2000);
              }
            }}
            className="pixel-box bg-[#1a1833] p-4 text-left hover:bg-[#25224a] transition-all cursor-pointer group border-2 border-[#38E5FF] shadow-[4px_4px_0_0_#000] w-full"
            title="Click to view and jump to available examinations"
          >
            <div className="flex items-center gap-2 mb-1 text-[#38E5FF] font-minecraft text-xs uppercase">
              <GraduationCap className="w-4 h-4 text-[#38E5FF]" />
              <span>DEPT 1</span>
            </div>
            <h3 className="font-minecraft text-sm font-bold text-white uppercase group-hover:text-[#38E5FF] transition-colors">
              EXAMS & QUIZZES
            </h3>
            <p className="text-[10px] font-mono text-slate-300 mt-0.5">Balbharati textbook chapter tests</p>
            <span className="inline-flex items-center gap-1 mt-2 font-minecraft text-[10px] text-[#38E5FF] group-hover:text-white transition-colors">
              VIEW EXAMS ↓
            </span>
          </button>

          <Link
            href="/pyqs"
            className="pixel-box bg-[#1f1a14] p-4 text-left hover:bg-[#2a2219] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-1 text-[#FFD000] font-minecraft text-xs uppercase">
              <FileText className="w-4 h-4" />
              <span>DEPT 2</span>
            </div>
            <h3 className="font-minecraft text-sm font-bold text-white uppercase group-hover:text-[#FFD000] transition-colors">
              BOARD PYQS (1990-2026)
            </h3>
            <p className="text-[10px] font-mono text-slate-300 mt-0.5">36 Years Descriptive Papers</p>
            <span className="inline-flex items-center gap-1 mt-2 font-minecraft text-[10px] text-[#FFD000]">
              VIEW PAPERS →
            </span>
          </Link>

          <Link
            href="/dashboard/student/formulas"
            className="pixel-box bg-[#102126] p-4 text-left hover:bg-[#152e35] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-1 text-[#38E5FF] font-minecraft text-xs uppercase">
              <Zap className="w-4 h-4" />
              <span>DEPT 3</span>
            </div>
            <h3 className="font-minecraft text-sm font-bold text-white uppercase group-hover:text-[#38E5FF] transition-colors">
              FORMULA SHEETS
            </h3>
            <p className="text-[10px] font-mono text-slate-300 mt-0.5">Science, Commerce, Arts Formulas</p>
            <span className="inline-flex items-center gap-1 mt-2 font-minecraft text-[10px] text-[#38E5FF]">
              REVISE FORMULAS →
            </span>
          </Link>

          <Link
            href="/textbooks"
            className="pixel-box bg-[#10241b] p-4 text-left hover:bg-[#173327] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-1 text-[#27E279] font-minecraft text-xs uppercase">
              <BookOpen className="w-4 h-4" />
              <span>DEPT 4</span>
            </div>
            <h3 className="font-minecraft text-sm font-bold text-white uppercase group-hover:text-[#27E279] transition-colors">
              TEXTBOOKS
            </h3>
            <p className="text-[10px] font-mono text-slate-300 mt-0.5">41+ Official Balbharati Books (9-12)</p>
            <span className="inline-flex items-center gap-1 mt-2 font-minecraft text-[10px] text-[#27E279]">
              READ BOOKS →
            </span>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="pixel-box bg-[#171926] p-5">
            <div className="flex items-center justify-between font-minecraft text-[11px] text-slate-400 uppercase">
              <span>TESTS COMPLETED</span>
              <BookOpen className="w-4 h-4 text-[#8A5CFF]" />
            </div>
            <p className="font-minecraft text-3xl font-black text-white mt-2">{analytics?.stats.totalAttempted || 0}</p>
            <p className="font-mono text-[10px] text-[#8A5CFF] mt-1">Assessed test sets</p>
          </div>

          <div className="pixel-box bg-[#171926] p-5">
            <div className="flex items-center justify-between font-minecraft text-[11px] text-slate-400 uppercase">
              <span>AVERAGE ACCURACY</span>
              <BarChart2 className="w-4 h-4 text-[#38E5FF]" />
            </div>
            <p className="font-minecraft text-3xl font-black text-[#38E5FF] mt-2">{analytics?.stats.averageScore || 0}%</p>
            <p className="font-mono text-[10px] text-[#38E5FF] mt-1">Cumulative score level</p>
          </div>

          <div className="pixel-box bg-[#171926] p-5">
            <div className="flex items-center justify-between font-minecraft text-[11px] text-slate-400 uppercase">
              <span>PASSED ASSESSMENTS</span>
              <Trophy className="w-4 h-4 text-[#27E279]" />
            </div>
            <p className="font-minecraft text-3xl font-black text-[#27E279] mt-2">{analytics?.stats.passedAttempts || 0}</p>
            <p className="font-mono text-[10px] text-[#27E279] mt-1">Passing target satisfied</p>
          </div>
        </div>

        {/* ==================================================== */}
        {/* MAHARASHTRA STATE BOARD COMPARTMENTS NAVIGATOR */}
        {/* ==================================================== */}
        <div className="pixel-box bg-[#171926] p-6 mb-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-black">
            <div>
              <span className="inline-flex items-center gap-1.5 font-minecraft text-xs text-[#38E5FF] uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4" /> [ MAHARASHTRA STATE BOARD COMPARTMENTS ]
              </span>
              <h2 className="text-xl font-minecraft font-black text-white uppercase">SELECT YOUR ACADEMIC STANDARD & STREAM</h2>
            </div>
            <span className="font-minecraft text-xs text-black bg-[#FFD000] px-3 py-1.5 border-2 border-black shadow-[2px_2px_0_0_#000] uppercase font-bold">
              {filteredQuizzes.length} QUIZZES FOUND
            </span>
          </div>

          {/* 1. Standard / Class Selector */}
          <div className="mt-5">
            <label className="block font-minecraft text-xs text-slate-300 uppercase mb-2.5">
              1. CHOOSE STANDARD (CLASS 9 TO 12)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[
                { id: 'all', label: '🌟 ALL CLASSES' },
                { id: 'Class 9', label: '📘 CLASS 9' },
                { id: 'Class 10', label: '🏆 CLASS 10 (SSC)' },
                { id: 'Class 11', label: '🎓 CLASS 11 (HSC)' },
                { id: 'Class 12', label: '🏅 CLASS 12 (HSC)' },
              ].map((std) => (
                <button
                  key={std.id}
                  onClick={() => {
                    setSelectedStandard(std.id);
                    if (std.id === 'Class 9' || std.id === 'Class 10') {
                      setSelectedStream('all');
                    }
                  }}
                  className={'px-3 py-2 border-2 border-black font-minecraft text-xs uppercase transition-all cursor-pointer text-center ' +
                    (selectedStandard === std.id
                      ? 'bg-[#FFD000] text-black font-bold shadow-[3px_3px_0_0_#000]'
                      : 'bg-[#10121d] text-slate-300 hover:bg-[#1b1e30]')}
                >
                  {std.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Stream Compartment Selector */}
          <div className="mt-5 pt-4 border-t-2 border-black">
            <label className="block font-minecraft text-xs text-slate-300 uppercase mb-2.5 flex items-center justify-between">
              <span>2. STREAM COMPARTMENT (FOR CLASSES 11 & 12)</span>
              {selectedStandard === 'Class 9' || selectedStandard === 'Class 10' ? (
                <span className="font-mono text-[10px] text-[#FFD000]">(General Core Curriculum for 9th & 10th)</span>
              ) : null}
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'all', label: '📚 ALL STREAMS', icon: Layers, activeBg: 'bg-[#FFD000] text-black' },
                { id: 'Science', label: '🧪 SCIENCE', icon: FlaskConical, activeBg: 'bg-[#38E5FF] text-black' },
                { id: 'Commerce', label: '📊 COMMERCE', icon: Briefcase, activeBg: 'bg-[#FFD000] text-black' },
                { id: 'Arts', label: '🎨 ARTS', icon: Palette, activeBg: 'bg-[#FF4582] text-white' },
              ].map((st) => {
                const IconComponent = st.icon;
                const isSelected = selectedStream === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => setSelectedStream(st.id)}
                    className={'p-3 border-2 border-black font-minecraft text-xs uppercase text-left transition-all cursor-pointer flex items-center gap-2.5 ' +
                      (isSelected
                        ? `${st.activeBg} font-bold shadow-[3px_3px_0_0_#000]`
                        : 'bg-[#10121d] text-slate-300 hover:bg-[#1b1e30]')}
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    <span>{st.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Subject Quick Filter Pills */}
          {availableSubjects.length > 0 && (
            <div className="mt-4 pt-3 flex flex-wrap items-center gap-2">
              <span className="font-minecraft text-[10px] text-slate-400 uppercase mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#FFD000]" /> SUBJECT:
              </span>
              <button
                onClick={() => setSelectedSubject('all')}
                className={'px-2.5 py-1 font-minecraft text-[10px] uppercase border-2 border-black transition-colors cursor-pointer ' +
                  (selectedSubject === 'all'
                    ? 'bg-[#38E5FF] text-black font-bold shadow-[2px_2px_0_0_#000]'
                    : 'bg-[#10121d] text-slate-400 hover:text-white')}
              >
                ALL SUBJECTS
              </button>
              {availableSubjects.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={'px-2.5 py-1 font-minecraft text-[10px] uppercase border-2 border-black transition-colors cursor-pointer ' +
                    (selectedSubject === sub
                      ? 'bg-[#38E5FF] text-black font-bold shadow-[2px_2px_0_0_#000]'
                      : 'bg-[#10121d] text-slate-400 hover:text-white')}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quizzes List */}
        <div id="available-exams" className="mb-8 text-left scroll-mt-24 transition-all duration-300 p-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-minecraft text-base sm:text-lg font-bold text-white flex items-center gap-2 uppercase">
              <Zap className="w-5 h-5 text-[#38E5FF]" />
              <span>AVAILABLE EXAMINATIONS ({filteredQuizzes.length})</span>
            </h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="pixel-box bg-[#171926] p-6 animate-pulse">
                  <div className="h-4 bg-slate-800 rounded w-1/3 mb-4"></div>
                  <div className="h-6 bg-slate-800 rounded w-2/3 mb-2"></div>
                </div>
              ))}
            </div>
          ) : filteredQuizzes.length === 0 ? (
            <div className="pixel-box bg-[#171926] p-10 text-center">
              <BookOpen className="w-10 h-10 text-[#FFD000] mx-auto mb-3" />
              <p className="font-minecraft text-base font-bold text-white uppercase">NO EXAMS FOUND FOR SELECTED COMPARTMENT</p>
              <p className="font-mono text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Try selecting "All Classes" or "All Streams" above to browse the full Maharashtra State Board catalogue.
              </p>
              <button
                onClick={() => {
                  setSelectedStandard('all');
                  setSelectedStream('all');
                  setSelectedSubject('all');
                }}
                className="mt-4 pixel-btn px-4 py-2 bg-[#FFD000] text-black font-minecraft text-xs uppercase cursor-pointer"
              >
                [ RESET ALL FILTERS ]
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredQuizzes.map((quiz) => {
                const isSaved = offlineSavedIds.includes(quiz.id);
                const isDownloading = downloadingId === quiz.id;
                const pastAttempt = quiz.attempts && quiz.attempts.length > 0 ? quiz.attempts[0] : null;

                return (
                  <div
                    key={quiz.id}
                    className="pixel-box bg-[#171926] p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {quiz.standard && (
                            <span className="font-minecraft text-[10px] uppercase px-2 py-0.5 bg-black text-[#FFD000] border border-black font-bold">
                              {quiz.standard}
                            </span>
                          )}
                          {quiz.stream && (
                            <span className="font-minecraft text-[10px] uppercase px-2 py-0.5 bg-black text-[#38E5FF] border border-black font-bold">
                              {quiz.stream}
                            </span>
                          )}
                          <span className="font-minecraft text-[10px] text-slate-300 bg-black px-2 py-0.5 border border-black">
                            {quiz.topic}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1 font-mono text-xs text-slate-400">
                            <Clock className="w-3.5 h-3.5 text-[#38E5FF]" /> {quiz.durationMinutes}m
                          </span>
                          <span className="font-minecraft text-[10px] uppercase px-2 py-0.5 bg-[#FF4582] text-white border border-black font-bold">
                            {quiz.difficulty}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-minecraft text-base font-bold text-white uppercase leading-snug">
                        {quiz.title}
                      </h3>
                      <p className="font-mono text-xs text-slate-300 mt-1 line-clamp-2">{quiz.description}</p>
                      <p className="font-mono text-[11px] text-slate-500 mt-2">
                        Faculty: <span className="font-semibold text-slate-300">{quiz.educator?.name || 'Maharashtra Board Faculty'}</span>
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t-2 border-black flex items-center justify-between">
                      <div className="font-mono text-xs text-slate-400">
                        {pastAttempt ? (
                          <span className="font-minecraft text-[#38E5FF] font-bold">
                            SCORE: {pastAttempt.score}/{pastAttempt.maxScore} ({pastAttempt.percentage}%)
                          </span>
                        ) : (
                          <span>{quiz._count?.questions || 0} Qs • Pass: {quiz.passPercentage}%</span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {quiz.allowOffline && (
                          <button
                            onClick={() => handleSaveForOffline(quiz.id)}
                            disabled={isSaved || isDownloading}
                            className={'pixel-btn px-3 py-1.5 font-minecraft text-xs uppercase flex items-center gap-1.5 ' +
                              (isSaved
                                ? 'bg-[#27E279] text-black cursor-default'
                                : 'bg-[#10121d] text-slate-200 cursor-pointer')}
                            title={isSaved ? 'Quiz is cached offline' : 'Save quiz to take offline'}
                          >
                            {isDownloading ? (
                              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent animate-spin"></div>
                            ) : isSaved ? (
                              <Check className="w-3.5 h-3.5 text-black" />
                            ) : (
                              <Download className="w-3.5 h-3.5 text-[#38E5FF]" />
                            )}
                            <span>{isSaved ? 'CACHED' : 'SAVE OFFLINE'}</span>
                          </button>
                        )}

                        <Link
                          href={'/quiz/' + quiz.id + '/take'}
                          className="pixel-btn px-4 py-1.5 bg-[#FFD000] text-black font-minecraft text-xs uppercase flex items-center gap-1 cursor-pointer font-bold"
                        >
                          <span>{pastAttempt ? 'RETAKE' : 'START EXAM'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Recent Scorecard History */}
        {analytics?.recentHistory && analytics.recentHistory.length > 0 && (
          <div className="pixel-box bg-[#171926] p-6 text-left">
            <h3 className="font-minecraft text-base font-bold text-white mb-4 flex items-center gap-2 uppercase">
              <Award className="w-4 h-4 text-[#FFD000]" />
              <span>[ YOUR RECENT EXAMINATION ATTEMPTS ]</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b-2 border-black font-minecraft text-slate-400 uppercase text-[10px]">
                    <th className="pb-3">EXAM TITLE</th>
                    <th className="pb-3">TOPIC</th>
                    <th className="pb-3">SCORE</th>
                    <th className="pb-3">OUTCOME</th>
                    <th className="pb-3">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/40 text-slate-300">
                  {analytics.recentHistory.map((att) => (
                    <tr key={att.id} className="hover:bg-black/30">
                      <td className="py-3 font-semibold text-white">{att.quiz.title}</td>
                      <td className="py-3">{att.quiz.topic}</td>
                      <td className="py-3 font-bold text-[#38E5FF]">{att.score} / {att.maxScore} ({att.percentage}%)</td>
                      <td className="py-3">
                        <span className={'px-2 py-0.5 font-minecraft text-[10px] uppercase border border-black ' +
                          (att.isPassed ? 'bg-[#27E279] text-black' : 'bg-[#FF4582] text-white')}>
                          {att.isPassed ? 'PASSED' : 'FAILED'}
                        </span>
                      </td>
                      <td className="py-3">
                        <Link
                          href={'/quiz/' + att.id + '/result/' + att.id}
                          className="font-minecraft text-xs text-[#FFD000] hover:underline flex items-center gap-1 uppercase"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#FFD000]" />
                          <span>AI BREAKDOWN</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}