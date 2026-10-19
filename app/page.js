"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Positioning from "./components/Positioning";
import ServicesSection from "./components/ServicesSection";
import HowItWorks from "./components/HowItWorks";
import SampleReportPreview from "./components/SampleReportPreview";
import WhoWeServe from "./components/WhoWeServe";
import ScopeBuilder from "./components/ScopeBuilder";
import WhyFacet from "./components/WhyFacet";
import InsightsSection from "./components/InsightsSection";
import FaqSection from "./components/FaqSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LegalModals from "./components/LegalModals";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState("");
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'disclaimer' | 'privacy' | 'terms' | null

  const handleOpenQuote = (serviceId = "") => {
    setPreselectedServiceId(serviceId || "");
    setQuoteModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectServiceFromFooter = (serviceId) => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onExploreServices={handleExploreServices}
        />

        {/* Positioning / Problem */}
        <Positioning />

        {/* 7 Confirmed Service Verticals */}
        <ServicesSection
          onSelectForQuote={(serviceId) => handleOpenQuote(serviceId)}
        />

        {/* How It Works (Methodology) */}
        <HowItWorks
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* What a Report Includes (Sample Report Preview) */}
        <SampleReportPreview
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Who We Serve (Client Sectors) */}
        <WhoWeServe
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Embedded Scope Builder Section */}
        <section id="get-a-quote" className="section-padding bg-page" aria-label="Build Scope">
          <div className="container-narrow">
            <ScopeBuilder
              initialServiceId={preselectedServiceId}
              isModal={false}
            />
          </div>
        </section>

        {/* Why FACET Verify (Core Pillars) */}
        <WhyFacet />

        {/* Insights / Knowledge Centre */}
        <InsightsSection
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* FAQs */}
        <FaqSection
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* About FACET Verify */}
        <AboutSection
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Direct Contact Desk */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenLegal={(type) => setActiveLegalModal(type)}
        onSelectService={handleSelectServiceFromFooter}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Quick Quote Modal */}
      {quoteModalOpen && (
        <div className="modal-overlay" onClick={() => setQuoteModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "820px", padding: 0 }}
          >
            <ScopeBuilder
              initialServiceId={preselectedServiceId}
              onClose={() => setQuoteModalOpen(false)}
              isModal={true}
            />
          </div>
        </div>
      )}

      {/* Legal Modals (Disclaimer, Privacy, Terms) */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </>
  );
}
