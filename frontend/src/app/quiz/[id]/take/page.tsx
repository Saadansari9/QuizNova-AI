'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { api } from '@/lib/api';
import { Quiz, Question } from '@/types/quiz';
import {
  Clock,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Send,
  Flag,
  ShieldAlert,
  CheckCircle2,
  HelpCircle,
  Zap,
} from 'lucide-react';

export default function TakeQuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;

  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});

  const [tabSwitches, setTabSwitches] = useState(0);
  const [showCheatingWarning, setShowCheatingWarning] = useState(false);

  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        const res = await api.get('/quiz/' + quizId);
        if (res.data.success && res.data.quiz) {
          const qData: Quiz = res.data.quiz;
          setQuiz(qData);
          setTimeLeftSeconds(qData.durationMinutes * 60);
          startTimeRef.current = Date.now();
        }
      } catch (err) {
        alert('Failed to load quiz. Returning to dashboard.');
        router.push('/dashboard/student');
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId, router]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitches((prev) => {
          const updated = prev + 1;
          setShowCheatingWarning(true);
          return updated;
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (isSubmitting || !quiz) return;
    setIsSubmitting(true);

    const timeTakenSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);

    try {
      const res = await api.post('/quiz/' + quizId + '/submit', {
        answers,
        timeTakenSeconds,
        tabSwitchCount: tabSwitches,
        isOfflineSynced: false,
      });

      if (res.data.success) {
        router.push('/quiz/' + quizId + '/result/' + res.data.attemptId);
      }
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error submitting test.');
      setIsSubmitting(false);
    }
  }, [isSubmitting, quiz, quizId, answers, tabSwitches, router]);

  useEffect(() => {
    if (loading || !quiz || timeLeftSeconds <= 0) return;

    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [loading, quiz, timeLeftSeconds, handleSubmit]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const toggleFlag = (index: number) => {
    setFlagged((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading || !quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-xs font-semibold text-slate-400">Loading exam environment...</p>
      </div>
    );
  }

  const currentQ = quiz.questions ? quiz.questions[currentIndex] : null;
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = quiz.questions ? quiz.questions.length : 0;
  const isTimeCritical = timeLeftSeconds < 180;

  return (
    <ProtectedRoute allowedRoles={['Student']}>
      <div className="min-h-screen bg-slate-950 flex flex-col">
        {/* Exam Header Cockpit */}
        <header className="bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-40 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div>
              <h1 className="text-sm font-black text-white leading-tight truncate max-w-xs sm:max-w-md">
                {quiz.title}
              </h1>
              <span className="text-[10px] text-cyan-400 font-semibold">{quiz.topic} • {totalQuestions} Questions</span>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={'flex items-center gap-2 px-3.5 py-1.5 rounded-full border font-mono font-black text-xs tracking-wider ' +
                  (isTimeCritical
                    ? 'bg-rose-950 text-rose-400 border-rose-800/60 animate-pulse'
                    : 'bg-indigo-950/80 text-indigo-300 border-indigo-800/60')}
              >
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{formatTime(timeLeftSeconds)}</span>
              </div>

              <button
                onClick={() => {
                  if (confirm('Are you ready to submit your test responses for AI grading?')) {
                    handleSubmit();
                  }
                }}
                disabled={isSubmitting}
                className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-lg shadow-emerald-600/25 cursor-pointer disabled:opacity-50 hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
                <span>Submit Exam</span>
              </button>
            </div>
          </div>
        </header>

        {/* Proctoring Banner */}
        {showCheatingWarning && (
          <div className="bg-amber-600 text-white px-4 py-2.5 text-xs font-semibold flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2 max-w-4xl mx-auto w-full">
              <ShieldAlert className="w-4 h-4 flex-shrink-0" />
              <span>
                <strong>Proctoring Notice:</strong> Window focus loss detected ({tabSwitches} occurrence). Focus changes are logged to the security audit record.
              </span>
              <button
                onClick={() => setShowCheatingWarning(false)}
                className="ml-auto text-xs underline font-bold cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Question Surface */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            {currentQ ? (
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 text-xs font-bold rounded-xl border border-indigo-500/30">
                      Question {currentIndex + 1} of {totalQuestions}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-800/40">
                      {currentQ.bloomLevel}
                    </span>
                    <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/40">
                      +{currentQ.points} Mark
                    </span>
                  </div>

                  <button
                    onClick={() => toggleFlag(currentIndex)}
                    className={'flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ' +
                      (flagged[currentIndex]
                        ? 'bg-amber-950/60 text-amber-300 border-amber-500/50'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white')}
                  >
                    <Flag className={'w-3.5 h-3.5 ' + (flagged[currentIndex] ? 'fill-amber-400 text-amber-400' : '')} />
                    <span>{flagged[currentIndex] ? 'Flagged' : 'Flag for Review'}</span>
                  </button>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed mb-6">
                  {currentQ.questionText}
                </h2>

                <div className="space-y-3 mb-8">
                  {currentQ.options.map((option, optIdx) => {
                    const isSelected = answers[currentQ.id || ''] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(currentQ.id || '', optIdx)}
                        className={'w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ' +
                          (isSelected
                            ? 'border-cyan-500 bg-cyan-950/40 ring-2 ring-cyan-500/30 text-white'
                            : 'border-slate-800 hover:border-slate-700 bg-slate-950/50 text-slate-300 hover:bg-slate-900')}
                      >
                        <div
                          className={'w-6 h-6 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ' +
                            (isSelected
                              ? 'bg-cyan-500 text-slate-950 font-black'
                              : 'bg-slate-800 text-slate-400 border border-slate-700')}
                        >
                          {String.fromCharCode(65 + optIdx)}
                        </div>
                        <span className="text-xs sm:text-sm font-medium leading-relaxed">{option}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="px-4 py-2 border border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-900 text-xs font-bold rounded-xl flex items-center gap-1 disabled:opacity-30 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                disabled={currentIndex === totalQuestions - 1}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl flex items-center gap-1 disabled:opacity-30 cursor-pointer shadow-md shadow-indigo-600/20"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Palette */}
          <div className="lg:col-span-4 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-3 border-b border-slate-800">
                Examination Palette
              </h3>

              <div className="grid grid-cols-5 gap-2.5 mb-6">
                {quiz.questions?.map((q, idx) => {
                  const isAnswered = answers[q.id || ''] !== undefined;
                  const isFlag = flagged[idx];
                  const isCurrent = currentIndex === idx;

                  let btnColor = 'bg-slate-950 text-slate-400 border-slate-800';
                  if (isCurrent) btnColor = 'ring-2 ring-cyan-400 border-cyan-400 bg-cyan-500 text-slate-950 font-black';
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
                  if (confirm('Ready to submit your examination for instant AI grading?')) {
                    handleSubmit();
                  }
                }}
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-extrabold rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <CheckCircle2 className="w-4 h-4" />
                )}
                <span>Finalize & Submit Test</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}