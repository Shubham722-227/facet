"use client";

import { useState } from "react";
import { BRAND, SERVICES } from "../data/content";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: SERVICES[0].title,
    message: "",
    consent: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-white" aria-label="Contact FACET Verify">
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "3.5rem"
        }}>
          {/* Left Column: Contact Info */}
          <div>
            <div className="eyebrow">
              Direct Inquiries
            </div>
            <h2 className="heading-lg" style={{ color: "var(--navy-primary)", marginBottom: "1.25rem" }}>
              Tell Us What You Need to Understand.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-body)", lineHeight: "1.7", marginBottom: "2rem" }}>
              Share an outline of the subject, property, or corporate counterparty you need to investigate. A senior diligence specialist will respond within 24 business hours to discuss feasibility and scope.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "4px",
                  background: "var(--bg-page)",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--facet-red)"
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700" }}>Confidential Inquiries</span>
                  <div style={{ fontSize: "0.9375rem", fontWeight: "600", color: "var(--navy-primary)" }}>{BRAND.email}</div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>PGP / Encrypted channel available on request</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "4px",
                  background: "var(--bg-page)",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--navy-primary)"
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700" }}>WhatsApp &amp; Client Liaison</span>
                  <div style={{ fontSize: "0.9375rem", fontWeight: "600", color: "var(--navy-primary)" }}>Available upon bilateral NDA</div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Dedicated direct line for active transaction windows</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "4px",
                  background: "var(--bg-page)",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--navy-primary)"
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700" }}>Operations &amp; Research Desks</span>
                  <div style={{ fontSize: "0.9375rem", fontWeight: "600", color: "var(--navy-primary)" }}>{BRAND.address}</div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Appointments scheduled following mutual scoping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiries Form */}
          <div className="card-white" style={{ padding: "2.5rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
                <div style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  background: "var(--verified-green-bg)",
                  color: "var(--verified-green)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem auto"
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.5rem" }}>
                  Inquiry Received
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                  Thank you, {formData.name}. A senior member of our investigative intelligence team will review your requirement and reach out shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline-dark btn-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "1.2rem", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "1.5rem" }}>
                  Send an Engagement Brief
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">
                      Name <span className="form-label-required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-company">
                      Organization
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      className="form-input"
                      placeholder="Firm / Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      Business Email <span className="form-label-required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">
                      Contact Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="form-input"
                      placeholder="+91..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-service">
                    Primary Service of Interest
                  </label>
                  <select
                    id="contact-service"
                    className="form-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Custom Multi-Workstream Review">Custom Multi-Workstream Review</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    Brief Description of Requirement <span className="form-label-required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    rows="3"
                    placeholder="Provide relevant details (property location, entity type, decision horizon) without sharing confidential passwords or private restricted records."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      style={{ accentColor: "var(--facet-red)", marginTop: "2px" }}
                    />
                    <span>
                      I consent to FACET Verify contacting me regarding this inquiry under bilateral confidentiality.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "0.5rem" }}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: 1fr 1.2fr"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
