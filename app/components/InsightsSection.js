"use client";

import { useState } from "react";
import { INSIGHTS } from "../data/content";

export default function InsightsSection({ onOpenQuote }) {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="insights" className="section-padding bg-page" aria-label="Due Diligence Knowledge Centre">
      <div className="container">
        {/* Section Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3rem" }}>
          <div style={{ maxWidth: "700px" }}>
            <div className="eyebrow">
              Knowledge Centre & Field Guides
            </div>
            <h2 className="heading-lg" style={{ color: "var(--navy-primary)", marginBottom: "0.75rem" }}>
              Practical Guidance for Better Due Diligence.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-body)", lineHeight: "1.65" }}>
              Independent research, regulatory frameworks, and practical checklists prepared by our diligence specialists.
            </p>
          </div>
        </div>

        {/* 4 Article Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.75rem"
        }}>
          {INSIGHTS.map((article) => (
            <div
              key={article.id}
              className="card-white"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span className="badge badge-neutral" style={{ fontSize: "0.7rem" }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {article.readTime}
                  </span>
                </div>

                <h3 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "0.75rem", lineHeight: "1.35" }}>
                  {article.title}
                </h3>

                <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                  {article.summary}
                </p>
              </div>

              <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  {article.date}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--facet-red)",
                    fontWeight: "600",
                    fontSize: "0.8125rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem"
                  }}
                >
                  Read Analysis
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

      {/* Article Read Modal */}
      {activeArticle && (
        <div className="modal-overlay" onClick={() => setActiveArticle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "780px" }}>
            <div className="modal-header">
              <div>
                <span className="badge badge-neutral" style={{ marginBottom: "0.5rem" }}>
                  {activeArticle.category} · {activeArticle.readTime}
                </span>
                <h3 className="heading-md" style={{ color: "var(--navy-primary)" }}>
                  {activeArticle.title}
                </h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveArticle(null)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="modal-body" style={{ lineHeight: "1.75", fontSize: "0.9375rem" }}>
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx} style={{ marginBottom: "1.25rem", color: "var(--text-body)" }}>
                  {paragraph}
                </p>
              ))}

              {/* Practical Checklist Box */}
              <div style={{
                background: "var(--bg-page)",
                border: "1px solid var(--border-light)",
                borderRadius: "6px",
                padding: "1.5rem",
                marginTop: "1.75rem",
                marginBottom: "1.5rem"
              }}>
                <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--navy-primary)", fontWeight: "700", marginBottom: "0.875rem" }}>
                  Investigative Due Diligence Checklist
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {activeArticle.checklist.map((item, cIdx) => (
                    <li key={cIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem" }}>
                      <span style={{ color: "var(--facet-red)", fontWeight: "bold" }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontStyle: "italic", borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem" }}>
                Disclaimer: This article provides general research methodology and educational guidance. It does not constitute formal legal advice or substitute for counsel tailored to a specific jurisdiction.
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="btn btn-outline-dark"
              >
                Close Article
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveArticle(null);
                  onOpenQuote();
                }}
                className="btn btn-primary"
              >
                Discuss a Related Scoped Engagement
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
