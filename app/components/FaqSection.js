"use client";

import { useState } from "react";
import { FAQS } from "../data/content";

export default function FaqSection({ onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="section-padding bg-white" aria-label="Frequently Asked Questions">
      <div className="container-narrow">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Common Questions
          </div>
          <h2 className="heading-lg" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
            Clear Answers on Due Diligence Practice.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-body)", lineHeight: "1.65" }}>
            Transparency regarding our scope, legal boundaries, turnaround times, and data security standards.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ marginBottom: "3rem" }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="accordion-item">
                <button
                  type="button"
                  className="accordion-header"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{faq.question}</span>
                  <span style={{
                    color: isOpen ? "var(--facet-red)" : "var(--text-muted)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform var(--transition-fast)",
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div id={`faq-answer-${idx}`} className="accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div style={{
          background: "var(--bg-page)",
          border: "1px solid var(--border-light)",
          borderRadius: "6px",
          padding: "1.75rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem"
        }}>
          <div>
            <div style={{ fontWeight: "700", color: "var(--navy-primary)", marginBottom: "0.25rem" }}>
              Have a question not addressed here?
            </div>
            <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              Our diligence specialists can answer specific questions regarding your target jurisdiction.
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenQuote}
            className="btn btn-outline-dark btn-sm"
          >
            Speak With Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
