'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { api } from '@/lib/api';
import { Question } from '@/types/quiz';
import {
  Sparkles,
  Plus,
  Trash2,
  Save,
  ArrowLeft,
  Sliders,
  HelpCircle,
  BookOpen,
  AlertCircle,
  Zap,
} from 'lucide-react';

export default function EducatorCreateQuizPage() {
  const router = useRouter();

  const [aiTopic, setAiTopic] = useState('Operating Systems - Deadlocks & Virtual Memory');
  const [aiCount, setAiCount] = useState(5);
  const [aiDifficulty, setAiDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [isGenerating, setIsGenerating] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [durationMinutes, setDurationMinutes] = useState(30);
  const [passPercentage, setPassPercentage] = useState(40);
  const [allowOffline, setAllowOffline] = useState(true);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const quickTopics = [
    'Operating Systems - Deadlocks',
    'Computer Networks - TCP/IP',
    'Neural Networks & Backprop',
    'Database - Normalization & ACID',
    'Data Structures - Trees & Graphs',
  ];

  const handleGenerateAI = async () => {
    if (!aiTopic.trim()) {
      setErrorMsg('Please enter a valid topic for AI generation.');
      return;
    }
    setErrorMsg(null);
    setIsGenerating(true);

    try {
      const res = await api.post('/quiz/generate-ai', {
        topic: aiTopic,
        count: Number(aiCount),
        difficulty: aiDifficulty,
      });

      if (res.data.success && res.data.questions) {
        setQuestions(res.data.questions);
        if (!title) setTitle(aiTopic + ' - AI Examination');
        if (!topic) setTopic(aiTopic);
        if (!description) setDescription('Comprehensive assessment on ' + aiTopic + " aligned with Bloom's Taxonomy criteria.");
        setDifficulty(aiDifficulty);
      }
    } catch (err: any) {
      setErrorMsg(err.response?.data?.message || 'Failed to generate questions. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: 'Enter custom question prompt here...',
        questionType: 'MCQ',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: 0,
        explanation: 'AI concept rationale for this question.',
        bloomLevel: 'Understanding',
        points: 2,
      },
    ]);
  };

  const handleUpdateQuestion = (index: number, field: keyof Question, value: any) => {
    const updated = [...questions];
    (updated[index] as any)[field] = value;
    setQuestions(updated);
  };

  const handleUpdateOption = (qIndex: number, optIndex: number, text: string) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = text;
    setQuestions(updated);
  };

  const handleRemoveQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSaveQuiz = async () => {
    if (!title.trim() || !description.trim() || !topic.trim()) {
      setErrorMsg('Please fill in Quiz Title, Topic, and Description.');
      return;
    }
    if (questions.length === 0) {
      setErrorMsg('Please add or generate at least 1 question.');
      return;
    }

    setErrorMsg(null);
    setIsSaving(true);

    try {
      const res = await api.post('/quiz/create', {
        title,
        description,
        topic,
        difficulty,
        durationMinutes: Number(durationMinutes),
        passPercentage: Number(passPercentage),
        allowOffline,
        questions,
      });

      if (res.data.success) {
        router.push('/dashboard/educator');
      }
    } catch (err: any) {
      setErrorMsg(err.response?.data?.message || 'Failed to save quiz.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <ProtectedRoute allowedRoles={['Educator']}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/dashboard/educator"
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Educator Dashboard</span>
          </Link>
          <button
            onClick={handleSaveQuiz}
            disabled={isSaving || questions.length === 0}
            className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-500/25 flex items-center gap-2 disabled:opacity-50 cursor-pointer transition-all hover:scale-105"
          >
            {isSaving ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>Publish & Deploy Quiz</span>
          </button>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-950/50 border border-rose-800/60 flex items-start gap-3 text-rose-300 text-xs">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
            <div>
              <p className="font-bold">Notice</p>
              <p className="text-rose-400 mt-0.5">{errorMsg}</p>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-slate-900 via-purple-950/80 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-purple-800/50 shadow-2xl mb-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-2.5 mb-2">
            <span className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <Sparkles className="w-5 h-5 text-purple-400" />
            </span>
            <h2 className="text-xl font-black">AI Question Forge & Bloom Synthesizer</h2>
          </div>
          <p className="text-xs text-purple-200/70 max-w-2xl leading-relaxed">
            Enter your chapter or topic. Our AI automatically designs balanced multiple-choice questions with answer rationales and Bloom's taxonomy cognitive categorization.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-[11px] font-semibold text-slate-400 self-center">Quick Presets:</span>
            {quickTopics.map((t) => (
              <button
                key={t}
                onClick={() => setAiTopic(t)}
                className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 text-purple-200 hover:text-white hover:bg-purple-900/60 border border-purple-500/20 transition-all cursor-pointer"
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-6">
              <label className="block text-[10px] font-bold text-purple-300 uppercase tracking-wider mb-1.5">
                Topic / Subject / Chapter
              </label>
              <input
                type="text"
                value={aiTopic}
                onChange={(e) => setAiTopic(e.target.value)}
                placeholder="e.g. Operating Systems - Deadlocks & Memory"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-purple-500/30 text-white placeholder:text-slate-600 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-[10px] font-bold text-purple-300 uppercase tracking-wider mb-1.5">
                Question Count
              </label>
              <select
                value={aiCount}
                onChange={(e) => setAiCount(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-purple-500/30 text-white text-xs focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value={3}>3 Questions (Quick Drill)</option>
                <option value={5}>5 Questions (Standard Test)</option>
                <option value={10}>10 Questions (Midterm)</option>
                <option value={15}>15 Questions (Final Exam)</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-[10px] font-bold text-purple-300 uppercase tracking-wider mb-1.5">
                Difficulty
              </label>
              <select
                value={aiDifficulty}
                onChange={(e) => setAiDifficulty(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-purple-500/30 text-white text-xs focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="Easy">Easy (Foundational)</option>
                <option value="Medium">Medium (Conceptual)</option>
                <option value="Hard">Hard (Advanced)</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              onClick={handleGenerateAI}
              disabled={isGenerating}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2 disabled:opacity-60 cursor-pointer hover:scale-105"
            >
              {isGenerating ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Synthesizing Bloom Questions...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Generate AI Questions Now</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl mb-8">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-indigo-400" />
            <span>Quiz Metadata & Exam Configuration</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Quiz Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. CS301 - Operating Systems Midterm Assessment"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/60 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Topic / Discipline
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. Operating Systems"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/60 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Difficulty
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Description & Instructions
              </label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Instructions for students regarding timing and focus rules..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/60 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Exam Duration (Minutes)
              </label>
              <input
                type="number"
                min={5}
                max={180}
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/60 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Pass Percentage (%)
              </label>
              <input
                type="number"
                min={10}
                max={100}
                value={passPercentage}
                onChange={(e) => setPassPercentage(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/60 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="sm:col-span-2 flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div>
                <p className="text-xs font-bold text-slate-200">Enable Encrypted Offline Exam Mode</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Students can export package and take tests in offline computer labs</p>
              </div>
              <input
                type="checkbox"
                checked={allowOffline}
                onChange={(e) => setAllowOffline(e.target.checked)}
                className="w-4 h-4 text-indigo-500 rounded border-slate-800 focus:ring-indigo-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>Questions ({questions.length})</span>
            </h3>
            <button
              onClick={handleAddQuestion}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Question</span>
            </button>
          </div>

          {questions.length === 0 ? (
            <div className="bg-slate-900/60 border border-dashed border-slate-800 rounded-3xl p-12 text-center">
              <Sparkles className="w-10 h-10 text-purple-400/50 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-300">No Questions In This Exam Set</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Generate questions using the AI Question Forge above or add them manually.
              </p>
            </div>
          ) : (
            questions.map((q, qIndex) => (
              <div key={qIndex} className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center text-xs font-bold">
                      Q{qIndex + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950/60 border border-purple-800/40 px-2.5 py-1 rounded-full">
                      {q.bloomLevel}
                    </span>
                    <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded-full">
                      {q.points} Mark
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemoveQuestion(qIndex)}
                    className="text-slate-500 hover:text-rose-400 p-1.5 rounded-lg hover:bg-rose-950/30 transition-colors cursor-pointer"
                    title="Remove Question"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="mb-4">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Question Text
                  </label>
                  <textarea
                    rows={2}
                    value={q.questionText}
                    onChange={(e) => handleUpdateQuestion(qIndex, 'questionText', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-950/60 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>

                <div className="space-y-2.5 mb-4">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Answer Choices (Click radio to set the verified correct choice)
                  </label>
                  {q.options.map((opt, optIndex) => (
                    <div
                      key={optIndex}
                      className={'flex items-center gap-3 p-3 rounded-2xl border transition-all ' +
                        (q.correctAnswer === optIndex
                          ? 'border-emerald-500/50 bg-emerald-950/30 ring-1 ring-emerald-500/40'
                          : 'border-slate-800 bg-slate-950/40')}
                    >
                      <input
                        type="radio"
                        name={'correct-' + qIndex}
                        checked={q.correctAnswer === optIndex}
                        onChange={() => handleUpdateQuestion(qIndex, 'correctAnswer', optIndex)}
                        className="w-4 h-4 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                      />
                      <span className="text-xs font-bold text-slate-400 w-4">
                        {String.fromCharCode(65 + optIndex)}.
                      </span>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => handleUpdateOption(qIndex, optIndex, e.target.value)}
                        className="flex-1 px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    AI Diagnostic Concept Explanation
                  </label>
                  <input
                    type="text"
                    value={q.explanation}
                    onChange={(e) => handleUpdateQuestion(qIndex, 'explanation', e.target.value)}
                    placeholder="Why this choice is correct..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-800 bg-slate-950/40 text-xs text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}