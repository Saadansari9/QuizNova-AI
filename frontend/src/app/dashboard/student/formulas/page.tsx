'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { api } from '@/lib/api';
import { StudyResource } from '@/types/quiz';
import {
  Zap,
  FlaskConical,
  Briefcase,
  Palette,
  Layers,
  Copy,
  Check,
  Search,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';

interface ParsedFormula {
  topic: string;
  formula: string;
  description: string;
}

export default function FormulasVaultPage() {
  const [resources, setResources] = useState<StudyResource[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  const fetchFormulas = async () => {
    try {
      setLoading(true);
      const res = await api.get('/resources?category=FORMULA');
      if (res.data.success) {
        setResources(res.data.resources || []);
      }
    } catch (err) {
      console.error('Failed to load formulas:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFormulas();
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormula(text);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  const filteredResources = useMemo(() => {
    return resources.filter((res) => {
      if (selectedStream !== 'all' && res.stream.toLowerCase() !== selectedStream.toLowerCase()) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          res.title.toLowerCase().includes(q) ||
          res.subject.toLowerCase().includes(q) ||
          res.content.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [resources, selectedStream, searchQuery]);

  return (
    <ProtectedRoute allowedRoles={['Student']}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/dashboard/student"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Student Dashboard</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard/student/pyqs"
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
            >
              📜 Board PYQs
            </Link>
            <Link
              href="/dashboard/student/textbooks"
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
            >
              📚 Balbharati Books
            </Link>
          </div>
        </div>

        {/* Header Banner */}
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-cyan-950/20 to-slate-900 p-8 shadow-2xl mb-8 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wider mb-3 border border-cyan-500/30">
              <Zap className="w-3.5 h-3.5" /> Department-Wise Formula Vault
            </span>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Formula & Quick Concept Revision Sheets
            </h1>
            <p className="text-slate-300 text-xs mt-2 leading-relaxed">
              Quickly revise formulas, mathematical equations, accounting golden rules, financial ratios, and constitutional matrices across Science, Commerce, and Arts.
            </p>
          </div>
        </div>

        {/* Department Filters & Search */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-5 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
            {[
              { id: 'all', label: '📚 All Departments', icon: Layers },
              { id: 'Science', label: '🧪 Science Formulas', icon: FlaskConical },
              { id: 'Commerce', label: '📊 Commerce Rules & Ratios', icon: Briefcase },
              { id: 'Arts', label: '🎨 Arts Concepts & Articles', icon: Palette },
            ].map((st) => {
              const IconComp = st.icon;
              return (
                <button
                  key={st.id}
                  onClick={() => setSelectedStream(st.id)}
                  className={'px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ' +
                    (selectedStream === st.id
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-extrabold'
                      : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800')}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{st.label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search formula, law or concept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Formula Sheets Cards */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-900 rounded-3xl border border-slate-800 p-6 animate-pulse">
                <div className="h-5 bg-slate-800 rounded w-1/3 mb-4"></div>
                <div className="h-20 bg-slate-800 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : filteredResources.length === 0 ? (
          <div className="bg-slate-900/60 border border-dashed border-slate-800 rounded-3xl p-12 text-center">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="text-base font-bold text-white">No Formula Sheets Match Search</p>
            <p className="text-xs text-slate-400 mt-1">Try changing your department filter or clearing the search query.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredResources.map((res) => {
              let parsedFormulas: ParsedFormula[] = [];
              try {
                parsedFormulas = JSON.parse(res.content);
              } catch {
                parsedFormulas = [];
              }

              return (
                <div
                  key={res.id}
                  className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                          {res.subject}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-800 text-slate-300">
                          {res.standard}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-white">{res.title}</h2>
                      <p className="text-xs text-slate-400 mt-0.5">{res.description}</p>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-xl border border-cyan-800/40 self-start sm:self-center">
                      {parsedFormulas.length} Formulae
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {parsedFormulas.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xs font-bold text-slate-200">{item.topic}</h4>
                            <button
                              onClick={() => handleCopy(item.formula)}
                              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                              title="Copy formula"
                            >
                              {copiedFormula === item.formula ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-cyan-300 font-bold break-all">
                            {item.formula}
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-2.5 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}