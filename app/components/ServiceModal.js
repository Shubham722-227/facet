"use client";

import { useEffect } from "react";

export default function ServiceModal({ service, isOpen, onClose, onSelectForQuote }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div className="eyebrow" style={{ marginBottom: "0.25rem" }}>
              Service Specification {service.number}
            </div>
            <h2 id="service-modal-title" className="heading-md" style={{ color: "var(--navy-primary)" }}>
              {service.title}
            </h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Hero Headline & Intro */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.5rem" }}>
              {service.heroHeadline}
            </h3>
            <p style={{ fontSize: "1rem", color: "var(--text-body)", lineHeight: "1.7" }}>
              {service.intro}
            </p>
          </div>

          {/* Scope Areas */}
          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "1rem" }}>
              Potential Scope Areas & Investigations
            </h4>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "0.75rem"
            }}>
              {service.scopeAreas.map((scope, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.625rem",
                    padding: "0.625rem 0.75rem",
                    background: "var(--bg-page)",
                    borderRadius: "4px",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.875rem",
                    color: "var(--text-body)",
                    lineHeight: "1.4"
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--facet-red)" strokeWidth="3" style={{ marginTop: "2px", flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{scope}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Deliverables */}
          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.875rem" }}>
              Typical Client Deliverables
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {service.deliverables.map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.9375rem" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--navy-primary)" }}></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Walkthrough */}
          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.875rem" }}>
              Methodology & Workflow
            </h4>
            <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9375rem", color: "var(--text-body)" }}>
              {service.process.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Important Limitations */}
          <div style={{
            padding: "1rem 1.25rem",
            background: "rgba(201, 131, 22, 0.08)",
            border: "1px solid rgba(201, 131, 22, 0.25)",
            borderRadius: "4px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--warning-amber)", fontWeight: "700", fontSize: "0.8125rem", marginBottom: "0.25rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Important Scope Note & Boundary
            </div>
            <p style={{ fontSize: "0.8125rem", color: "var(--text-body)", lineHeight: "1.5" }}>
              {service.limitations}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button type="button" onClick={onClose} className="btn btn-outline-dark">
            Close Specification
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectForQuote(service.id);
            }}
            className="btn btn-primary"
          >
            Request Scoped Quote for This Service
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
