'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { api } from '@/lib/api';
import { OfflinePackage, OfflineAttemptRecord } from '@/types/quiz';
import {
  getOfflineQuizzes,
  removeOfflineQuiz,
  getOfflineAttempts,
  clearSyncedAttempts,
  saveQuizForOffline,
} from '@/lib/offlineStorage';
import {
  WifiOff,
  CloudUpload,
  Play,
  Trash2,
  Upload,
  CheckCircle,
  Clock,
  ArrowLeft,
  BookOpen,
  FileCheck,
  Zap,
} from 'lucide-react';

export default function OfflineHubPage() {
  const [offlineQuizzes, setOfflineQuizzes] = useState<OfflinePackage[]>([]);
  const [pendingAttempts, setPendingAttempts] = useState<OfflineAttemptRecord[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccessMsg, setSyncSuccessMsg] = useState<string | null>(null);

  const reloadOfflineData = () => {
    setOfflineQuizzes(getOfflineQuizzes());
    setPendingAttempts(getOfflineAttempts());
  };

  useEffect(() => {
    reloadOfflineData();
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.quizId && parsed.questions) {
          saveQuizForOffline(parsed as OfflinePackage);
          reloadOfflineData();
          alert('Offline package "' + parsed.title + '" imported successfully!');
        } else {
          alert('Invalid .quizpkg.json package format.');
        }
      } catch {
        alert('Failed to parse JSON quiz package.');
      }
    };
    reader.readAsText(file);
  };

  const handleSyncAttempts = async () => {
    if (pendingAttempts.length === 0) return;
    setIsSyncing(true);
    setSyncSuccessMsg(null);

    try {
      const res = await api.post('/quiz/sync-offline', {
        attempts: pendingAttempts,
      });

      if (res.data.success) {
        setSyncSuccessMsg(res.data.message || 'Offline exams synchronized successfully!');
        clearSyncedAttempts();
        setPendingAttempts([]);
      }
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to sync offline tests. Ensure you are connected to internet.');
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <ProtectedRoute allowedRoles={['Student']}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/dashboard/student"
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Student Dashboard</span>
          </Link>
          <label className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-300 text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-cyan-500/10 hover:scale-105">
            <Upload className="w-3.5 h-3.5" />
            <span>Import Offline Package (.quizpkg.json)</span>
            <input type="file" accept=".json,.quizpkg" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>

        {/* Offline Hub Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950/80 to-slate-900 rounded-3xl p-8 text-white border border-emerald-500/30 shadow-2xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-2 relative z-10">
            <span className="p-2 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <WifiOff className="w-6 h-6" />
            </span>
            <h1 className="text-2xl font-black">Encrypted Offline Vault</h1>
          </div>
          <p className="text-xs text-slate-300 max-w-2xl mt-1 leading-relaxed relative z-10">
            Execute examinations with zero network dependency. Test attempts are stored locally with tamper-proof signatures and batch-synced to the faculty server when internet restores.
          </p>
        </div>

        {syncSuccessMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/50 flex items-start gap-3 text-emerald-300 text-xs">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
            <div>
              <p className="font-bold">Synchronization Successful</p>
              <p className="text-xs mt-0.5">{syncSuccessMsg}</p>
            </div>
          </div>
        )}

        {/* Pending Submissions */}
        {pendingAttempts.length > 0 && (
          <div className="bg-amber-950/40 rounded-3xl border border-amber-500/40 p-6 shadow-xl mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                  <CloudUpload className="w-5 h-5 text-amber-400" />
                  <span>Pending Offline Attempts ({pendingAttempts.length} Tests)</span>
                </h3>
                <p className="text-xs text-amber-400/80 mt-1">
                  You completed tests offline that have not been uploaded to the university gradebook yet.
                </p>
              </div>

              <button
                onClick={handleSyncAttempts}
                disabled={isSyncing}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-amber-600/30 flex items-center gap-2 cursor-pointer transition-all disabled:opacity-50 hover:scale-105"
              >
                {isSyncing ? (
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <CloudUpload className="w-3.5 h-3.5" />
                )}
                <span>Sync {pendingAttempts.length} Attempts to Server Now</span>
              </button>
            </div>

            <div className="mt-4 divide-y divide-amber-800/40 text-xs">
              {pendingAttempts.map((att, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-white">{att.quizTitle}</span>
                  <span className="text-amber-400/80">{new Date(att.completedAt).toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Downloaded Quizzes */}
        <div>
          <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <span>Saved Offline Test Bundles ({offlineQuizzes.length})</span>
          </h2>

          {offlineQuizzes.length === 0 ? (
            <div className="bg-slate-900/60 border border-dashed border-slate-800 rounded-3xl p-12 text-center">
              <WifiOff className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-300">No Offline Tests Cached</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Visit your student dashboard and click "Save Offline" on any examination, or import a package JSON file above.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {offlineQuizzes.map((pkg) => (
                <div key={pkg.quizId} className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40">
                        {pkg.topic}
                      </span>
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" /> {pkg.durationMinutes} Mins
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white">{pkg.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{pkg.description}</p>
                    <p className="text-[10px] text-slate-500 mt-2 font-mono">
                      {pkg.questions.length} Questions • Hash: {pkg.checksum.substring(0, 12)}...
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => {
                        removeOfflineQuiz(pkg.quizId);
                        reloadOfflineData();
                      }}
                      className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>

                    <Link
                      href={'/quiz/offline/' + pkg.quizId}
                      className="px-4 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-md shadow-emerald-600/25 cursor-pointer hover:scale-105"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Launch Offline Exam</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}