"use client";

import { useState } from "react";
import { BRAND } from "../data/content";

export default function Hero({ onOpenQuote, onExploreServices }) {
  const [activeCard, setActiveCard] = useState("ownership");

  const cardsData = {
    ownership: {
      id: "ownership",
      title: "Ownership Records",
      tag: "Title Chain",
      status: "Verified Continuity",
      statusColor: "var(--verified-green)",
      summary: "30-year deed register search across Sub-Registrar volumes.",
      source: "Sub-Registrar Office Haveli II (Vol 1882 to 4102)",
      findings: "4 Conveyance deeds cross-matched with Revenue 7/12 extract.",
      pinCoord: { x: "42%", y: "48%" }
    },
    litigation: {
      id: "litigation",
      title: "Litigation Search",
      tag: "Civil & High Court",
      status: "1 Dispute Identified",
      statusColor: "var(--risk-red)",
      summary: "District court docket search identifies pending partition suit.",
      source: "e-Courts NJDG (Pune Senior Division)",
      findings: "Special Civil Suit No. 412/2022; status quo application pending.",
      pinCoord: { x: "68%", y: "35%" }
    },
    entities: {
      id: "entities",
      title: "Related Entities",
      tag: "Corporate Intelligence",
      status: "Common Directorship",
      statusColor: "var(--warning-amber)",
      summary: "MCA registry cross-reference reveals director link to distressed entity.",
      source: "Ministry of Corporate Affairs (MCA-21 Master Data)",
      findings: "Director DIN 02819401 associated with CIRP-admitted developer.",
      pinCoord: { x: "28%", y: "65%" }
    },
    risk: {
      id: "risk",
      title: "Risk Summary",
      tag: "Decision Support",
      status: "Report Available",
      statusColor: "#60A5FA",
      summary: "Actionable summary distinguishing recorded facts from allegations.",
      source: "FACET Scoped Appraisal Docket FV-2024-8841",
      findings: "Conditional recommendation: Require escrow and litigation indemnity.",
      pinCoord: { x: "55%", y: "78%" }
    }
  };

  const selectedData = cardsData[activeCard] || cardsData.ownership;

  return (
    <section className="hero-section bg-navy" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Positioning */}
          <div>
            <div className="eyebrow eyebrow-dark">
              <span style={{ width: "8px", height: "8px", background: "var(--facet-red)", borderRadius: "1px", display: "inline-block" }}></span>
              Due Diligence & Investigative Intelligence
            </div>

            <h1 className="heading-xl" style={{ color: "#FFFFFF", marginBottom: "1.5rem" }}>
              Make Confident Decisions.<br />
              <span style={{ color: "#F1F5F9" }}>See the Full Picture.</span>
            </h1>

            <p style={{ fontSize: "1.125rem", color: "#94A3B8", lineHeight: "1.7", marginBottom: "2.25rem", maxWidth: "560px" }}>
              {BRAND.heroSubheadline}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn btn-primary btn-lg"
                id="hero-get-quote-cta"
              >
                Get a Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="btn btn-secondary btn-lg"
                id="hero-explore-services-cta"
              >
                Explore Our Services
              </button>
            </div>

            {/* Trust Strip */}
            <div className="hero-trust-strip">
              <span style={{ fontWeight: "600", color: "#E2E8F0", fontSize: "0.85rem" }}>Core Focus:</span>
              <span className="hero-trust-item">Property & Land Records</span>
              <span className="hero-trust-dot"></span>
              <span className="hero-trust-item">Litigation Research</span>
              <span className="hero-trust-dot"></span>
              <span className="hero-trust-item">Corporate Intelligence</span>
              <span className="hero-trust-dot"></span>
              <span className="hero-trust-item">Source-Linked Findings</span>
              <span className="hero-trust-dot"></span>
              <span className="hero-trust-item">Risk Assessment</span>
            </div>
          </div>

          {/* Right Column: Architectural CAD 3D Parcel Intelligence Asset */}
          <div>
            <div className="cad-viewport">
              <div className="cad-header-bar">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--facet-red)" }}></span>
                  <span style={{ fontWeight: "700", color: "#E2E8F0" }}>INTELLIGENCE MAP</span>
                  <span>·</span>
                  <span>SURVEY NO. 182/1 & 182/2</span>
                </div>
                <div className="cad-badge">
                  <span>Illustrative sample</span>
                </div>
              </div>

              <div className="cad-canvas">
                {/* Architectural Isometric Wireframe Parcel Plot (SVG) */}
                <svg
                  viewBox="0 0 600 450"
                  style={{ width: "100%", height: "100%", display: "block" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="cadGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0B1422" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="plotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.04" />
                    </linearGradient>
                  </defs>

                  {/* Isometric Coordinate Grid lines */}
                  <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                    <line x1="50" y1="280" x2="300" y2="130" />
                    <line x1="120" y1="320" x2="370" y2="170" />
                    <line x1="190" y1="360" x2="440" y2="210" />
                    <line x1="260" y1="400" x2="510" y2="250" />

                    <line x1="120" y1="130" x2="370" y2="280" />
                    <line x1="190" y1="170" x2="440" y2="320" />
                    <line x1="260" y1="210" x2="510" y2="360" />
                  </g>

                  {/* Boundary Polygon (Survey Plot 182/1) */}
                  <polygon
                    points="200,160 420,190 360,330 140,280"
                    fill="url(#plotGrad)"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />

                  {/* Buffer / Canal Corridor Warning Strip */}
                  <polygon
                    points="140,280 200,295 180,335 125,315"
                    fill="rgba(201,131,22,0.15)"
                    stroke="var(--warning-amber)"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />

                  {/* Architectural Massing Block (Building Footprint) */}
                  {/* Top face */}
                  <polygon points="250,195 330,175 350,225 270,245" fill="#1C314E" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                  {/* Left Face */}
                  <polygon points="250,195 270,245 270,290 250,240" fill="#122338" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  {/* Right Face */}
                  <polygon points="270,245 350,225 350,270 270,290" fill="#182A40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

                  {/* Elevation Axis Line */}
                  <line x1="300" y1="100" x2="300" y2="230" stroke="var(--facet-red)" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="300" cy="100" r="3" fill="var(--facet-red)" />
                  <text x="310" y="105" fill="#FFA5A8" fontSize="10" fontFamily="monospace">RL +14.20m</text>

                  {/* Survey Boundary Pin Markers */}
                  {/* Node 1: Ownership Pin */}
                  <g className="cursor-pointer" onClick={() => setActiveCard("ownership")}>
                    <circle cx="200" cy="160" r="6" fill="#0B1422" stroke="var(--verified-green)" strokeWidth="2" />
                    <circle cx="200" cy="160" r="2.5" fill="var(--verified-green)" />
                    <text x="212" y="155" fill="#E2E8F0" fontSize="10" fontFamily="sans-serif" fontWeight="600">SRO Deed Node</text>
                  </g>

                  {/* Node 2: Litigation Dispute Pin */}
                  <g className="cursor-pointer" onClick={() => setActiveCard("litigation")}>
                    <circle cx="420" cy="190" r="8" fill="rgba(217,45,58,0.2)" stroke="var(--risk-red)" strokeWidth="1.5" />
                    <circle cx="420" cy="190" r="3" fill="var(--facet-red)" />
                    <text x="432" y="185" fill="#FFA5A8" fontSize="10" fontFamily="sans-serif" fontWeight="600">Dispute Flag</text>
                  </g>

                  {/* Node 3: Entity Directorship Link Pin */}
                  <g className="cursor-pointer" onClick={() => setActiveCard("entities")}>
                    <circle cx="140" cy="280" r="6" fill="#0B1422" stroke="var(--warning-amber)" strokeWidth="2" />
                    <circle cx="140" cy="280" r="2" fill="var(--warning-amber)" />
                    <text x="75" y="275" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif" fontWeight="600">MCA Directorship</text>
                  </g>
                </svg>

                {/* Floating Interactive Card 1: Ownership Records */}
                <div
                  className={`cad-card ${activeCard === "ownership" ? "active" : ""}`}
                  style={{ top: "12%", left: "4%" }}
                  onClick={() => setActiveCard("ownership")}
                >
                  <div className="cad-card-title">
                    <span>Ownership Records</span>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--verified-green)" }}></span>
                  </div>
                  <div className="cad-card-subtitle">Review Scope: 1994–2024</div>
                  <div className="cad-card-status" style={{ color: "var(--verified-green)" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Title Chain Verified
                  </div>
                </div>

                {/* Floating Interactive Card 2: Litigation Search */}
                <div
                  className={`cad-card ${activeCard === "litigation" ? "active" : ""}`}
                  style={{ top: "18%", right: "4%" }}
                  onClick={() => setActiveCard("litigation")}
                >
                  <div className="cad-card-title">
                    <span>Litigation Search</span>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--risk-red)" }}></span>
                  </div>
                  <div className="cad-card-subtitle">Findings: 1 Active Dispute</div>
                  <div className="cad-card-status" style={{ color: "#FCA5A5" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    Partition Suit Pending
                  </div>
                </div>

                {/* Floating Interactive Card 3: Related Entities */}
                <div
                  className={`cad-card ${activeCard === "entities" ? "active" : ""}`}
                  style={{ bottom: "16%", left: "6%" }}
                  onClick={() => setActiveCard("entities")}
                >
                  <div className="cad-card-title">
                    <span>Related Entities</span>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--warning-amber)" }}></span>
                  </div>
                  <div className="cad-card-subtitle">Analysis: Cross-Directorship</div>
                  <div className="cad-card-status" style={{ color: "#FCD34D" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    NCLT CIRP Exposure
                  </div>
                </div>

                {/* Floating Interactive Card 4: Risk Summary */}
                <div
                  className={`cad-card ${activeCard === "risk" ? "active" : ""}`}
                  style={{ bottom: "10%", right: "6%" }}
                  onClick={() => setActiveCard("risk")}
                >
                  <div className="cad-card-title">
                    <span>Risk Summary</span>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#60A5FA" }}></span>
                  </div>
                  <div className="cad-card-subtitle">View Scoped Report</div>
                  <div className="cad-card-status" style={{ color: "#93C5FD" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                    Docket Ready
                  </div>
                </div>
              </div>

              {/* Bottom Inspection Drawer */}
              <div style={{
                padding: "0.875rem 1.25rem",
                background: "rgba(11, 20, 34, 0.95)",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem"
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#FFFFFF" }}>{selectedData.title}</span>
                    <span className="badge badge-dark" style={{ fontSize: "0.65rem" }}>{selectedData.tag}</span>
                  </div>
                  <span style={{ fontSize: "0.75rem", fontWeight: "600", color: selectedData.statusColor }}>
                    {selectedData.status}
                  </span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                  <strong style={{ color: "#E2E8F0" }}>Source:</strong> {selectedData.source} — {selectedData.findings}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
