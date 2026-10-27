"use client";

import { useState } from "react";
import { SERVICES, INDIAN_STATES } from "../data/content";

export default function ScopeBuilder({ initialServiceId = "", onClose, isModal = false }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    serviceId: initialServiceId || (SERVICES[0] && SERVICES[0].id) || "property-due-diligence",
    subjectType: "Property / Land Parcel",
    subjectIdentifier: "",
    jurisdiction: "United States (Federal & State)",
    urgency: "Standard (5–7 Business Days)",
    transactionValue: "",
    researchAreas: [
      "Title & Deed Chain",
      "Litigation & Court Disputes",
      "Encumbrance & Lien Verification",
    ],
    contactName: "",
    company: "",
    email: "",
    phone: "",
    purpose: "",
    ndaRequired: true,
    consent: true,
  });

  const jurisdictionsList = [
    "United States (Federal & State)",
    "United Kingdom (England & Wales / Companies House)",
    "European Union (Cross-Border)",
    "India - National / Multi-State",
    ...INDIAN_STATES.map((s) => `India - ${s}`),
    "Other International Jurisdiction",
  ];

  const availableResearchAreas = [
    { id: "title", label: "Title & Deed Chain", desc: "Historical transfers, registered deeds & conveyance" },
    { id: "litigation", label: "Litigation & Court Disputes", desc: "Federal, state, district & appellate tribunal dockets" },
    { id: "encumbrance", label: "Encumbrance & Lien Verification", desc: "Charges, mortgages, registered liens & hypothecations" },
    { id: "regulatory", label: "Regulatory & Statutory Filings", desc: "Enforcement actions, sanctions & compliance filings" },
    { id: "promoter", label: "Promoter Background & Directorships", desc: "Corporate track record, DIN, and cross-affiliations" },
    { id: "ubo", label: "UBO & Beneficial Ownership Network", desc: "Holding chains, shell detection, and cap table vetting" },
    { id: "insolvency", label: "Bankruptcy & Insolvency Registry", desc: "Chapter 11, IBC insolvency filings, and distress flags" },
    { id: "osint", label: "Adverse Media & OSINT Intelligence", desc: "Reputational intelligence, controversies, and grey-market checks" },
  ];

  const handleCheckboxToggle = (label) => {
    setFormData((prev) => {
      const exists = prev.researchAreas.includes(label);
      return {
        ...prev,
        researchAreas: exists
          ? prev.researchAreas.filter((a) => a !== label)
          : [...prev.researchAreas, label],
      };
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (step === 1) {
      if (!formData.subjectIdentifier.trim()) {
        setErrorMessage("Please enter a subject identifier (e.g. Survey number, Property address, Company CIN/Name, or Promoter name).");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (formData.researchAreas.length === 0) {
        setErrorMessage("Please select at least one research module for your scope.");
        return;
      }
      setStep(3);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.contactName.trim() || !formData.email.trim()) {
      setErrorMessage("Please provide your name and business email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid corporate or professional email address.");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      setErrorMessage("Unable to process request at this time. Please contact enquiries@facetverify.com.");
      setLoading(false);
    }
  };

  const currentServiceObj = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];

  return (
    <div
      className={`w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden ${
        isModal ? "p-6 sm:p-8" : "p-6 sm:p-10"
      }`}
    >
      {/* Top Header */}
      <div className="flex items-start justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#0B2545] font-display font-bold text-[11px] sm:text-[12px] uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            Confidential Scope Intake &amp; Proposal
          </div>
          <h2 className="font-display font-extrabold text-[24px] sm:text-[30px] text-[#0B2545] tracking-tight leading-tight">
            Build the Right Due Diligence Scope.
          </h2>
          <p className="font-body text-[15px] sm:text-[16px] text-[#4B5563] mt-2 leading-relaxed">
            Tell us what you need to verify. We will evaluate accessible statutory repositories and return a formal scope proposal and fixed-fee estimate.
          </p>
        </div>

        {isModal && onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-slate-100 text-[#0B2545] hover:bg-slate-200 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        )}
      </div>

      {/* Success State */}
      {submitted ? (
        <div className="py-12 px-4 text-center max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
            <span className="material-symbols-outlined text-[36px]">verified</span>
          </div>

          <h3 className="font-display font-extrabold text-[26px] text-[#0B2545] mb-3">
            Requirement Received Successfully
          </h3>

          <p className="font-body text-[16px] text-[#4B5563] leading-relaxed mb-6">
            Thank you, <strong className="text-[#0B2545]">{formData.contactName}</strong>. Our investigative intelligence desk will review your target parameters across{" "}
            <strong className="text-[#0B2545]">{formData.jurisdiction}</strong> and prepare a formal scope schedule, deliverables list, turnaround time, and fee estimate within 24 business hours.
          </p>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-left text-[14px] text-slate-700 space-y-2 mb-8">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="font-bold text-[#0B2545]">Inquiry Reference:</span>
              <span className="font-mono text-blue-600 font-semibold">
                FV-{(Date.now() % 1000000).toString().padStart(6, "0")}
              </span>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Service:</span>{" "}
              <span className="font-medium text-[#0B2545]">{currentServiceObj ? currentServiceObj.title : formData.serviceId}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Subject:</span>{" "}
              <span className="font-medium text-[#0B2545]">{formData.subjectIdentifier} ({formData.subjectType})</span>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Primary Jurisdiction:</span>{" "}
              <span className="font-medium text-[#0B2545]">{formData.jurisdiction}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Contact Email:</span>{" "}
              <span className="font-medium text-[#0B2545]">{formData.email}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              if (isModal && onClose) onClose();
            }}
            className="px-8 py-3.5 rounded-xl bg-[#0B2545] text-white font-display font-bold text-[15px] hover:bg-[#134074] transition-all shadow-md cursor-pointer"
          >
            Submit Another Requirement
          </button>
        </div>
      ) : (
        <div>
          {/* Step Track */}
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 relative">
              {/* Step 1 */}
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`flex flex-col sm:flex-row items-center gap-2 p-3 rounded-xl border text-left transition-all ${
                  step === 1
                    ? "bg-[#0B2545] text-white border-[#0B2545] shadow-sm"
                    : step > 1
                    ? "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    : "bg-white text-slate-400 border-slate-200"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    step === 1
                      ? "bg-white text-[#0B2545]"
                      : step > 1
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step > 1 ? "✓" : "1"}
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] sm:text-[13px] font-display font-bold leading-tight">
                    Subject &amp; Vertical
                  </span>
                  <span className={`text-[11px] hidden sm:inline ${step === 1 ? "text-blue-200" : "text-slate-400"}`}>
                    Classification &amp; Details
                  </span>
                </div>
              </button>

              {/* Step 2 */}
              <button
                type="button"
                onClick={() => {
                  if (formData.subjectIdentifier.trim()) setStep(2);
                }}
                className={`flex flex-col sm:flex-row items-center gap-2 p-3 rounded-xl border text-left transition-all ${
                  step === 2
                    ? "bg-[#0B2545] text-white border-[#0B2545] shadow-sm"
                    : step > 2
                    ? "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    : "bg-white text-slate-400 border-slate-200"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    step === 2
                      ? "bg-white text-[#0B2545]"
                      : step > 2
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step > 2 ? "✓" : "2"}
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] sm:text-[13px] font-display font-bold leading-tight">
                    Scope &amp; Modules
                  </span>
                  <span className={`text-[11px] hidden sm:inline ${step === 2 ? "text-blue-200" : "text-slate-400"}`}>
                    Jurisdiction &amp; Checks
                  </span>
                </div>
              </button>

              {/* Step 3 */}
              <button
                type="button"
                onClick={() => {
                  if (formData.subjectIdentifier.trim() && formData.researchAreas.length > 0) setStep(3);
                }}
                className={`flex flex-col sm:flex-row items-center gap-2 p-3 rounded-xl border text-left transition-all ${
                  step === 3
                    ? "bg-[#0B2545] text-white border-[#0B2545] shadow-sm"
                    : "bg-white text-slate-400 border-slate-200"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    step === 3 ? "bg-white text-[#0B2545]" : "bg-slate-200 text-slate-500"
                  }`}
                >
                  3
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] sm:text-[13px] font-display font-bold leading-tight">
                    Timing &amp; Contact
                  </span>
                  <span className={`text-[11px] hidden sm:inline ${step === 3 ? "text-blue-200" : "text-slate-400"}`}>
                    Delivery &amp; Proposal
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Error Notice */}
          {errorMessage && (
            <div className="p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[14px] flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px] text-red-500 shrink-0">error</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Content */}
          <form onSubmit={step === 3 ? handleSubmit : handleNext}>
            {/* STEP 1: SUBJECT & VERTICAL */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="scope-service-select" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                    Service Vertical Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="scope-service-select"
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2545] font-medium text-[15px] focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/10 outline-none transition-all cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.number ? `${s.number}. ` : ""}{s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="scope-subject-type" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Subject Classification <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="scope-subject-type"
                      value={formData.subjectType}
                      onChange={(e) => setFormData({ ...formData, subjectType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2545] font-medium text-[15px] focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/10 outline-none transition-all cursor-pointer"
                    >
                      <option value="Property / Land Parcel">Property / Land Parcel</option>
                      <option value="Individual / Promoter">Individual / Promoter / Key Person</option>
                      <option value="Corporate Entity / Target Company">Corporate Entity / Target Company</option>
                      <option value="Vendor / Supply Chain Entity">Vendor / Supply Chain Entity</option>
                      <option value="M&A Transaction Scope">M&amp;A Transaction Scope</option>
                      <option value="Asset & Beneficial Holding">Asset &amp; Beneficial Holding</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="scope-identifier" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Target Identifier or Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="scope-identifier"
                      type="text"
                      placeholder="e.g. Survey No. 182, or CIN / Company Name"
                      value={formData.subjectIdentifier}
                      onChange={(e) => setFormData({ ...formData, subjectIdentifier: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2545] font-medium text-[15px] focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="scope-purpose" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                      Transaction Context &amp; Purpose
                    </label>
                    <span className="text-xs text-slate-400 font-medium">Optional context helps tailor risk parameters</span>
                  </div>
                  <textarea
                    id="scope-purpose"
                    rows="3"
                    placeholder="e.g. Preparing for acquisition of commercial parcel; need independent verification of title deed trail, municipal sanctions, and pending partition claims."
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2545] text-[15px] focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/10 outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B2545] text-white font-display font-bold text-[15px] hover:bg-[#134074] transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>Next: Jurisdiction &amp; Scope Modules</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: JURISDICTION & MODULES */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="scope-jurisdiction" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Primary Target Jurisdiction <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="scope-jurisdiction"
                      value={formData.jurisdiction}
                      onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2545] font-medium text-[15px] focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/10 outline-none transition-all cursor-pointer"
                    >
                      {jurisdictionsList.map((j) => (
                        <option key={j} value={j}>{j}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="scope-urgency" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Required Turnaround Cadence
                    </label>
                    <select
                      id="scope-urgency"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2545] font-medium text-[15px] focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/10 outline-none transition-all cursor-pointer"
                    >
                      <option value="Standard (5–7 Business Days)">Standard (5–7 Business Days)</option>
                      <option value="Priority (3–4 Business Days)">Priority (3–4 Business Days)</option>
                      <option value="Expedited Deal Timeline">Expedited / Active Deal Window</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                      Select Research Modules Required <span className="text-red-500">*</span>
                    </label>
                    <span className="text-xs text-blue-600 font-semibold">
                      {formData.researchAreas.length} selected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableResearchAreas.map((area) => {
                      const isSelected = formData.researchAreas.includes(area.label);
                      return (
                        <div
                          key={area.id}
                          onClick={() => handleCheckboxToggle(area.label)}
                          className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex items-start gap-3 ${
                            isSelected
                              ? "bg-blue-50/70 border-[#0B2545] text-[#0B2545] shadow-xs"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded flex items-center justify-center text-xs mt-0.5 shrink-0 transition-colors ${
                              isSelected ? "bg-[#0B2545] text-white" : "border border-slate-300 bg-white"
                            }`}
                          >
                            {isSelected && "✓"}
                          </div>
                          <div>
                            <span className="font-display font-bold text-[14px] block leading-snug">
                              {area.label}
                            </span>
                            <span className="font-body text-[12px] text-slate-500 leading-tight block mt-0.5">
                              {area.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-slate-100 text-slate-700 font-display font-semibold text-[14px] hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B2545] text-white font-display font-bold text-[15px] hover:bg-[#134074] transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>Next: Timing &amp; Contact</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACT & CONFIRMATION */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">Scoped Service</span>
                    <span className="font-display font-bold text-[#0B2545] text-[15px]">
                      {currentServiceObj ? currentServiceObj.title : formData.serviceId}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 underline cursor-pointer"
                  >
                    Change
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="scope-contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="scope-contact-name"
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2545] font-medium text-[15px] focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/10 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="scope-company" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Organization / Law Firm
                    </label>
                    <input
                      id="scope-company"
                      type="text"
                      placeholder="e.g. Apex Capital Partners LLC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2545] font-medium text-[15px] focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/10 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="scope-email" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Corporate / Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="scope-email"
                      type="email"
                      placeholder="e.g. e.vance@apexcapital.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2545] font-medium text-[15px] focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/10 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="scope-phone" className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Phone Number (Direct or Mobile)
                    </label>
                    <input
                      id="scope-phone"
                      type="tel"
                      placeholder="e.g. +1 (415) 800-2490 or +91 98200..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2545] font-medium text-[15px] focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.ndaRequired}
                      onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-[#0B2545] focus:ring-[#0B2545]"
                    />
                    <span className="text-[13px] text-slate-600 leading-snug">
                      We require an executed bilateral Non-Disclosure Agreement (NDA) before disclosing confidential targets or party identities.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-[#0B2545] focus:ring-[#0B2545]"
                    />
                    <span className="text-[13px] text-slate-600 leading-snug">
                      I understand that FACET Verify provides public-record investigative intelligence and research for decision-support, not formal legal opinions or title certifications.
                    </span>
                  </label>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-slate-100 text-slate-700 font-display font-semibold text-[14px] hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B2545] text-white font-display font-bold text-[15px] hover:bg-[#134074] transition-all shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Evaluating Parameters...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Scoped Due Diligence Proposal</span>
                        <span className="material-symbols-outlined text-[18px]">send</span>
                      </>
                    )}
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
