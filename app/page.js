"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    // Simulate API registration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setMessage("Thank you! You've been added to our waitlist.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Background Glow Orbs */}
      <div className="glow-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <div className="center-container">
        <main className="glass-card main-card animate-fade-in">
          {/* Header/Logo */}
          <div className="card-header">
            <div className="logo">
              <div className="logo-symbol">
                <div className="logo-inner"></div>
              </div>
              Facet
            </div>
            <span className="badge-tag">
              <span className="badge-dot"></span>
              PropTech 2.0
            </span>
          </div>

          {/* Main Info */}
          <div className="card-content">
            <h1 className="coming-soon-title">Coming Soon</h1>
            <h2 className="tagline">Real Estate Legal Due Diligence, Decoded.</h2>
            <p className="description">
              Facet is building the modern transaction infrastructure for real estate.
            </p>
          </div>

          {/* Subscribe Form */}
          <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="form-group">
              <input
                type="email"
                placeholder="Enter your professional email"
                className="input-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                id="email-input"
                required
              />
              <button
                type="submit"
                className="btn-submit"
                disabled={status === "loading"}
                id="subscribe-button"
              >
                {status === "loading" ? "Joining..." : "Notify Me"}
              </button>
            </form>

            {message && (
              <div className={`form-status ${status === "success" ? "status-success" : "status-error"}`} id="form-feedback-message">
                {status === "success" ? (
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
                {message}
              </div>
            )}
          </div>

          {/* Footer Inside the Card */}
          <div className="card-footer">
            <span>&copy; {new Date().getFullYear()} Facet Technologies, Inc.</span>
            <span className="divider">•</span>
            <a href="mailto:hello@facetdue.com" className="contact-link">Contact Us</a>
          </div>
        </main>
      </div>
    </>
  );
}
