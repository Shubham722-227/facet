"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MandateCTA from "../components/MandateCTA";
import ConsultationModal from "../components/ConsultationModal";
import Link from "next/link";

export default function AboutPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const pillars = [
    {
      title: "Evidence Before Assumption",
      desc: "Findings are linked directly to identified public records, statutory registries, and corporate filings, with transparent source citations.",
      icon: "verified"
    },
    {
      title: "Context Beyond Records",
      desc: "We look beyond surface documents to understand relationships, transaction timing, historical discrepancies, and underlying patterns.",
      icon: "hub"
    },
    {
      title: "Defined Scope & Limitations",
      desc: "Clients receive clear statements of what was searched, what was not accessible, which dates were examined, and what boundaries apply.",
      icon: "rule"
    },
    {
      title: "Accountable Human Review",
      desc: "Technology supports our indexing and analysis, but professional investigative judgement and source review guide every conclusion.",
      icon: "person_check"
    }
  ];

  return (
    <>
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#0B2545] to-[#133966] text-white py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-display font-bold text-white mb-4 border border-white/15">
              ABOUT FACET VERIFY
            </div>
            
            <h1 className="font-display font-extrabold text-[38px] sm:text-[52px] text-white tracking-tight mb-5 leading-tight max-w-3xl">
              Global Due Diligence & Investigative Intelligence.
            </h1>
            
            <p className="font-body text-[19px] text-slate-300 max-w-2xl leading-relaxed">
              FACET Verify delivers country-specific public-record verification, background scrutiny, and investigative intelligence across the United States, Europe, the UK, and India—equipping investment funds, multinational corporations, and law firms with the evidence needed for critical capital decisions.
            </p>
          </div>
        </section>

        {/* Core Principles Section */}
        <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="font-display font-bold text-[32px] sm:text-[40px] text-primary tracking-tight mb-3">
              Our Operating Principles
            </h2>
            <p className="font-body text-[18px] text-on-surface-variant leading-relaxed">
              We describe our work as risk identification and decision support based on a defined scope, accessible sources and available evidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-facet-red mb-6">
                    <span className="material-symbols-outlined text-[26px]">{p.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-primary mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-body text-[15px] text-on-surface-variant leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Boundaries Callout */}
          <div className="mt-16 p-8 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h4 className="font-display font-bold text-[20px] text-primary mb-2">
                Clear Scope. Sourced Findings. Practical Risk Context.
              </h4>
              <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">
                We do not promise that every risk can be found, that every record is complete, or that a report guarantees a safe transaction. Our deliverables equip clients and their legal counsel with documented intelligence and specific questions for further verification.
              </p>
            </div>
            <Link
              href="/how-it-works"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-primary text-white font-display font-bold text-[14px] hover:bg-slate-800 transition-colors"
            >
              How It Works
            </Link>
          </div>
        </section>

        {/* Mandate CTA */}
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
