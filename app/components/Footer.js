"use client";

import Link from "next/link";
import { SERVICES, BRAND } from "../data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B2545] text-white pt-16 pb-12 border-t border-slate-700">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        
        {/* Top Brand Banner */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 mb-12 border-b border-white/15 gap-8">
          <div className="flex items-center gap-4">
            <img src="/complete-logo-white.svg" alt="FACET Verify" className="h-11 w-auto" />
            <div className="flex flex-col border-l border-white/20 pl-4">
              <div className="font-display font-extrabold text-[18px] text-white leading-none tracking-wider">
                VERIFY
              </div>
              <div className="text-[11px] uppercase font-bold tracking-widest text-slate-300 mt-1">
                Due Diligence & Investigative Intelligence
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/get-a-quote"
              className="px-6 py-3 rounded-xl bg-white text-[#0B2545] font-display font-bold text-[14px] hover:bg-slate-100 transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 text-white font-display font-bold text-[14px] hover:bg-white/20 transition-colors border border-white/20"
            >
              Contact Specialist
            </Link>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Services Column (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <span className="font-display font-bold text-[14px] uppercase tracking-wider text-blue-200 mb-1">
              Confirmed Service Lines
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="font-body text-[15px] text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                  <span className="line-clamp-1">{s.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Column (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="font-display font-bold text-[14px] uppercase tracking-wider text-slate-300 mb-1">
              Organization
            </span>
            <Link className="font-body text-[15px] text-slate-400 hover:text-white transition-colors" href="/about">
              About FACET Verify
            </Link>
            <Link className="font-body text-[15px] text-slate-400 hover:text-white transition-colors" href="/how-it-works">
              How It Works (5-Stage Model)
            </Link>
            <Link className="font-body text-[15px] text-slate-400 hover:text-white transition-colors" href="/industries">
              Who We Serve (Client Sectors)
            </Link>
            <Link className="font-body text-[15px] text-slate-400 hover:text-white transition-colors" href="/insights">
              Intelligence Insights
            </Link>
            <Link className="font-body text-[15px] text-slate-400 hover:text-white transition-colors" href="/faqs">
              Frequently Asked Questions
            </Link>
            <Link className="font-body text-[15px] text-slate-400 hover:text-white transition-colors" href="/contact">
              Contact & Enquiries
            </Link>
          </div>

          {/* Legal & Governance (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="font-display font-bold text-[14px] uppercase tracking-wider text-slate-300 mb-1">
              Compliance & Legal
            </span>
            <Link className="font-body text-[15px] text-slate-400 hover:text-white transition-colors" href="/disclaimer">
              Due Diligence Disclaimer
            </Link>
            <Link className="font-body text-[15px] text-slate-400 hover:text-white transition-colors" href="/privacy-policy">
              Privacy & Data Protection Policy
            </Link>
            <Link className="font-body text-[15px] text-slate-400 hover:text-white transition-colors" href="/terms">
              Terms of Use & Scope Terms
            </Link>
            
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-[12px] font-mono uppercase text-slate-400 mb-1">Operational Coverage</div>
              <div className="text-[13px] text-slate-300 font-medium">United States · Europe & UK · India · Global</div>
              <div className="text-[12px] text-slate-400 mt-1">Country-Specific Public Record Intelligence & Research Corridors</div>
            </div>
          </div>

        </div>

        {/* Statutory Scope Disclaimer as per website.md Section 17.3 */}
        <div className="pt-8 text-[13px] text-slate-400 leading-relaxed max-w-5xl">
          <p className="mb-4">
            <strong className="text-slate-300">Statutory Notice:</strong> {BRAND.disclaimerSnippet} FACET Verify provides due diligence, investigative intelligence, public-record research and risk assessment services based on an agreed scope of work and lawfully accessible sources. FACET Verify is not a law firm and does not provide legal advice, legal title certificates, certified title opinions or judicial determinations. Reports are prepared for confidential internal decision-support purposes and should be reviewed by qualified legal counsel.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/5 text-[12px]">
            <div>
              &copy; {currentYear} FACET Verify. All rights reserved. Global Due Diligence & Investigative Intelligence.
            </div>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
