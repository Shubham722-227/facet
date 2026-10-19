"use client";

import { BRAND } from "../data/content";

export default function AboutSection({ onOpenQuote }) {
  const values = [
    {
      title: "Evidence Before Assumption",
      text: "Findings must be directly linked to identifiable public records, gazettes, or filings. Unverified claims are categorized separately."
    },
    {
      title: "Strict Independence",
      text: "We have no financial interest in whether a transaction closes or aborts. Our mandate is solely objective risk identification."
    },
    {
      title: "Absolute Confidentiality",
      text: "Transactions involve delicate negotiations. Inquiries are conducted under non-disclosure agreements with discreet research protocols."
    },
    {
      title: "Clarity of Scope",
      text: "We state plainly what was searched, which years were covered, what records were unavailable, and where legal counsel should probe."
    },
    {
      title: "Accountable Review",
      text: "Technology assists our search velocity, but human investigative experience reviews every document and synthesis before delivery."
    }
  ];

  return (
    <section id="about" className="section-padding bg-page" aria-label="About FACET Verify">
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "3.5rem",
          alignItems: "center"
        }}>
          {/* Left Column: Mission & Narrative */}
          <div>
            <div className="eyebrow">
              About FACET Verify
            </div>
            <h2 className="heading-lg" style={{ color: "var(--navy-primary)", marginBottom: "1.25rem" }}>
              Independent Thinking.<br />
              Evidence-Led Research.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-body)", lineHeight: "1.75", marginBottom: "1.25rem" }}>
              FACET Verify was founded to help organisations and individuals approach critical property acquisitions, corporate investments, and high-stakes partnerships with uncompromised clarity.
            </p>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", lineHeight: "1.7", marginBottom: "1.75rem" }}>
              Useful due diligence must explain not only what was located, but also why a finding matters, where the record originated, and what questions remain for your advocate or investment board.
            </p>

            <div style={{
              background: "#FFFFFF",
              border: "1px solid var(--border-light)",
              borderRadius: "6px",
              padding: "1.5rem",
              marginBottom: "2rem"
            }}>
              <div style={{ fontSize: "0.8125rem", fontWeight: "700", color: "var(--navy-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                Our Core Operating Commitment
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: "1.6" }}>
                "We do not promise that every hidden dispute can be uncovered or that a report guarantees a safe transaction. We promise rigorous, lawful, source-backed investigation within an agreed scope."
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenQuote}
              className="btn btn-primary"
            >
              Discuss Your Requirement
            </button>
          </div>

          {/* Right Column: Values Grid */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--navy-primary)", marginBottom: "0.5rem" }}>
              Our Institutional Values
            </h3>

            {values.map((val, idx) => (
              <div
                key={idx}
                className="card-white"
                style={{ padding: "1.25rem 1.5rem" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--facet-red)" }}></span>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: "700", color: "var(--navy-primary)" }}>
                    {val.title}
                  </h4>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: "1.5", paddingLeft: "0.875rem" }}>
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: 1.1fr 0.9fr"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
