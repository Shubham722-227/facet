"use client";

import { HOW_IT_WORKS_STEPS } from "../data/content";

export default function HowItWorks({ onOpenQuote }) {
  return (
    <section id="how-it-works" className="section-padding bg-page" aria-label="Methodology and Process">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "800px", margin: "0 auto 3.5rem auto", textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Operational Methodology
          </div>
          <h2 className="heading-lg" style={{ color: "var(--navy-primary)", marginBottom: "1.25rem" }}>
            A Clear Process from Scope to Findings.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-body)", lineHeight: "1.75" }}>
            Effective due diligence begins with a defined risk question. We agree on the subjects, jurisdictions, accessible sources, and delivery schedule before any research begins.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3.5rem"
        }}>
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="card-white"
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                padding: "1.75rem 1.5rem"
              }}
            >
              {/* Step indicator */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{
                  fontFamily: "monospace",
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  color: "var(--facet-red)",
                  letterSpacing: "-0.03em"
                }}>
                  {stepItem.step}
                </span>
                <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
                  PHASE {idx + 1}
                </span>
              </div>

              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--navy-primary)", marginBottom: "0.25rem", lineHeight: "1.3" }}>
                {stepItem.title}
              </h3>

              <div style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--text-muted)", marginBottom: "0.875rem" }}>
                {stepItem.subtitle}
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: "1.55", marginBottom: "1rem" }}>
                {stepItem.description}
              </p>

              <div style={{ marginTop: "auto", paddingTop: "0.875rem", borderTop: "1px solid var(--border-subtle)" }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {stepItem.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: "1.35", display: "flex", gap: "0.4rem" }}>
                      <span style={{ color: "var(--facet-red)" }}>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Box ("What Clients Should Expect") */}
        <div style={{
          background: "var(--navy-primary)",
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: "2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1.8fr",
          gap: "2.5rem",
          alignItems: "center"
        }}>
          <div>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: "0.5rem" }}>
              Our Engagement Standard
            </div>
            <h3 className="heading-md" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              What You Should Always Expect From FACET
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "#94A3B8", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              We hold our work to strict professional standards of independence, source attribution, and client confidentiality.
            </p>
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn btn-primary"
            >
              Discuss Your Requirement
            </button>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem"
          }}>
            {[
              {
                title: "A Defined Scope in Writing",
                text: "No ambiguous research boundaries. Inclusions, exclusions, and searched jurisdictions are codified in advance."
              },
              {
                title: "Source-Linked Findings",
                text: "Every material finding citations its originating public register, gazette, or court docket with dates accessed."
              },
              {
                title: "Separation of Fact & Inference",
                text: "Reports strictly isolate established official records from allegations, ongoing suits, or analytical inferences."
              },
              {
                title: "Strict Confidentiality",
                text: "Bound by bilateral NDAs. Counterparties are never alerted during lawful on-the-ground or online inquiries."
              }
            ].map((box, bIdx) => (
              <div key={bIdx} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "4px",
                padding: "1.25rem"
              }}>
                <div style={{ fontSize: "0.875rem", fontWeight: "700", color: "#FFFFFF", marginBottom: "0.4rem" }}>
                  {box.title}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "#94A3B8", lineHeight: "1.45" }}>
                  {box.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          div[style*="gridTemplateColumns: 1fr 1.8fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
