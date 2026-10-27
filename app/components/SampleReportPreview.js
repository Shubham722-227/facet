"use client";

import { useState } from "react";
import Link from "next/link";

export default function SampleReportPreview({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <section id="sample-report" className="w-full px-4 sm:px-8 lg:px-12 py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & 4 Evidentiary Principles */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-primary font-display font-bold text-[12px] uppercase tracking-wider mb-4 border border-slate-200">
              The Deliverable Architecture
            </div>
            
            <h2 className="font-display font-extrabold text-[36px] sm:text-[44px] text-primary tracking-tight leading-tight mb-5">
              Evidence You Can Read. <br />
              <span className="text-[#134074]">Context You Can Use.</span>
            </h2>
            
            <p className="font-body text-[18px] text-on-surface-variant mb-8 leading-relaxed">
              A FACET Verify deliverable is structured to help decision-makers see what was reviewed, what was found, where the information originated, and what risks require attention.
            </p>

            <div className="space-y-6 w-full">
              {[
                {
                  num: "1",
                  title: "Evidence-Led Research",
                  desc: "Grounded in primary official records, statutory registries, and verified public disclosures rather than uncorroborated automated scrapers."
                },
                {
                  num: "2",
                  title: "Source-Linked Findings",
                  desc: "Every key finding is linked to an identified source register, filing, deed extract or docket with clear date boundaries."
                },
                {
                  num: "3",
                  title: "Transparent Limitations",
                  desc: "Clear explanation of what was searched, which periods were examined, and what state or municipal record constraints apply."
                },
                {
                  num: "4",
                  title: "Structured Decision Context",
                  desc: "Organised into an executive summary, risk themes (Red, Amber, Green), detailed analysis, and key questions for legal counsel."
                }
              ].map((p) => (
                <div key={p.num} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-primary font-bold font-mono text-[15px] shrink-0">
                    {p.num}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary text-[17px] mb-1">
                      {p.title}
                    </h4>
                    <p className="font-body text-[15px] text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 w-full flex items-center gap-4">
              <Link
                href="/sample-report"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-display font-bold text-[15px] hover:bg-slate-800 transition-all shadow-sm"
              >
                <span>Explore Full Sample Report</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-End Glassmorphic Dossier Mockup */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl bg-[#0B2545] border border-white/15 p-6 sm:p-8 shadow-2xl text-white backdrop-blur-xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
              
              {/* Dossier Header */}
              <div className="flex flex-wrap items-center justify-between pb-5 border-b border-white/15 gap-4 mb-5 relative z-10">
                <div className="flex items-center gap-3">
                  <img src="/logo-mark-white.svg" alt="FACET" className="h-7 w-auto" />
                  <div>
                    <div className="font-display font-bold text-[15px] text-white">
                      FACET VERIFY DOSSIER PREVIEW
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      REF: FV-2025-PR-0881 // PROPERTY & COUNTERPARTY
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-blue-200 text-[11px] font-mono border border-white/15">
                    Illustrative Sample Report
                  </span>
                </div>
              </div>

              {/* Dossier Tabs */}
              <div className="flex gap-2 mb-6 border-b border-white/15 pb-3 relative z-10">
                {[
                  { id: "summary", label: "Executive Risk Summary" },
                  { id: "chain", label: "Title Chain Analysis" },
                  { id: "litigation", label: "Litigation Docket" }
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTab(t.id)}
                    className={`px-3.5 py-1.5 rounded-lg font-display font-semibold text-[13px] transition-all ${
                      activeTab === t.id
                        ? "bg-white text-[#0B2545] shadow-sm font-bold"
                        : "bg-white/10 text-slate-300 hover:text-white hover:bg-white/15"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: Executive Summary */}
              {activeTab === "summary" && (
                <div className="space-y-4">
                  {/* Red Flag Card */}
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-facet-red text-[22px] shrink-0 mt-0.5">
                      error
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-bold text-[15px] text-red-200">
                          HIGH RISK FLAG: Pending Partition Dispute (2022)
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-mono">
                          RED
                        </span>
                      </div>
                      <p className="text-[13px] text-red-100/80 leading-relaxed mb-2">
                        Suit for partition and separate possession filed by co-heirs currently pending before the Senior Civil Division. Ad-interim stay application on alienation scheduled for hearing.
                      </p>
                      <div className="text-[11px] font-mono text-red-300/70">
                        SOURCE: Civil Court Regular Suit No. 412/2022 // Certified Docket Inspection
                      </div>
                    </div>
                  </div>

                  {/* Amber Flag Card */}
                  <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-warning-amber text-[22px] shrink-0 mt-0.5">
                      warning
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-bold text-[15px] text-amber-200">
                          ATTENTION ITEM: Mutation Register Discrepancy (2018)
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                          AMBER
                        </span>
                      </div>
                      <p className="text-[13px] text-amber-100/80 leading-relaxed mb-2">
                        Mutation entry No. 1042 recorded in revenue register reflects a 4-month variance against registered gift deed execution date. Requires reconciliation with Tahsildar certified copy.
                      </p>
                      <div className="text-[11px] font-mono text-amber-300/70">
                        SOURCE: Taluk Mutation Extract Register // SRO Volume 489
                      </div>
                    </div>
                  </div>

                  {/* Green Verified Card */}
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-verification-green text-[22px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-bold text-[15px] text-emerald-200">
                          VERIFIED: Promoter Directorships & Tax Status Clear
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                          GREEN
                        </span>
                      </div>
                      <p className="text-[13px] text-emerald-100/80 leading-relaxed mb-2">
                        Promoter active directorships reconciled with MCA21. No registered bank charges or wilful default listings noted across official financial enforcement indices.
                      </p>
                      <div className="text-[11px] font-mono text-emerald-300/70">
                        SOURCE: MCA21 Company Master Index // TransUnion Commercial Charge Registry
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Chain of Title */}
              {activeTab === "chain" && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3 text-[14px]">
                  <div className="font-display font-bold text-white mb-2 text-[15px]">
                    30-Year Chronological Transfer Register
                  </div>
                  <div className="border-l-2 border-slate-600 pl-4 space-y-3">
                    <div>
                      <div className="text-[12px] font-mono text-facet-red font-bold">1994 // ORIGINAL ALLOTMENT</div>
                      <div className="text-slate-200 text-[13px]">Government Grant to Agricultural Settlement Society (Deed No. 412/1994).</div>
                    </div>
                    <div>
                      <div className="text-[12px] font-mono text-slate-400 font-bold">2008 // REGISTERED SALE CONVEYANCE</div>
                      <div className="text-slate-200 text-[13px]">Conveyed to Greenfield Infrastructure Pvt Ltd for non-agricultural industrial conversion.</div>
                    </div>
                    <div>
                      <div className="text-[12px] font-mono text-amber-400 font-bold">2018 // FAMILY GIFT & MUTATION</div>
                      <div className="text-slate-200 text-[13px]">Inter-promoter gift deed with mutation gap under verification.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Litigation Docket */}
              {activeTab === "litigation" && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[13px] space-y-2.5">
                  <div className="font-display font-bold text-white text-[15px] mb-2">
                    Litigation Screening Results across 3 Jurisdictions
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10 text-slate-300">
                    <span>District Civil Court (Haveli)</span>
                    <span className="text-red-400 font-bold">1 Active Partition Case</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10 text-slate-300">
                    <span>Bombay High Court (Commercial)</span>
                    <span className="text-emerald-400 font-bold">0 Pending Writs</span>
                  </div>
                  <div className="flex justify-between py-1.5 text-slate-300">
                    <span>NCLT (Insolvency Tribunal)</span>
                    <span className="text-emerald-400 font-bold">Clear / No Filings</span>
                  </div>
                </div>
              )}

              {/* Dossier Disclaimer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>FACET VERIFY STATUTORY SCOPE DISCLAIMER</span>
                <span>NOT A TITLE GUARANTEE OR LEGAL CERTIFICATE</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
