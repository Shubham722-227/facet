"use client";

import { useState } from "react";

export default function SampleReportPreview({ onOpenConsultation }) {
  const [activeAnnexure, setActiveAnnexure] = useState(null);

  const annexures = {
    "ANNEX A-04": {
      id: "ANNEX A-04",
      title: "Hidden Beneficial Control in BVI Shell",
      registry: "BVI Financial Services Commission / Corporate Registry (IBC No. 894101)",
      date: "04 March 2025",
      findings: "Sub-surface share register comparison reveals 100% voting shares assigned to nominee trust for a sanctioned real estate developer subject to court attachment in Mumbai High Court.",
      exhibit: "Exhibit A-04-Certified-TrustDeed.pdf [SHA256: 7f8a8819c9]"
    },
    "ANNEX B-11": {
      id: "ANNEX B-11",
      title: "Pre-Insolvency Property Alienation",
      registry: "Sub-Registrar Digital Land Records & NCLT Mumbai Docket",
      date: "18 February 2025",
      findings: "Conveyance of prime 8.4-acre commercial asset executed at 42% undervalue exactly 45 days prior to lender moratorium filing. Classified as preferential avoidance transaction under Section 43/66 of IBC.",
      exhibit: "Exhibit B-11-DeedExtract-Haveli.pdf [SHA256: 3c91bb022f]"
    }
  };

  return (
    <section id="sample-report" className="w-full px-4 sm:px-8 lg:px-12 py-24 bg-surface-canvas relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Narrative & 4 Evidentiary Pillars */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold mb-2">
              Evidentiary Integrity
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-primary tracking-tight mb-4">
              Real Intelligence. Real Decisions.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              FACET dossiers are engineered for General Counsels, Investment Committees, and arbitral forums. Every assertion is corroborated by traceable documentary exhibits.
            </p>

            <div className="space-y-6 w-full">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold font-mono text-sm shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-headline-sm text-primary text-[17px] mb-1">
                    Evidence-Led Research
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    We rely on primary official records, cadastral registers, and authenticated court documents rather than unverified scrapers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold font-mono text-sm shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-headline-sm text-primary text-[17px] mb-1">
                    Source-Linked Findings
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Every intelligence finding links to an unalterable forensic annexure with full chain-of-custody tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold font-mono text-sm shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-headline-sm text-primary text-[17px] mb-1">
                    Transparent Limitations
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Unambiguous demarcation between verified facts, regulatory notices, and corroborating HUMINT indications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold font-mono text-sm shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-headline-sm text-primary text-[17px] mb-1">
                    Structured Board-Ready Reporting
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Designed for immediate synthesis by board directors, credit officers, and legal defense squads.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Angled Mockup of a FACET Executive Intelligence Dossier */}
          <div className="lg:col-span-7 relative">
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 shadow-[0_24px_50px_rgba(11,37,69,0.08)] border border-border-subtle">
              {/* Dossier Header Ribbon */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-border-subtle gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-headline-sm font-bold text-lg shadow-sm">
                    F
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">
                      DOSSIER REF: FC-2025-0988-X
                    </div>
                    <h3 className="font-headline-sm text-xl text-primary font-bold">
                      VALIANT GLOBAL HOLDINGS S.A.
                    </h3>
                  </div>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-error-container text-on-error-container font-label-sm text-xs uppercase font-bold border border-evidence-flag/20">
                    <span className="w-2 h-2 rounded-full bg-evidence-flag"></span> Elevated Risk Profile
                  </span>
                </div>
              </div>

              {/* Dossier Body Split */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-surface-canvas p-3.5 rounded-lg border border-border-subtle/80">
                  <div className="font-label-sm text-[11px] text-on-surface-variant uppercase mb-1 font-semibold">
                    Target Entity Status
                  </div>
                  <div className="font-headline-sm text-[16px] text-primary font-bold">
                    Active // Cross-Listed
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-1 truncate">
                    LEI: 5493001KJTIIGC8Y1R12
                  </div>
                </div>

                <div className="bg-surface-canvas p-3.5 rounded-lg border border-border-subtle/80">
                  <div className="font-label-sm text-[11px] text-on-surface-variant uppercase mb-1 font-semibold">
                    Courts Scanned
                  </div>
                  <div className="font-headline-sm text-[16px] text-primary font-bold">
                    14 Jurisdictions
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-1">
                    31 Direct Pleadings Indexed
                  </div>
                </div>

                <div className="bg-surface-canvas p-3.5 rounded-lg border border-border-subtle/80">
                  <div className="font-label-sm text-[11px] text-on-surface-variant uppercase mb-1 font-semibold">
                    Attribution Index
                  </div>
                  <div className="font-headline-sm text-[16px] text-verification-green font-bold">
                    96.4% Deterministic
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-1">
                    4 Independent Cross-Ref
                  </div>
                </div>
              </div>

              {/* Key Findings Simulated Table */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Corroborated Red Flags
                </div>

                <div
                  onClick={() => setActiveAnnexure(annexures["ANNEX A-04"])}
                  className="p-3.5 rounded-lg bg-surface-container-low flex items-start justify-between gap-4 cursor-pointer hover:bg-surface-container transition-colors border border-border-subtle/60 group"
                >
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-evidence-flag text-[20px] shrink-0 mt-0.5">
                      report_problem
                    </span>
                    <div>
                      <div className="font-body-sm text-[13px] font-semibold text-primary group-hover:text-secondary transition-colors">
                        Hidden Beneficial Control in BVI Shell
                      </div>
                      <div className="text-[12px] text-on-surface-variant leading-relaxed">
                        Nominee directors linked to sanctioned real estate developer in southern district.
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-evidence-flag font-bold shrink-0 px-2 py-0.5 rounded bg-white border border-evidence-flag/30">
                    ANNEX A-04
                  </span>
                </div>

                <div
                  onClick={() => setActiveAnnexure(annexures["ANNEX B-11"])}
                  className="p-3.5 rounded-lg bg-surface-container-low flex items-start justify-between gap-4 cursor-pointer hover:bg-surface-container transition-colors border border-border-subtle/60 group"
                >
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                      account_tree
                    </span>
                    <div>
                      <div className="font-body-sm text-[13px] font-semibold text-primary group-hover:text-secondary transition-colors">
                        Pre-Insolvency Property Alienation
                      </div>
                      <div className="text-[12px] text-on-surface-variant leading-relaxed">
                        Title to commercial asset transfers executed 45 days prior to lender moratorium filing.
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-primary font-bold shrink-0 px-2 py-0.5 rounded bg-white border border-primary/20">
                    ANNEX B-11
                  </span>
                </div>
              </div>

              {/* Digital Seal Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 bg-surface-canvas rounded-lg px-4 py-3 border border-border-subtle gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-verification-green text-[18px]">
                    verified_user
                  </span>
                  <span className="font-mono text-[11px] text-slate-700 font-semibold">
                    FACET Digital Cryptographic Seal: Validated
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  Timestamp: 2025-05-12T14:32:01 UTC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annexure Inspection Dialog */}
      {activeAnnexure && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm"
          onClick={() => setActiveAnnexure(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-border-subtle"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-surface-container text-primary">
                {activeAnnexure.id}
              </span>
              <button
                type="button"
                onClick={() => setActiveAnnexure(null)}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <h3 className="font-headline-sm text-xl text-primary font-bold mb-2">
              {activeAnnexure.title}
            </h3>

            <div className="text-xs font-mono text-slate-500 mb-4">
              {activeAnnexure.registry} · {activeAnnexure.date}
            </div>

            <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
              {activeAnnexure.findings}
            </p>

            <div className="p-3 bg-surface-canvas rounded-lg border border-border-subtle text-xs font-mono text-secondary mb-6 truncate">
              {activeAnnexure.exhibit}
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveAnnexure(null);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider"
            >
              Request Full Specimen Dossier
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
