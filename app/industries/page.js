"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhoWeServe from "../components/WhoWeServe";
import MandateCTA from "../components/MandateCTA";
import ConsultationModal from "../components/ConsultationModal";
import Link from "next/link";
import Image from "next/image";

export default function IndustriesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        <section className="bg-gradient-to-b from-[#0B2545] to-[#133966] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 border-b border-slate-700 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10">
            <div className="max-w-2xl w-full">
              <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2 text-slate-600">/</span>
                <span className="text-white font-medium">Who We Serve</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-display font-bold text-white mb-4 border border-white/15">
                CLIENT APPLICATIONS &amp; SECTORS
              </div>
              <h1 className="font-display font-extrabold text-[38px] sm:text-[52px] text-white tracking-tight mb-4 leading-tight">
                Due Diligence by Sector and Decision Type.
              </h1>
              <p className="font-body text-[19px] text-slate-300 leading-relaxed">
                Whether you are advancing development capital, negotiating an acquisition or evaluating a third-party relationship, FACET Verify tailors scope to the risks that matter most.
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]">
                <Image
                  src="/images/mascots/who-we-serve.png"
                  alt="FACET Who We Serve Mascot"
                  fill
                  className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)] select-none pointer-events-none"
                  priority
                />
              </div>
            </div>
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
