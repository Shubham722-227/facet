"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhoWeServe from "../components/WhoWeServe";
import MandateCTA from "../components/MandateCTA";
import ConsultationModal from "../components/ConsultationModal";
import Link from "next/link";

export default function IndustriesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        <section className="bg-gradient-to-b from-[#0B2545] to-[#133966] text-white py-24 px-4 sm:px-8 lg:px-12 border-b border-slate-700">
          <div className="max-w-[1440px] mx-auto">
            <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-slate-600">/</span>
              <span className="text-white font-medium">Who We Serve</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-display font-bold text-white mb-4 border border-white/15">
              CLIENT APPLICATIONS & SECTORS
            </div>
            <h1 className="font-display font-extrabold text-[38px] sm:text-[52px] text-white tracking-tight mb-4 leading-tight max-w-3xl">
              Due Diligence by Sector and Decision Type.
            </h1>
            <p className="font-body text-[19px] text-slate-300 max-w-2xl leading-relaxed">
              Whether you are advancing development capital, negotiating an acquisition or evaluating a third-party relationship, FACET Verify tailors scope to the risks that matter most.
            </p>
          </div>
        </section>

        <WhoWeServe onOpenConsultation={() => setConsultationOpen(true)} />

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
