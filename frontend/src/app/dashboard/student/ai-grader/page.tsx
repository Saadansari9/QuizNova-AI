'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import {
  Sparkles,
  ArrowLeft,
  Cpu,
  BookOpen,
  Award,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  FileText,
  Send,
  Zap,
  Layers,
  GraduationCap,
  RotateCcw,
} from 'lucide-react';
import { SubjectiveGradeResult } from '@/lib/geminiService';

const SAMPLE_BOARD_QUESTIONS = [
  {
    standard: 'Class 10 (SSC)',
    subject: 'Science & Technology 1',
    topic: 'Chapter 1: Gravitation',
    question: "State and explain Kepler's Three Laws of Planetary Motion. Give the mathematical relation for the harmonic law.",
    maxMarks: 5,
    sampleDraft:
      "Kepler's first law states that the orbit of a planet is an ellipse with the Sun at one of the foci. Second law states that the line joining the planet and the Sun sweeps equal areas in equal intervals of time. Third law states that the square of orbital period T is directly proportional to the cube of mean distance r from Sun, T^2 ∝ r^3.",
  },
  {
    standard: 'Class 10 (SSC)',
    subject: 'Science & Technology 1',
    topic: 'Chapter 1: Gravitation',
    question: 'Distinguish between mass and weight. What happens to the weight of an object when taken to the surface of the Moon?',
    maxMarks: 4,
    sampleDraft:
      'Mass is the amount of matter present in an object, while weight is the force with which the Earth attracts the object (W = mg). Mass is a scalar quantity and remains constant everywhere, whereas weight is a vector quantity that depends on the value of g. On the Moon, since acceleration due to gravity is 1/6th of Earth, the weight of an object becomes 1/6th of its weight on Earth, but mass remains unchanged.',
  },
  {
    standard: 'Class 12 (HSC)',
    subject: 'Computer Science',
    topic: 'Operating Systems',
    question: 'Define a deadlock in an operating system. Explain the four Coffman conditions necessary for a deadlock to occur.',
    maxMarks: 5,
    sampleDraft:
      'A deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process. The four conditions are: 1. Mutual Exclusion (only one process uses a resource at a time), 2. Hold and Wait (processes hold allocated resources while waiting for additional ones), 3. No Preemption (resources cannot be forcibly taken), 4. Circular Wait (a circular chain of processes exists where each waits for a resource held by the next).',
  },
];

