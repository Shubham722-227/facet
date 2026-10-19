"use client";

import { useState } from "react";
import { WHO_WE_SERVE } from "../data/content";

export default function WhoWeServe({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState(WHO_WE_SERVE[0].id);

  const activeSector = WHO_WE_SERVE.find((s) => s.id === activeTab) || WHO_WE_SERVE[0];

  return (
    <section id="who-we-serve" className="section-padding bg-page" aria-label="Industries and Clients Served">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "780px", marginBottom: "3rem" }}>
          <div className="eyebrow">
            Client Practice Verticals
          </div>
          <h2 className="heading-lg" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
            Built Around the Decisions You Need to Make.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-body)", lineHeight: "1.7" }}>
            Due diligence scope must be customized to the decision-maker's legal mandate, risk tolerance, and transaction timeline. We align our research directly with your institutional requirements.
          </p>
        </div>

        {/* Industry Tabs */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "2.5rem",
          background: "#FFFFFF",
          borderRadius: "8px",
          border: "1px solid var(--border-light)",
          padding: "2rem",
          boxShadow: "var(--shadow-sm)"
        }}>
          {/* Left: Tab list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {WHO_WE_SERVE.map((sector) => (
              <button
                key={sector.id}
                type="button"
                onClick={() => setActiveTab(sector.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.25rem",
                  borderRadius: "6px",
                  border: "1px solid",
                  borderColor: activeTab === sector.id ? "var(--navy-primary)" : "transparent",
                  background: activeTab === sector.id ? "var(--navy-primary)" : "var(--bg-page)",
                  color: activeTab === sector.id ? "#FFFFFF" : "var(--navy-primary)",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)"
                }}
              >
                <div>
                  <div style={{ fontSize: "0.9375rem", fontWeight: "700" }}>{sector.title}</div>
                  <div style={{ fontSize: "0.75rem", color: activeTab === sector.id ? "#94A3B8" : "var(--text-muted)" }}>{sector.badge}</div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  style={{
                    color: activeTab === sector.id ? "var(--facet-red)" : "var(--text-muted)",
                    transform: activeTab === sector.id ? "translateX(3px)" : "none",
                    transition: "transform var(--transition-fast)"
                  }}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            ))}
          </div>

          {/* Right: Active Detail Panel */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div className="badge badge-neutral" style={{ marginBottom: "0.75rem" }}>
                {activeSector.badge} Practice
              </div>

              <h3 className="heading-md" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
                {activeSector.headline}
              </h3>

              <p style={{ fontSize: "1rem", color: "var(--text-body)", lineHeight: "1.7", marginBottom: "1.75rem" }}>
                {activeSector.description}
              </p>

              <h4 style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.875rem" }}>
                Key Research & Verification Workstreams
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {activeSector.useCases.map((uc, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      borderRadius: "50%",
                      background: "var(--facet-red-subtle)",
                      color: "var(--facet-red)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      flexShrink: 0,
                      marginTop: "2px"
                    }}>
                      ✓
                    </div>
                    <span style={{ fontSize: "0.9375rem", color: "var(--text-body)", lineHeight: "1.5" }}>
                      {uc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                Confidential custom scoping for institutional requirements
              </span>
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn btn-outline-dark btn-sm"
              >
                Discuss Practice Scope
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          div[style*="gridTemplateColumns: 1fr 2fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
