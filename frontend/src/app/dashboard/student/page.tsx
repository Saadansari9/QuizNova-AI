'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import { Quiz, StudentAnalytics, OfflinePackage } from '@/types/quiz';
import { saveQuizForOffline, getOfflineQuizzes } from '@/lib/offlineStorage';
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

      if (qRes.data.success) setQuizzes(qRes.data.quizzes || []);
      if (aRes.data.success) setAnalytics(aRes.data);

      const saved = getOfflineQuizzes().map((p) => p.quizId);
      setOfflineSavedIds(saved);
    } catch (err) {
      console.error('Failed to load student data:', err);
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
      const res = await api.get('/quiz/' + quizId + '/export-offline');
      if (res.data) {
        saveQuizForOffline(res.data as OfflinePackage);
        setOfflineSavedIds([...offlineSavedIds, quizId]);
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
        {/* Student Welcome Banner with Student Photo */}
        <div className="rounded-3xl border border-indigo-800/40 shadow-2xl mb-8 relative overflow-hidden bg-slate-900/90 backdrop-blur-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-8 p-8 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-extrabold uppercase tracking-wider mb-2 border border-indigo-400/30">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-300" /> Maharashtra State Board Examination Arena
              </span>
              <h1 className="text-3xl font-black text-white tracking-tight">
                Welcome back, {user?.name || 'Scholar'}!
              </h1>
              <p className="text-slate-300 text-xs mt-1 max-w-xl">
                Balbharati textbook curriculum exams for Class 9, 10 (SSC), 11 (HSC), and 12 (HSC) across Science, Commerce, and Arts streams with instant AI Bloom diagnostics.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/dashboard/student/offline"
                  className="flex items-center gap-2 bg-slate-950/80 hover:bg-slate-950 border border-emerald-500/30 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <WifiOff className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Offline Sync Hub ({offlineSavedIds.length} Saved)</span>
                </Link>
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-950/60 border border-purple-800/40 text-xs text-purple-300">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>State Board Syllabus 2026</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block md:col-span-4 h-48 relative overflow-hidden">
              <img
                src="/images/student_quiz_fun.jpg"
                alt="Student quiz winner"
                className="w-full h-full object-cover object-center opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* 4 Academic Department Portals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-indigo-500/50 shadow-lg">
            <div className="flex items-center gap-2 mb-1 text-cyan-400">
              <GraduationCap className="w-4 h-4" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider">Dept 1</span>
            </div>
            <h3 className="text-sm font-bold text-white">Exams & Quizzes</h3>
            <p className="text-[10px] text-slate-400 mt-0.5">Balbharati textbook chapter tests</p>
            <span className="inline-block mt-2 text-[10px] font-bold text-cyan-300">Active Viewing ↓</span>
          </div>

          <Link
            href="/pyqs"
            className="p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-amber-500/30 hover:border-amber-500/60 shadow-lg transition-all hover:scale-[1.02] group"
          >
            <div className="flex items-center gap-2 mb-1 text-amber-400">
              <FileText className="w-4 h-4" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider">Dept 2</span>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">Board PYQs (1990-2026)</h3>
            <p className="text-[10px] text-slate-400 mt-0.5">36 Years Descriptive Papers (No Quiz)</p>
            <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-amber-400">View Question Papers →</span>
          </Link>

          <Link
            href="/dashboard/student/formulas"
            className="p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-cyan-500/30 hover:border-cyan-500/60 shadow-lg transition-all hover:scale-[1.02] group"
          >
            <div className="flex items-center gap-2 mb-1 text-cyan-400">
              <Zap className="w-4 h-4" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider">Dept 3</span>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Formula Sheets</h3>
            <p className="text-[10px] text-slate-400 mt-0.5">Science, Commerce, Arts Formulas</p>
            <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-cyan-400">Revise Formulas →</span>
          </Link>

          <Link
            href="/textbooks"
            className="p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-emerald-500/30 hover:border-emerald-500/60 shadow-lg transition-all hover:scale-[1.02] group"
          >
            <div className="flex items-center gap-2 mb-1 text-emerald-400">
              <BookOpen className="w-4 h-4" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider">Dept 4</span>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">All Subjects Textbooks</h3>
            <p className="text-[10px] text-slate-400 mt-0.5">41+ Official Balbharati Books (9-12)</p>
            <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-emerald-400">Read Textbooks →</span>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
              <span>Tests Completed</span>
              <BookOpen className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-3xl font-black text-white mt-2">{analytics?.stats.totalAttempted || 0}</p>
            <p className="text-[11px] text-indigo-400 font-medium mt-1">Assessed test sets</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
              <span>Average Accuracy</span>
              <BarChart2 className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-3xl font-black text-white mt-2">{analytics?.stats.averageScore || 0}%</p>
            <p className="text-[11px] text-cyan-400 font-medium mt-1">Cumulative score level</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
              <span>Passed Assessments</span>
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-3xl font-black text-white mt-2">{analytics?.stats.passedAttempts || 0}</p>
            <p className="text-[11px] text-emerald-400 font-medium mt-1">Satisfying passing target</p>
          </div>
        </div>

        {/* ==================================================== */}
        {/* MAHARASHTRA STATE BOARD COMPARTMENTS NAVIGATOR */}
        {/* ==================================================== */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-6 mb-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4" /> Maharashtra State Board Compartments
              </span>
              <h2 className="text-xl font-black text-white">Select Your Academic Standard & Stream</h2>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
              {filteredQuizzes.length} Quizzes Found
            </span>
          </div>

          {/* 1. Standard / Class Selector */}
          <div className="mt-5">
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              1. Choose Standard (Class 9 to 12)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[
                { id: 'all', label: '🌟 All Classes' },
                { id: 'Class 9', label: '📘 Class 9' },
                { id: 'Class 10', label: '🏆 Class 10 (SSC)' },
                { id: 'Class 11', label: '🎓 Class 11 (HSC)' },
                { id: 'Class 12', label: '🏅 Class 12 (HSC)' },
              ].map((std) => (
                <button
                  key={std.id}
                  onClick={() => {
                    setSelectedStandard(std.id);
                    if (std.id === 'Class 9' || std.id === 'Class 10') {
                      setSelectedStream('all');
                    }
                  }}
                  className={'px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border text-center ' +
                    (selectedStandard === std.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30 scale-[1.02]'
                      : 'bg-slate-950/60 hover:bg-slate-800 text-slate-300 border-slate-800')}
                >
                  {std.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Stream Compartment Selector */}
          <div className="mt-5 pt-4 border-t border-slate-800/80">
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>2. Stream Compartment (For Classes 11 & 12)</span>
              {selectedStandard === 'Class 9' || selectedStandard === 'Class 10' ? (
                <span className="text-[10px] text-amber-400 font-semibold">(General Core Curriculum for 9th & 10th)</span>
              ) : null}
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'all', label: '📚 All Streams', icon: Layers, color: 'text-slate-300', border: 'border-slate-700' },
                { id: 'Science', label: '🧪 Science Compartment', icon: FlaskConical, color: 'text-cyan-300', border: 'border-cyan-500/40 bg-cyan-950/20' },
                { id: 'Commerce', label: '📊 Commerce Compartment', icon: Briefcase, color: 'text-amber-300', border: 'border-amber-500/40 bg-amber-950/20' },
                { id: 'Arts', label: '🎨 Arts Compartment', icon: Palette, color: 'text-purple-300', border: 'border-purple-500/40 bg-purple-950/20' },
              ].map((st) => {
                const IconComponent = st.icon;
                const isSelected = selectedStream === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => setSelectedStream(st.id)}
                    className={'p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ' +
                      (isSelected
                        ? 'bg-indigo-950/80 border-indigo-400 ring-2 ring-indigo-500/30 text-white shadow-md'
                        : 'bg-slate-950/40 hover:bg-slate-800/80 border-slate-800 ' + st.color)}
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs font-bold">{st.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Subject Quick Filter Pills */}
          {availableSubjects.length > 0 && (
            <div className="mt-4 pt-3 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Subject:
              </span>
              <button
                onClick={() => setSelectedSubject('all')}
                className={'px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ' +
                  (selectedSubject === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-400 hover:text-white')}
              >
                All Subjects
              </button>
              {availableSubjects.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={'px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ' +
                    (selectedSubject === sub
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white')}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quizzes List */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Available Examinations ({filteredQuizzes.length})</span>
            </h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-slate-900 rounded-3xl border border-slate-800 p-6 animate-pulse">
                  <div className="h-4 bg-slate-800 rounded w-1/3 mb-4"></div>
                  <div className="h-6 bg-slate-800 rounded w-2/3 mb-2"></div>
                </div>
              ))}
            </div>
          ) : filteredQuizzes.length === 0 ? (
            <div className="bg-slate-900/60 border border-dashed border-slate-800 rounded-3xl p-12 text-center">
              <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <p className="text-base font-bold text-white">No Exams Found for Selected Compartment</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Try selecting "All Classes" or "All Streams" above to browse the full Maharashtra State Board catalogue.
              </p>
              <button
                onClick={() => {
                  setSelectedStandard('all');
                  setSelectedStream('all');
                  setSelectedSubject('all');
                }}
                className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredQuizzes.map((quiz) => {
                const isSaved = offlineSavedIds.includes(quiz.id);
                const isDownloading = downloadingId === quiz.id;
                const pastAttempt = quiz.attempts && quiz.attempts.length > 0 ? quiz.attempts[0] : null;

                // Stream color badges
                const streamBadgeColor =
                  quiz.stream === 'Science'
                    ? 'bg-cyan-950/80 text-cyan-300 border-cyan-700/50'
                    : quiz.stream === 'Commerce'
                    ? 'bg-amber-950/80 text-amber-300 border-amber-700/50'
                    : quiz.stream === 'Arts'
                    ? 'bg-purple-950/80 text-purple-300 border-purple-700/50'
                    : 'bg-indigo-950/80 text-indigo-300 border-indigo-700/50';

                return (
                  <div
                    key={quiz.id}
                    className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-xl hover:border-indigo-500/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {quiz.standard && (
                            <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-slate-800 text-white border border-slate-700">
                              {quiz.standard}
                            </span>
                          )}
                          {quiz.stream && (
                            <span className={'text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ' + streamBadgeColor}>
                              {quiz.stream}
                            </span>
                          )}
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">
                            {quiz.topic}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                            <Clock className="w-3.5 h-3.5 text-cyan-400" /> {quiz.durationMinutes} Mins
                          </span>
                          <span
                            className={'text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ' +
                              (quiz.difficulty === 'Hard' ? 'bg-rose-950 text-rose-300 border border-rose-800/40' : quiz.difficulty === 'Medium' ? 'bg-amber-950 text-amber-300 border border-amber-800/40' : 'bg-emerald-950 text-emerald-300 border border-emerald-800/40')}
                          >
                            {quiz.difficulty}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {quiz.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">{quiz.description}</p>
                      <p className="text-[11px] text-slate-500 mt-2">
                        Faculty: <span className="font-semibold text-slate-300">{quiz.educator?.name || 'Maharashtra Board Faculty'}</span>
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                      <div className="text-xs text-slate-400">
                        {pastAttempt ? (
                          <span className="font-bold text-cyan-400">
                            Last Score: {pastAttempt.score}/{pastAttempt.maxScore} ({pastAttempt.percentage}%)
                          </span>
                        ) : (
                          <span>{quiz._count?.questions || 0} Questions • Pass: {quiz.passPercentage}%</span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {quiz.allowOffline && (
                          <button
                            onClick={() => handleSaveForOffline(quiz.id)}
                            disabled={isSaved || isDownloading}
                            className={'px-3 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors border ' +
                              (isSaved
                                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50 cursor-default'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 cursor-pointer')}
                            title={isSaved ? 'Quiz is cached offline' : 'Save quiz to take offline'}
                          >
                            {isDownloading ? (
                              <div className="w-3.5 h-3.5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                            ) : isSaved ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Download className="w-3.5 h-3.5 text-cyan-400" />
                            )}
                            <span>{isSaved ? 'Offline Ready' : 'Save Offline'}</span>
                          </button>
                        )}

                        <Link
                          href={'/quiz/' + quiz.id + '/take'}
                          className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold rounded-xl flex items-center gap-1 transition-all shadow-md shadow-indigo-600/25 cursor-pointer hover:scale-105"
                        >
                          <span>{pastAttempt ? 'Retake Exam' : 'Start Exam'}</span>
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
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-xl">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Your Recent Examination Attempts</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    <th className="pb-3">Exam Title</th>
                    <th className="pb-3">Topic</th>
                    <th className="pb-3">Score</th>
                    <th className="pb-3">Outcome</th>
                    <th className="pb-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {analytics.recentHistory.map((att) => (
                    <tr key={att.id} className="hover:bg-slate-800/40">
                      <td className="py-3 font-semibold text-white">{att.quiz.title}</td>
                      <td className="py-3">{att.quiz.topic}</td>
                      <td className="py-3 font-bold text-cyan-400">{att.score} / {att.maxScore} ({att.percentage}%)</td>
                      <td className="py-3">
                        <span className={'px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ' +
                          (att.isPassed ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40' : 'bg-rose-950 text-rose-300 border border-rose-800/40')}>
                          {att.isPassed ? 'Passed' : 'Failed'}
                        </span>
                      </td>
                      <td className="py-3">
                        <Link
                          href={'/quiz/' + att.id + '/result/' + att.id}
                          className="font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                          <span>View AI Breakdown</span>
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