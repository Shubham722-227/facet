"use client";

import { useState } from "react";
import { SERVICES, INDIAN_STATES } from "../data/content";

export default function ScopeBuilder({ initialServiceId = "", onClose, isModal = false }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    serviceId: initialServiceId || SERVICES[0].id,
    subjectType: "Property",
    subjectIdentifier: "",
    jurisdiction: "Maharashtra",
    urgency: "Standard (5–7 Business Days)",
    transactionValue: "",
    researchAreas: [
      "Title & Deed Chain",
      "Litigation & Court Disputes"
    ],
    contactName: "",
    company: "",
    email: "",
    phone: "",
    purpose: "",
    consent: true
  });

  const availableResearchAreas = [
    "Title & Deed Chain",
    "Litigation & Court Disputes",
    "Encumbrance Verification",
    "Revenue Mutation (7/12 / Patta)",
    "Promoter Background & DIN",
    "MCA Charges & Insolvency (IBC)",
    "RERA Registration & Orders",
    "Adverse Media & OSINT",
    "Site Demarcation & Approvals",
    "UBO & Shareholding Network"
  ];

  const handleCheckboxToggle = (area) => {
    setFormData((prev) => {
      const exists = prev.researchAreas.includes(area);
      return {
        ...prev,
        researchAreas: exists
          ? prev.researchAreas.filter((a) => a !== area)
          : [...prev.researchAreas, area]
      };
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (step === 1) {
      if (!formData.subjectIdentifier.trim()) {
        setErrorMessage("Please enter a subject name or identifier (e.g. Survey number, Company name, or Individual name).");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (formData.researchAreas.length === 0) {
        setErrorMessage("Please select at least one research area for your scope.");
        return;
      }
      setStep(3);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.contactName.trim() || !formData.email.trim()) {
      setErrorMessage("Please provide your name and business email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid corporate or professional email address.");
      return;
    }

    setLoading(true);

    // Simulate reliable scope intake processing
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      setErrorMessage("Unable to submit at this time. Please try again or contact enquiries@facetverify.com.");
      setLoading(false);
    }
  };

  const currentServiceObj = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];

  return (
    <div className={`scope-builder-card ${isModal ? "is-modal" : ""}`} style={{
      background: "#FFFFFF",
      border: "1px solid var(--border-light)",
      borderRadius: "8px",
      padding: "2.5rem 2rem",
      boxShadow: "var(--shadow-md)"
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.75rem" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: "0.25rem" }}>
            Scope Intake & Proposal
          </div>
          <h3 className="heading-md" style={{ color: "var(--navy-primary)" }}>
            Build the Right Due Diligence Scope.
          </h3>
          <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)" }}>
            Tell us what you need to verify. We will evaluate accessible records and return a scoped proposal and fee estimate.
          </p>
        </div>
        {isModal && onClose && (
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>

      {/* Success State */}
      {submitted ? (
        <div style={{
          padding: "2.5rem 1.5rem",
          textAlign: "center",
          background: "var(--bg-page)",
          borderRadius: "6px",
          border: "1px solid var(--border-light)"
        }}>
          <div style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "50%",
            background: "var(--verified-green-bg)",
            color: "var(--verified-green)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.25rem auto"
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h4 style={{ fontSize: "1.25rem", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.5rem" }}>
            Thank You. Your Request Has Been Received.
          </h4>
          <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", maxWidth: "540px", margin: "0 auto 1.5rem auto", lineHeight: "1.6" }}>
            Our team will review your specified jurisdiction ({formData.jurisdiction}), subject parameters, and research modules, and contact you within 24 business hours to clarify scope, deliverables, timeline and fixed fee.
          </p>

          <div style={{
            background: "#FFFFFF",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid var(--border-subtle)",
            maxWidth: "460px",
            margin: "0 auto 1.5rem auto",
            textAlign: "left",
            fontSize: "0.8125rem",
            color: "var(--text-muted)"
          }}>
            <div><strong style={{ color: "var(--navy-primary)" }}>Service:</strong> {currentServiceObj.title}</div>
            <div><strong style={{ color: "var(--navy-primary)" }}>Subject:</strong> {formData.subjectIdentifier} ({formData.subjectType})</div>
            <div><strong style={{ color: "var(--navy-primary)" }}>Contact:</strong> {formData.contactName} ({formData.email})</div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              if (isModal && onClose) onClose();
            }}
            className="btn btn-outline-dark btn-sm"
          >
            Submit Another Requirement
          </button>
        </div>
      ) : (
        <div>
          {/* Step Track */}
          <div className="step-indicator-wrapper">
            <div className="step-indicator-track">
              <div
                className="step-indicator-progress"
                style={{ width: step === 1 ? "15%" : step === 2 ? "65%" : "100%" }}
              ></div>
            </div>

            <div className={`step-node ${step === 1 ? "active" : step > 1 ? "completed" : ""}`}>
              <div className="step-bubble">1</div>
              <span className="step-label">Subject & Type</span>
            </div>

            <div className={`step-node ${step === 2 ? "active" : step > 2 ? "completed" : ""}`}>
              <div className="step-bubble">2</div>
              <span className="step-label">Jurisdiction & Modules</span>
            </div>

            <div className={`step-node ${step === 3 ? "active" : ""}`}>
              <div className="step-bubble">3</div>
              <span className="step-label">Timing & Contact</span>
            </div>
          </div>

          {/* Error Notice */}
          {errorMessage && (
            <div style={{
              padding: "0.75rem 1rem",
              background: "rgba(217, 45, 58, 0.08)",
              border: "1px solid rgba(217, 45, 58, 0.25)",
              borderRadius: "4px",
              color: "var(--risk-red)",
              fontSize: "0.875rem",
              marginBottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Content */}
          <form onSubmit={step === 3 ? handleSubmit : handleNext}>
            {/* Step 1: Subject & Service */}
            {step === 1 && (
              <div>
                <div className="form-group">
                  <label className="form-label" htmlFor="scope-service-select">
                    Service Vertical Required <span className="form-label-required">*</span>
                  </label>
                  <select
                    id="scope-service-select"
                    className="form-select"
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.number}. {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="scope-subject-type">
                      Subject Classification <span className="form-label-required">*</span>
                    </label>
                    <select
                      id="scope-subject-type"
                      className="form-select"
                      value={formData.subjectType}
                      onChange={(e) => setFormData({ ...formData, subjectType: e.target.value })}
                    >
                      <option value="Property">Property / Land Parcel</option>
                      <option value="Individual">Individual / Promoter</option>
                      <option value="Company">Corporate / Target Entity</option>
                      <option value="Vendor">Vendor / Supplier</option>
                      <option value="Transaction">M&A Transaction</option>
                      <option value="Asset">Asset & Beneficial Interest</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="scope-identifier">
                      Identifier / Reference <span className="form-label-required">*</span>
                    </label>
                    <input
                      id="scope-identifier"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Survey No. 182, or CIN / Company Name"
                      value={formData.subjectIdentifier}
                      onChange={(e) => setFormData({ ...formData, subjectIdentifier: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="scope-purpose">
                    Transaction Context / Decision Purpose
                    <span className="form-hint">(Helps us scope relevant risks)</span>
                  </label>
                  <textarea
                    id="scope-purpose"
                    className="form-textarea"
                    rows="3"
                    placeholder="e.g. Preparing for outright acquisition of commercial plot; need independent confirmation of title chain and any pending partition claims."
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  ></textarea>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem" }}>
                  <button type="submit" className="btn btn-primary">
                    Next: Jurisdiction & Scope
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Jurisdiction & Modules */}
            {step === 2 && (
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="scope-jurisdiction">
                      Primary State / Jurisdiction <span className="form-label-required">*</span>
                    </label>
                    <select
                      id="scope-jurisdiction"
                      className="form-select"
                      value={formData.jurisdiction}
                      onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                    >
                      {INDIAN_STATES.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="scope-urgency">
                      Required Turnaround Cadence
                    </label>
                    <select
                      id="scope-urgency"
                      className="form-select"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    >
                      <option value="Standard (5–7 Business Days)">Standard (5–7 Business Days)</option>
                      <option value="Priority (3–4 Business Days)">Priority (3–4 Business Days)</option>
                      <option value="Expedited Deal Timeline">Expedited / Active Deal Window</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Select Research Modules to Include <span className="form-label-required">*</span>
                  </label>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "0.625rem",
                    background: "var(--bg-page)",
                    padding: "1rem",
                    borderRadius: "6px",
                    border: "1px solid var(--border-light)"
                  }}>
                    {availableResearchAreas.map((area) => {
                      const checked = formData.researchAreas.includes(area);
                      return (
                        <label
                          key={area}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.625rem",
                            fontSize: "0.8125rem",
                            color: "var(--text-body)",
                            cursor: "pointer"
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => handleCheckboxToggle(area)}
                            style={{ accentColor: "var(--facet-red)" }}
                          />
                          <span>{area}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="scope-transaction-value">
                    Approximate Transaction Value Band
                    <span className="form-hint">(Optional — assists in materiality calibration)</span>
                  </label>
                  <input
                    id="scope-transaction-value"
                    type="text"
                    className="form-input"
                    placeholder="e.g. ₹10 Cr – ₹50 Cr, or Institutional Investment"
                    value={formData.transactionValue}
                    onChange={(e) => setFormData({ ...formData, transactionValue: e.target.value })}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn btn-outline-dark"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Next: Contact Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Submission */}
            {step === 3 && (
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="scope-name">
                      Full Name <span className="form-label-required">*</span>
                    </label>
                    <input
                      id="scope-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Rajesh Khurana"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="scope-company">
                      Organization / Firm Name
                    </label>
                    <input
                      id="scope-company"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Apex Realty Capital / Legal Counsel"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="scope-email">
                      Business Email Address <span className="form-label-required">*</span>
                    </label>
                    <input
                      id="scope-email"
                      type="email"
                      className="form-input"
                      placeholder="rajesh@firm.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="scope-phone">
                      Contact Phone / Mobile
                    </label>
                    <input
                      id="scope-phone"
                      type="tel"
                      className="form-input"
                      placeholder="+91 98200 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Consent & Data Privacy */}
                <div style={{
                  padding: "1rem",
                  background: "var(--bg-page)",
                  borderRadius: "4px",
                  border: "1px solid var(--border-light)",
                  marginBottom: "1.5rem"
                }}>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", cursor: "pointer", fontSize: "0.8125rem", color: "var(--text-body)", lineHeight: "1.4" }}>
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      style={{ accentColor: "var(--facet-red)", marginTop: "2px" }}
                    />
                    <span>
                      I authorize FACET Verify to review these engagement details and contact me regarding this scoped due diligence requirement. I understand that all shared information is handled under strict confidentiality.
                    </span>
                  </label>
                </div>

                {/* Pricing / Proposal Note */}
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "1.25rem", fontStyle: "italic" }}>
                  * We do not display automated unvalidated price ranges. Our senior team evaluates the accessibility of records in your specified jurisdiction and delivers a transparent proposal within 24 business hours.
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn btn-outline-dark"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading || !formData.consent}
                  >
                    {loading ? "Transmitting Scope..." : "Request a Scoped Quote"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
