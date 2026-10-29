"use client";

import Link from "next/link";
import { SERVICES, BRAND, GLOBAL_JURISDICTIONS, PRICING_MODEL } from "../data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#071322] text-slate-300 pt-16 pb-12 border-t border-slate-800/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        
        {/* Top Header: Brand Identity & Fast Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="FACET"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <span className="font-display font-extrabold text-2xl tracking-widest text-white">
                FACET
              </span>
            </div>
            
            <p className="text-[14px] text-slate-400 max-w-xl leading-relaxed">
              Institutional due diligence, public-record investigative intelligence, and counterparty verification for acquisitions, property transactions, and critical commercial partnerships across the US, UK, Europe, and India.
            </p>

            {/* Confirmed Full Form Slot (as requested, awaiting final confirmation by Rittik Mahakul) */}
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-[12px] max-w-xl">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[11px] font-semibold uppercase tracking-wider w-fit">
                Full Form
              </span>
              <span className="text-slate-200 font-medium">
                {BRAND.fullFormPlaceholder}
              </span>
              <span className="text-slate-500 text-[11px] sm:ml-auto">
                (Awaiting sign-off by Rittik Mahakul)
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-end xl:items-center justify-end gap-3 self-center w-full">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white/10 text-white font-display font-semibold text-[13px] hover:bg-white/15 transition-colors border border-white/15 text-center"
            >
              Fixed-Price Core Report
            </Link>
            <Link
              href="/get-a-quote"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-600 text-white font-display font-semibold text-[13px] hover:bg-blue-500 transition-colors shadow-sm text-center"
            >
              Scope Mandate (Intake Form)
            </Link>
          </div>
        </div>

        {/* 4 Clean, Decluttered Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-slate-800">
          
          {/* Column 1: Core Practices */}
          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold mb-1">
              Practices & Due Diligence
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {s.title}
                    </span>
                    {s.isFlagship && (
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                        Flagship
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Research Corridors & Jurisdictions */}
          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">
              Research Corridors
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {GLOBAL_JURISDICTIONS.map((j) => (
                <li key={j.code} className="flex flex-col">
                  <span className="text-slate-200 font-medium">{j.name}</span>
                  <span className="text-[12px] text-slate-400 line-clamp-1">{j.desc}</span>
                </li>
              ))}
              <li className="pt-1 text-[12px] text-slate-400">
                Independent public records, regulatory filings & court intelligence.
              </li>
            </ul>
          </div>

          {/* Column 3: Commercial Model & Cadence */}
          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">
              Pricing & Turnaround
            </div>
            <ul className="space-y-2 text-[13px] text-slate-400">
              <li className="text-slate-200 font-medium">
                • {PRICING_MODEL.coreReport.name}
              </li>
              <li>• Separately Priced Add-On Research Modules</li>
              <li>• Standard: 7–10 Business Days</li>
              <li>• Priority: 4–6 Business Days</li>
              <li>• Expedited: 2–3 Business Days</li>
              <li>• Active Deal Window (Custom Cadence)</li>
              <li className="pt-2 text-[12px] text-blue-300">
                Bilateral NDA executed prior to target disclosure.
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Governance */}
          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">
              Contact & Governance
            </div>
            <div className="space-y-2 text-[13px] text-slate-400">
              <div>
                <span className="block text-slate-200 font-medium">Scoping Desk Email</span>
                <a
                  href={`mailto:${BRAND.contactEmail}`}
                  className="text-blue-400 hover:text-blue-300 font-mono transition-colors"
                >
                  {BRAND.contactEmail}
                </a>
              </div>
              <div className="pt-1">
                <span className="block text-slate-200 font-medium">WhatsApp Liaison</span>
                <span className="text-slate-400 text-[12px]">Direct coordinator access provided post-NDA</span>
              </div>
              <div className="pt-1">
                <span className="block text-slate-200 font-medium">Operations Center</span>
                <span className="text-slate-400 text-[12px]">Mumbai Hub with US/UK/EU Research Corridors</span>
              </div>
              <div className="pt-2 flex flex-wrap gap-x-3 gap-y-1 text-[12px]">
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/how-it-works" className="hover:text-white transition-colors">Process</Link>
                <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Statutory Scope Disclaimer & Legal Notice */}
        <div className="pt-8 text-[12px] text-slate-400 leading-relaxed space-y-4">
          <p>
            <strong className="text-slate-300">Statutory Notice & Scope Limitation:</strong> FACET provides investigative due diligence, public record intelligence, asset research, and reputation risk assessments based strictly on an agreed written scope of work and lawfully accessible public registries. FACET is an independent intelligence and risk assessment practice; it is not a law firm, accounting firm, or title certification agency, and does not render formal legal opinions, judicial determinations, or title guarantees. Mandates are conducted under strict bilateral confidentiality.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-800 text-[12px] text-slate-400">
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
