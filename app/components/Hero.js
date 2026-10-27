"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hero({ onOpenConsultation }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardDetails = {
    ubo: {
      title: "UBO Discovery Protocol",
      level: "TIER-3 FORENSIC TRACE",
      status: "100% Proven Beneficial Control",
      summary: "Multi-layered corporate structure resolved across Cyprus, Luxembourg, and Panama. Final equity trace links directly to the target sponsor's discretionary family foundation.",
      hash: "SHA256: e8f90119b4c029a8",
      jurisdictions: ["Cyprus Registrar", "Panama Public Registry", "Luxembourg RBE"]
    },
    conflict: {
      title: "Conflict & Cross-Guarantee Scan",
      level: "RISK SEVERITY L2",
      status: "Undisclosed Offshore Lien",
      summary: "Found undisclosed cross-guarantee executed on a $14M commercial debt note pledged against prime real estate assets scheduled for transaction closing.",
      hash: "REG-CHG: 2024-NCLT-9811",
      jurisdictions: ["Debt Recovery Tribunal", "MCA Index of Charges", "Commercial Court"]
    },
    crypto: {
      title: "Cryptographic Cadastral Seal",
      level: "EVIDENTIARY ADMISSIBILITY",
      status: "Cadastral Record Admitted",
      summary: "Every deed extract, survey coordinate, and mutation record is timestamped with an immutable cryptographic hash for arbitral court defensibility.",
      hash: "SHA256: 9b88e1c6a28d71fa99014b2d",
      jurisdictions: ["Sub-Registrar Digital Archive", "National Judicial Grid"]
    }
  };

  return (
    <div className="relative w-full overflow-hidden pt-6 pb-20">
      {/* Top Ambient Glow Elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 right-[-10%] w-[32rem] h-[32rem] rounded-full bg-accent-electric/10 blur-[120px] pointer-events-none"></div>

      <section className="relative w-full px-4 sm:px-8 lg:px-12 pt-8 pb-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm mb-6 border border-border-subtle/80">
              <span className="w-2 h-2 rounded-full bg-accent-electric animate-pulse"></span>
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-primary-container font-semibold">
                Institutional Grade Intelligence // ISO 27001 Aligned
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display-xl text-4xl sm:text-5xl lg:text-display-xl text-primary tracking-tighter mb-4 leading-tight">
              Look Beyond the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent-electric">
                Surface.
              </span>
            </h1>

            {/* Body lead */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
              FACET delivers forensic due diligence, investigative intelligence, ownership research, and conflict assessment to empower sovereign institutions, counsel, and sponsors before high-stakes capital allocations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-md hover:shadow-xl group"
              >
                <span>Explore Our Services</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white/75 backdrop-blur-xl text-primary font-label-md text-label-md uppercase tracking-wider shadow-sm hover:shadow-md hover:bg-white transition-all border border-border-subtle"
              >
                <span>Discuss Mandate</span>
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  shield_lock
                </span>
              </button>
            </div>

            {/* Proof Metrics Bar */}
            <div className="w-full grid grid-cols-3 gap-4 pt-6 bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-sm border border-border-subtle/80">
              <div>
                <div className="font-headline-sm text-2xl lg:text-headline-sm text-primary tracking-tight font-bold">
                  140+
                </div>
                <div className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant mt-0.5">
                  Sovereign Registries
                </div>
              </div>
              <div>
                <div className="font-headline-sm text-2xl lg:text-headline-sm text-primary tracking-tight font-bold">
                  99.8%
                </div>
                <div className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant mt-0.5">
                  Evidentiary Admissibility
                </div>
              </div>
              <div>
                <div className="font-headline-sm text-2xl lg:text-headline-sm text-primary tracking-tight font-bold">
                  $42B+
                </div>
                <div className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant mt-0.5">
                  Scrutinized Exposure
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Prismatic Showcase with Glass Nodes */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] lg:min-h-[500px]">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-electric/25 via-secondary/15 to-transparent rounded-full blur-2xl transform scale-95 pointer-events-none"></div>

              {/* Central Multi-Faceted Prismatic SVG Art */}
              <svg
                className="w-72 h-72 drop-shadow-2xl animate-spin-slow select-none pointer-events-none"
                fill="none"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  className="text-primary-container"
                  fill="currentColor"
                  fillOpacity="0.08"
                  points="100,10 180,60 180,140 100,190 20,140 20,60"
                ></polygon>
                <polygon
                  className="text-secondary"
                  fill="currentColor"
                  fillOpacity="0.14"
                  points="100,25 165,65 165,135 100,175 35,135 35,65"
                ></polygon>
                <polygon
                  className="text-accent-electric"
                  fill="currentColor"
                  fillOpacity="0.22"
                  points="100,40 150,70 150,130 100,160 50,130 50,70"
                ></polygon>
                {/* Facet wireframe lines */}
                <line stroke="#0EA5E9" strokeDasharray="3 3" strokeOpacity="0.6" strokeWidth="1.5" x1="100" x2="100" y1="10" y2="190"></line>
                <line stroke="#0050CC" strokeOpacity="0.45" strokeWidth="1.2" x1="20" x2="180" y1="60" y2="140"></line>
                <line stroke="#0050CC" strokeOpacity="0.45" strokeWidth="1.2" x1="20" x2="180" y1="140" y2="60"></line>
                <line stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="1.5" x1="100" x2="100" y1="25" y2="175"></line>
                {/* Refraction nodes */}
                <circle cx="100" cy="100" fill="#0B2545" fillOpacity="0.95" r="14"></circle>
                <circle cx="100" cy="100" fill="#0EA5E9" r="5"></circle>
              </svg>

              {/* Floating Translucent Glass Intel Cards */}
              {/* Card 1: Top Floating UBO */}
              <div
                onClick={() => setSelectedCard(cardDetails.ubo)}
                className="absolute -top-3 -left-4 w-64 bg-white/90 backdrop-blur-xl p-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/80 cursor-pointer transform hover:-translate-y-1 transition-all z-20 group"
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-border-subtle/50">
                  <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-verification-green"></span> UBO Discovery
                  </span>
                  <span className="font-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-mono text-[10px]">
                    TIER-3
                  </span>
                </div>
                <p className="font-body-sm text-[13px] text-primary font-semibold truncate">
                  Cyprus Holding → Panama Trust
                </p>
                <div className="text-[11px] font-mono text-on-surface-variant flex justify-between items-center mt-1">
                  <span>Beneficial: 100% Proven</span>
                  <span className="text-verification-green font-bold">VERIFIED</span>
                </div>
              </div>

              {/* Card 2: Bottom Right Conflict Scan */}
              <div
                onClick={() => setSelectedCard(cardDetails.conflict)}
                className="absolute -bottom-4 -right-2 w-72 bg-white/90 backdrop-blur-xl p-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/80 cursor-pointer transform hover:translate-y-1 transition-all z-20 group"
              >
                <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-border-subtle/50">
                  <span className="font-label-sm text-[11px] uppercase tracking-wider text-evidence-flag font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-evidence-flag">warning</span> Conflict Warning
                  </span>
                  <span className="font-label-sm bg-error-container text-on-error-container px-1.5 py-0.2 rounded font-mono text-[10px]">
                    RISK L2
                  </span>
                </div>
                <p className="font-body-sm text-[12px] text-on-surface leading-snug font-medium">
                  Undisclosed cross-guarantee on offshore commercial debt note.
                </p>
                <div className="mt-2 w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-evidence-flag h-1.5 rounded-full w-4/5 animate-pulse"></div>
                </div>
              </div>

              {/* Card 3: Mid-Right Cryptographic Integrity Seal */}
              <div
                onClick={() => setSelectedCard(cardDetails.crypto)}
                className="absolute top-1/2 -translate-y-1/2 -right-6 sm:-right-8 bg-primary/95 backdrop-blur-xl text-on-primary p-3 rounded-lg shadow-xl max-w-[210px] border border-white/10 cursor-pointer transform hover:scale-105 transition-all z-20"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-accent-electric text-[16px]">verified</span>
                  <span className="font-label-sm text-[10px] text-surface-container-highest tracking-widest uppercase">Registry Hash</span>
                </div>
                <p className="font-mono text-[10px] text-accent-electric tracking-tight truncate">
                  SHA256: 9b88e1c6a...71fa
                </p>
                <span className="font-body-sm text-[11px] text-slate-300 block mt-1">
                  Cadastral Record Admitted
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Card Inspection Dialog */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-border-subtle"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded bg-surface-container text-primary font-mono text-xs font-bold uppercase">
                {selectedCard.level}
              </span>
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              {selectedCard.title}
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              {selectedCard.summary}
            </p>

            <div className="bg-surface-canvas p-4 rounded-xl border border-border-subtle mb-6 space-y-2">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Authentication Log:</div>
              <div className="font-mono text-xs text-secondary font-bold break-all">{selectedCard.hash}</div>
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedCard.jurisdictions.map((j) => (
                  <span key={j} className="px-2 py-0.5 rounded bg-white text-[11px] text-primary border border-border-subtle">
                    {j}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedCard(null);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-all"
            >
              Request Related Due Diligence Scope
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
