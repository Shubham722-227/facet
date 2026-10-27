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
              Jurisdiction-specific public-record verification, registry analysis, and investigative intelligence across the US, Europe, the UK, and India.
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

        {/* 3-Column Bento Grid Structure (7 Core Verticals - Equal Height Matching) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch w-full pb-6">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-5 h-full">
            
            {/* Card 1: Property & Real Estate (Flex 1.35) */}
            <TimelineContent
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="flex-[1.35] flex flex-col justify-between relative bg-[#0B2545] text-white overflow-hidden rounded-2xl border border-[#133966] p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-sky-300 group-hover:bg-white group-hover:text-[#0B2545] transition-all">
                    <span className="material-symbols-outlined text-[22px]">real_estate_agent</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                    Land &amp; Real Assets
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-[20px] sm:text-[22px] text-white mb-2.5 leading-snug group-hover:text-sky-200 transition-colors">
                  Property &amp; Real Estate Due Diligence
                </h3>

                <p className="font-body text-slate-200 text-[14px] sm:text-[15px] leading-relaxed font-light">
                  Review ownership chains, title encumbrances, land revenue records, and property-linked litigation across target jurisdictions.
                </p>
              </div>

              <div className="relative z-10 pt-5 mt-6 border-t border-white/15 flex items-center justify-between">
                <Link
                  href="/services/property-due-diligence"
                  className="font-display font-bold text-[13px] sm:text-[14px] text-white hover:text-sky-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Property Diligence</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <span className="w-2 h-2 rounded-full bg-emerald-400" title="Active Methodology" />
              </div>
            </TimelineContent>

            {/* Card 2: Seller & Promoter Due Diligence (Flex 1) */}
            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="flex-1 flex flex-col justify-between relative bg-gradient-to-br from-[#134074] via-[#103B6D] to-[#1E3A8A] text-white overflow-hidden rounded-2xl border border-blue-400/25 p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#134074] transition-all">
                    <span className="material-symbols-outlined text-[20px]">person_search</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-100 bg-white/15 px-2.5 py-0.5 rounded-full border border-white/20">
                    Counterparty &amp; Promoters
                  </span>
                </div>

                <h3 className="font-display font-bold text-[18px] sm:text-[19px] text-white mb-2 leading-snug">
                  Seller, Promoter &amp; Landowner Due Diligence
                </h3>

                <p className="font-body text-blue-100 text-[13px] sm:text-[14px] leading-relaxed">
                  Scrutinize counterparty background, corporate shareholdings, dispute history, and reputational indicators.
                </p>
              </div>

              <div className="relative z-10 pt-4 mt-5 border-t border-white/20 flex items-center justify-between">
                <Link
                  href="/services/seller-promoter-due-diligence"
                  className="font-display font-bold text-[13px] sm:text-[14px] text-white hover:text-blue-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Counterparty Diligence</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </TimelineContent>
          </div>

          {/* COLUMN 2 (3 Equal Stacked Cards) */}
          <div className="flex flex-col gap-5 h-full">
            
            {/* Card 3: Litigation, Legal & Regulatory */}
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="flex-1 flex flex-col justify-between relative bg-white text-slate-800 overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md hover:border-[#134074]/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0B2545]/5 border border-[#0B2545]/10 flex items-center justify-center text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[20px]">gavel</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                    Legal &amp; Regulatory
                  </span>
                </div>

                <h3 className="font-display font-bold text-[17px] sm:text-[18px] text-[#0B2545] mb-2 leading-snug group-hover:text-[#134074] transition-colors">
                  Litigation, Legal &amp; Regulatory Due Diligence
                </h3>

                <p className="font-body text-slate-600 text-[13px] sm:text-[14px] leading-relaxed">
                  Search court and tribunal dockets across federal, state, and appellate forums to identify disclosed and undisclosed legal exposure.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/services/litigation-regulatory-due-diligence"
                  className="font-display font-bold text-[13px] sm:text-[14px] text-[#0B2545] group-hover:text-[#134074] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Litigation Research</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </TimelineContent>

            {/* Card 4: Vendor & Third-Party Diligence */}
            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="flex-1 flex flex-col justify-between relative bg-white text-slate-800 overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md hover:border-[#134074]/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0B2545]/5 border border-[#0B2545]/10 flex items-center justify-center text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                    Vendors &amp; Supply Chain
                  </span>
                </div>

                <h3 className="font-display font-bold text-[17px] sm:text-[18px] text-[#0B2545] mb-2 leading-snug group-hover:text-[#134074] transition-colors">
                  Vendor, Supplier &amp; Third-Party Due Diligence
                </h3>

                <p className="font-body text-slate-600 text-[13px] sm:text-[14px] leading-relaxed">
                  Verify business standing, management integrity, and statutory filings before onboarding critical operational partners.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/services/vendor-third-party-due-diligence"
                  className="font-display font-bold text-[13px] sm:text-[14px] text-[#0B2545] group-hover:text-[#134074] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Third-Party Diligence</span>
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
              className="flex-1 flex flex-col justify-between relative bg-white text-slate-800 overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md hover:border-[#134074]/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0B2545]/5 border border-[#0B2545]/10 flex items-center justify-center text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[20px]">account_tree</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                    Asset &amp; Ownership
                  </span>
                </div>

                <h3 className="font-display font-bold text-[17px] sm:text-[18px] text-[#0B2545] mb-2 leading-snug group-hover:text-[#134074] transition-colors">
                  Asset, Ownership &amp; Wealth Intelligence
                </h3>

                <p className="font-body text-slate-600 text-[13px] sm:text-[14px] leading-relaxed">
                  Map lawfully accessible property holdings, corporate ownership links, beneficial structures, and public filings.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/services/asset-ownership-intelligence"
                  className="font-display font-bold text-[13px] sm:text-[14px] text-[#0B2545] group-hover:text-[#134074] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Asset Intelligence</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </TimelineContent>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-5 h-full">
            
            {/* Card 6: M&A, Investment & Transaction (Flex 1) */}
            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="flex-1 flex flex-col justify-between relative bg-gradient-to-br from-[#134074] via-[#103B6D] to-[#1E3A8A] text-white overflow-hidden rounded-2xl border border-blue-400/25 p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#134074] transition-all">
                    <span className="material-symbols-outlined text-[20px]">handshake</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-100 bg-white/15 px-2.5 py-0.5 rounded-full border border-white/20">
                    M&amp;A &amp; Private Equity
                  </span>
                </div>

                <h3 className="font-display font-bold text-[18px] sm:text-[19px] text-white mb-2 leading-snug">
                  M&amp;A, Investment &amp; Transaction Due Diligence
                </h3>

                <p className="font-body text-blue-100 text-[13px] sm:text-[14px] leading-relaxed">
                  Support transaction decisions with country-specific target scrutiny, founder track-record vetting, and regulatory filings.
                </p>
              </div>

              <div className="relative z-10 pt-4 mt-5 border-t border-white/20 flex items-center justify-between">
                <Link
                  href="/services/ma-investment-due-diligence"
                  className="font-display font-bold text-[13px] sm:text-[14px] text-white hover:text-blue-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Transaction Diligence</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </TimelineContent>

            {/* Card 7: Fraud Risk & Investigative Intelligence (Flex 1.35) */}
            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="flex-[1.35] flex flex-col justify-between relative bg-[#0B2545] text-white overflow-hidden rounded-2xl border border-[#133966] p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-teal-300 group-hover:bg-white group-hover:text-[#0B2545] transition-all">
                    <span className="material-symbols-outlined text-[22px]">manage_search</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-teal-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                    Investigative Intelligence
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-[20px] sm:text-[22px] text-white mb-2.5 leading-snug group-hover:text-teal-200 transition-colors">
                  Fraud Risk &amp; Investigative Intelligence
                </h3>

                <p className="font-body text-slate-200 text-[14px] sm:text-[15px] leading-relaxed font-light">
                  Investigate discrepancies across official repositories to document undisclosed affiliations, conflicts, and anomalous risk indicators.
                </p>
              </div>

              <div className="relative z-10 pt-5 mt-6 border-t border-white/15 flex items-center justify-between">
                <Link
                  href="/services/fraud-investigative-intelligence"
                  className="font-display font-bold text-[13px] sm:text-[14px] text-white hover:text-teal-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Investigative Intelligence</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <span className="w-2 h-2 rounded-full bg-teal-400" title="Forensic Scrutiny" />
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
