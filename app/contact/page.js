"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    service: "M&A Due Diligence",
    brief: "",
    nda: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        <section className="bg-primary text-on-primary py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-electric/15 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-accent-electric mb-4">
              <span>SECURE ENGAGEMENT DESK</span>
            </div>
            <h1 className="font-display-xl text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Initiate a Mandate Consultation.
            </h1>
            <p className="font-body-lg text-slate-300 max-w-2xl leading-relaxed">
              Connect directly with our investigative directors to scope pre-deal due diligence, asset recovery dockets, or title audits under strict bilateral confidentiality.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 5 Cols: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-label-sm text-xs font-mono uppercase tracking-widest text-secondary block mb-1">
                  Air-Gapped Vault
                </span>
                <h2 className="font-headline-sm text-2xl text-primary font-bold mb-4">
                  Confidential Intake Channels
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  All communications and target disclosures are encrypted in transit and at rest under ISO-27001 aligned custody protocols.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-border-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono text-slate-500 font-bold">Encrypted Inquiries</div>
                    <div className="text-sm font-semibold text-primary">mandates@facet-intel.com</div>
                    <div className="text-xs text-slate-500 mt-0.5">PGP Key available upon request</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-border-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono text-slate-500 font-bold">Secure Desk</div>
                    <div className="text-sm font-semibold text-primary">+44 20 7946 0912 / +91 22 4970 8200</div>
                    <div className="text-xs text-slate-500 mt-0.5">Direct Line for General Counsels</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-border-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono text-slate-500 font-bold">Intelligence Centres</div>
                    <div className="text-sm font-semibold text-primary">London · Mumbai · Singapore</div>
                    <div className="text-xs text-slate-500 mt-0.5">Bandra Kurla Complex / Mayfair / Marina Bay</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white/95 backdrop-blur-xl p-8 sm:p-10 rounded-2xl shadow-xl border border-border-subtle">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-verification-green/15 text-verification-green flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-[36px]">verified</span>
                    </div>
                    <h3 className="font-headline-sm text-2xl text-primary font-bold mb-2">
                      Inquiry Logged &amp; Encrypted
                    </h3>
                    <p className="text-sm text-on-surface-variant max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you, {formData.name}. A Senior Investigative Counsel will reach out via your preferred secure channel within 12 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-xs uppercase tracking-wider"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-headline-sm text-xl text-primary font-bold mb-2">
                      Submit Mandate Parameters
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Counsel / Principal Name"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-border-subtle text-sm text-primary focus:border-secondary outline-none"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                          Firm / Institution
                        </label>
                        <input
                          type="text"
                          placeholder="Organization name"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-border-subtle text-sm text-primary focus:border-secondary outline-none"
                          value={formData.org}
                          onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                          Business Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="counsel@institution.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-border-subtle text-sm text-primary focus:border-secondary outline-none"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                          Contact Phone / Signal
                        </label>
                        <input
                          type="tel"
                          placeholder="+44 / +91 ..."
                          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-border-subtle text-sm text-primary focus:border-secondary outline-none"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                        Scope Focus
                      </label>
                      <select
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-border-subtle text-sm text-primary font-medium focus:border-secondary outline-none"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="M&A Due Diligence">M&A / Pre-Deal Due Diligence</option>
                        <option value="Real Estate & Title Verification">Real Estate & Title Verification</option>
                        <option value="Promoter & Seller Scrutiny">Promoter & Seller Scrutiny</option>
                        <option value="Litigation & Regulatory Exposure">Litigation & Regulatory Exposure</option>
                        <option value="Global Asset Tracing & Recovery">Global Asset Tracing & Recovery</option>
                        <option value="Forensic Intelligence & Fraud Risk">Forensic Intelligence & Fraud Risk</option>
                        <option value="Vendor & Counterparty Audit">Vendor & Counterparty Audit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                        Mandate Outline &amp; Target Context
                      </label>
                      <textarea
                        rows="3"
                        required
                        placeholder="Brief overview of transaction context, jurisdictions, and sensitive parameters."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-border-subtle text-sm text-primary focus:border-secondary outline-none"
                        value={formData.brief}
                        onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      ></textarea>
                    </div>

                    <div className="p-3 bg-surface-canvas rounded-lg border border-border-subtle flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="contact-nda"
                        checked={formData.nda}
                        onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                        className="mt-1"
                      />
                      <label htmlFor="contact-nda" className="text-xs text-on-surface-variant leading-snug cursor-pointer">
                        Execute formal Non-Disclosure Agreement before transmission of target deal-room exhibits.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-xs uppercase tracking-wider font-bold hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span>{loading ? "Encrypting & Sending..." : "Transmit Mandate Brief"}</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
