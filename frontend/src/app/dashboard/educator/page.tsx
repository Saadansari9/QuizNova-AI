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
} from 'lucide-react';

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

      if (qRes.data.success) setQuizzes(qRes.data.quizzes || []);
      if (aRes.data.success) setAnalytics(aRes.data);
    } catch (err) {
      console.error('Failed to load educator data:', err);
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
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-slate-900 via-purple-950 to-indigo-950 rounded-3xl p-8 text-white border border-purple-800/40 shadow-2xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-extrabold uppercase tracking-wider mb-2 border border-purple-400/30">
                <Sparkles className="w-3 h-3 text-purple-300" /> Educator Control Console
              </span>
              <h1 className="text-3xl font-black tracking-tight">
                Welcome, {user?.name || 'Professor'}!
              </h1>
              <p className="text-slate-300 text-xs mt-1">
                Manage your academic quizzes, generate AI questions, and monitor real-time student assessments.
              </p>
            </div>
            <Link
              href="/dashboard/educator/create"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold rounded-2xl shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Launch AI Question Forge</span>
            </Link>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
              <span>Total Quizzes Deployed</span>
              <BookOpenCheck className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-3xl font-black text-white mt-2">{analytics?.stats.totalQuizzes || quizzes.length}</p>
            <p className="text-[11px] text-purple-400 font-medium mt-1">Active examination sets</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
              <span>Total Submissions</span>
              <Users className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-3xl font-black text-white mt-2">{analytics?.stats.totalAttempts || 0}</p>
            <p className="text-[11px] text-cyan-400 font-medium mt-1">Graded online & offline</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
              <span>Average Class Score</span>
              <BarChart3 className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-3xl font-black text-white mt-2">{analytics?.stats.averagePercentage || 0}%</p>
            <p className="text-[11px] text-indigo-400 font-medium mt-1">Across all assessment topics</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
              <span>Overall Pass Rate</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-3xl font-black text-white mt-2">{analytics?.stats.passRate || 0}%</p>
            <p className="text-[11px] text-emerald-400 font-medium mt-1">Satisfying passing target</p>
          </div>
        </div>

        {/* Quizzes List */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpenCheck className="w-5 h-5 text-indigo-400" />
              <span>Your Deployed Quizzes</span>
            </h2>
            <Link
              href="/dashboard/educator/create"
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              <span>+ Create / AI Generate</span>
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[1, 2].map((i) => (
                <div key={i} className="bg-slate-900 rounded-3xl border border-slate-800 p-6 animate-pulse">
                  <div className="h-4 bg-slate-800 rounded w-1/3 mb-4"></div>
                  <div className="h-6 bg-slate-800 rounded w-2/3 mb-2"></div>
                </div>
              ))}
            </div>
          ) : quizzes.length === 0 ? (
            <div className="bg-slate-900/60 border border-dashed border-slate-800 rounded-3xl p-12 text-center">
              <Sparkles className="w-10 h-10 text-purple-400/50 mx-auto mb-3" />
              <p className="text-base font-bold text-white">No Quizzes Created Yet</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Synthesize your first AI-enabled quiz in seconds with custom Bloom's taxonomy questions.
              </p>
              <Link
                href="/dashboard/educator/create"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-purple-600/30"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch AI Question Forge</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {quizzes.map((q) => (
                <div key={q.id} className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-xl hover:border-purple-500/50 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-800/40">
                        {q.topic}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-cyan-400" /> {q.durationMinutes}m
                        </span>
                        <span className={'text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ' +
                          (q.difficulty === 'Hard' ? 'bg-rose-950 text-rose-400 border border-rose-800/40' : q.difficulty === 'Medium' ? 'bg-amber-950 text-amber-400 border border-amber-800/40' : 'bg-emerald-950 text-emerald-400 border border-emerald-800/40')}>
                          {q.difficulty}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">{q.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{q.description}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      <span className="font-semibold text-slate-200">{q._count?.questions || 0} Questions</span> •{' '}
                      <span className="font-semibold text-purple-400">{q._count?.attempts || 0} Submissions</span>
                    </div>
                    <button
                      onClick={() => handleExportOffline(q.id, q.title)}
                      className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer transition-colors border border-slate-700"
                      title="Download offline package"
                    >
                      <Download className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Export Pack</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Submissions Feed */}
        {analytics?.recentSubmissions && analytics.recentSubmissions.length > 0 && (
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-xl">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>Recent Student Submissions</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    <th className="pb-3">Student</th>
                    <th className="pb-3">Quiz Name</th>
                    <th className="pb-3">Score</th>
                    <th className="pb-3">Outcome</th>
                    <th className="pb-3">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {analytics.recentSubmissions.map((sub) => (
                    <tr key={sub.attemptId} className="hover:bg-slate-800/40">
                      <td className="py-3 font-semibold text-white">{sub.studentName}</td>
                      <td className="py-3">{sub.quizTitle}</td>
                      <td className="py-3 font-bold text-cyan-400">{sub.score} / {sub.maxScore} ({sub.percentage}%)</td>
                      <td className="py-3">
                        <span className={'px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ' +
                          (sub.isPassed ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40' : 'bg-rose-950 text-rose-300 border border-rose-800/40')}>
                          {sub.isPassed ? 'Passed' : 'Failed'}
                        </span>
                      </td>
                      <td className="py-3 text-slate-500">{new Date(sub.completedAt).toLocaleDateString()}</td>
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