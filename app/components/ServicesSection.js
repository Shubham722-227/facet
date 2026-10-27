"use client";

import Link from "next/link";
import { useState } from "react";
import ServiceModal from "./ServiceModal";
import { SERVICES } from "../data/content";

export default function ServicesSection({ onSelectForQuote }) {
  const [activeModalService, setActiveModalService] = useState(null);

  return (
    <section id="services" className="w-full px-4 sm:px-8 lg:px-12 py-20 bg-surface-container-low/60 relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold mb-2">
              Capabilities Matrix
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-primary tracking-tight">
              Precision Intelligence Across Key Vectors.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Our forensic practitioners combine open-source registry analytics, human asset networks, and cross-border statutory disclosures.
          </p>
        </div>

        {/* 7 Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1: Real Estate & Title Verification */}
          <div className="group relative bg-white/80 backdrop-blur-xl p-6 sm:p-7 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(11,37,69,0.08)] transition-all flex flex-col justify-between border border-border-subtle/70">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">apartment</span>
              </div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                Asset Forensics
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Real Estate &amp; Title Verification
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Comprehensive cadastral audit, historical encumbrance mapping, zoning clearance validation, and unrecorded mortgage tracing.
              </p>
              <div className="space-y-1.5 mb-6">
                <div className="flex items-center gap-2 text-on-surface text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 30-Year Chain of Title Investigation
                </div>
                <div className="flex items-center gap-2 text-on-surface text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Environmental &amp; Statutory Violation Search
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle/50">
              <Link
                href="/services/property-due-diligence"
                className="inline-flex items-center gap-1 font-label-md text-label-md uppercase tracking-wider text-primary group-hover:text-secondary transition-colors font-bold"
              >
                <span>Explore Service</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalService(SERVICES[0])}
                className="text-xs font-mono text-slate-500 hover:text-primary underline"
              >
                Scope Details
              </button>
            </div>
          </div>

          {/* Service 2: Promoter & Seller Scrutiny */}
          <div className="group relative bg-white/80 backdrop-blur-xl p-6 sm:p-7 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(11,37,69,0.08)] transition-all flex flex-col justify-between border border-border-subtle/70">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">badge</span>
              </div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                Key Personnel
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Promoter &amp; Seller Scrutiny
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Deep character, solvency, and track-record forensic profiling of principals, controlling founders, and sovereign land custodians.
              </p>
              <div className="space-y-1.5 mb-6">
                <div className="flex items-center gap-2 text-on-surface text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Directorship Cross-Affiliations
                </div>
                <div className="flex items-center gap-2 text-on-surface text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Reputational Field HUMINT Networks
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle/50">
              <Link
                href="/services/seller-promoter-due-diligence"
                className="inline-flex items-center gap-1 font-label-md text-label-md uppercase tracking-wider text-primary group-hover:text-secondary transition-colors font-bold"
              >
                <span>Explore Service</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalService(SERVICES[1])}
                className="text-xs font-mono text-slate-500 hover:text-primary underline"
              >
                Scope Details
              </button>
            </div>
          </div>

          {/* Service 3: Litigation, Legal & Regulatory Due Diligence */}
          <div className="group relative bg-white/80 backdrop-blur-xl p-6 sm:p-7 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(11,37,69,0.08)] transition-all flex flex-col justify-between border border-border-subtle/70">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">gavel</span>
              </div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                Legal Risk Matrix
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Litigation &amp; Regulatory Exposure
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Exhaustive court docket indexing across high courts, district tribunals, regulatory benches, and arbitral enforcement databases.
              </p>
              <div className="space-y-1.5 mb-6">
                <div className="flex items-center gap-2 text-on-surface text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Insolvency (NCLT/Chapter 11) Records
                </div>
                <div className="flex items-center gap-2 text-on-surface text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Contempt of Court &amp; Restraining Orders
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle/50">
              <Link
                href="/services/litigation-regulatory-due-diligence"
                className="inline-flex items-center gap-1 font-label-md text-label-md uppercase tracking-wider text-primary group-hover:text-secondary transition-colors font-bold"
              >
                <span>Explore Service</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalService(SERVICES[2])}
                className="text-xs font-mono text-slate-500 hover:text-primary underline"
              >
                Scope Details
              </button>
            </div>
          </div>

          {/* Service 4: Vendor & Supply Chain */}
          <div className="group relative bg-white/80 backdrop-blur-xl p-6 sm:p-7 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(11,37,69,0.08)] transition-all flex flex-col justify-between border border-border-subtle/70">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">hub</span>
              </div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                Third-Party Assurance
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Vendor &amp; Counterparty Audit
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Integrity analysis of Tier-1 and Tier-2 suppliers to uncover shell front entities, modern slavery violations, and PEP nexus.
              </p>
              <div className="space-y-1.5 mb-6">
                <div className="flex items-center gap-2 text-on-surface text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Beneficial Ownership Verification
                </div>
                <div className="flex items-center gap-2 text-on-surface text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Multi-List Sanctions &amp; OFAC Cross-Check
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle/50">
              <Link
                href="/services/vendor-third-party-due-diligence"
                className="inline-flex items-center gap-1 font-label-md text-label-md uppercase tracking-wider text-primary group-hover:text-secondary transition-colors font-bold"
              >
                <span>Explore Service</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalService(SERVICES[3])}
                className="text-xs font-mono text-slate-500 hover:text-primary underline"
              >
                Scope Details
              </button>
            </div>
          </div>

          {/* Service 5: Fraud Risk & Investigative Intel (FEATURED DARK GLASS PANEL) */}
          <div className="group relative bg-primary-container text-on-primary p-6 sm:p-7 rounded-xl shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between overflow-hidden border border-white/10">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-accent-electric/15 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-accent-electric">
                  <span className="material-symbols-outlined text-[26px]">radar</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-evidence-flag/20 text-error-container font-label-sm text-[11px] uppercase tracking-wider font-semibold border border-evidence-flag/30">
                  Special Mandates
                </span>
              </div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-accent-electric mb-1 font-semibold">
                High-Risk Discovery
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">
                Forensic Intelligence &amp; Fraud Risk
              </h3>
              <p className="font-body-sm text-body-sm text-slate-300 mb-4 leading-relaxed">
                Covert corporate intelligence, whistle-blower verification, circular transaction tracking, and falsified revenue forensics.
              </p>
              <div className="space-y-1.5 mb-6 text-slate-200">
                <div className="flex items-center gap-2 text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-electric"></span> Siphoning &amp; Round-Tripping Forensics
                </div>
                <div className="flex items-center gap-2 text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-electric"></span> Deep Source Infiltration &amp; Debriefing
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <Link
                href="/services/fraud-investigative-intelligence"
                className="inline-flex items-center gap-1 font-label-md text-label-md uppercase tracking-wider text-accent-electric group-hover:text-white transition-colors font-bold"
              >
                <span>Initiate Mandate</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalService(SERVICES[4])}
                className="text-xs font-mono text-slate-400 hover:text-white underline"
              >
                Scope Details
              </button>
            </div>
          </div>

          {/* Service 6: M&A Pre-Deal Due Diligence */}
          <div className="group relative bg-white/80 backdrop-blur-xl p-6 sm:p-7 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(11,37,69,0.08)] transition-all flex flex-col justify-between border border-border-subtle/70">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">account_balance</span>
              </div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                Capital Deployment
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                M&amp;A Pre-Deal Due Diligence
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Strategic investigative scrutiny of target operating entities, undisclosed subsidiaries, debt commitments, and regulatory hurdles.
              </p>
              <div className="space-y-1.5 mb-6">
                <div className="flex items-center gap-2 text-on-surface text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Off-Balance-Sheet Vehicle Discovery
                </div>
                <div className="flex items-center gap-2 text-on-surface text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Bribery &amp; Anti-Corruption (FCPA) Mapping
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle/50">
              <Link
                href="/services/ma-investment-due-diligence"
                className="inline-flex items-center gap-1 font-label-md text-label-md uppercase tracking-wider text-primary group-hover:text-secondary transition-colors font-bold"
              >
                <span>Explore Service</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalService(SERVICES[5])}
                className="text-xs font-mono text-slate-500 hover:text-primary underline"
              >
                Scope Details
              </button>
            </div>
          </div>

          {/* Service 7: Asset, Ownership & Wealth Intelligence (WIDE BENTO CARD) */}
          <div className="group lg:col-span-3 relative bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(11,37,69,0.08)] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-border-subtle/70">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded bg-surface-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">travel_explore</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  Cross-Border Asset Recovery
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                Global Asset Tracing &amp; Beneficial Wealth Identification
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Uncovering sovereign assets, aviation logs, maritime registry entries, nominee bank structures, and discretionary trusts for post-judgment enforcement and asset recovery.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/services/asset-ownership-intelligence"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-high text-primary hover:bg-primary hover:text-white transition-all font-label-md text-label-md uppercase tracking-wider font-semibold"
              >
                <span>View Protocol</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scope Details Modal */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          isOpen={!!activeModalService}
          onClose={() => setActiveModalService(null)}
          onSelectForQuote={onSelectForQuote}
        />
      )}
    </section>
  );
}
