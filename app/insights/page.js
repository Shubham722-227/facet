"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InsightsSection from "../components/InsightsSection";
import MandateCTA from "../components/MandateCTA";
import ConsultationModal from "../components/ConsultationModal";
import Link from "next/link";
import Image from "next/image";

export default function InsightsPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        <section className="bg-gradient-to-b from-[#0B2545] to-[#133966] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-b border-slate-700">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 relative z-10">
            <div className="max-w-2xl xl:max-w-3xl w-full">
              <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2 text-slate-600">/</span>
                <span className="text-white font-medium">Insights</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-display font-bold text-white mb-4 border border-white/15">
                INTELLIGENCE BRIEFINGS
              </div>
              <h1 className="font-display font-extrabold text-[38px] sm:text-[52px] text-white tracking-tight mb-4 leading-tight">
                Perspectives on Risk &amp; Due Diligence.
              </h1>
              <p className="font-body text-[19px] text-slate-300 leading-relaxed">
                Field intelligence, case chronologies, and evidentiary analysis on complex SPVs, maritime sanctions evasion, and pre-insolvency asset transfers across jurisdictions.
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]">
                <Image
                  src="/images/mascots/insights.png"
                  alt="FACET Insights Mascot"
                  fill
                  className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)] select-none pointer-events-none"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <InsightsSection />

        <MandateCTA onOpenConsultation={() => setConsultationOpen(true)} />
      </main>

      <Footer />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
}
