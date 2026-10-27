"use client";

import Link from "next/link";

export default function WorkflowSteps({ onOpenConsultation }) {
  const steps = [
    {
      num: "01",
      title: "Define Requirement",
      desc: "Specify the subject, transaction context, critical risk questions, and required delivery turnaround.",
      badge: "Scoping"
    },
    {
      num: "02",
      title: "Research & Verify",
      desc: "Retrieve certified registry filings, reconcile multi-decade deed records, and cross-reference litigation dockets.",
      badge: "Investigation"
    },
    {
      num: "03",
      title: "Document Deliverable",
      desc: "Synthesize findings into an evidence-linked dossier with Red/Amber risk indicators and counsel questions.",
      badge: "Decision Support"
    }
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0B2545] font-display font-bold text-[12px] uppercase tracking-wider mb-3">
              Engagement Flow
            </div>
            <h2 className="font-display font-extrabold text-[34px] sm:text-[42px] text-[#0B2545] tracking-tight leading-tight">
              A Transparent, 3-Stage Process.
            </h2>
            <p className="font-body text-[17px] text-[#4B5563] mt-2">
              Every engagement is shaped by what needs to be answered, which records are accessible, and what timeline applies.
            </p>
          </div>

          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 font-display font-bold text-[15px] text-[#0B2545] hover:text-[#134074] transition-colors shrink-0 group"
          >
            <span>Explore 5-Stage Methodology</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* 3 Connected Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="vcheck-card p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[28px] font-extrabold text-[#0B2545]/30 group-hover:text-[#0B2545] transition-colors">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    {step.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-[20px] text-[#0B2545] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="font-body text-[15px] text-[#4B5563] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-[13px] font-semibold text-[#0B2545]">
                <span>Stage {step.num} Protocol</span>
                <span className="material-symbols-outlined text-[16px] text-[#0B2545]/60 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
