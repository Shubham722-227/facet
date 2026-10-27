"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import MandateCTA from "../components/MandateCTA";
import ConsultationModal from "../components/ConsultationModal";

export default function ServicesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        {/* Editorial Sub-Hero Banner */}
        <section className="bg-primary text-on-primary py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-electric/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md mb-4 text-xs font-mono text-accent-electric">
              <span>SPECIALIZED INVESTIGATIVE PRACTICE</span>
            </div>
            <h1 className="font-display-xl text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Comprehensive Due Diligence &amp; Forensics.
            </h1>
            <p className="font-body-lg text-slate-300 max-w-2xl leading-relaxed">
              Explore our core intelligence capabilities covering asset verification, promoter scrutiny, litigation risk, vendor screening, cross-border asset tracing, and fraud investigations.
            </p>
          </div>
        </section>

        {/* 7 Services Bento Matrix */}
        <ServicesSection onSelectForQuote={() => setConsultationOpen(true)} />

        {/* Conversion Panel */}
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
