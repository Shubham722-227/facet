"use client";

import Link from "next/link";

export default function MandateCTA({ onOpenConsultation }) {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-20 bg-surface-canvas">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative bg-primary-container text-on-primary rounded-2xl p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-white/10">
          {/* Prismatic Light Effect in Background */}
          <div className="absolute -right-20 -bottom-20 w-[30rem] h-[30rem] bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-accent-electric/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6 font-mono text-xs text-accent-electric border border-accent-electric/20">
              <span className="w-2 h-2 rounded-full bg-verification-green animate-pulse"></span>
              <span>CONFIDENTIAL INTAKE ACTIVE</span>
            </div>

            <h2 className="font-headline-lg text-white tracking-tight mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
              Verify Before You Commit Capital.
            </h2>

            <p className="font-body-lg text-body-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Protect your transactions, board liability, and LP capital with court-tested corporate intelligence. Initial consultations are conducted under attorney-client privilege protocols.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-8 py-4 rounded-lg bg-white text-primary font-label-md text-label-md uppercase tracking-wider font-bold shadow-lg hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                <span>Request a Consultation</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <Link
                href="/how-it-works"
                className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md text-white font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-white/20 transition-all border border-white/10"
              >
                <span>Review Methodologies</span>
              </Link>
            </div>

            {/* Institutional Trust Seals Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-accent-electric text-[20px]">encrypted</span>
                <span className="font-label-sm text-xs text-slate-300 uppercase tracking-wider">
                  Air-Gapped Vault Security
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-accent-electric text-[20px]">verified_user</span>
                <span className="font-label-sm text-xs text-slate-300 uppercase tracking-wider">
                  ISO-27001 Aligned Custody
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-accent-electric text-[20px]">policy</span>
                <span className="font-label-sm text-xs text-slate-300 uppercase tracking-wider">
                  Legal Privilege Protocols
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
