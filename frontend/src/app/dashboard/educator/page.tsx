'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import { Quiz, EducatorAnalytics } from '@/types/quiz';
import {
  BookOpenCheck,
  PlusCircle,
  Users,
  Sparkles,
  Download,
  BarChart3,
  Clock,
  TrendingUp,
  FileCheck,
  Gamepad2,
  Zap,
  Trophy,
} from 'lucide-react';

import { getAllQuizzes, getEducatorAnalytics } from '@/lib/quizStorage';

export default function EducatorDashboard() {
  const { user } = useAuth();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [analytics, setAnalytics] = useState<EducatorAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [qRes, aRes] = await Promise.all([
        api.get('/quiz/educator/my-quizzes'),
        api.get('/quiz/analytics/educator'),
      ]);

      if (qRes.data?.success && qRes.data?.quizzes?.length > 0) {
        setQuizzes(qRes.data.quizzes);
      } else {
        setQuizzes(getAllQuizzes());
      }
      if (aRes.data?.success && aRes.data?.stats) {
        setAnalytics(aRes.data);
      } else {
        setAnalytics(getEducatorAnalytics());
      }
    } catch {
      // Offline or serverless fallback
      setQuizzes(getAllQuizzes());
      setAnalytics(getEducatorAnalytics());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleExportOffline = async (quizId: string, title: string) => {
    try {
      const res = await api.get('/quiz/' + quizId + '/export-offline', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', title.replace(/\s+/g, '_') + '_offline.quizpkg.json');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      alert('Failed to export offline package.');
    }
  };

  return (
    <ProtectedRoute allowedRoles={['Educator']}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header — Retro Gaming Cabinet Style */}
        <div className="pixel-box bg-[#171926] p-0 mb-8 overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 sm:p-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FF4582] text-white font-minecraft text-[10px] uppercase border-2 border-black shadow-[2px_2px_0_0_#000] mb-3">
                <Gamepad2 className="w-3.5 h-3.5" /> [ EDUCATOR CONTROL CONSOLE ]
              </span>
              <h1 className="text-2xl sm:text-3xl font-minecraft font-black text-white tracking-tight uppercase">
                WELCOME, {user?.name || 'PROFESSOR'}!
              </h1>
              <p className="font-mono text-xs text-slate-300 mt-1">
                Manage academic quizzes, generate AI questions, and monitor real-time student assessments.
              </p>
            </div>
            <Link
              href="/dashboard/educator/create"
              className="pixel-btn px-5 py-3 bg-[#FFD000] text-black font-minecraft text-xs uppercase flex items-center gap-2 cursor-pointer font-bold flex-shrink-0"
            >
              <PlusCircle className="w-4 h-4 text-black" />
              <span>[ LAUNCH AI QUESTION FORGE ]</span>
            </Link>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="pixel-box bg-[#171926] p-5">
            <div className="flex items-center justify-between font-minecraft text-[11px] text-slate-400 uppercase">
              <span>QUIZZES DEPLOYED</span>
              <BookOpenCheck className="w-4 h-4 text-[#FF4582]" />
            </div>
            <p className="font-minecraft text-3xl font-black text-white mt-2">{analytics?.stats.totalQuizzes || quizzes.length}</p>
            <p className="font-mono text-[10px] text-[#FF4582] mt-1">Active examination sets</p>
          </div>

          <div className="pixel-box bg-[#171926] p-5">
            <div className="flex items-center justify-between font-minecraft text-[11px] text-slate-400 uppercase">
              <span>TOTAL SUBMISSIONS</span>
              <Users className="w-4 h-4 text-[#38E5FF]" />
            </div>
            <p className="font-minecraft text-3xl font-black text-white mt-2">{analytics?.stats.totalAttempts || 0}</p>
            <p className="font-mono text-[10px] text-[#38E5FF] mt-1">Graded online & offline</p>
          </div>

          <div className="pixel-box bg-[#171926] p-5">
            <div className="flex items-center justify-between font-minecraft text-[11px] text-slate-400 uppercase">
              <span>AVG CLASS SCORE</span>
              <BarChart3 className="w-4 h-4 text-[#8A5CFF]" />
            </div>
            <p className="font-minecraft text-3xl font-black text-[#8A5CFF] mt-2">{analytics?.stats.averagePercentage || 0}%</p>
            <p className="font-mono text-[10px] text-[#8A5CFF] mt-1">Across all topics</p>
          </div>

          <div className="pixel-box bg-[#171926] p-5">
            <div className="flex items-center justify-between font-minecraft text-[11px] text-slate-400 uppercase">
              <span>PASS RATE</span>
              <Trophy className="w-4 h-4 text-[#27E279]" />
            </div>
            <p className="font-minecraft text-3xl font-black text-[#27E279] mt-2">{analytics?.stats.passRate || 0}%</p>
            <p className="font-mono text-[10px] text-[#27E279] mt-1">Satisfying passing target</p>
          </div>
        </div>

        {/* Quizzes List */}
        <div className="mb-8 text-left">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-minecraft text-base sm:text-lg font-bold text-white flex items-center gap-2 uppercase">
              <BookOpenCheck className="w-5 h-5 text-[#FF4582]" />
              <span>YOUR DEPLOYED QUIZZES</span>
            </h2>
            <Link
              href="/dashboard/educator/create"
              className="font-minecraft text-xs text-[#FFD000] hover:underline flex items-center gap-1 uppercase"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>+ AI GENERATE</span>
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[1, 2].map((i) => (
                <div key={i} className="pixel-box bg-[#171926] p-6 animate-pulse">
                  <div className="h-4 bg-slate-800 w-1/3 mb-4"></div>
                  <div className="h-6 bg-slate-800 w-2/3 mb-2"></div>
                </div>
              ))}
            </div>
          ) : quizzes.length === 0 ? (
            <div className="pixel-box bg-[#171926] p-10 text-center">
              <Sparkles className="w-10 h-10 text-[#FF4582] mx-auto mb-3" />
              <p className="font-minecraft text-base font-bold text-white uppercase">NO QUIZZES DEPLOYED YET</p>
              <p className="font-mono text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Synthesize your first AI-enabled quiz in seconds with custom Bloom's taxonomy questions.
              </p>
              <Link
                href="/dashboard/educator/create"
                className="mt-4 inline-flex pixel-btn px-5 py-2 bg-[#FFD000] text-black font-minecraft text-xs uppercase items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>[ LAUNCH AI FORGE ]</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {quizzes.map((q) => (
                <div key={q.id} className="pixel-box bg-[#171926] p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-minecraft text-[10px] uppercase px-2 py-0.5 bg-black text-[#FF4582] border border-black font-bold">
                        {q.topic}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#38E5FF]" /> {q.durationMinutes}m
                        </span>
                        <span className={'font-minecraft text-[10px] uppercase px-2 py-0.5 border border-black ' +
                          (q.difficulty === 'Hard' ? 'bg-[#FF4582] text-white' : q.difficulty === 'Medium' ? 'bg-[#FFD000] text-black' : 'bg-[#27E279] text-black')}>
                          {q.difficulty}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-minecraft text-sm font-bold text-white uppercase leading-snug">{q.title}</h3>
                    <p className="font-mono text-xs text-slate-300 mt-1 line-clamp-2">{q.description}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t-2 border-black flex items-center justify-between">
                    <div className="font-minecraft text-xs text-slate-400">
                      <span className="font-bold text-white">{q._count?.questions || 0} QS</span> •{' '}
                      <span className="font-bold text-[#FF4582]">{q._count?.attempts || 0} SUBMISSIONS</span>
                    </div>
                    <button
                      onClick={() => handleExportOffline(q.id, q.title)}
                      className="pixel-btn px-3 py-1.5 bg-[#0c0d14] text-white font-minecraft text-xs uppercase flex items-center gap-1.5 cursor-pointer"
                      title="Download offline package"
                    >
                      <Download className="w-3.5 h-3.5 text-[#38E5FF]" />
                      <span>EXPORT</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Submissions Feed */}
        {analytics?.recentSubmissions && analytics.recentSubmissions.length > 0 && (
          <div className="pixel-box bg-[#171926] p-6 text-left">
            <h3 className="font-minecraft text-base font-bold text-white mb-4 flex items-center gap-2 uppercase">
              <FileCheck className="w-4 h-4 text-[#27E279]" />
              <span>[ RECENT STUDENT SUBMISSIONS ]</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b-2 border-black font-minecraft text-slate-400 uppercase text-[10px]">
                    <th className="pb-3">STUDENT</th>
                    <th className="pb-3">QUIZ NAME</th>
                    <th className="pb-3">SCORE</th>
                    <th className="pb-3">OUTCOME</th>
                    <th className="pb-3">DATE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/40 text-slate-300">
                  {analytics.recentSubmissions.map((sub) => (
                    <tr key={sub.attemptId} className="hover:bg-black/30">
                      <td className="py-3 font-semibold text-white">{sub.studentName}</td>
                      <td className="py-3">{sub.quizTitle}</td>
                      <td className="py-3 font-bold text-[#38E5FF]">{sub.score} / {sub.maxScore} ({sub.percentage}%)</td>
                      <td className="py-3">
                        <span className={'font-minecraft text-[10px] uppercase px-2 py-0.5 border border-black ' +
                          (sub.isPassed ? 'bg-[#27E279] text-black' : 'bg-[#FF4582] text-white')}>
                          {sub.isPassed ? 'PASSED' : 'FAILED'}
                        </span>
                      </td>
                      <td className="py-3 font-mono text-slate-500">{new Date(sub.completedAt).toLocaleDateString()}</td>
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