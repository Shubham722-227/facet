"use client";

import Link from "next/link";

export default function HowItWorks({ onOpenConsultation }) {
  const stages = [
    {
      code: "01 // INTAKE",
      icon: "lock",
      title: "Submit Request",
      desc: "Secure onboarding under strict bilateral NDA protocols. Identification of target parameters and jurisdictions.",
      sub: "Air-Gapped Vault",
      border: "border-accent-electric/60"
    },
    {
      code: "02 // SCOPE",
      icon: "rule",
      title: "Define Scope",
      desc: "Jurisdictional scoping, corporate registry access points, and establishment of legal discovery boundaries.",
      sub: "Mandate Charter",
      border: "border-accent-electric/40"
    },
    {
      code: "03 // INVESTIGATE",
      icon: "search_insights",
      title: "Field & Digital Research",
      desc: "Ground-level record extraction, municipal archives, litigation dockets, and confidential HUMINT source debriefs.",
      sub: "Multi-Source Intake",
      border: "border-accent-electric/60",
      activeIcon: true
    },
    {
      code: "04 // TRIANGULATE",
      icon: "analytics",
      title: "Assess Findings",
      desc: "Multi-analyst cross-examination, conflict screening, source verification, and risk-severity indexing.",
      sub: "Admissibility Review",
      border: "border-accent-electric/40"
    },
    {
      code: "05 // DOSSIER",
      icon: "verified",
      title: "Deliver Report",
      desc: "Cryptographically signed board-ready dossier with granular source annexures and direct counsel briefing.",
      sub: "Executive Delivery",
      border: "border-verification-green",
      isGreen: true
    }
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#08182B] text-on-primary py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Ambient mesh pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-container/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-electric font-semibold block mb-2">
            The Evidentiary Pipeline
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-white tracking-tight mb-4">
            From Inquiry to Institutional Intelligence.
          </h2>
          <p className="font-body-md text-body-md text-slate-300">
            A closed-loop forensic intake and verification architecture designed for legal defensibility.
          </p>
        </div>

        {/* 5 Connected Horizontal Glass Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {stages.map((stage) => (
            <div
              key={stage.code}
              className={`bg-white/5 backdrop-blur-xl p-5 rounded-xl border-t-2 ${stage.border} hover:bg-white/10 transition-all flex flex-col justify-between min-h-[220px] shadow-lg`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`font-mono ${stage.isGreen ? "text-verification-green" : "text-accent-electric"} text-sm font-bold`}>
                    {stage.code}
                  </span>
                  <span className={`material-symbols-outlined ${stage.isGreen ? "text-verification-green" : stage.activeIcon ? "text-accent-electric" : "text-slate-400"} text-[18px]`}>
                    {stage.icon}
                  </span>
                </div>
                <h4 className="font-headline-sm text-[17px] text-white font-semibold mb-2">
                  {stage.title}
                </h4>
                <p className="font-body-sm text-[13px] text-slate-300 leading-snug">
                  {stage.desc}
                </p>
              </div>
              <span className={`font-label-sm text-[10px] ${stage.isGreen ? "text-verification-green font-bold" : "text-slate-400"} uppercase tracking-widest block pt-3 border-t border-white/10 mt-4`}>
                {stage.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Protocol Action */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-verification-green text-[22px]">lock_clock</span>
            <span className="text-xs sm:text-sm text-slate-300 font-mono">
              Strict Bilateral NDA Execution Prior to Identifying Target Identifiers
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-6 py-2.5 rounded-lg bg-accent-electric/20 text-accent-electric border border-accent-electric/40 font-label-md text-xs uppercase tracking-wider font-semibold hover:bg-accent-electric hover:text-primary transition-all"
          >
            Initiate Secure Mandate
          </button>
        </div>
      </div>
    </section>
  );
}
