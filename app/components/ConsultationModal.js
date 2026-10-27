"use client";

import { useState } from "react";

export default function ConsultationModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    mandateType: "M&A Due Diligence",
    targetEntity: "",
    jurisdictions: "Cross-Border / Multi-State",
    organization: "",
    name: "",
    email: "",
    phone: "",
    urgency: "Standard (5–7 Days)",
    ndaRequired: true,
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    await new Promise((res) => setTimeout(res, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 sm:p-10 max-w-xl w-full shadow-2xl border border-border-subtle max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-verification-green"></span>
            <span className="font-label-sm text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Secure Mandate Intake // 256-Bit
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-verification-green/15 text-verification-green flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[32px]">verified</span>
            </div>
            <h3 className="font-headline-sm text-2xl text-primary font-bold mb-2">
              Mandate Intake Received
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, {formData.name}. Your inquiry has been routed to our Senior Investigative Counsel under preliminary privilege protocols. We will reach out within 12 hours.
            </p>
            <div className="p-3 bg-surface-canvas rounded-lg text-xs font-mono text-slate-500 mb-6">
              Docket Token: FC-2025-{(Math.random() * 10000).toFixed(0)}-INTAKE
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h2 className="font-headline-sm text-2xl text-primary font-bold mb-1">
                Initiate Confidential Mandate
              </h2>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Direct engagement for sovereign entities, General Counsels, and institutional sponsors.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                Mandate Classification
              </label>
              <select
                className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-border-subtle text-sm text-primary font-medium focus:border-secondary outline-none"
                value={formData.mandateType}
                onChange={(e) => setFormData({ ...formData, mandateType: e.target.value })}
              >
                <option value="M&A Due Diligence">M&A / Pre-Deal Due Diligence</option>
                <option value="Real Estate & Title Verification">Real Estate & Title Verification (Cadastral)</option>
                <option value="Promoter & Seller Scrutiny">Promoter & Seller Scrutiny (HUMINT + DIN)</option>
                <option value="Litigation & Regulatory Exposure">Litigation & Regulatory Docket Search</option>
                <option value="Global Asset Tracing & Recovery">Global Asset Tracing & Beneficial Wealth</option>
                <option value="Forensic Intelligence & Fraud Risk">Forensic Intelligence & Fraud Risk</option>
                <option value="Vendor & Counterparty Audit">Vendor & Counterparty Audit</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Target Entity / Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company name, SPV, or Parcel ID"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-border-subtle text-sm text-primary focus:border-secondary outline-none"
                  value={formData.targetEntity}
                  onChange={(e) => setFormData({ ...formData, targetEntity: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Primary Jurisdiction
                </label>
                <input
                  type="text"
                  placeholder="e.g. India, UAE, UK, Singapore"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-border-subtle text-sm text-primary focus:border-secondary outline-none"
                  value={formData.jurisdictions}
                  onChange={(e) => setFormData({ ...formData, jurisdictions: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Your Full Name
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
                  Organization / Law Firm
                </label>
                <input
                  type="text"
                  placeholder="Fund / Corporate / Chambers"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-border-subtle text-sm text-primary focus:border-secondary outline-none"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Institutional Email
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
                  Phone (Signal / WhatsApp)
                </label>
                <input
                  type="tel"
                  placeholder="+1 / +44 / +91 ..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-canvas border border-border-subtle text-sm text-primary focus:border-secondary outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="p-3 bg-surface-canvas rounded-lg border border-border-subtle flex items-start gap-3">
              <input
                type="checkbox"
                id="nda-checkbox"
                checked={formData.ndaRequired}
                onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                className="mt-1"
              />
              <label htmlFor="nda-checkbox" className="text-xs text-on-surface-variant leading-snug cursor-pointer">
                Execute formal bilateral Non-Disclosure Agreement (NDA) prior to disclosing confidential deal room identifiers.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider font-bold hover:bg-secondary transition-all shadow-md mt-2 flex items-center justify-center gap-2"
            >
              <span>{loading ? "Transmitting..." : "Submit Confidential Mandate"}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
