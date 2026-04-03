"use client";

import { useState } from "react";

const navLinks = [
  { href: "#concept", label: "コンセプト" },
  { href: "#programs", label: "研修内容" },
  { href: "#curriculum", label: "カリキュラム" },
  { href: "#pricing", label: "料金" },
  { href: "#subsidy", label: "助成金" },
  { href: "#consulting", label: "顧問サービス" },
  { href: "#flow", label: "お申込み" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-accent font-bold text-lg">fan-mily</span>
            <span className="text-white/70 text-sm hidden sm:inline">
              AI研修プログラム
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6" aria-label="メインナビゲーション">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-accent text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-light text-navy-900 font-bold text-sm px-5 py-2 rounded-full transition-colors"
            >
              無料相談
            </a>
          </nav>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="lg:hidden bg-navy-900 border-t border-white/10" aria-label="モバイルナビゲーション">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-accent text-sm py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center bg-accent hover:bg-accent-light text-navy-900 font-bold text-sm px-5 py-3 rounded-full transition-colors mt-4"
              onClick={() => setIsOpen(false)}
            >
              無料相談を予約する
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
