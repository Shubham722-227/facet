"use client";

import Link from "next/link";
import { SERVICES, BRAND } from "../data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#071322] text-slate-300 pt-10 pb-8 border-t border-slate-800/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        
        {/* Brand Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <img
                src="/logo-mark-white.svg"
                alt="FACET"
                className="h-7 w-auto object-contain"
              />
              <span className="font-display font-black text-2xl tracking-wider text-white">
                FACET
              </span>
            </div>
            <p className="text-[13px] text-slate-400 max-w-xl">
              Independent public-record due diligence and investigative intelligence across the US, UK, Europe, and India.
            </p>
          </div>

          <Link
            href="/get-a-quote"
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-display font-semibold text-[13px] hover:bg-blue-500 transition-colors shadow-sm self-start sm:self-center shrink-0"
          >
            Scope Mandate
          </Link>
        </div>

        {/* 4 Simple, Scannable Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800 text-[13px]">
          
          {/* Column 1: Core Practices */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
              Practice Areas
            </span>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Corridors */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              Research Corridors
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>United States (Federal & State)</li>
              <li>United Kingdom (Companies House & Courts)</li>
              <li>Continental Europe (EU Registries)</li>
              <li>India (MCA, Land Records & e-Courts)</li>
            </ul>
          </div>

          {/* Column 3: Commercial Model */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              Pricing & Cadence
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Fixed-Price Core Report
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Optional Add-On Modules
                </Link>
              </li>
              <li>Standard (7–10d) · Priority (4–6d)</li>
              <li>Bilateral NDA Engagement</li>
            </ul>
          </div>

          {/* Column 4: Contact & Organization */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              Contact & Overview
            </span>
            <div className="space-y-2 text-slate-300">
              <a
                href={`mailto:${BRAND.email || "enquiries@facetverify.com"}`}
                className="text-blue-400 hover:text-blue-300 font-mono text-[12px] block transition-colors"
              >
                {BRAND.email || "enquiries@facetverify.com"}
              </a>
              <span className="text-slate-400 text-[12px] block">
                Operations Hub · Mumbai
              </span>
              <div className="pt-1 flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-slate-400">
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/how-it-works" className="hover:text-white transition-colors">Process</Link>
                <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Simplified Legal Disclaimer & Bottom Row */}
        <div className="pt-6 text-[11px] text-slate-400 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-300">Statutory Notice:</strong> FACET provides independent investigative due diligence and public-record verification for confidential decision support. FACET is not a law firm or title certification agency, and reports do not constitute formal legal opinions or title guarantees.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-slate-800">
            <div>
              &copy; {currentYear} FACET &mdash; Fraud Analysis, Credibility &amp; Estate Title. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-slate-400">
              <Link href="/disclaimer" className="hover:text-slate-200 transition-colors">Due Diligence Disclaimer</Link>
              <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-200 transition-colors">Terms of Scope</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
