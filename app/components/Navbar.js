"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = pathname === "/" && !scrolled;

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Who We Serve", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isTransparent
          ? "bg-transparent border-b border-white/10"
          : "bg-white/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,20,34,0.06)] border-b border-slate-200/80"
      }`}
    >
      <div className="h-20 w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Brand Logo with dynamic white / blue asset */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-3">
              <img
                src={isTransparent ? "/complete-logo-white.svg" : "/complete-logo.svg"}
                alt="FACET Verify"
                className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
              <div
                className={`flex flex-col border-l pl-3 transition-colors duration-300 ${
                  isTransparent ? "border-white/20" : "border-slate-300"
                }`}
              >
                <span
                  className={`font-display font-black text-[15px] tracking-wider leading-none transition-colors duration-300 ${
                    isTransparent ? "text-white" : "text-primary"
                  }`}
                >
                  VERIFY
                </span>
                <span
                  className={`text-[9px] uppercase tracking-widest font-extrabold mt-0.5 transition-colors duration-300 ${
                    isTransparent ? "text-blue-200/90" : "text-on-surface-muted"
                  }`}
                >
                  Due Diligence
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links (with thicker font-display font-bold) */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-display text-[15px] font-bold tracking-normal transition-colors duration-200 ${
                  isTransparent
                    ? isActive
                      ? "text-white font-extrabold border-b-2 border-white pb-1"
                      : "text-white/85 hover:text-white"
                    : isActive
                    ? "text-[#0B2545] font-extrabold border-b-2 border-[#0B2545] pb-1"
                    : "text-[#1F2937] hover:text-[#0B2545]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/get-a-quote"
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-[14px] font-display font-bold tracking-wide transition-all duration-200 ${
              isTransparent
                ? "bg-white text-[#0B2545] hover:bg-blue-50 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                : "bg-primary text-white hover:bg-[#134074] shadow-sm"
            }`}
          >
            Get a Quote
          </Link>

          <button
            type="button"
            onClick={onOpenConsultation}
            className={`hidden md:inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-[14px] font-display font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              isTransparent
                ? "bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm"
                : "bg-slate-100 text-[#0B2545] hover:bg-slate-200 border border-slate-200"
            }`}
          >
            Discuss Scope
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg flex items-center justify-center transition-colors ${
              isTransparent
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-slate-100 text-primary hover:bg-slate-200"
            }`}
            aria-label="Toggle Mobile Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border-subtle p-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1F2937] hover:text-[#0B2545] font-display font-bold text-[17px] py-2 border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/get-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-[#0B2545] text-white text-center font-display font-bold text-[15px]"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-lg bg-slate-100 text-[#0B2545] border border-slate-200 text-center font-display font-semibold text-[15px]"
            >
              Discuss Scope
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
