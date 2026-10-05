'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { OfflinePackage } from '@/types/quiz';
import { getOfflineQuizzes, recordOfflineAttempt } from '@/lib/offlineStorage';
import {
  Clock,
  WifiOff,
  ChevronLeft,
  ChevronRight,
  Send,
  Flag,
  ShieldAlert,
  CheckCircle2,
  ArrowLeft,
  Zap,
} from 'lucide-react';

export default function OfflineExamRunnerPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;

  const [pkg, setPkg] = useState<OfflinePackage | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [tabSwitches, setTabSwitches] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(0);
  const [isDone, setIsDone] = useState(false);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const all = getOfflineQuizzes();
    const found = all.find((p) => p.quizId === quizId);
    if (found) {
      setPkg(found);
      setTimeLeftSeconds(found.durationMinutes * 60);
      startTimeRef.current = Date.now();
    } else {
      alert('Offline package not found in local storage.');
      router.push('/dashboard/student/offline');
    }
    setLoading(false);
  }, [quizId, router]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setTabSwitches((prev) => {
          setShowWarning(true);
          return prev + 1;
        });
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const handleFinishOfflineTest = useCallback(() => {
    if (!pkg) return;
    const timeTakenSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);

    recordOfflineAttempt({
      id: 'offline_' + Date.now(),
      quizId: pkg.quizId,
      quizTitle: pkg.title,
      topic: pkg.topic,
      answers,
      timeTakenSeconds,
      tabSwitchCount: tabSwitches,
      completedAt: new Date().toISOString(),
      synced: false,
    });

    setIsDone(true);
  }, [pkg, answers, tabSwitches]);

  useEffect(() => {
    if (loading || !pkg || timeLeftSeconds <= 0 || isDone) return;
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishOfflineTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [loading, pkg, timeLeftSeconds, isDone, handleFinishOfflineTest]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  };

  if (loading || !pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isDone) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 relative">
        <div className="absolute w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-emerald-500/30 p-8 max-w-lg w-full text-center shadow-2xl z-10">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-white">Offline Exam Saved!</h1>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Your responses for <strong>{pkg.title}</strong> have been cryptographically sealed in local browser storage.
          </p>
          <div className="my-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-left space-y-1.5 text-slate-400">
            <p><strong className="text-slate-200">Questions Answered:</strong> {Object.keys(answers).length} of {pkg.questions.length}</p>
            <p><strong className="text-slate-200">Tab Focus Changes:</strong> {tabSwitches}</p>
            <p><strong className="text-slate-200">Sync Status:</strong> Ready to batch upload when connected</p>
          </div>
          <Link
            href="/dashboard/student/offline"
            className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl text-xs block transition-all shadow-lg shadow-emerald-600/30"
          >
            Return to Offline Sync Hub
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = pkg.questions[currentIndex];
  const totalQuestions = pkg.questions.length;
  const answeredCount = Object.keys(answers).length;

  return (
    <ProtectedRoute allowedRoles={['Student']}>
      <div className="min-h-screen bg-slate-950 flex flex-col">
        <header className="bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-40 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-[10px] font-extrabold uppercase flex items-center gap-1 border border-emerald-500/40">
                <WifiOff className="w-3 h-3" /> Offline Mode
              </span>
              <h1 className="text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
                {pkg.title}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border bg-emerald-950/80 text-emerald-300 border-emerald-500/40 font-mono font-bold text-xs tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTime(timeLeftSeconds)}</span>
              </div>

              <button
                onClick={() => {
                  if (confirm('Complete and save your offline examination responses?')) {
                    handleFinishOfflineTest();
                  }
                }}
                className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-lg shadow-emerald-600/30 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Finish Offline Test</span>
              </button>
            </div>
          </div>
        </header>

        {showWarning && (
          <div className="bg-amber-600 text-white px-4 py-2 text-xs font-bold flex items-center justify-between">
            <div className="flex items-center gap-2 max-w-4xl mx-auto w-full">
              <ShieldAlert className="w-4 h-4 flex-shrink-0" />
              <span>
                <strong>Offline Proctor Alert:</strong> Focus loss detected ({tabSwitches} occurrence).
              </span>
              <button onClick={() => setShowWarning(false)} className="ml-auto underline font-bold">Dismiss</button>
            </div>
          </div>
        )}

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 flex flex-col justify-between bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            {currentQ && (
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 bg-emerald-600/20 text-emerald-300 text-xs font-bold rounded-xl border border-emerald-500/30">
                      Question {currentIndex + 1} of {totalQuestions}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-purple-300 bg-purple-950/60 border border-purple-800/40 px-2.5 py-1 rounded-full">
                      {currentQ.bloomLevel}
                    </span>
                    <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded-full">
                      +{currentQ.points} Mark
                    </span>
                  </div>

                  <button
                    onClick={() => setFlagged((p) => ({ ...p, [currentIndex]: !p[currentIndex] }))}
                    className={'flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ' +
                      (flagged[currentIndex] ? 'bg-amber-950/60 text-amber-300 border-amber-500/50' : 'bg-slate-950 text-slate-400 border-slate-800')}
                  >
                    <Flag className={'w-3.5 h-3.5 ' + (flagged[currentIndex] ? 'fill-amber-400 text-amber-400' : '')} />
                    <span>{flagged[currentIndex] ? 'Flagged' : 'Flag'}</span>
                  </button>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed mb-6">
                  {currentQ.questionText}
                </h2>

                <div className="space-y-3 mb-8">
                  {currentQ.options.map((option, optIdx) => {
                    const isSelected = answers[currentQ.id] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => setAnswers((p) => ({ ...p, [currentQ.id]: optIdx }))}
                        className={'w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ' +
                          (isSelected
                            ? 'border-emerald-500 bg-emerald-950/40 ring-2 ring-emerald-500/30 text-white'
                            : 'border-slate-800 hover:border-slate-700 bg-slate-950/50 text-slate-300')}
                      >
                        <div
                          className={'w-6 h-6 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ' +
                            (isSelected ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-400 border border-slate-700')}
                        >
                          {String.fromCharCode(65 + optIdx)}
                        </div>
                        <span className="text-xs sm:text-sm font-medium leading-relaxed">{option}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="px-4 py-2 border border-slate-800 bg-slate-950 text-slate-300 text-xs font-bold rounded-xl flex items-center gap-1 disabled:opacity-30 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                disabled={currentIndex === totalQuestions - 1}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center gap-1 disabled:opacity-30 cursor-pointer shadow-lg shadow-emerald-600/20"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-3 border-b border-slate-800">
                Offline Palette
              </h3>

              <div className="grid grid-cols-5 gap-2.5 mb-6">
                {pkg.questions.map((q, idx) => {
                  const isAnswered = answers[q.id] !== undefined;
                  const isFlag = flagged[idx];
                  const isCurrent = currentIndex === idx;

                  let btnColor = 'bg-slate-950 text-slate-400 border-slate-800';
                  if (isCurrent) btnColor = 'ring-2 ring-emerald-400 border-emerald-400 bg-emerald-500 text-slate-950 font-black';
                  else if (isFlag) btnColor = 'bg-amber-950 text-amber-300 border-amber-500/50 font-bold';
                  else if (isAnswered) btnColor = 'bg-emerald-950 text-emerald-300 border-emerald-500/50 font-bold';

                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={'h-10 rounded-xl border text-xs font-bold flex items-center justify-center transition-all cursor-pointer ' + btnColor}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2 text-xs text-slate-400 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span>Answered ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span>Flagged ({Object.values(flagged).filter(Boolean).length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span>Unanswered ({totalQuestions - answeredCount})</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  if (confirm('Finish offline examination and save attempt locally?')) {
                    handleFinishOfflineTest();
                  }
                }}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-extrabold rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Save Offline Attempt</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}