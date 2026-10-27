"use client";

import Link from "next/link";

export default function Positioning() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200" aria-label="Core Philosophy">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-[#0B2545] font-display font-bold text-[12px] uppercase tracking-wider mb-3 border border-slate-200">
            The Investigative Distinction
          </div>
          <h2 className="font-display font-extrabold text-[34px] sm:text-[44px] text-[#0B2545] tracking-tight leading-tight mb-4">
            Records Tell Part of the Story. <br className="hidden sm:inline" />
            <span className="text-[#134074]">Context Matters.</span>
          </h2>
          <p className="font-body text-[17px] sm:text-[18px] text-[#4B5563] leading-relaxed">
            Public records and documents are essential to due diligence. Because corporate filings, statutory registers, and court dockets vary significantly across the US, Europe, the UK, and India, an informed decision requires country-specific due diligence tailored to each jurisdiction&apos;s registries and evidentiary rules.
          </p>
        </div>

        {/* 2-Column Comparative Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Column 1: Record-Based Research */}
          <div className="rounded-2xl p-7 sm:p-8 bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0B2545] shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">description</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[20px] text-[#0B2545] leading-tight">
                    Multi-Jurisdictional Records
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    The Primary Data Baseline
                  </span>
                </div>
              </div>

              <p className="font-body text-[15px] text-[#4B5563] mb-5 leading-relaxed">
                Systematic retrieval of publicly indexed filings, official gazettes, and statutory government registers across target jurisdictions:
              </p>

              <ul className="space-y-3.5">
                {[
                  { title: "United States (Federal & State)", desc: "Delaware & state Division of Corporations, SEC EDGAR disclosures, UCC liens, and PACER federal court dockets." },
                  { title: "United Kingdom & Europe", desc: "UK Companies House PSC registers, European Business Register (EBR), Insolvency registers, and High Court winding-up rolls." },
                  { title: "India & South Asia", desc: "MCA-21 statutory master data, e-Courts & High Court dockets, Sub-Registrar deed books, and land revenue mutation records." },
                  { title: "Global Sanctions & Regulatory Lists", desc: "US OFAC, UK OFSI, EU Consolidated Sanctions, INTERPOL Red Notices, and international PEP databases." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-slate-400 text-[18px] mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <div>
                      <div className="font-display font-bold text-[15px] text-[#0B2545]">{item.title}</div>
                      <div className="font-body text-[13px] text-slate-500 leading-normal">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Investigative Analysis */}
          <div className="rounded-2xl p-7 sm:p-8 bg-white border-2 border-[#0B2545]/20 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0B2545]" />
            
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#0B2545]/5 border border-[#0B2545]/15 flex items-center justify-center text-[#0B2545] shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">manage_search</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[20px] text-[#0B2545] leading-tight">
                    Country-Specific Analysis
                  </h3>
                  <span className="text-[11px] font-bold text-[#134074] uppercase tracking-wider">
                    The Decision Intelligence
                  </span>
                </div>
              </div>

              <p className="font-body text-[15px] text-[#4B5563] mb-5 leading-relaxed">
                Synthesizing country-specific records to uncover behavioral patterns, undisclosed liabilities, and structural risks:
              </p>

              <ul className="space-y-3.5">
                {[
                  { title: "Country-specific beneficial ownership tracing", desc: "Mapping parent entities, shadow directorships, registered holding structures, and corporate networks." },
                  { title: "Subject disambiguation across naming conventions", desc: "Preventing false positives by resolving transliterated names, director IDs (DIN), and international tax identifiers." },
                  { title: "Reconciling statutory disclosures with local ground reality", desc: "Harmonizing western registry databases with emerging market archival records and physical inspections." },
                  { title: "Actionable Red, Amber, Green risk frameworks", desc: "Delivering an executive audit trail to arm investment committees, transactional counsel, and credit underwriters." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px] mt-0.5 shrink-0">
                      verified
                    </span>
                    <div>
                      <div className="font-display font-bold text-[15px] text-[#0B2545]">{item.title}</div>
                      <div className="font-body text-[13px] text-slate-500 leading-normal">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
