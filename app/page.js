"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import HowItWorks from "./components/HowItWorks";
import SampleReportPreview from "./components/SampleReportPreview";
import WhoWeServe from "./components/WhoWeServe";
import InsightsSection from "./components/InsightsSection";
import MandateCTA from "./components/MandateCTA";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        <div className="flex flex-col w-full">
          {/* 1. Hero Section with Interactive 3D Prismatic Showcase */}
          <Hero onOpenConsultation={() => setConsultationOpen(true)} />

          {/* 2. Capabilities Matrix (7 Services Bento Grid) */}
          <ServicesSection onSelectForQuote={() => setConsultationOpen(true)} />

          {/* 3. The Evidentiary Pipeline (Dark Glass 5-Stage Section) */}
          <HowItWorks onOpenConsultation={() => setConsultationOpen(true)} />

          {/* 4. Intelligence Reporting Showcase (Dossier Mockup) */}
          <SampleReportPreview onOpenConsultation={() => setConsultationOpen(true)} />

          {/* 5. Institutional Application (Specialized Risk Environments) */}
          <WhoWeServe onOpenConsultation={() => setConsultationOpen(true)} />

          {/* 6. Intelligence Briefings (Insights Section) */}
          <InsightsSection />

          {/* 7. Final High-Contrast Mandate Initiation Panel */}
          <MandateCTA onOpenConsultation={() => setConsultationOpen(true)} />
        </div>
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Confidential Mandate Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
}
