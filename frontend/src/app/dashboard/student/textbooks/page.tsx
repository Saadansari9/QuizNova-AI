'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  MAHARASHTRA_ALL_TEXTBOOKS,
  BalbharatiTextbook,
} from '@/data/maharashtraTextbooks';
import {
  getTextbookGuide,
  TextbookStudyGuide,
  TextbookChapter,
} from '@/data/maharashtraTextbookChapters';
import {
  BookOpen,
  ExternalLink,
  Search,
  ArrowLeft,
  Bookmark,
  Layers,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  FileText,
  Sparkles,
  Printer,
  X,
  CheckCircle,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  BookMarked,
  SlidersHorizontal,
  Lightbulb,
} from 'lucide-react';

export default function TextbooksLibraryPage() {
  const [selectedStandard, setSelectedStandard] = useState<string>('all');
  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // In-App Digital Reader Modal States
  const [activeReadingBook, setActiveReadingBook] = useState<BalbharatiTextbook | null>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'theory' | 'formulas' | 'exercises' | 'tips'>('theory');
  const [readerFontSize, setReaderFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [chapterSearch, setChapterSearch] = useState('');
  const [showGovtLinksModal, setShowGovtLinksModal] = useState(false);

  // Close reader on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showGovtLinksModal) {
          setShowGovtLinksModal(false);
        } else if (activeReadingBook) {
          setActiveReadingBook(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeReadingBook, showGovtLinksModal]);

  // Derive Study Guide for active reading book
  const activeGuide: TextbookStudyGuide | null = useMemo(() => {
    if (!activeReadingBook) return null;
    return getTextbookGuide(activeReadingBook);
  }, [activeReadingBook]);

  // Filtered Chapters in Reader Sidebar
  const filteredChapters = useMemo(() => {
    if (!activeGuide) return [];
    if (!chapterSearch.trim()) return activeGuide.chapters;
    const q = chapterSearch.toLowerCase();
    return activeGuide.chapters.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.unit?.toLowerCase().includes(q)
    );
  }, [activeGuide, chapterSearch]);

  const currentChapter: TextbookChapter | undefined = useMemo(() => {
    if (!activeGuide || activeGuide.chapters.length === 0) return undefined;
    return activeGuide.chapters[activeChapterIndex] || activeGuide.chapters[0];
  }, [activeGuide, activeChapterIndex]);

  // Smart Filtering for Main Catalog
  const filteredBooks = useMemo(() => {
    return MAHARASHTRA_ALL_TEXTBOOKS.filter((book) => {
      // Standard filter
      if (selectedStandard !== 'all') {
        const cleanStd = selectedStandard.toLowerCase().replace(' (ssc)', '').replace(' (hsc)', '');
        if (!book.standard.toLowerCase().includes(cleanStd)) return false;
      }

      // Stream filter
      if (selectedStream !== 'all') {
        const isJuniorClass = book.standard.includes('Class 9') || book.standard.includes('Class 10');
        if (!isJuniorClass && book.stream.toLowerCase() !== selectedStream.toLowerCase()) {
          return false;
        }
      }

      // Subject filter
      if (selectedSubject !== 'all') {
        if (!book.subject.toLowerCase().includes(selectedSubject.toLowerCase())) {
          return false;
        }
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          book.title.toLowerCase().includes(q) ||
          book.subject.toLowerCase().includes(q) ||
          book.description.toLowerCase().includes(q) ||
          (book.chapter && book.chapter.toLowerCase().includes(q))
        );
      }

      return true;
    });
  }, [selectedStandard, selectedStream, selectedSubject, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
          <Link
            href="/dashboard/student"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Student Dashboard</span>
          </Link>
          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href="/dashboard/student/pyqs"
              className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>1990-2026 Board PYQs (Subjective Papers)</span>
            </Link>
            <Link
              href="/dashboard/student/formulas"
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
            >
              ⚡ Formulas
            </Link>
          </div>
        </div>

        {/* 100% In-App Availability Banner */}
        <div className="mb-6 p-4 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/40 border border-emerald-500/40 flex items-start gap-4 shadow-xl">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-extrabold text-white text-sm">
                In-App Digital Textbook Reader is Active
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                100% Working & Accessible
              </span>
            </div>
            <p className="text-slate-300 mt-1 leading-relaxed text-xs">
              Maharashtra Government\'s Balbharati server (<code className="text-emerald-300 bg-emerald-950 px-1 py-0.5 rounded">cart.ebalbharati.in</code>) often encounters server timeouts or connectivity blocks. You do not need external links — click <strong className="text-emerald-400">📖 Read In-App</strong> on any book to read complete chapter notes, core principles, formulas, and board exercise questions directly right here!
            </p>
          </div>
        </div>

        {/* Header Banner */}
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900 p-8 shadow-2xl mb-8 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider mb-3 border border-emerald-500/30">
              <BookOpen className="w-3.5 h-3.5" /> Maharashtra State Board Balbharati Official Library
            </span>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Prescribed Textbooks for All Subjects (Class 9 - 12)
            </h1>
            <p className="text-slate-300 text-xs mt-2 leading-relaxed">
              Complete official textbooks published by the Maharashtra State Bureau of Textbook Production and Curriculum Research, Balbharati, Pune. Browse all subjects across Science, Commerce, Arts, and Core General curricula with chapter outlines, formulas, and board questions.
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 mb-8 shadow-xl space-y-5">
          {/* Class Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                1. Select Academic Class:
              </label>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                Showing {filteredBooks.length} of {MAHARASHTRA_ALL_TEXTBOOKS.length} Official Textbooks
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[
                { id: 'all', label: '🌟 All Classes' },
                { id: 'Class 9', label: '📘 Class 9' },
                { id: 'Class 10', label: '🏆 Class 10 (SSC)' },
                { id: 'Class 11', label: '🎓 Class 11 (HSC)' },
                { id: 'Class 12', label: '🏅 Class 12 (HSC)' },
              ].map((std) => (
                <button
                  key={std.id}
                  onClick={() => setSelectedStandard(std.id)}
                  className={'px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border text-center ' +
                    (selectedStandard === std.id
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/30 font-extrabold scale-[1.02]'
                      : 'bg-slate-950/60 hover:bg-slate-800 text-slate-300 border-slate-800')}
                >
                  {std.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stream Selector */}
          <div className="pt-4 border-t border-slate-800">
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              2. Stream Compartment (Classes 11 & 12):
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'all', label: '📚 All Streams' },
                { id: 'Science', label: '🧪 Science Stream' },
                { id: 'Commerce', label: '📊 Commerce Stream' },
                { id: 'Arts', label: '🎨 Arts Stream' },
              ].map((st) => (
                <button
                  key={st.id}
                  onClick={() => setSelectedStream(st.id)}
                  className={'px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center ' +
                    (selectedStream === st.id
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30 font-extrabold'
                      : 'bg-slate-950/40 hover:bg-slate-800 text-slate-300 border-slate-800')}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search & Reset */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search subject (e.g. Physics, Accounts, Algebra)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              onClick={() => {
                setSelectedStandard('all');
                setSelectedStream('all');
                setSelectedSubject('all');
                setSearchQuery('');
              }}
              className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Textbooks Cards Grid */}
        {filteredBooks.length === 0 ? (
          <div className="bg-slate-900/60 border border-dashed border-slate-800 rounded-3xl p-12 text-center">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="text-base font-bold text-white">No Textbooks Found</p>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Try resetting your filters or search query to browse all 41 textbooks.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBooks.map((book) => {
              const streamBadgeColor =
                book.stream === 'Science'
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-800/50'
                  : book.stream === 'Commerce'
                  ? 'bg-amber-950 text-amber-300 border-amber-800/50'
                  : book.stream === 'Arts'
                  ? 'bg-purple-950 text-purple-300 border-purple-800/50'
                  : 'bg-indigo-950 text-indigo-300 border-indigo-800/50';

              return (
                <div
                  key={book.id}
                  className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between hover:border-emerald-500/50 transition-all group"
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-slate-800 text-slate-200">
                        {book.standard}
                      </span>
                      <span className={'px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ' + streamBadgeColor}>
                        {book.stream}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-slate-400 bg-slate-950 border border-slate-800">
                        {book.subject}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400 group-hover:scale-110 transition-transform">
                        <Bookmark className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                          {book.title}
                        </h3>
                        <p className="text-[11px] text-emerald-400 font-medium mt-0.5">
                          {book.chapter || 'Prescribed Maharashtra State Board Textbook'}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                      {book.description}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    {/* PRIMARY ACTION: In-App Digital Reader */}
                    <button
                      onClick={() => {
                        setActiveReadingBook(book);
                        setActiveChapterIndex(0);
                        setActiveTab('theory');
                      }}
                      className="flex-1 py-2 px-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read In-App</span>
                    </button>

                    {/* View PYQs */}
                    <Link
                      href={`/dashboard/student/pyqs?subject=${encodeURIComponent(book.subject)}`}
                      className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl flex items-center gap-1 transition-colors"
                      title="1990-2026 Board Exam Papers"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span>PYQs</span>
                    </Link>

                    {/* External links modal button */}
                    <button
                      onClick={() => {
                        setActiveReadingBook(book);
                        setShowGovtLinksModal(true);
                      }}
                      className="p-2 bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 rounded-xl transition-colors cursor-pointer"
                      title="Official Government Portal Links"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* IN-APP DIGITAL TEXTBOOK READER MODAL                                     */}
      {/* ========================================================================= */}
      {activeReadingBook && activeGuide && !showGovtLinksModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Reader Top Bar */}
          <div className="h-16 px-4 sm:px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4 flex-shrink-0">
            {/* Book Title & Badges */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-black text-white truncate max-w-xs sm:max-w-md">
                    {activeGuide.title}
                  </h2>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {activeGuide.standard}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 truncate">
                  Balbharati Official Chapter Guide • Chapter {currentChapter?.chapterNumber}: {currentChapter?.title}
                </p>
              </div>
            </div>

            {/* Controls & Actions */}
            <div className="flex items-center gap-2">
              {/* Font Size Adjuster */}
              <div className="hidden sm:flex items-center bg-slate-950 border border-slate-800 rounded-xl p-0.5">
                <button
                  onClick={() => setReaderFontSize('normal')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${readerFontSize === 'normal' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                  title="Normal Text Size"
                >
                  A
                </button>
                <button
                  onClick={() => setReaderFontSize('large')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${readerFontSize === 'large' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                  title="Large Text Size"
                >
                  A+
                </button>
                <button
                  onClick={() => setReaderFontSize('xlarge')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${readerFontSize === 'xlarge' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                  title="Extra Large Text Size"
                >
                  A++
                </button>
              </div>

              {/* Print / Save PDF Button */}
              <button
                onClick={() => window.print()}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                title="Print or Save Chapter Notes as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-emerald-400" />
                <span>Print / PDF</span>
              </button>

              {/* View PYQs for this subject */}
              <Link
                href={`/dashboard/student/pyqs?subject=${encodeURIComponent(activeGuide.subject)}`}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Board PYQs</span>
              </Link>

              {/* Govt Links Info */}
              <button
                onClick={() => setShowGovtLinksModal(true)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                title="Official Government Portal Links"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setActiveReadingBook(null)}
                className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 transition-colors cursor-pointer ml-1"
                title="Close Reader (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Reader Body: Two-Column Layout */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left Sidebar: Chapters List */}
            <div className="w-72 sm:w-80 bg-slate-900/90 border-r border-slate-800 flex flex-col flex-shrink-0">
              {/* Search Chapters */}
              <div className="p-3 border-b border-slate-800">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search chapters..."
                    value={chapterSearch}
                    onChange={(e) => setChapterSearch(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Chapters List Scrollable */}
              <div className="flex-1 overflow-y-auto p-3 space-y-1.5 custom-scrollbar">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2 py-1">
                  Syllabus Chapters ({activeGuide.chapters.length})
                </div>
                {filteredChapters.map((ch, idx) => {
                  const originalIndex = activeGuide.chapters.findIndex((c) => c.id === ch.id);
                  const isActive = originalIndex === activeChapterIndex;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => {
                        setActiveChapterIndex(originalIndex);
                        setActiveTab('theory');
                      }}
                      className={`w-full text-left p-2.5 rounded-2xl transition-all cursor-pointer flex items-start gap-2.5 ${
                        isActive
                          ? 'bg-emerald-500/20 border border-emerald-500/40 text-white shadow-md'
                          : 'hover:bg-slate-800/60 text-slate-300 border border-transparent'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5 ${
                          isActive
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {ch.chapterNumber}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate leading-snug">
                          {ch.title}
                        </div>
                        {ch.unit && (
                          <div className="text-[10px] text-slate-400 truncate mt-0.5">
                            {ch.unit}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Footer inside sidebar */}
              <div className="p-3 border-t border-slate-800 bg-slate-950/60">
                <Link
                  href={`/dashboard/student/pyqs?subject=${encodeURIComponent(activeGuide.subject)}`}
                  className="w-full py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Subject PYQs (1990-2026)</span>
                </Link>
              </div>
            </div>

            {/* Right Main Content Pane */}
            <div className="flex-1 overflow-y-auto bg-slate-950 p-4 sm:p-8 custom-scrollbar">
              {currentChapter ? (
                <div className="max-w-4xl mx-auto space-y-6">
                  {/* Chapter Header Card */}
                  <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-extrabold uppercase">
                        Chapter {currentChapter.chapterNumber}
                      </span>
                      {currentChapter.unit && (
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold">
                          {currentChapter.unit}
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-400 text-[10px] font-bold">
                        {activeGuide.boardAgency}
                      </span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {currentChapter.title}
                    </h1>

                    <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed border-l-2 border-emerald-500 pl-3">
                      {currentChapter.summary}
                    </p>
                  </div>

                  {/* Content Tabs Navigation */}
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-3 flex-wrap">
                    {[
                      { id: 'theory', label: '📖 Chapter Theory & Concepts', count: currentChapter.coreConcepts.length },
                      { id: 'formulas', label: '⚡ Formulas & Governing Laws', count: currentChapter.keyFormulasOrRules?.length || 0 },
                      { id: 'exercises', label: '📝 Textbook Board Exercises', count: (currentChapter.exerciseQuestions.shortAnswer.length + currentChapter.exerciseQuestions.descriptive.length + (currentChapter.exerciseQuestions.longAnswerOrNumericals?.length || 0)) },
                      { id: 'tips', label: '🎯 Board Exam Key Highlights', count: currentChapter.examImportantPoints.length },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                          activeTab === tab.id
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md font-extrabold'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span
                          className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                            activeTab === tab.id
                              ? 'bg-slate-950 text-emerald-300'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {tab.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Tab 1: Theory & Core Concepts */}
                  {activeTab === 'theory' && (
                    <div className="space-y-4">
                      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                        <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm mb-4">
                          <BookMarked className="w-4 h-4" />
                          <span>Detailed Balbharati Syllabus Principles & Concepts</span>
                        </div>
                        <div className="space-y-3">
                          {currentChapter.coreConcepts.map((concept, cIdx) => (
                            <div
                              key={cIdx}
                              className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3 hover:border-emerald-500/30 transition-colors"
                            >
                              <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                                {cIdx + 1}
                              </div>
                              <p
                                className={`text-slate-200 leading-relaxed ${
                                  readerFontSize === 'large'
                                    ? 'text-base'
                                    : readerFontSize === 'xlarge'
                                    ? 'text-lg'
                                    : 'text-xs sm:text-sm'
                                }`}
                              >
                                {concept}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Formulas & Rules */}
                  {activeTab === 'formulas' && (
                    <div className="space-y-4">
                      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                        <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm mb-4">
                          <Sparkles className="w-4 h-4" />
                          <span>Key Formulas, Laws, Equations & Scientific Principles</span>
                        </div>
                        {currentChapter.keyFormulasOrRules && currentChapter.keyFormulasOrRules.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {currentChapter.keyFormulasOrRules.map((rule, rIdx) => (
                              <div
                                key={rIdx}
                                className="p-4 rounded-2xl bg-slate-950 border border-amber-500/20 flex items-start gap-3 hover:border-amber-500/40 transition-colors"
                              >
                                <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                                  ⚡
                                </span>
                                <div className="text-xs sm:text-sm font-mono text-amber-200 leading-relaxed">
                                  {rule}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-slate-400 text-xs">
                            This chapter primarily consists of theoretical concepts, definitions, and qualitative case analyses.
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Textbook Exercise Questions */}
                  {activeTab === 'exercises' && (
                    <div className="space-y-5">
                      {/* Short Answer Questions (2 Marks) */}
                      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                        <div className="flex items-center gap-2 text-cyan-400 font-extrabold text-sm mb-3">
                          <CheckCircle className="w-4 h-4" />
                          <span>Short Answer / Concept Questions (2 Marks)</span>
                        </div>
                        <div className="space-y-2.5">
                          {currentChapter.exerciseQuestions.shortAnswer.map((q, qIdx) => (
                            <div
                              key={qIdx}
                              className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-start gap-3"
                            >
                              <span className="text-xs font-bold text-cyan-400 mt-0.5">Q{qIdx + 1}.</span>
                              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                                {q}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Descriptive Questions (3 - 4 Marks) */}
                      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                        <div className="flex items-center gap-2 text-indigo-400 font-extrabold text-sm mb-3">
                          <BookOpen className="w-4 h-4" />
                          <span>Descriptive / Explanation Questions (3 - 4 Marks)</span>
                        </div>
                        <div className="space-y-2.5">
                          {currentChapter.exerciseQuestions.descriptive.map((q, qIdx) => (
                            <div
                              key={qIdx}
                              className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-start gap-3"
                            >
                              <span className="text-xs font-bold text-indigo-400 mt-0.5">Q{qIdx + 1}.</span>
                              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                                {q}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Long Answer or Numericals */}
                      {currentChapter.exerciseQuestions.longAnswerOrNumericals &&
                        currentChapter.exerciseQuestions.longAnswerOrNumericals.length > 0 && (
                          <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                            <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm mb-3">
                              <GraduationCap className="w-4 h-4" />
                              <span>Long Answer / Board Problems & Numericals (4 - 5 Marks)</span>
                            </div>
                            <div className="space-y-2.5">
                              {currentChapter.exerciseQuestions.longAnswerOrNumericals.map((q, qIdx) => (
                                <div
                                  key={qIdx}
                                  className="p-3.5 rounded-2xl bg-slate-950 border border-emerald-500/20 flex items-start gap-3"
                                >
                                  <span className="text-xs font-bold text-emerald-400 mt-0.5">Q{qIdx + 1}.</span>
                                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                                    {q}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  )}

                  {/* Tab 4: Board Exam Tips */}
                  {activeTab === 'tips' && (
                    <div className="space-y-4">
                      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                        <div className="flex items-center gap-2 text-purple-400 font-extrabold text-sm mb-4">
                          <Lightbulb className="w-4 h-4" />
                          <span>Maharashtra Board Exam High-Yield Scoring Tips</span>
                        </div>
                        <div className="space-y-3">
                          {currentChapter.examImportantPoints.map((tip, tIdx) => (
                            <div
                              key={tIdx}
                              className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-3"
                            >
                              <span className="text-purple-400 text-sm mt-0.5">📌</span>
                              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                                {tip}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Navigation: Previous / Next Chapter */}
                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                    <button
                      onClick={() => {
                        if (activeChapterIndex > 0) {
                          setActiveChapterIndex(activeChapterIndex - 1);
                          setActiveTab('theory');
                        }
                      }}
                      disabled={activeChapterIndex === 0}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none text-slate-300 font-bold text-xs flex items-center gap-2 border border-slate-800 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous Chapter</span>
                    </button>

                    <span className="text-xs font-mono text-slate-500">
                      {activeChapterIndex + 1} of {activeGuide.chapters.length}
                    </span>

                    <button
                      onClick={() => {
                        if (activeChapterIndex < activeGuide.chapters.length - 1) {
                          setActiveChapterIndex(activeChapterIndex + 1);
                          setActiveTab('theory');
                        }
                      }}
                      disabled={activeChapterIndex === activeGuide.chapters.length - 1}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:pointer-events-none text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Next Chapter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center text-slate-500">
                  Select a chapter from the left panel to begin reading.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* OFFICIAL GOVERNMENT LINKS MODAL                                           */}
      {/* ========================================================================= */}
      {showGovtLinksModal && activeReadingBook && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-extrabold text-base">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                <span>Maharashtra Government Balbharati Portals</span>
              </div>
              <button
                onClick={() => setShowGovtLinksModal(false)}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-200 leading-relaxed">
                <strong>Notice:</strong> The primary government store <code className="bg-amber-950/80 px-1 py-0.5 rounded text-amber-300">cart.ebalbharati.in</code> frequently suffers from network timeouts or downtime. If external links do not open, use our <strong>In-App Digital Reader</strong> which is permanently available offline and online.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                {
                  title: 'Balbharati Official e-Books Portal',
                  url: 'https://books.ebalbharati.in',
                  desc: 'Official Balbharati textbook repository for standard curriculum.',
                },
                {
                  title: 'Maharashtra State Board (MSBSHSE) Official',
                  url: 'https://mahahsscboard.in',
                  desc: 'State Board official website for syllabus blueprint, notifications, and results.',
                },
                {
                  title: 'eBalbharati Web Store (cart.ebalbharati.in)',
                  url: 'https://cart.ebalbharati.in/BalBooks/ebook.aspx',
                  desc: 'Official online shopping and ebook portal (Subject to server availability).',
                },
              ].map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {link.title}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">{link.desc}</p>
                </a>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-end">
              <button
                onClick={() => setShowGovtLinksModal(false)}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                Back to In-App Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
