"use client";

import { useState } from "react";
import { SERVICES } from "../data/content";

export default function ConsultationModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    mandateType: "Property & Real Estate Due Diligence",
    targetEntity: "",
    jurisdictions: "United States, Europe, or India",
    organization: "",
    name: "",
    email: "",
    phone: "",
    urgency: "Standard Review (5–7 Business Days)",
    ndaRequired: true,
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    await new Promise((res) => setTimeout(res, 600));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 sm:p-10 max-w-xl w-full shadow-2xl border border-slate-200 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-facet-red"></span>
            <span className="font-display font-bold text-[12px] uppercase tracking-wider text-primary">
              FACET Verify // Scoped Engagement Request
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary hover:bg-slate-200 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[32px]">verified</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-primary mb-2">
              Engagement Request Received
            </h3>
            <p className="font-body text-base text-on-surface-variant max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, {formData.name}. Our research team will review the target parameters and provide a defined scope and timeline proposal within one business day.
            </p>
            <div className="p-3 bg-slate-100 rounded-lg text-xs font-mono text-slate-600 mb-6">
              Inquiry Ref: FV-2025-{(Math.random() * 10000).toFixed(0)}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-primary text-white font-display font-bold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h2 className="font-display font-bold text-2xl text-primary mb-1">
                Discuss Your Requirement
              </h2>
              <p className="font-body text-sm text-on-surface-variant">
                Outline your transaction, target subject or asset. We will establish scope, accessible sources and estimated turnaround.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                Service Line
              </label>
              <select
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-primary font-medium focus:border-facet-red outline-none"
                value={formData.mandateType}
                onChange={(e) => setFormData({ ...formData, mandateType: e.target.value })}
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Target Entity / Property
                </label>
                <input
                  type="text"
                  required
                  placeholder="Subject entity or parcel location"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-primary focus:border-facet-red outline-none"
                  value={formData.targetEntity}
                  onChange={(e) => setFormData({ ...formData, targetEntity: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Primary Jurisdiction / Country
                </label>
                <input
                  type="text"
                  placeholder="e.g. USA (Delaware/NY), UK & Europe, India (State)"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-primary focus:border-facet-red outline-none"
                  value={formData.jurisdictions}
                  onChange={(e) => setFormData({ ...formData, jurisdictions: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Principal or Counsel Name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-primary focus:border-facet-red outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Organization / Law Firm
                </label>
                <input
                  type="text"
                  placeholder="Company, Bank, or Chambers"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-primary focus:border-facet-red outline-none"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@organization.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-primary focus:border-facet-red outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+91 ..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-primary focus:border-facet-red outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3">
              <input
                type="checkbox"
                id="nda-checkbox"
                checked={formData.ndaRequired}
                onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                className="mt-1 accent-primary"
              />
              <label htmlFor="nda-checkbox" className="text-xs text-on-surface-variant leading-snug cursor-pointer">
                Non-Disclosure Agreement (NDA) requested prior to sharing detailed target transaction documentation.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-primary text-white font-display font-bold text-sm tracking-wider uppercase hover:bg-[#134074] transition-all shadow-md mt-2 flex items-center justify-center gap-2"
            >
              <span>{loading ? "Transmitting..." : "Submit Scope Request"}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
