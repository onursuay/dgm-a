"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technology", href: "#technology" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Demonstrations", href: "#demonstrations" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

const languages = ["DE", "EN", "TR"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-orange-900/30 shadow-2xl shadow-black/60"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-600 to-red-700 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 rounded-lg animate-glow-pulse opacity-0 group-hover:opacity-100" />
              <svg className="relative z-10 w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C12 2 7 7.5 7 12a5 5 0 0010 0c0-4.5-5-10-5-10zm0 4c0 0 3 3.5 3 6a3 3 0 01-6 0c0-2.5 3-6 3-6z" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-widest text-white">
              D<span className="text-fire-gradient">N</span>F
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#a8a0a0] hover:text-[#ff9500] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-orange-600 to-red-600 group-hover:w-4/5 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-1 border border-white/10 rounded-full px-1 py-1">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                    lang === l
                      ? "bg-gradient-to-r from-orange-600 to-red-700 text-white"
                      : "text-[#a8a0a0] hover:text-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-fire px-5 py-2 rounded-full text-sm"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } bg-black/98 border-t border-orange-900/20`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-[#a8a0a0] hover:text-[#ff9500] border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 mt-4">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  lang === l
                    ? "bg-gradient-to-r from-orange-600 to-red-700 text-white"
                    : "border border-white/20 text-[#a8a0a0]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a href="#contact" className="btn-fire mt-4 px-6 py-3 rounded-full text-sm">
            Request Demo
          </a>
        </div>
      </div>
    </header>
  );
}
