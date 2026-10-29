"use client";

import Link from "next/link";

export default function MandateCTA({ onOpenConsultation }) {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative bg-gradient-to-br from-[#0B2545] to-[#133966] text-white rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-700">
          
          {/* Subtle ambient lighting */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Mascot on the Left */}
            <div className="lg:col-span-5 flex justify-center items-center relative order-2 lg:order-1">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-2xl" />
                <img
                  src="/images/facet-mascot.png"
                  alt="FACET Mascot Falcon"
                  className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Content on the Right */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/complete-logo-white.svg" alt="FACET Verify" className="h-9 w-auto" />
                <span className="font-display font-bold text-blue-200 text-[13px] uppercase tracking-wider pl-3 border-l border-white/20">
                  Start a Scoped Engagement
                </span>
              </div>

              <h2 className="font-display font-extrabold text-white tracking-tight mb-5 text-[32px] sm:text-[42px] lg:text-[46px] leading-tight">
                Scope Your Due Diligence Requirement.
              </h2>

              <p className="font-body text-[17px] sm:text-[19px] text-slate-300 mb-8 leading-relaxed">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-slate-300 text-[13px] sm:text-[14px]">
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
      </div>
    </section>
  );
}
