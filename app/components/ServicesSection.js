"use client";

import { useState } from "react";
import { SERVICES } from "../data/content";
import ServiceModal from "./ServiceModal";

export default function ServicesSection({ onSelectForQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalService, setActiveModalService] = useState(null);

  const categories = [
    "All",
    "Property Transaction",
    "Counterparty & Promoters",
    "Legal & Disputes",
    "Vendors & Supply Chain",
    "M&A & Private Equity",
    "Asset & Wealth Trace"
  ];

  const filteredServices = selectedCategory === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.decisionCategory === selectedCategory);

  return (
    <section id="services" className="section-padding bg-white" aria-label="Due Diligence Services">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "780px", marginBottom: "2.5rem" }}>
          <div className="eyebrow">
            Portfolio of Capabilities
          </div>
          <h2 className="heading-lg" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
            Due Diligence for Critical Decisions.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-body)", lineHeight: "1.7" }}>
            From complex multi-acre land transactions to forensic promoter background investigations, engage a single focused service or combine workstreams into one unified intelligence docket.
          </p>
        </div>

        {/* Filter Pills ("Choose by Decision") */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          alignItems: "center",
          marginBottom: "2.5rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid var(--border-subtle)"
        }}>
          <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginRight: "0.5rem" }}>
            Filter by Decision:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? "var(--navy-primary)" : "var(--bg-page)",
                color: selectedCategory === cat ? "#FFFFFF" : "var(--text-body)",
                border: "1px solid",
                borderColor: selectedCategory === cat ? "var(--navy-primary)" : "var(--border-light)",
                padding: "0.4rem 0.875rem",
                borderRadius: "20px",
                fontSize: "0.8125rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all var(--transition-fast)"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 7 Services Grid (3+3+1 layout) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "1.75rem"
        }}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="card-white"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                padding: "2rem"
              }}
            >
              <div>
                {/* Number & Category */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{
                    fontFamily: "monospace",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    color: "var(--facet-red)",
                    letterSpacing: "0.05em"
                  }}>
                    SERVICE {service.number}
                  </span>
                  <span className="badge badge-neutral" style={{ fontSize: "0.6875rem" }}>
                    {service.decisionCategory}
                  </span>
                </div>

                {/* Title */}
                <h3 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "0.75rem", lineHeight: "1.3" }}>
                  {service.title}
                </h3>

                {/* Short Description */}
                <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                  {service.shortDesc}
                </p>

                {/* Scope Snippet Checklist */}
                <div style={{
                  background: "var(--bg-page)",
                  padding: "1rem",
                  borderRadius: "4px",
                  marginBottom: "1.75rem",
                  border: "1px solid var(--border-subtle)"
                }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--navy-primary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                    Key Inclusions:
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {service.scopeAreas.slice(0, 3).map((item, idx) => (
                      <li key={idx} style={{ fontSize: "0.8125rem", color: "var(--text-muted)", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <span style={{ color: "var(--facet-red)", fontWeight: "bold" }}>›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                    <li style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontStyle: "italic", marginTop: "0.25rem" }}>
                      + {service.scopeAreas.length - 3} additional research modules
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                <button
                  type="button"
                  onClick={() => setActiveModalService(service)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--navy-primary)",
                    fontSize: "0.8125rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    padding: 0,
                    textDecoration: "underline",
                    textUnderlineOffset: "3px"
                  }}
                >
                  View Full Scope & Limitations
                </button>

                <button
                  type="button"
                  onClick={() => onSelectForQuote(service.id)}
                  className="btn btn-outline-dark btn-sm"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Request Scope
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={activeModalService}
        isOpen={!!activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectForQuote={onSelectForQuote}
      />
    </section>
  );
}
