"use client";

import { BRAND, SERVICES } from "../data/content";

export default function Footer({ onOpenLegal, onSelectService, onOpenQuote }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "4.5rem", paddingBottom: "3rem" }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1.2fr 1fr 1.2fr",
          gap: "3rem",
          marginBottom: "3.5rem"
        }}>
          {/* Column 1: Brand & Positioning */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <div className="brand-icon">
                <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 3L32 10.5L32 25.5L18 33L4 25.5L4 10.5L18 3Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(255,255,255,0.03)" />
                  <polygon points="18,12 24,18 18,24 12,18" fill="var(--facet-red)" />
                </svg>
              </div>
              <div className="brand-name" style={{ fontSize: "1.2rem" }}>
                FACET <span className="brand-name-verify">Verify</span>
              </div>
            </div>

            <p style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: "1.6", marginBottom: "1.5rem", maxWidth: "340px" }}>
              Due diligence and investigative intelligence for better-informed property, corporate, and investment decisions across India.
            </p>

            <div style={{ fontSize: "0.8125rem", color: "#CBD5E1", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <div><strong>Email:</strong> {BRAND.email}</div>
              <div><strong>Desk:</strong> {BRAND.phone}</div>
              <div><strong>Office:</strong> {BRAND.address}</div>
            </div>
          </div>

          {/* Column 2: All 7 Confirmed Services */}
          <div>
            <h4 style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", fontWeight: "700", marginBottom: "1.25rem" }}>
              Due Diligence Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(s.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#94A3B8",
                      fontSize: "0.8125rem",
                      textAlign: "left",
                      cursor: "pointer",
                      padding: 0,
                      transition: "color var(--transition-fast)"
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", fontWeight: "700", marginBottom: "1.25rem" }}>
              Company & Practice
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { label: "About FACET Verify", href: "#about" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Sample Report Docket", href: "#sample-report" },
                { label: "Who We Serve", href: "#who-we-serve" },
                { label: "Insights & Guides", href: "#insights" },
                { label: "Frequently Asked Questions", href: "#faqs" },
                { label: "Direct Contact Desk", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: "#94A3B8",
                      textDecoration: "none",
                      fontSize: "0.8125rem",
                      transition: "color var(--transition-fast)"
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Engagement CTA & Legal Policies */}
          <div>
            <h4 style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", fontWeight: "700", marginBottom: "1.25rem" }}>
              Scope an Engagement
            </h4>
            <p style={{ fontSize: "0.8125rem", color: "#94A3B8", lineHeight: "1.6", marginBottom: "1.25rem" }}>
              Have an impending land acquisition, counterparty onboarding, or transaction dispute?
            </p>
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn btn-primary btn-sm"
              style={{ width: "100%", marginBottom: "1.5rem" }}
            >
              Request a Scoped Proposal
            </button>

            <h5 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", fontWeight: "700", marginBottom: "0.75rem" }}>
              Legal & Compliance
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <button
                type="button"
                onClick={() => onOpenLegal("disclaimer")}
                style={{ background: "none", border: "none", color: "#94A3B8", fontSize: "0.75rem", textAlign: "left", cursor: "pointer", padding: 0 }}
                onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
              >
                Due Diligence Disclaimer
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal("privacy")}
                style={{ background: "none", border: "none", color: "#94A3B8", fontSize: "0.75rem", textAlign: "left", cursor: "pointer", padding: 0 }}
                onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
              >
                Privacy Policy & Data Protection
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal("terms")}
                style={{ background: "none", border: "none", color: "#94A3B8", fontSize: "0.75rem", textAlign: "left", cursor: "pointer", padding: 0 }}
                onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>

        {/* Verbatim Statutory Due Diligence Disclaimer (from website.md Section 17.3) */}
        <div style={{
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginBottom: "2rem"
        }}>
          <div style={{ fontSize: "0.6875rem", textTransform: "uppercase", color: "var(--facet-red)", fontWeight: "700", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
            Statutory Due Diligence Notice
          </div>
          <p style={{ fontSize: "0.75rem", color: "#64748B", lineHeight: "1.65" }}>
            FACET Verify reports are prepared for the agreed scope and are based on records and information accessible through the sources used for the engagement, together with any other material specifically agreed with the client. Sources may be incomplete, delayed, inaccurate or unavailable. Findings reflect the information identified during the stated research period and should be read with the scope, methodology and limitations described in the report. Unless expressly agreed and legally authorised, a report is not a legal opinion, certified title opinion, valuation, audit, guarantee of title, guarantee against fraud or substitute for advice from an appropriately qualified professional. Clients should obtain independent legal, financial, tax, valuation or technical advice where appropriate.
          </p>
        </div>

        {/* Bottom Bar: Copyright */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontSize: "0.75rem",
          color: "#64748B",
          paddingTop: "1.25rem",
          borderTop: "1px solid rgba(255,255,255,0.06)"
        }}>
          <div>
            &copy; {currentYear} FACET Verify. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span>Independent Due Diligence & Investigative Intelligence</span>
            <span>·</span>
            <span>Mumbai · Delhi NCR · Bengaluru</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: 1.5fr 1.2fr 1fr 1.2fr"] {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          div[style*="gridTemplateColumns: 1.5fr 1.2fr 1fr 1.2fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
