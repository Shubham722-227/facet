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
        <section className="bg-primary text-on-primary py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-b border-slate-800">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-electric/15 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10">
            <div className="max-w-2xl w-full">
              <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2 text-slate-600">/</span>
                <span className="text-white font-medium">Insights</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white mb-4">
                <span>INTELLIGENCE BRIEFINGS</span>
              </div>
              <h1 className="font-display-xl text-3xl sm:text-5xl text-white tracking-tight mb-4">
                Perspectives on Risk &amp; Due Diligence.
              </h1>
              <p className="font-body-lg text-slate-300 leading-relaxed">
                Field intelligence, case chronologies, and evidentiary analysis on complex SPVs, maritime sanctions evasion, and pre-insolvency asset transfers across jurisdictions.
              </p>
            </div>

            <div className="w-full sm:w-auto flex justify-center lg:justify-end shrink-0">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] xl:w-[360px] xl:h-[360px]">
                <Image
                  src="/images/mascots/insights.png"
                  alt="FACET Insights Mascot"
                  fill
                  className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] select-none pointer-events-none"
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
