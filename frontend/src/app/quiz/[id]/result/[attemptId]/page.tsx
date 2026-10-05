'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { api } from '@/lib/api';
import { AttemptResult } from '@/types/quiz';
import {
  Award,
  CheckCircle,
  XCircle,
  Sparkles,
  ArrowLeft,
  Clock,
  ShieldAlert,
  BookOpen,
  RotateCcw,
  Check,
  Zap,
} from 'lucide-react';

export default function QuizResultPage() {
  const params = useParams();
  const router = useRouter();
  const attemptId = params.attemptId as string;
  const quizId = params.id as string;

  const [result, setResult] = useState<AttemptResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        setLoading(true);
        const res = await api.get('/quiz/attempt/' + attemptId);
        if (res.data.success && res.data.attempt) {
          setResult(res.data.attempt);
        }
      } catch (err) {
        console.error('Failed to load attempt result:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [attemptId]);

  if (loading || !result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-xs font-semibold text-slate-400">Synthesizing AI scorecard and Bloom metrics...</p>
      </div>
    );
  }

  const { score, maxScore, percentage, isPassed, timeTakenSeconds, tabSwitchCount, aiFeedbackSummary, quiz, questionReview } = result;

  return (
    <ProtectedRoute allowedRoles={['Student', 'Educator']}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/dashboard/student"
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Student Dashboard</span>
          </Link>
          <Link
            href={'/quiz/' + quizId + '/take'}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-300 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Assessment</span>
          </Link>
        </div>

        {/* Score Header Card */}
        <div
          className={'rounded-3xl p-8 text-white shadow-2xl mb-8 border relative overflow-hidden ' +
            (isPassed
              ? 'bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border-emerald-500/40'
              : 'bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 border-rose-500/40')}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative z-10">
            <div>
              <span
                className={'inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-2 border ' +
                  (isPassed
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
                    : 'bg-rose-500/20 text-rose-300 border-rose-400/30')}
              >
                {isPassed ? 'Assessment Mastered' : 'Needs Concept Revision'}
              </span>
              <h1 className="text-3xl font-black tracking-tight">{quiz.title}</h1>
              <p className="text-xs text-slate-400 mt-1">Topic: {quiz.topic} • Difficulty: {quiz.difficulty}</p>
            </div>

            {/* Score Ring */}
            <div className="bg-slate-950/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 text-center min-w-[170px] shadow-2xl">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Total Accuracy</p>
              <p className={'text-4xl font-black mt-1 ' + (isPassed ? 'text-emerald-400' : 'text-rose-400')}>
                {percentage}%
              </p>
              <p className="text-xs font-semibold text-slate-400 mt-0.5">{score} / {maxScore} Marks</p>
            </div>
          </div>
        </div>

        {/* AI Diagnostic Review Box */}
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-indigo-500/30 p-6 shadow-xl mb-8 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2 text-indigo-400 font-black text-base">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>AI Diagnostic Rationale & Learning Recommendations</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">{aiFeedbackSummary}</p>

          <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>Time Taken: {Math.floor(timeTakenSeconds / 60)}m {timeTakenSeconds % 60}s</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Passing Target: {quiz.passPercentage}%</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <ShieldAlert className={'w-4 h-4 ' + (tabSwitchCount > 0 ? 'text-amber-400' : 'text-emerald-400')} />
              <span>Focus Loss Incidents: {tabSwitchCount}</span>
            </div>
          </div>
        </div>

        {/* Question Breakdown */}
        <div className="space-y-6">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <span>Question Performance Breakdown ({questionReview.length} Questions)</span>
          </h2>

          {questionReview.map((item, idx) => (
            <div
              key={idx}
              className={'bg-slate-900/80 backdrop-blur-xl rounded-3xl border p-6 shadow-xl transition-all ' +
                (item.isCorrect ? 'border-emerald-500/30' : 'border-rose-500/30')}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-300">Question {idx + 1}</span>
                  <span className="text-[10px] text-purple-300 bg-purple-950/60 border border-purple-800/40 px-2 py-0.5 rounded-full font-bold uppercase">
                    {item.bloomLevel}
                  </span>
                  <span className="text-[10px] text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded-full font-bold">
                    {item.points} Marks
                  </span>
                </div>

                <div>
                  {item.isCorrect ? (
                    <span className="flex items-center gap-1 text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/40 text-xs font-bold">
                      <CheckCircle className="w-3.5 h-3.5" /> Correct (+{item.points})
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-rose-300 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-500/40 text-xs font-bold">
                      <XCircle className="w-3.5 h-3.5" /> Incorrect (0/{item.points})
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm font-semibold text-white mb-4">{item.questionText}</p>

              {/* Options */}
              <div className="space-y-2 mb-4">
                {item.options.map((opt, optIdx) => {
                  const isUserAnswer = item.selectedOption === optIdx;
                  const isCorrectAnswer = item.correctAnswer === optIdx;

                  let rowStyle = 'border-slate-800 bg-slate-950/50 text-slate-300';
                  if (isCorrectAnswer) {
                    rowStyle = 'border-emerald-500/60 bg-emerald-950/40 text-emerald-200 font-bold';
                  } else if (isUserAnswer && !item.isCorrect) {
                    rowStyle = 'border-rose-500/60 bg-rose-950/40 text-rose-200 font-bold';
                  }

                  return (
                    <div key={optIdx} className={'p-3 rounded-2xl border text-xs flex items-center justify-between ' + rowStyle}>
                      <div className="flex items-center gap-3">
                        <span className="font-bold w-4">{String.fromCharCode(65 + optIdx)}.</span>
                        <span>{opt}</span>
                      </div>
                      {isCorrectAnswer && (
                        <span className="text-[9px] uppercase font-black bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-md">
                          Verified Correct
                        </span>
                      )}
                      {isUserAnswer && !isCorrectAnswer && (
                        <span className="text-[9px] uppercase font-black bg-rose-500 text-slate-950 px-2 py-0.5 rounded-md">
                          Your Choice
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {item.explanation && (
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400">
                  <strong className="text-indigo-400">AI Diagnostic Rationale: </strong>
                  {item.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}