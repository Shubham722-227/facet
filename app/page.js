"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import Positioning from "./components/Positioning";
import WorkflowSteps from "./components/WorkflowSteps";
import ClientSectors from "./components/ClientSectors";
import MandateCTA from "./components/MandateCTA";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      {/* Header with Complete Logo SVG */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="w-full bg-[#F7F8FA] min-h-screen">
        <div className="flex flex-col w-full">
          {/* 1. Hero: Glassmorphic Vcheck-style Hero with Interactive Verification Dossier */}
          <Hero onOpenConsultation={() => setConsultationOpen(true)} />

          {/* 2. Core Due Diligence Verticals: 6-Card Vcheck-style Bento Grid */}
          <ServicesSection onSelectForQuote={() => setConsultationOpen(true)} />

          {/* 3. Positioning / The Investigative Distinction (Record Research vs Context) */}
          <Positioning />

          {/* 4. Streamlined 3-Stage Process */}
          <WorkflowSteps onOpenConsultation={() => setConsultationOpen(true)} />

          {/* 6. Target Client Sectors */}
          <ClientSectors />

          {/* 7. Vcheck-style Scope Initiation & CTA Banner */}
          <MandateCTA onOpenConsultation={() => setConsultationOpen(true)} />
        </div>
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Confidential Scope Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
}
