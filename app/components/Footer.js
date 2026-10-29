"use client";

import Link from "next/link";
import { SERVICES, BRAND, GLOBAL_JURISDICTIONS } from "../data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#071322] text-slate-300 pt-10 pb-8 border-t border-slate-800/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        
        {/* Top Header: Brand Identity & Fast Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-slate-800 items-start">
          <div className="lg:col-span-8 flex flex-col gap-3">
            {/* Single clean FACET mark + wordmark */}
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
            
            <p className="text-[13px] text-slate-400 max-w-2xl leading-relaxed">
              Institutional due diligence, public-record investigative intelligence, and counterparty verification for acquisitions, property transactions, and critical commercial partnerships across the US, UK, Europe, and India.
            </p>

            {/* Confirmed Full Form */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[12px] w-fit">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                Full Form
              </span>
              <span className="text-slate-200 font-medium tracking-wide">
                Fraud Analysis, Credibility & Estate Title
              </span>
            </div>
          </div>

          {/* Single Primary Action Button */}
          <div className="lg:col-span-4 flex items-start lg:items-center justify-start lg:justify-end self-center w-full">
            <Link
              href="/get-a-quote"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-blue-600 text-white font-display font-semibold text-[13px] hover:bg-blue-500 transition-colors shadow-sm text-center"
            >
              Scope Mandate (Intake Form)
            </Link>
          </div>
        </div>

        {/* 4 Clean, Compact Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-b border-slate-800">
          
          {/* Column 1: Core Practices */}
          <div className="flex flex-col gap-2.5">
            <div className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
              Practices & Due Diligence
            </div>
            <ul className="space-y-2 text-[13px]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform text-slate-300 hover:text-white">
                      {s.title}
                    </span>
                    {s.isFlagship && (
                      <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                        Flagship
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Research Corridors & Jurisdictions */}
          <div className="flex flex-col gap-2.5">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              Research Corridors
            </div>
            <ul className="space-y-2 text-[13px]">
              {GLOBAL_JURISDICTIONS.map((j) => (
                <li key={j.code} className="flex flex-col">
                  <span className="text-slate-200 font-medium">{j.name || j.region}</span>
                  <span className="text-[11px] text-slate-400 line-clamp-1">{j.desc || j.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Commercial Model & Cadence */}
          <div className="flex flex-col gap-2.5">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              Pricing & Turnaround
            </div>
            <ul className="space-y-1.5 text-[13px] text-slate-400">
              <li className="text-slate-200 font-medium">
                • Fixed-Price Core Report
              </li>
              <li>• Separately Priced Add-On Research Modules</li>
              <li>• Standard: 7–10 Business Days</li>
              <li>• Priority: 4–6 Business Days</li>
              <li>• Expedited: 2–3 Business Days</li>
              <li>• Active Deal Window (Custom Cadence)</li>
              <li className="pt-1 text-[11px] text-blue-300">
                Bilateral NDA executed prior to target disclosure.
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Governance */}
          <div className="flex flex-col gap-2.5">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              Contact & Governance
            </div>
            <div className="space-y-1.5 text-[13px] text-slate-400">
              <div>
                <span className="block text-slate-200 font-medium text-[12px]">Scoping Desk Email</span>
                <a
                  href={`mailto:${BRAND.email || "enquiries@facetverify.com"}`}
                  className="text-blue-400 hover:text-blue-300 font-mono text-[12px] transition-colors"
                >
                  {BRAND.email || "enquiries@facetverify.com"}
                </a>
              </div>
              <div>
                <span className="block text-slate-200 font-medium text-[12px]">WhatsApp Liaison</span>
                <span className="text-slate-400 text-[11px]">Direct coordinator access provided post-NDA</span>
              </div>
              <div>
                <span className="block text-slate-200 font-medium text-[12px]">Operations Center</span>
                <span className="text-slate-400 text-[11px]">Mumbai Hub with US/UK/EU Research Corridors</span>
              </div>
              <div className="pt-1 flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/how-it-works" className="hover:text-white transition-colors">Process</Link>
                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Statutory Scope Disclaimer & Legal Notice */}
        <div className="pt-6 text-[11px] text-slate-400 leading-relaxed space-y-3">
          <p>
            <strong className="text-slate-300">Statutory Notice & Scope Limitation:</strong> FACET provides investigative due diligence, public record intelligence, asset research, and reputation risk assessments based strictly on an agreed written scope of work and lawfully accessible public registries. FACET is an independent intelligence and risk assessment practice; it is not a law firm, accounting firm, or title certification agency, and does not render formal legal opinions, judicial determinations, or title guarantees. Mandates are conducted under strict bilateral confidentiality.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
            <div>
              &copy; {currentYear} FACET. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-slate-400">
              <Link href="/disclaimer" className="hover:text-slate-200 transition-colors">Due Diligence Disclaimer</Link>
              <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">Data Protection</Link>
              <Link href="/terms" className="hover:text-slate-200 transition-colors">Terms of Scope</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
