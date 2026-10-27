"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-card/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,37,69,0.04)] border-b border-border-subtle/60">
      <div className="h-20 w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Brand & Security Badge */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Prismatic Diamond Emblem */}
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-accent-electric shadow-sm group-hover:bg-primary transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" stroke="#0EA5E9" strokeWidth="1.75" fill="rgba(14,165,233,0.15)" />
                <polyline points="2,8 12,14 22,8" stroke="#FFFFFF" strokeWidth="1.25" strokeOpacity="0.7" />
                <line x1="12" y1="14" x2="12" y2="22" stroke="#FFFFFF" strokeWidth="1.25" strokeOpacity="0.7" />
                <circle cx="12" cy="14" r="2" fill="#0EA5E9" />
              </svg>
            </div>
            <span className="font-headline-sm text-[22px] tracking-tight text-primary font-bold">
              FACET
            </span>
          </Link>

          <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-[11px] font-semibold border border-border-subtle/50">
            <span className="w-1.5 h-1.5 rounded-full bg-verification-green animate-pulse"></span>
            CORP INTEL // 256-BIT SECURE
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-label-md text-label-md uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-secondary pb-1"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Account */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-[0_1px_3px_rgba(11,37,69,0.06)] hover:bg-secondary-container hover:text-on-secondary transition-all"
          >
            Request a Consultation
          </button>

          <div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary cursor-pointer hover:bg-secondary transition-colors"
            title="Institutional Client Portal"
            onClick={onOpenConsultation}
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container text-primary flex items-center justify-center"
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
        <div className="lg:hidden bg-surface-card border-b border-border-subtle p-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-label-md text-sm uppercase tracking-wider text-on-surface font-semibold py-2 border-b border-border-subtle/50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-3 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider text-center"
          >
            Request a Consultation
          </button>
        </div>
      )}
    </header>
  );
}
