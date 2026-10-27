"use client";

import Link from "next/link";

export default function HowItWorks({ onOpenConsultation }) {
  const steps = [
    {
      step: "01",
      code: "STEP 01",
      icon: "chat",
      title: "Define Requirement",
      desc: "Understand the transaction, the subject person, corporate entity or property, and the specific risk questions that matter most.",
      sub: "Discovery & Intake"
    },
    {
      step: "02",
      code: "STEP 02",
      icon: "rule",
      title: "Agree Scope",
      desc: "Define the exact boundaries: jurisdictions, registries, historical date ranges, deliverables, estimated turnaround, and source limitations.",
      sub: "Scoped Proposal"
    },
    {
      step: "03",
      code: "STEP 03",
      icon: "search_insights",
      title: "Research & Verify",
      desc: "Search accessible statutory registers, SRO deed books, revenue mutation rolls, court dockets, and corporate filings.",
      sub: "Evidence Retrieval"
    },
    {
      step: "04",
      code: "STEP 04",
      icon: "analytics",
      title: "Analyse & Document",
      desc: "Cross-reference related entities, reconcile disclosure timelines, evaluate discrepancies, and synthesize findings into risk themes.",
      sub: "Investigative Analysis"
    },
    {
      step: "05",
      code: "STEP 05",
      icon: "task_alt",
      title: "Deliver Report",
      desc: "Receive an executive-ready, source-cited report with clear risk flags, practical context, evidence annexures, and next steps for legal counsel.",
      sub: "Decision Deliverable",
      isHighlight: true
    }
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#0B2545] text-white py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-b border-slate-700">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header strictly from website.md */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white font-display font-bold text-[12px] uppercase tracking-wider mb-3 border border-white/15">
            5-Stage Workflow
          </div>
          <h2 className="font-display font-extrabold text-[36px] sm:text-[46px] text-white tracking-tight mb-5 leading-tight">
            A Defined Scope. A Documented Deliverable.
          </h2>
          <p className="font-body text-[18px] sm:text-[19px] text-slate-300 leading-relaxed">
            Every engagement is shaped by what needs to be answered, which records are accessible, and what timeline applies.
          </p>
        </div>

        {/* 5 Connected Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
          {steps.map((item) => (
            <div
              key={item.step}
              className={`p-6 rounded-2xl flex flex-col justify-between transition-all ${
                item.isHighlight
                  ? "bg-gradient-to-b from-white/15 to-white/5 border-2 border-facet-red shadow-xl"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className={`font-mono text-[14px] font-bold ${item.isHighlight ? "text-facet-red" : "text-slate-400"}`}>
                    {item.code}
                  </span>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${item.isHighlight ? "bg-facet-red/20 text-facet-red" : "bg-white/10 text-slate-300"}`}>
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-[20px] text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                
                <p className="font-body text-[15px] text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-6">
                <span className={`text-[12px] font-mono uppercase tracking-wider block ${item.isHighlight ? "text-blue-300 font-bold" : "text-slate-400"}`}>
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar below workflow */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <div className="font-display font-bold text-[20px] text-white mb-1">
              Need a clear, scoped quote for your transaction?
            </div>
            <div className="text-[15px] text-slate-300">
              Submit your property or counterparty details for an agreed engagement charter.
            </div>
          </div>
          <Link
            href="/get-a-quote"
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-[#0B2545] font-display font-bold text-[15px] hover:bg-slate-100 transition-colors shadow-md"
          >
            Scope an Engagement
          </Link>
        </div>

      </div>
    </section>
  );
}