export default function AIGraderPage() {
  const [selectedSampleIdx, setSelectedSampleIdx] = useState(0);
  const [question, setQuestion] = useState(SAMPLE_BOARD_QUESTIONS[0].question);
  const [studentAnswer, setStudentAnswer] = useState(SAMPLE_BOARD_QUESTIONS[0].sampleDraft);
  const [standard, setStandard] = useState(SAMPLE_BOARD_QUESTIONS[0].standard);
  const [subject, setSubject] = useState(SAMPLE_BOARD_QUESTIONS[0].subject);
  const [maxMarks, setMaxMarks] = useState(SAMPLE_BOARD_QUESTIONS[0].maxMarks);
  const [customApiKey, setCustomApiKey] = useState('');

  const [isEvaluating, setIsEvaluating] = useState(false);
  const [result, setResult] = useState<SubjectiveGradeResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSelectSample = (idx: number) => {
    setSelectedSampleIdx(idx);
    const item = SAMPLE_BOARD_QUESTIONS[idx];
    setQuestion(item.question);
    setStudentAnswer(item.sampleDraft);
    setStandard(item.standard);
    setSubject(item.subject);
    setMaxMarks(item.maxMarks);
    setResult(null);
  };

  const handleEvaluate = async () => {
    if (!question.trim() || !studentAnswer.trim()) {
      setErrorMsg('Please enter both the question and your written answer.');
      return;
    }

    setErrorMsg(null);
    setIsEvaluating(true);

    try {
      const res = await fetch('/api/ai/grade-subjective', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          studentAnswer,
          standard,
          subject,
          maxMarks,
          apiKey: customApiKey.trim() || undefined,
        }),
      });

      const data = await res.json();
      if (data.success && data.evaluation) {
        setResult(data.evaluation);
      } else {
        setErrorMsg(data.message || 'Evaluation encountered an issue.');
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'Failed to connect to AI evaluation server.');
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <ProtectedRoute allowedRoles={['Student', 'Educator']}>
      <div className="min-h-screen bg-[#0c0d14] text-white p-4 sm:p-6 lg:p-8 font-minecraft">
        <div className="max-w-6xl mx-auto">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-black">
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard/student"
                className="pixel-btn p-2 bg-[#171926] text-slate-300 hover:text-white flex items-center justify-center cursor-pointer shadow-[2px_2px_0_0_#000]"
                title="Back to Dashboard"
              >
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <div>
                <span className="text-[10px] text-[#38E5FF] font-mono uppercase bg-black px-2 py-0.5 border border-[#38E5FF]/40 inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#FFD000]" /> GEMINI 1.5 COGNITIVE EVALUATOR
                </span>
                <h1 className="text-xl sm:text-2xl font-black uppercase text-white mt-1">
                  AI Theory &amp; Subjective Answer Grader
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#27E279] bg-black px-2.5 py-1 border border-[#27E279]/50">
                ● SSC/HSC BOARD RUBRIC
              </span>
            </div>
          </div>

          {/* Quick Board PYQ Presets */}
          <div className="pixel-box bg-[#171926] p-4 mb-6 text-left">
            <span className="block text-[10px] text-[#FFD000] uppercase font-bold mb-2">
              SELECT OFFICIAL BOARD QUESTION PRESET:
            </span>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_BOARD_QUESTIONS.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectSample(idx)}
                  className={`px-3 py-1.5 text-[10px] uppercase font-bold border-2 border-black transition-all cursor-pointer ${
                    selectedSampleIdx === idx
                      ? 'bg-[#38E5FF] text-black shadow-[2px_2px_0_0_#000]'
                      : 'bg-[#0c0d14] text-slate-300 hover:text-white'
                  }`}
                >
                  [{item.standard} · {item.topic.split(':')[1] || item.topic}]
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            {/* Left Column: Input Question & Student Answer */}
            <div className="lg:col-span-7 space-y-4">
              <div className="pixel-box bg-[#171926] p-5 border-2 border-black">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] font-bold text-yellow-300 uppercase">
                    BOARD QUESTION PROMPT
                  </label>
                  <span className="text-[10px] font-mono text-[#38E5FF] bg-black px-2 py-0.5 border border-black">
                    MAX MARKS: {maxMarks}
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Enter the examination question or board problem statement..."
                  className="w-full p-3 bg-[#0c0d14] border-2 border-black text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38E5FF] shadow-[2px_2px_0_0_#000]"
                />
              </div>

              <div className="pixel-box bg-[#171926] p-5 border-2 border-black">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] font-bold text-yellow-300 uppercase">
                    YOUR WRITTEN ANSWER (STUDENT SUBMISSION)
                  </label>
                  <span className="text-[10px] font-mono text-slate-400">
                    {studentAnswer.trim() ? studentAnswer.trim().split(/\s+/).length : 0} WORDS
                  </span>
                </div>
                <textarea
                  rows={8}
                  value={studentAnswer}
                  onChange={(e) => setStudentAnswer(e.target.value)}
                  placeholder="Type your complete descriptive theory answer here..."
                  className="w-full p-3 bg-[#0c0d14] border-2 border-black text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-[#27E279] shadow-[2px_2px_0_0_#000] leading-relaxed"
                />

                {/* Optional Custom Gemini Key */}
                <div className="mt-3 pt-3 border-t border-slate-800">
                  <label className="block text-[9px] text-slate-400 uppercase font-mono mb-1">
                    GOOGLE GEMINI API KEY (OPTIONAL · LEAVE BLANK FOR BUILT-IN EVALUATOR):
                  </label>
                  <input
                    type="password"
                    value={customApiKey}
                    onChange={(e) => setCustomApiKey(e.target.value)}
                    placeholder="AIzaSy... (optional key for live Gemini 1.5 Flash)"
                    className="w-full px-2.5 py-1.5 bg-[#0c0d14] border border-slate-700 text-[10px] font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38E5FF]"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setStudentAnswer('');
                      setResult(null);
                    }}
                    className="pixel-btn px-3 py-2 bg-[#121420] text-slate-400 hover:text-white text-[10px] uppercase flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>CLEAR</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEvaluate}
                    disabled={isEvaluating}
                    className="pixel-btn px-6 py-2.5 bg-[#27E279] hover:bg-[#20c767] text-black font-bold text-xs uppercase flex items-center gap-2 cursor-pointer shadow-[3px_3px_0_0_#000] disabled:opacity-60"
                  >
                    {isEvaluating ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent animate-spin"></div>
                        <span>GEMINI AI EVALUATING...</span>
                      </>
                    ) : (
                      <>
                        <Cpu className="w-4 h-4 text-black" />
                        <span>[ EVALUATE THEORY ANSWER NOW ]</span>
                      </>
                    )}
                  </button>
                </div>

                {errorMsg && (
                  <div className="mt-3 p-2.5 bg-red-950/80 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: AI Examiner Scorecard & Feedback */}
            <div className="lg:col-span-5">
              {result ? (
                <div className="pixel-box bg-[#171926] p-5 sm:p-6 border-2 border-black shadow-[6px_6px_0_0_#000] space-y-5 animate-in fade-in duration-300">
                  {/* Score Cockpit Banner */}
                  <div className="p-4 bg-[#0c0d14] border-2 border-black text-center relative overflow-hidden">
                    <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">
                      OFFICIAL EXAMINER SCORE
                    </span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-[#FFD000] tracking-tight">
                        {result.score}
                      </span>
                      <span className="text-xl sm:text-2xl text-slate-500 font-bold">
                        / {result.maxMarks}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-black text-[#27E279] border border-black">
                        {result.percentage}% EFFICIENCY
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-black text-[#38E5FF] border border-black uppercase">
                        BLOOM: {result.bloomLevel}
                      </span>
                    </div>
                  </div>

                  {/* Examiner Remarks */}
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase flex items-center gap-1.5 mb-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#38E5FF]" /> EXAMINER FEEDBACK
                    </h3>
                    <p className="text-xs font-mono text-slate-300 leading-relaxed bg-[#0c0d14] p-3 border border-slate-800">
                      {result.feedback}
                    </p>
                  </div>

                  {/* Missing Keypoints */}
                  {result.missingKeypoints && result.missingKeypoints.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold text-[#FF4582] uppercase flex items-center gap-1.5 mb-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#FF4582]" /> KEYWORDS &amp; FORMULAS MISSED:
                      </h3>
                      <ul className="space-y-1.5 text-xs font-mono text-slate-300">
                        {result.missingKeypoints.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 bg-red-950/20 p-2 border-l-2 border-[#FF4582]">
                            <span className="text-[#FF4582] font-bold">✗</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Strengths */}
                  {result.strengths && result.strengths.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold text-[#27E279] uppercase flex items-center gap-1.5 mb-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#27E279]" /> CONCEPT STRENGTHS:
                      </h3>
                      <ul className="space-y-1.5 text-xs font-mono text-slate-300">
                        {result.strengths.map((st, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2 bg-emerald-950/20 p-2 border-l-2 border-[#27E279]">
                            <span className="text-[#27E279] font-bold">✓</span>
                            <span>{st}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Model Answer */}
                  <div>
                    <h3 className="text-xs font-bold text-[#FFD000] uppercase flex items-center gap-1.5 mb-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-[#FFD000]" /> MODEL ANSWER FOR 100% MARKS:
                    </h3>
                    <p className="text-xs font-mono text-amber-200/90 leading-relaxed bg-amber-950/20 p-3 border border-amber-800/40">
                      {result.modelAnswer}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="pixel-box bg-[#171926] p-8 border-2 border-black text-center flex flex-col items-center justify-center min-h-[350px]">
                  <Cpu className="w-12 h-12 text-[#38E5FF] mb-3 animate-pulse" />
                  <h3 className="text-sm font-bold text-white uppercase">AI EXAMINER READY</h3>
                  <p className="text-xs font-mono text-slate-400 mt-2 max-w-xs">
                    Write or edit your theory answer on the left and click Evaluate to receive real-time board grading, missed formulas, and model answers!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
