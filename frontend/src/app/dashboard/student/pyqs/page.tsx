'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  MAHARASHTRA_BOARD_PYQ_PAPERS,
  BoardPyqPaper,
} from '@/data/maharashtraBoardPyqPapers';
import {
  FileText,
  Calendar,
  Layers,
  Search,
  ArrowLeft,
  Printer,
  X,
  BookOpen,
  Award,
  Clock,
  Eye,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

export default function PyqsVaultPage() {
  const [selectedDecade, setSelectedDecade] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [selectedStandard, setSelectedStandard] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Active question paper opened in modal for reading / printing
  const [activePaper, setActivePaper] = useState<BoardPyqPaper | null>(null);

  // List of all available years in dataset
  const availableYears = useMemo(() => {
    const yearsSet = new Set<number>();
    MAHARASHTRA_BOARD_PYQ_PAPERS.forEach((p) => yearsSet.add(p.year));
    return Array.from(yearsSet).sort((a, b) => b - a);
  }, []);

  // Filtered papers
  const filteredPapers = useMemo(() => {
    return MAHARASHTRA_BOARD_PYQ_PAPERS.filter((p) => {
      // Decade filter
      if (selectedDecade !== 'all') {
        if (selectedDecade === '2020s' && (p.year < 2020 || p.year > 2026)) return false;
        if (selectedDecade === '2010s' && (p.year < 2010 || p.year > 2019)) return false;
        if (selectedDecade === '2000s' && (p.year < 2000 || p.year > 2009)) return false;
        if (selectedDecade === '1990s' && (p.year < 1990 || p.year > 1999)) return false;
      }

      // Exact Year filter
      if (selectedYear !== 'all' && p.year.toString() !== selectedYear) {
        return false;
      }

      // Stream filter
      if (selectedStream !== 'all' && p.stream.toLowerCase() !== selectedStream.toLowerCase()) {
        return false;
      }

      // Standard filter
      if (selectedStandard !== 'all') {
        const cleanStd = selectedStandard.toLowerCase().replace(' (ssc)', '').replace(' (hsc)', '');
        if (!p.standard.toLowerCase().includes(cleanStd)) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          p.paperTitle.toLowerCase().includes(q) ||
          p.subject.toLowerCase().includes(q) ||
          p.year.toString().includes(q)
        );
      }

      return true;
    });
  }, [selectedDecade, selectedYear, selectedStream, selectedStandard, searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Link
            href="/dashboard/student"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Student Dashboard</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard/student/textbooks"
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>All Textbooks Library</span>
            </Link>
            <Link
              href="/dashboard/student/formulas"
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
            >
              ⚡ Formulas
            </Link>
          </div>
        </div>

        {/* Header Banner */}
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 p-8 shadow-2xl mb-8 relative overflow-hidden print:hidden">
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider mb-3 border border-amber-500/30">
              <Calendar className="w-3.5 h-3.5" /> 1990 — 2026 Maharashtra State Board Archive
            </span>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Official Board Question Papers Vault
            </h1>
            <p className="text-slate-300 text-xs mt-2 leading-relaxed">
              Genuine subjective board examination question papers from <strong>1990 to 2026 (36 Years)</strong> for SSC (Class 10) & HSC (Class 12). Pure questions with section weightages, diagrams, and derivations — no MCQs, no answer keys.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 mb-8 shadow-xl space-y-5 print:hidden">
          {/* Decade Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                1. Select Board Exam Era / Decade:
              </label>
              <span className="text-xs font-mono text-amber-400 font-bold">
                Showing {filteredPapers.length} Question Papers
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[
                { id: 'all', label: '🌐 All Eras (1990-2026)' },
                { id: '2020s', label: '🌟 2020 - 2026 (Modern)' },
                { id: '2010s', label: '🏛️ 2010 - 2019 (Golden)' },
                { id: '2000s', label: '📜 2000 - 2009 (Millennium)' },
                { id: '1990s', label: '⏳ 1990 - 1999 (Classic)' },
              ].map((dec) => (
                <button
                  key={dec.id}
                  onClick={() => {
                    setSelectedDecade(dec.id);
                    setSelectedYear('all');
                  }}
                  className={'px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border text-center ' +
                    (selectedDecade === dec.id
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/30 font-extrabold scale-[1.02]'
                      : 'bg-slate-950/60 hover:bg-slate-800 text-slate-300 border-slate-800')}
                >
                  {dec.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Selectors */}
          <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Year Dropdown */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Exact Board Examination Year:
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500 font-semibold cursor-pointer"
              >
                <option value="all">All Years (1990 - 2026)</option>
                {availableYears.map((yr) => (
                  <option key={yr} value={yr.toString()}>
                    {yr} Maharashtra Board Examination Paper
                  </option>
                ))}
              </select>
            </div>

            {/* Stream */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Academic Stream:
              </label>
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500 font-semibold cursor-pointer"
              >
                <option value="all">All Streams</option>
                <option value="Science">🧪 Science Stream (Physics, Chemistry, Math)</option>
                <option value="Commerce">📊 Commerce Stream (Accounts, Economics)</option>
                <option value="Arts">🎨 Arts Stream (Political Science)</option>
                <option value="General">📘 SSC Class 10 (Science Part 1)</option>
              </select>
            </div>

            {/* Standard */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Standard / Board Level:
              </label>
              <select
                value={selectedStandard}
                onChange={(e) => setSelectedStandard(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500 font-semibold cursor-pointer"
              >
                <option value="all">All Classes (SSC & HSC)</option>
                <option value="Class 10">🏆 Class 10 (SSC Board)</option>
                <option value="Class 12">🏅 Class 12 (HSC Board)</option>
              </select>
            </div>
          </div>

          {/* Search & Reset */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search subject or year (e.g. Physics 2024, Accounts 1995)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              onClick={() => {
                setSelectedDecade('all');
                setSelectedYear('all');
                setSelectedStream('all');
                setSelectedStandard('all');
                setSearchQuery('');
              }}
              className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        </div>

        {/* Papers Grid */}
        <div className="space-y-4 print:hidden">
          {filteredPapers.length === 0 ? (
            <div className="bg-slate-900/60 border border-dashed border-slate-800 rounded-3xl p-12 text-center">
              <FileText className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <p className="text-base font-bold text-white">No Board Papers Found</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                No question papers match your current search criteria. Click "Reset All Filters".
              </p>
            </div>
          ) : (
            filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      📜 {paper.year} Board Exam Paper
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-800 text-slate-200">
                      {paper.standard}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                      {paper.stream} Stream
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" /> {paper.timeAllowed} • Max Marks: {paper.maximumMarks}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {paper.paperTitle}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Official descriptive questions covering Section A (Short Answers), Section B (Explanatory) and Section C/D (Long Questions & Derivations).
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => setActivePaper(paper)}
                    className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Question Paper</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal: Full Official Question Paper Viewer */}
        {activePaper && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative">
              {/* Modal Top Actions */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6 print:hidden">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                    Official Question Paper ({activePaper.year})
                  </span>
                  <span className="text-xs text-slate-400">Pure Questions • No Answers</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / Save PDF</span>
                  </button>
                  <button
                    onClick={() => setActivePaper(null)}
                    className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Physical Board Paper Header */}
              <div className="text-center pb-6 border-b-2 border-slate-700 mb-8">
                <h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-400">
                  Maharashtra State Board of Secondary and Higher Secondary Education, Pune
                </h2>
                <h1 className="text-xl sm:text-2xl font-black text-white mt-1 tracking-tight">
                  {activePaper.standard} BOARD EXAMINATION — MARCH {activePaper.year}
                </h1>
                <p className="text-sm font-bold text-amber-400 mt-1">
                  SUBJECT: {activePaper.subject.toUpperCase()} ({activePaper.stream.toUpperCase()} STREAM)
                </p>

                <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-300 mt-4 px-4 py-2 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span>Time Allowed: {activePaper.timeAllowed}</span>
                  <span>Maximum Marks: {activePaper.maximumMarks}</span>
                </div>
              </div>

              {/* General Instructions */}
              <div className="bg-slate-950/60 rounded-2xl border border-slate-800 p-4 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  General Instructions to Candidates:
                </h4>
                <ul className="space-y-1">
                  {activePaper.generalInstructions.map((ins, i) => (
                    <li key={i} className="text-xs text-slate-400">
                      {ins}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections & Questions */}
              <div className="space-y-8">
                {activePaper.sections.map((section, sIdx) => (
                  <div key={sIdx} className="border border-slate-800 rounded-2xl p-5 bg-slate-950/40">
                    <div className="pb-3 mb-4 border-b border-slate-800 flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-extrabold text-amber-300 tracking-wide">
                          {section.sectionTitle}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">{section.instructions}</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      {section.questions.map((q, qIdx) => (
                        <div key={qIdx} className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <span className="font-bold text-xs text-indigo-400 mr-2">
                              {q.qNumber}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed">
                              {q.questionText}
                            </span>
                          </div>
                          <span className="font-mono text-xs font-extrabold text-amber-400 flex-shrink-0 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                            [{q.marks} Marks]
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* End of paper */}
              <div className="text-center pt-8 mt-8 border-t border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-widest">
                — END OF QUESTION PAPER —
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
