"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <span className="font-manrope font-bold text-white text-lg">
            Shadow<span className="text-brand-glow">AI</span>
            <span className="text-white/50 font-normal">.report</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/methodology"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Methodology
          </Link>
          <Link
            href="/assess"
            className="text-sm font-semibold text-white bg-brand-accent hover:bg-brand-glow px-4 py-2 rounded-lg transition-colors"
          >
            Get Your Score
          </Link>
        </nav>

        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-md border-b border-white/5 animate-fade-in">
          <nav className="flex flex-col px-4 py-4 gap-3">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/70 hover:text-white transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/methodology"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/70 hover:text-white transition-colors py-2"
            >
              Methodology
            </Link>
            <Link
              href="/assess"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-white bg-brand-accent hover:bg-brand-glow px-4 py-2 rounded-lg transition-colors text-center"
            >
              Get Your Score
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
