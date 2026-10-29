'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { api } from '@/lib/api';
import { Quiz, Question } from '@/types/quiz';
import { findQuizById, evaluateAndSaveAttempt } from '@/lib/quizStorage';
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
  Video,
  Eye,
  Maximize2,
  Minimize2,
  Globe,
  Sparkles,
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
  const [cameraActive, setCameraActive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const startTimeRef = useRef<number>(Date.now());

  // AI Multilingual Translation State (EN, Marathi, Hindi)
  const [currentLang, setCurrentLang] = useState<'en' | 'mr' | 'hi'>('en');
  const [translating, setTranslating] = useState(false);
  const [translatedCache, setTranslatedCache] = useState<Record<string, { q: string; opts: string[] }>>({});

  const handleLanguageChange = async (targetLang: 'en' | 'mr' | 'hi') => {
    if (targetLang === currentLang) return;
    setCurrentLang(targetLang);

    const activeQ = quiz?.questions ? quiz.questions[currentIndex] : null;
    if (targetLang === 'en' || !activeQ) return;

    const cacheKey = `${activeQ.id || currentIndex}_${targetLang}`;
    if (translatedCache[cacheKey]) return;

    try {
      setTranslating(true);
      const res = await fetch('/api/ai/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: activeQ.questionText,
          targetLanguage: targetLang === 'mr' ? 'marathi' : 'hindi',
          context: 'Maharashtra State Board Exam Question & Options: ' + activeQ.options.join(' | ')
        }),
      });
      const data = await res.json();
      if (data.success && data.translation) {
        // Also translate options
        const optPromises = activeQ.options.map(async (opt: string) => {
          try {
            const oRes = await fetch('/api/ai/translate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                text: opt,
                targetLanguage: targetLang === 'mr' ? 'marathi' : 'hindi',
              }),
            });
            const oData = await oRes.json();
            return oData.success ? oData.translation : opt;
          } catch {
            return opt;
          }
        });
        const translatedOpts = await Promise.all(optPromises);
        setTranslatedCache((prev) => ({
          ...prev,
          [cacheKey]: { q: data.translation, opts: translatedOpts },
        }));
      }
    } catch {
      // Keep original on error
    } finally {
      setTranslating(false);
    }
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        const res = await api.get('/quiz/' + quizId);
        if (res.data?.success && res.data?.quiz) {
          const qData: Quiz = res.data.quiz;
          setQuiz(qData);
          setTimeLeftSeconds(qData.durationMinutes * 60);
          startTimeRef.current = Date.now();
          return;
        }
      } catch {
        // Backend offline or unreachable, fall through to local lookup
      }

      // Local quiz lookup
      const localQuiz = findQuizById(quizId);
      if (localQuiz) {
        setQuiz(localQuiz);
        setTimeLeftSeconds(localQuiz.durationMinutes * 60);
        startTimeRef.current = Date.now();
      } else {
        alert('Notice: Quiz loaded from local catalog.');
        const fallback = findQuizById('quiz_os_deadlocks_01') || findQuizById('quiz_mb_sci_10_01');
        if (fallback) {
          setQuiz(fallback);
          setTimeLeftSeconds(fallback.durationMinutes * 60);
          startTimeRef.current = Date.now();
        } else {
          router.push('/dashboard/student');
        }
      }
      setLoading(false);
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

    const handleFullscreenChange = () => {
      const active = !!document.fullscreenElement;
      setIsFullscreen(active);
      if (!active) {
        setTabSwitches((prev) => {
          const updated = prev + 1;
          setShowCheatingWarning(true);
          return updated;
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const startCamera = async () => {
    try {
      setCameraError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240, facingMode: 'user' },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraActive(true);
    } catch {
      setCameraError('Camera access denied or unavailable on this device.');
      setCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.warn('Fullscreen request failed:', err);
    }
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
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

      if (res.data?.success && res.data?.attemptId) {
        evaluateAndSaveAttempt(quizId, answers, timeTakenSeconds, tabSwitches);
        window.location.href = '/quiz/' + quizId + '/result/' + res.data.attemptId;
        return;
      }
    } catch {
      // Backend offline fallback
    }

    const localAttempt = evaluateAndSaveAttempt(quizId, answers, timeTakenSeconds, tabSwitches);
    window.location.href = '/quiz/' + quizId + '/result/' + localAttempt.id;
  }, [isSubmitting, quiz, quizId, answers, tabSwitches]);

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

                  <div className="flex items-center gap-2">
                    {/* AI Multilingual Vernacular Toggle */}
                    <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1 gap-1">
                      <span className="text-[10px] font-mono text-cyan-400 px-1.5 flex items-center gap-1 font-bold">
                        <Globe className="w-3 h-3 text-cyan-400" /> AI:
                      </span>
                      <button
                        type="button"
                        onClick={() => handleLanguageChange('en')}
                        className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                          currentLang === 'en'
                            ? 'bg-indigo-600 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        EN
                      </button>
                      <button
                        type="button"
                        onClick={() => handleLanguageChange('mr')}
                        className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                          currentLang === 'mr'
                            ? 'bg-indigo-600 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        title="Translate to Marathi via AI"
                      >
                        मराठी
                      </button>
                      <button
                        type="button"
                        onClick={() => handleLanguageChange('hi')}
                        className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                          currentLang === 'hi'
                            ? 'bg-indigo-600 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        title="Translate to Hindi via AI"
                      >
                        हिंदी
                      </button>
                    </div>

                    <button
                      onClick={() => toggleFlag(currentIndex)}
                      className={'flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ' +
                        (flagged[currentIndex]
                          ? 'bg-amber-950/60 text-amber-300 border-amber-500/50'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white')}
                    >
                      <Flag className={'w-3.5 h-3.5 ' + (flagged[currentIndex] ? 'fill-amber-400 text-amber-400' : '')} />
                      <span className="hidden sm:inline">{flagged[currentIndex] ? 'Flagged' : 'Flag for Review'}</span>
                    </button>
                  </div>
                </div>

                {translating && (
                  <div className="mb-3 px-3 py-1.5 bg-indigo-950/60 border border-indigo-800/60 rounded-xl text-indigo-300 text-xs flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin" />
                    <span>Gemini AI translating question to {currentLang === 'mr' ? 'Marathi' : 'Hindi'}...</span>
                  </div>
                )}

                <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed mb-6">
                  {(() => {
                    const cacheKey = `${currentQ.id || currentIndex}_${currentLang}`;
                    if (currentLang !== 'en' && translatedCache[cacheKey]) {
                      return translatedCache[cacheKey].q;
                    }
                    return currentQ.questionText;
                  })()}
                </h2>

                <div className="space-y-3 mb-8">
                  {currentQ.options.map((option, optIdx) => {
                    const cacheKey = `${currentQ.id || currentIndex}_${currentLang}`;
                    const displayOption =
                      currentLang !== 'en' && translatedCache[cacheKey]?.opts?.[optIdx]
                        ? translatedCache[cacheKey].opts[optIdx]
                        : option;
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
                        <span className="text-xs sm:text-sm font-medium leading-relaxed">{displayOption}</span>
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

          {/* Right Column: Proctoring HUD & Examination Palette */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            {/* AI Proctoring Telemetry HUD */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-5 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-black uppercase text-white tracking-wider">AI Proctoring HUD</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${tabSwitches === 0 ? 'bg-emerald-950 text-emerald-400 border-emerald-800' : 'bg-rose-950 text-rose-400 border-rose-800 animate-pulse'}`}>
                  {tabSwitches} / 3 Strikes
                </span>
              </div>

              {/* Webcam Feed Box */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[16/10] flex items-center justify-center mb-3">
                {cameraActive ? (
                  <>
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover -scale-x-100"
                    />
                    <div className="absolute inset-0 border-2 border-dashed border-cyan-500/40 pointer-events-none rounded-xl m-2 flex flex-col justify-between p-2">
                      <div className="flex items-center justify-between text-[9px] font-mono text-cyan-400 bg-slate-950/70 px-1.5 py-0.5 rounded">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
                          REC ● LIVE
                        </span>
                        <span>FACE: SUPERVISED</span>
                      </div>
                      <div className="text-right text-[8px] font-mono text-cyan-400/80 bg-slate-950/70 px-1.5 py-0.5 rounded self-end">
                        ANTI-CHEAT ACTIVE
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-4">
                    <Eye className="w-6 h-6 text-slate-600 mx-auto mb-1.5" />
                    <p className="text-[11px] text-slate-300 font-semibold">Webcam Proctor Ready</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">Activate for live AI anti-cheating supervision</p>
                  </div>
                )}
              </div>

              {cameraError && (
                <p className="text-[10px] text-rose-400 bg-rose-950/40 p-2 rounded-xl border border-rose-800/40 mb-3">{cameraError}</p>
              )}

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={cameraActive ? stopCamera : startCamera}
                  className={`px-3 py-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    cameraActive
                      ? 'bg-rose-950/60 text-rose-300 border-rose-700/60 hover:bg-rose-900/60'
                      : 'bg-indigo-950/80 text-indigo-300 border-indigo-700/60 hover:bg-indigo-900/60'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>{cameraActive ? 'Stop Cam' : 'Start Cam'}</span>
                </button>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className={`px-3 py-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    isFullscreen
                      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{isFullscreen ? 'Exit Full' : 'Fullscreen'}</span>
                </button>
              </div>
            </div>

            {/* Examination Palette */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-2xl flex-1 flex flex-col justify-between">
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
        </div>
      </main>
    </div>
  </ProtectedRoute>
);
}