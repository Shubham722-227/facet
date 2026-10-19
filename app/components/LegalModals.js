"use client";

import { useEffect } from "react";

export default function LegalModals({ activeModal, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (activeModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "760px" }}>
        {/* Header */}
        <div className="modal-header">
          <h3 className="heading-sm" style={{ color: "var(--navy-primary)" }}>
            {activeModal === "disclaimer" && "Due Diligence Disclaimer & Statutory Limitations"}
            {activeModal === "privacy" && "Privacy & Data Protection Policy"}
            {activeModal === "terms" && "Terms of Use & Engagement Framework"}
          </h3>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="modal-body" style={{ fontSize: "0.9375rem", lineHeight: "1.7", color: "var(--text-body)" }}>
          {activeModal === "disclaimer" && (
            <div>
              <p style={{ marginBottom: "1.25rem", fontWeight: "600", color: "var(--navy-primary)" }}>
                FACET Verify Due Diligence Engagement Disclaimer:
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                FACET Verify reports are prepared for the agreed scope and are based on records and information accessible through the sources used for the engagement, together with any other material specifically agreed with the client. Sources may be incomplete, delayed, inaccurate or unavailable. Findings reflect the information identified during the stated research period and should be read with the scope, methodology and limitations described in the report.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                Unless expressly agreed and legally authorised, a report is not a legal opinion, certified title opinion, valuation, audit, guarantee of title, guarantee against fraud or substitute for advice from an appropriately qualified professional. Clients should obtain independent legal, financial, tax, valuation or technical advice where appropriate.
              </p>
              <p>
                Judicial records, company registers, and land revenue extracts reflect data entered by respective state authorities. Absence of an indexed dispute or encumbrance during a search does not eliminate the possibility of unindexed, misclassified, or subsequent legal actions.
              </p>
            </div>
          )}

          {activeModal === "privacy" && (
            <div>
              <p style={{ marginBottom: "1.25rem" }}>
                FACET Verify adheres to strict data protection standards regarding client confidentiality and lawful information handling under applicable Indian and international regimes.
              </p>
              <h4 style={{ fontSize: "1rem", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.5rem" }}>1. Information Collected</h4>
              <p style={{ marginBottom: "1.25rem" }}>
                We collect contact information, organization details, and subject scope parameters solely for the purpose of assessing, executing, and delivering agreed due diligence services.
              </p>
              <h4 style={{ fontSize: "1rem", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.5rem" }}>2. Confidentiality & Non-Disclosure</h4>
              <p style={{ marginBottom: "1.25rem" }}>
                All client engagements are governed by mutual Non-Disclosure Agreements. We decouple client identity from field inquiries and never alert targets or counterparties.
              </p>
              <h4 style={{ fontSize: "1rem", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.5rem" }}>3. Data Retention & Deletion</h4>
              <p>
                Inquiry and deliverable data are stored under encrypted protocols and retained only for the period necessary to fulfill contractual warranties, after which they are securely purged.
              </p>
            </div>
          )}

          {activeModal === "terms" && (
            <div>
              <p style={{ marginBottom: "1.25rem" }}>
                By accessing this website, you agree to comply with the terms and conditions governing information use and engagement inquiries.
              </p>
              <h4 style={{ fontSize: "1rem", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.5rem" }}>1. Intellectual Property & Deliverable Reliance</h4>
              <p style={{ marginBottom: "1.25rem" }}>
                All methodologies, website blueprints, and report structures are the exclusive intellectual property of FACET Verify. Sample reports are illustrative and do not establish live findings.
              </p>
              <h4 style={{ fontSize: "1rem", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.5rem" }}>2. Inquiry & Proposal Protocol</h4>
              <p style={{ marginBottom: "1.25rem" }}>
                Submission of a scope builder form constitutes a request for proposal and does not bind either party until a formal Statement of Work (SOW) is executed.
              </p>
              <h4 style={{ fontSize: "1rem", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.5rem" }}>3. Governing Law</h4>
              <p>
                All matters arising out of website usage and commercial engagements shall be governed by the laws of India, subject to the exclusive jurisdiction of the courts in Mumbai.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button type="button" onClick={onClose} className="btn btn-primary btn-sm">
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
}
