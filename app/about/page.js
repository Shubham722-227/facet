"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MandateCTA from "../components/MandateCTA";
import ConsultationModal from "../components/ConsultationModal";

export default function AboutPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const pillars = [
    {
      title: "Evidence-Led Research",
      desc: "We rely on primary official records, cadastral registers, and authenticated court documents rather than unverified commercial scrapers.",
      icon: "verified"
    },
    {
      title: "Air-Gapped Vault Security",
      desc: "All client disclosures, deal rooms, and sensitive target identifiers are processed under strict ISO-27001 aligned custody.",
      icon: "encrypted"
    },
    {
      title: "Legal Privilege Protocols",
      desc: "Engagements are scoped in conjunction with General Counsels and external litigators to preserve work-product doctrine and arbitral admissibility.",
      icon: "policy"
    },
    {
      title: "Sovereign Intelligence Reach",
      desc: "Direct field access across 140+ official registries, land revenue gazettes, and specialized judicial benches.",
      icon: "public"
    }
  ];

  return (
    <>
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        <section className="bg-primary text-on-primary py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-accent-electric mb-4">
              <span>INSTITUTIONAL GOVERNANCE</span>
            </div>
            <h1 className="font-display-xl text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Forensic Truth for High-Stakes Capital.
            </h1>
            <p className="font-body-lg text-slate-300 max-w-2xl leading-relaxed">
              FACET provides independent, defensible due diligence and investigative intelligence to help sponsors, boards, and sovereign institutions make decisions with uncompromised clarity.
            </p>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-20 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white/85 backdrop-blur-xl p-7 rounded-2xl shadow-sm border border-border-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-6">
                    <span className="material-symbols-outlined text-[26px]">{p.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-lg text-primary font-bold mb-2">
                    {p.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

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
