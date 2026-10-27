"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InsightsSection from "../components/InsightsSection";
import MandateCTA from "../components/MandateCTA";
import ConsultationModal from "../components/ConsultationModal";

export default function InsightsPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        <section className="bg-primary text-on-primary py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-electric/15 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-accent-electric mb-4">
              <span>INTELLIGENCE BRIEFINGS</span>
            </div>
            <h1 className="font-display-xl text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Perspectives on Risk &amp; Due Diligence.
            </h1>
            <p className="font-body-lg text-slate-300 max-w-2xl leading-relaxed">
              Field intelligence, case chronologies, and evidentiary analysis on cross-border SPVs, maritime sanctions evasion, and pre-insolvency asset transfers.
            </p>
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
