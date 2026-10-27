"use client";

import Link from "next/link";

export default function MandateCTA({ onOpenConsultation }) {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative bg-gradient-to-br from-[#0B2545] to-[#133966] text-white rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-slate-700">
          
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <img src="/complete-logo-white.svg" alt="FACET Verify" className="h-9 w-auto" />
              <span className="font-display font-bold text-blue-200 text-[13px] uppercase tracking-wider pl-3 border-l border-white/20">
                Start a Scoped Engagement
              </span>
            </div>

            <h2 className="font-display font-extrabold text-white tracking-tight mb-5 text-[34px] sm:text-[44px] lg:text-[50px] leading-tight">
              Scope Your Due Diligence Requirement.
            </h2>

            <p className="font-body text-[18px] sm:text-[20px] text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Initiate due diligence across the United States, Europe, the UK, or India. Tell us what you are investigating, the target jurisdiction, transaction timeline, and critical risk questions. We will outline accessible public records, recommended scope, and estimated turnaround.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/get-a-quote"
                className="px-8 py-4 rounded-xl bg-white text-[#0B2545] font-display font-bold text-[16px] tracking-wide shadow-lg hover:bg-slate-100 transition-all flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-display font-bold text-[16px] tracking-wide hover:bg-white/20 transition-all border border-white/20"
              >
                <span>Discuss Your Requirement</span>
              </button>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-slate-300 text-[14px]">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-blue-300 text-[20px]">check_circle</span>
                <span className="font-medium">Agreed Scope & Defined Sources</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-blue-300 text-[20px]">security</span>
                <span className="font-medium">Strict Confidentiality Standard</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-blue-300 text-[20px]">description</span>
                <span className="font-medium">Documented Source Exhibits</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
