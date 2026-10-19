"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BRAND } from "../data/content";

export default function Navbar({ onOpenQuote, activeSection = "" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Sample Report", href: "#sample-report" },
    { label: "Who We Serve", href: "#who-we-serve" },
    { label: "Insights", href: "#insights" },
    { label: "About", href: "#about" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header-wrapper ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <nav className="nav-container" aria-label="Main Navigation">
          {/* Brand Logo */}
          <Link href="/" className="brand-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="brand-icon">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Geometric Facet Diamond */}
                <path d="M18 3L32 10.5L32 25.5L18 33L4 25.5L4 10.5L18 3Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(255,255,255,0.03)" />
                <path d="M18 3L18 33" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M4 10.5L32 10.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                <path d="M4 25.5L32 25.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                {/* Central Red Diamond Focal Node */}
                <polygon points="18,12 24,18 18,24 12,18" fill="var(--facet-red)" />
              </svg>
            </div>
            <div>
              <div className="brand-name">
                FACET <span className="brand-name-verify">Verify</span>
              </div>
              <span className="brand-subline">Due Diligence & Investigative Intelligence</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links" style={{ display: "none" }}>
            {/* Handled by media query or inline flex on desktop */}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`nav-link ${activeSection === item.href.replace("#", "") ? "active" : ""}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn btn-primary btn-sm"
              id="header-quote-button"
            >
              Get a Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#FFFFFF",
                padding: "0.5rem",
                borderRadius: "4px",
                cursor: "pointer",
                display: "none"
              }}
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            background: "var(--navy-primary)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              style={{
                color: "var(--text-light)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            Get a Quote
          </button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 980px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
