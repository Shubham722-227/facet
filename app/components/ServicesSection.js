"use client";

import { useRef } from "react";
import Link from "next/link";
import { TimelineContent } from "@/components/ui/timeline-animation";

export default function ServicesSection({ onSelectForQuote }) {
  const sectionRef = useRef(null);

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.12,
        duration: 0.45,
      },
    }),
    hidden: {
      filter: "blur(8px)",
      y: -16,
      opacity: 0,
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full bg-[#F7F8FA] border-b border-slate-200 py-16 sm:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <TimelineContent
              as="div"
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0B2545] font-display font-bold text-[12px] uppercase tracking-wider mb-3 shadow-2xs"
            >
              Country-Specific Due Diligence Verticals
            </TimelineContent>

            <TimelineContent
              as="h2"
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="font-display font-extrabold text-[32px] sm:text-[42px] text-[#0B2545] tracking-tight leading-[1.12]"
            >
              Due Diligence for Critical Decisions.
            </TimelineContent>

            <TimelineContent
              as="p"
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="font-body text-[16px] sm:text-[17px] text-[#4B5563] mt-3 leading-relaxed font-normal"
            >
              Jurisdiction-specific public-record verification, statutory registry analysis, and investigative intelligence across the United States, the United Kingdom, Continental Europe, and India.
            </TimelineContent>
          </div>

          <TimelineContent
            as="div"
            animationNum={2}
            customVariants={revealVariants}
            timelineRef={sectionRef}
            className="shrink-0"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-display font-bold text-[14px] sm:text-[15px] text-[#0B2545] hover:text-[#134074] transition-colors group"
            >
              <span>View All Detailed Methodologies</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </TimelineContent>
        </div>

        {/* Bento Grid Structure: Core Flagship Spotlight + 4 Strategic Practices */}
        <div className="flex flex-col gap-6 w-full pb-6">
          
          {/* 1. CORE FLAGSHIP SERVICE: Property & Real Estate Due Diligence */}
          <TimelineContent
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={sectionRef}
            className="w-full relative bg-gradient-to-br from-[#0B2545] via-[#0F325E] to-[#133966] text-white overflow-hidden rounded-3xl border border-[#1E4D82] p-8 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Ambient Lighting & Blueprint Cross-Grid Pattern */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
                  radial-gradient(circle at 18px 18px, rgba(56, 189, 248, 0.45) 1.5px, transparent 1.5px)
                `,
                backgroundSize: "36px 36px, 36px 36px, 36px 36px",
                WebkitMaskImage: "radial-gradient(ellipse 95% 85% at 50% 25%, #000 65%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 95% 85% at 50% 25%, #000 65%, transparent 100%)",
              }}
            />
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column of Flagship: Headline, Badge, Core Description */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/20 border border-sky-300/30 text-sky-200 font-display font-bold text-[12px] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Core Flagship Practice
                  </div>
                  <span className="text-[12px] font-mono uppercase text-blue-200/80 font-medium">
                    Integrated Real Estate &amp; Counterparty Diligence
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-[28px] sm:text-[34px] lg:text-[38px] text-white leading-tight">
                  Property &amp; Real Estate Due Diligence
                </h3>

                <p className="font-body text-slate-200 text-[16px] sm:text-[17px] leading-relaxed max-w-2xl font-light">
                  A multi-layered review integrating historical 30-year deed continuity, Sub-Registrar encumbrance rolls, revenue records (7/12, RoR, Patta), zoning masterplans, and comprehensive <strong>Seller, Promoter &amp; Landowner Due Diligence</strong> before transactions close.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/services/property-due-diligence"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0B2545] font-display font-bold text-[14px] hover:bg-slate-100 transition-all shadow-md group/btn cursor-pointer"
                  >
                    <span>Explore Flagship Methodology</span>
                    <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>

                  <button
                    type="button"
                    onClick={onSelectForQuote}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-display font-bold text-[14px] border border-white/20 transition-all cursor-pointer"
                  >
                    <span>Request Property Scope</span>
                  </button>
                </div>
              </div>

              {/* Right Column of Flagship: Integrated Scope Checklist & Highlights */}
              <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-sky-300 pb-2 border-b border-white/10">
                  Integrated Scope Pillars
                </div>

                <div className="space-y-3 text-[14px] text-slate-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-400 text-[18px] shrink-0 mt-0.5">verified</span>
                    <div>
                      <strong className="text-white block font-display">30-Year Ownership Deed Registers</strong>
                      <span className="text-xs text-slate-300">Continuous title transfers, conveyance rolls &amp; boundary demarcation</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-sky-400 text-[18px] shrink-0 mt-0.5">person_search</span>
                    <div>
                      <strong className="text-white block font-display">Seller, Promoter &amp; Landowner Scrutiny</strong>
                      <span className="text-xs text-slate-300">Identity disambiguation, DIN directorships, cross-entity debt &amp; PoA checks</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-300 text-[18px] shrink-0 mt-0.5">lock_open</span>
                    <div>
                      <strong className="text-white block font-display">Encumbrance &amp; Charge Cross-Verification</strong>
                      <span className="text-xs text-slate-300">Sub-Registrar Form 15/16 ECs, CERSAI bank charges &amp; municipal tax clearance</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-amber-400 text-[18px] shrink-0 mt-0.5">gavel</span>
                    <div>
                      <strong className="text-white block font-display">Litigation &amp; Land-Use Permissions</strong>
                      <span className="text-xs text-slate-300">District/High Court dispute screening, NA conversion &amp; masterplan buffers</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </TimelineContent>

          {/* 2. THE 4 STRATEGIC PRACTICE AREAS (2x2 Balanced Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Card 2: Litigation, Legal & Regulatory */}
            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="flex flex-col justify-between relative bg-white text-slate-800 overflow-hidden rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-lg hover:border-[#0B2545]/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0B2545]/5 border border-[#0B2545]/10 flex items-center justify-center text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[22px]">gavel</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    Practice 02 // Legal Forums
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-[20px] text-[#0B2545] mb-2.5 leading-snug group-hover:text-[#134074] transition-colors">
                  Litigation, Legal &amp; Regulatory Due Diligence
                </h3>

                <p className="font-body text-slate-600 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                  Systematic docket search across federal, state, district, and appellate tribunals (NCLT, DRT, High Courts) to evaluate disclosed and undisclosed legal exposure.
                </p>

                <div className="space-y-1.5 pt-2 text-[13px] text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Civil, commercial division &amp; partition disputes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Insolvency (IBC/NCLT) &amp; debt recovery tribunal dockets</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/services/litigation-regulatory-due-diligence"
                  className="font-display font-bold text-[14px] text-[#0B2545] group-hover:text-[#134074] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Litigation Methodology</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </TimelineContent>

            {/* Card 3: Vendor, Supplier & Third-Party Diligence */}
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="flex flex-col justify-between relative bg-white text-slate-800 overflow-hidden rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-lg hover:border-[#0B2545]/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0B2545]/5 border border-[#0B2545]/10 flex items-center justify-center text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[22px]">verified_user</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    Practice 03 // Supply Chain
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-[20px] text-[#0B2545] mb-2.5 leading-snug group-hover:text-[#134074] transition-colors">
                  Vendor, Supplier &amp; Third-Party Due Diligence
                </h3>

                <p className="font-body text-slate-600 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                  Review business standing, active corporate registrations, beneficial ownership (UBO), and statutory defaults before onboarding or renewing critical relationships.
                </p>

                <div className="space-y-1.5 pt-2 text-[13px] text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Ultimate beneficial ownership (UBO) &amp; board vetting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Sanctions, watchlists &amp; public debarment screening</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/services/vendor-third-party-due-diligence"
                  className="font-display font-bold text-[14px] text-[#0B2545] group-hover:text-[#134074] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Third-Party Methodology</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </TimelineContent>

            {/* Card 4: Fraud Risk & Investigative Intelligence */}
            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="flex flex-col justify-between relative bg-white text-slate-800 overflow-hidden rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-lg hover:border-[#0B2545]/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0B2545]/5 border border-[#0B2545]/10 flex items-center justify-center text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[22px]">manage_search</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    Practice 04 // Forensic Review
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-[20px] text-[#0B2545] mb-2.5 leading-snug group-hover:text-[#134074] transition-colors">
                  Fraud Risk &amp; Investigative Intelligence
                </h3>

                <p className="font-body text-slate-600 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                  Structured investigative analysis comparing filings across repositories to identify circular arrangements, shadow networks, undisclosed conflicts, and anomalies.
                </p>

                <div className="space-y-1.5 pt-2 text-[13px] text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Discrepancy detection across corporate &amp; revenue filings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Open-source intelligence (OSINT) &amp; relationship mapping</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/services/fraud-investigative-intelligence"
                  className="font-display font-bold text-[14px] text-[#0B2545] group-hover:text-[#134074] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Investigative Intelligence</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </TimelineContent>

            {/* Card 5: Asset, Ownership & Wealth Intelligence */}
            <TimelineContent
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="flex flex-col justify-between relative bg-white text-slate-800 overflow-hidden rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-lg hover:border-[#0B2545]/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0B2545]/5 border border-[#0B2545]/10 flex items-center justify-center text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[22px]">account_tree</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    Practice 05 // Asset Trace
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-[20px] text-[#0B2545] mb-2.5 leading-snug group-hover:text-[#134074] transition-colors">
                  Asset, Ownership &amp; Wealth Intelligence
                </h3>

                <p className="font-body text-slate-600 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                  Research lawfully accessible real estate holdings, corporate equity stakes, SPV holding networks, and registered charges to support recovery and enforcement counsel.
                </p>

                <div className="space-y-1.5 pt-2 text-[13px] text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Corporate shareholding trees &amp; directorship stakes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>CERSAI &amp; MCA Index of Charges secured debt mapping</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/services/asset-ownership-intelligence"
                  className="font-display font-bold text-[14px] text-[#0B2545] group-hover:text-[#134074] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Asset Intelligence</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </TimelineContent>

          </div>

        </div>

        {/* Minimal Bottom Accent Line */}
        <div className="relative border-b border-slate-200 mt-4 h-6 z-[2] w-full max-w-4xl mx-auto">
          <div className="w-full h-full relative before:absolute before:-left-1.5 before:-bottom-1.5 before:w-3 before:h-3 before:bg-white before:border before:border-slate-300 after:absolute after:-right-1.5 after:-bottom-1.5 after:w-3 after:h-3 after:bg-white after:border after:border-slate-300" />
        </div>
      </div>
    </section>
  );
}
