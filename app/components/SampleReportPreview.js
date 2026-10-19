"use client";

import { useState } from "react";
import { SAMPLE_REPORT_DATA } from "../data/content";

export default function SampleReportPreview({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState("findings");

  return (
    <section id="sample-report" className="section-padding bg-white" aria-label="Sample Due Diligence Deliverable">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "800px", margin: "0 auto 3rem auto", textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            The Deliverable
          </div>
          <h2 className="heading-lg" style={{ color: "var(--navy-primary)", marginBottom: "1.25rem" }}>
            Findings You Can Review and Act On.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-body)", lineHeight: "1.75" }}>
            FACET Verify reports translate dense, fragmented public records into an actionable intelligence brief. Every finding is linked to its primary source, categorized by risk severity, and clearly bounded by scope.
          </p>
        </div>

        {/* Report Preview Window Container */}
        <div style={{
          maxWidth: "1080px",
          margin: "0 auto",
          background: "#FFFFFF",
          border: "1px solid var(--border-light)",
          borderRadius: "8px",
          boxShadow: "0 20px 40px -15px rgba(11, 20, 34, 0.12)",
          overflow: "hidden"
        }}>
          {/* Top Dossier Header Bar */}
          <div style={{
            background: "var(--navy-primary)",
            color: "#FFFFFF",
            padding: "1.25rem 1.75rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{
                background: "rgba(255,255,255,0.1)",
                padding: "0.4rem 0.65rem",
                borderRadius: "3px",
                fontFamily: "monospace",
                fontSize: "0.8125rem",
                color: "#E2E8F0"
              }}>
                REF: {SAMPLE_REPORT_DATA.reference}
              </div>
              <div className="badge badge-amber" style={{ fontSize: "0.75rem" }}>
                Conditional Clearance
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span className="badge badge-red" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Illustrative sample report
              </span>
              <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                Identified Entities Anonymised
              </span>
            </div>
          </div>

          {/* Dossier Meta Summary Banner */}
          <div style={{
            background: "var(--bg-page)",
            padding: "1.25rem 1.75rem",
            borderBottom: "1px solid var(--border-light)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.25rem"
          }}>
            <div>
              <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", display: "block" }}>
                Matter & Scope
              </span>
              <span style={{ fontSize: "0.875rem", fontWeight: "600", color: "var(--navy-primary)" }}>
                {SAMPLE_REPORT_DATA.subject}
              </span>
            </div>

            <div>
              <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", display: "block" }}>
                Property & Revenue Jurisdiction
              </span>
              <span style={{ fontSize: "0.875rem", color: "var(--text-body)" }}>
                {SAMPLE_REPORT_DATA.location}
              </span>
            </div>

            <div>
              <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", display: "block" }}>
                Audit Date & Investigator
              </span>
              <span style={{ fontSize: "0.875rem", color: "var(--text-body)" }}>
                {SAMPLE_REPORT_DATA.date} · {SAMPLE_REPORT_DATA.leadInvestigator}
              </span>
            </div>
          </div>

          {/* Report Tab Navigation */}
          <div style={{
            display: "flex",
            borderBottom: "1px solid var(--border-light)",
            background: "#FFFFFF",
            overflowX: "auto"
          }}>
            {[
              { id: "findings", label: "Categorized Risk Findings" },
              { id: "executive", label: "Executive Summary" },
              { id: "sources", label: "Verified Source Trail" },
              { id: "limitations", label: "Scope & Legal Boundaries" }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "0.875rem 1.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab.id ? "2px solid var(--facet-red)" : "2px solid transparent",
                  color: activeTab === tab.id ? "var(--facet-red)" : "var(--text-muted)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all var(--transition-fast)"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div style={{ padding: "2rem" }}>
            {/* Tab 1: Findings */}
            {activeTab === "findings" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {SAMPLE_REPORT_DATA.findings.map((f) => (
                  <div
                    key={f.id}
                    style={{
                      border: "1px solid var(--border-light)",
                      borderRadius: "6px",
                      padding: "1.25rem 1.5rem",
                      background: f.color === "red" ? "rgba(217, 45, 58, 0.02)" : "#FFFFFF"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <span style={{ fontFamily: "monospace", fontSize: "0.75rem", fontWeight: "700", color: "var(--text-muted)" }}>
                          {f.id}
                        </span>
                        <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "var(--navy-primary)" }}>
                          {f.title}
                        </h4>
                      </div>
                      <span className={`badge ${f.color === "red" ? "badge-red" : f.color === "amber" ? "badge-amber" : "badge-green"}`}>
                        {f.level}
                      </span>
                    </div>

                    <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: "1.6", marginBottom: "0.875rem" }}>
                      {f.detail}
                    </p>

                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1.5rem",
                      paddingTop: "0.75rem",
                      borderTop: "1px solid var(--border-subtle)",
                      fontSize: "0.75rem"
                    }}>
                      <div>
                        <strong style={{ color: "var(--navy-primary)" }}>Source Reference: </strong>
                        <span style={{ color: "var(--text-muted)" }}>{f.source}</span>
                      </div>
                      <div>
                        <strong style={{ color: "var(--navy-primary)" }}>Advised Action: </strong>
                        <span style={{ color: "var(--text-body)" }}>{f.recommendation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Executive Summary */}
            {activeTab === "executive" && (
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--navy-primary)", marginBottom: "0.75rem" }}>
                  Investigative Synopsis
                </h4>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                  {SAMPLE_REPORT_DATA.executiveSummary}
                </p>

                <div style={{
                  background: "var(--bg-page)",
                  padding: "1.25rem",
                  borderRadius: "6px",
                  border: "1px solid var(--border-light)"
                }}>
                  <div style={{ fontSize: "0.8125rem", fontWeight: "700", color: "var(--navy-primary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                    Analytical Risk Distribution
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
                    <div>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Title Chain Integrity:</span>
                      <div style={{ fontWeight: "700", color: "var(--verified-green)" }}>Verified (30-Year SRO)</div>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Judicial Exposure:</span>
                      <div style={{ fontWeight: "700", color: "var(--risk-red)" }}>High (Active Partition Suit)</div>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Counterparty Solvency:</span>
                      <div style={{ fontWeight: "700", color: "var(--warning-amber)" }}>Amber (Affiliate CIRP Entry)</div>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Municipal Approvals:</span>
                      <div style={{ fontWeight: "700", color: "var(--warning-amber)" }}>Setback Buffer Noted</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Sources */}
            {activeTab === "sources" && (
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--navy-primary)", marginBottom: "0.75rem" }}>
                  Audited Primary Repositories
                </h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-body)", marginBottom: "1.25rem" }}>
                  Every finding in a FACET Verify docket records the originating repository, registration volume, docket number, and date accessed to enable peer audit by client counsel:
                </p>

                <div className="data-table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Primary Repository</th>
                        <th>Search Date</th>
                        <th>Yield / Matched Records</th>
                        <th>Verification Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SAMPLE_REPORT_DATA.sourceTrail.map((st, idx) => (
                        <tr key={idx}>
                          <td style={{ fontWeight: "600", color: "var(--navy-primary)" }}>{st.name}</td>
                          <td>{st.date}</td>
                          <td>{st.matches}</td>
                          <td>
                            <span className="badge badge-green">Indexed & Archived</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 4: Limitations */}
            {activeTab === "limitations" && (
              <div style={{ lineHeight: "1.7", fontSize: "0.9375rem", color: "var(--text-body)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--navy-primary)", marginBottom: "0.75rem" }}>
                  Scope Boundaries & Counsel Guidance
                </h4>
                <p style={{ marginBottom: "1rem" }}>
                  This deliverable reflects public records, digital archives, and physical registers accessed between 08 October 2024 and 12 October 2024. In accordance with our engagement scope, unrecorded private oral family agreements or matters filed in courts where name-variant indexing was restricted were not accessible.
                </p>
                <div style={{ background: "rgba(201, 131, 22, 0.08)", border: "1px solid rgba(201, 131, 22, 0.25)", padding: "1rem 1.25rem", borderRadius: "4px" }}>
                  <strong style={{ color: "var(--warning-amber)", display: "block", marginBottom: "0.25rem" }}>Required Next Steps for Client Counsel:</strong>
                  <p style={{ fontSize: "0.875rem" }}>
                    1. Direct trial advocate to inspect records in Special Civil Suit No. 412/2022 to verify if interim injunction covers the specific survey demarcations.<br />
                    2. Require seller corporate board resolution indemnifying purchaser against Section 66 avoidance claims regarding affiliate CIRP proceedings.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Callout Banner */}
          <div style={{
            padding: "1.25rem 2rem",
            background: "var(--bg-page)",
            borderTop: "1px solid var(--border-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem"
          }}>
            <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              Need a tailored sample report for your specific transaction or legal vertical?
            </div>
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn btn-primary btn-sm"
            >
              Request a Scoped Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
