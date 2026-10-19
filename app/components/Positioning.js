"use client";

export default function Positioning() {
  return (
    <section className="section-padding bg-page" style={{ borderBottom: "1px solid var(--border-light)" }} aria-label="Core Philosophy">
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 auto 3.5rem auto", textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            The Investigative Distinction
          </div>
          <h2 className="heading-lg" style={{ color: "var(--navy-primary)", marginBottom: "1.25rem" }}>
            Records Tell Part of the Story.<br />
            Context Matters.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-body)", lineHeight: "1.75" }}>
            Public records and documents are essential to due diligence, but an informed transaction decision also depends on understanding relationships, undisclosed disputes, timeline inconsistencies, and the context surrounding a person, corporate entity, or parcel of land.
          </p>
        </div>

        {/* 2-Column Comparative Matrix */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          maxWidth: "1060px",
          margin: "0 auto"
        }}>
          {/* Column 1: Record-Based Research */}
          <div className="card-white" style={{ position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "#94A3B8"
            }}></div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "4px",
                background: "var(--bg-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--navy-primary)"
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="heading-sm" style={{ color: "var(--navy-primary)" }}>Record-Based Research</h3>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "600", letterSpacing: "0.05em" }}>The Baseline Data</span>
              </div>
            </div>

            <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
              Systematic retrieval of publicly indexed filings, official gazettes, and statutory government registers:
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { title: "Property and land revenue records", desc: "Sub-Registrar deeds, 7/12 extracts, mutation registers, and encumbrance certificates." },
                { title: "Litigation and regulatory records", desc: "District court, High Court, and specialized tribunal cause-lists and e-Courts dockets." },
                { title: "Corporate ownership and directorships", desc: "MCA-21 statutory master data, annual returns, registered charges, and DIN tracking." },
                { title: "Regulatory orders and public filings", desc: "RERA registrations, default notices, insolvency dockets, and official gazette notifications." }
              ].map((item, idx) => (
                <li key={idx} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ marginTop: "0.25rem", color: "var(--navy-primary)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: "600", color: "var(--navy-primary)" }}>{item.title}</div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: "1.4" }}>{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Investigative Analysis */}
          <div className="card-white" style={{ position: "relative", overflow: "hidden", borderColor: "#CBD5E1" }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "var(--facet-red)"
            }}></div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "4px",
                background: "var(--facet-red-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--facet-red)"
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
              <div>
                <h3 className="heading-sm" style={{ color: "var(--navy-primary)" }}>Investigative Analysis</h3>
                <span style={{ fontSize: "0.75rem", color: "var(--facet-red)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.05em" }}>The Decision Intelligence</span>
              </div>
            </div>

            <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
              Synthesizing disconnected records to uncover behavioral patterns, undisclosed liabilities, and structural risks:
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { title: "Cross-referencing related parties & entities", desc: "Mapping beneficial ownership, shadow directorships, common addresses, and SPV networks." },
                { title: "Reviewing discrepancies and timeline gaps", desc: "Reconciling counterparty disclosure representations against historical transfer dates and survey records." },
                { title: "Organising risk indicators by practical severity", desc: "Separating proven judicial judgments from unadjudicated allegations and procedural objections." },
                { title: "Identifying critical questions for counsel", desc: "Arming client advocates, credit analysts, and deal leaders with targeted warranties and indemnity requirements." }
              ].map((item, idx) => (
                <li key={idx} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ marginTop: "0.25rem", color: "var(--facet-red)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: "600", color: "var(--navy-primary)" }}>{item.title}</div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: "1.4" }}>{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
