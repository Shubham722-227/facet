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
    jurisdiction: "India - Pan-India / Multi-State Scope",
    urgency: "Standard Delivery (7–10 Business Days)",
    transactionValue: "",
    includeCoreReport: true,
    researchAreas: [
      "30-Year Title & Conveyance Chain",
      "Encumbrance & Lien Verification (SRO/CERSAI)",
      "Seller, Promoter & Landowner Deep-Dive",
      "Primary Litigation & Dispute Screening",
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
    "India - Pan-India / Multi-State Scope",
    "India - Maharashtra (Mumbai / Pune)",
    "India - Karnataka (Bengaluru)",
    "India - Delhi NCR (Delhi / Gurugram / Noida)",
    "India - Tamil Nadu (Chennai)",
    "India - Telangana (Hyderabad)",
    "India - Gujarat (Ahmedabad / GIFT City)",
    "United States (Federal SEC & All 50 States)",
    "United Kingdom (Companies House, Land Registry & High Court)",
    "European Union (Civil Law Corporate Registers & EBR)",
    "Cross-Border Corridors (US / UK / EU / India)",
  ];

  const corePillars = [
    { label: "30-Year Title & Conveyance Chain", desc: "Continuous deed transfers, prior conveyances & registration rolls" },
    { label: "Encumbrance & Lien Verification (SRO/CERSAI)", desc: "Form 15/16 certificates, registered charges & bank mortgages" },
    { label: "Primary Litigation & Dispute Screening", desc: "District court, High Court, and judicial forum registry check" },
  ];

  const optionalAddOnModules = [
    { id: "promoter", label: "Seller, Promoter & Landowner Deep-Dive", desc: "Identity disambiguation, DIN directorships, cross-entity defaults & POA history", category: "Counterparty" },
    { id: "tribunals", label: "Specialized Tribunal Scan (NCLT, DRT, RERA)", desc: "Corporate insolvency (IBC), debt recovery, and real estate authority complaints", category: "Tribunals" },
    { id: "physical-archive", label: "On-the-Ground Sub-Registrar Archive Inspection", desc: "Physical inspection of manual deed index volumes and Tehsil mutation rolls", category: "Field Research" },
    { id: "zoning", label: "Zoning, Master Plan & Municipal Sanction Verification", desc: "Development masterplan buffer zones, NA conversion orders & building plan sanctions", category: "Land Use" },
    { id: "osint", label: "Adverse Media & OSINT Reputational Intelligence", desc: "Open-source investigation, grey-market claims, and regulatory sanctions", category: "Intelligence" },
    { id: "assets", label: "Asset, Ownership & Secured Debt Mapping", desc: "CERSAI registration checks, MCA Index of Charges & unencumbered asset identification", category: "Asset Trace" },
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

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-left text-[14px] text-slate-700 space-y-2 mb-6">
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
              <span className="font-semibold text-slate-500">Turnaround Window:</span>{" "}
              <span className="font-medium text-[#0B2545]">{formData.urgency}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Contact Email:</span>{" "}
              <span className="font-medium text-[#0B2545]">{formData.email}</span>
            </div>
          </div>

          {/* Next Steps Road Map */}
          <div className="p-5 bg-blue-50/60 rounded-xl border border-blue-200/80 text-left mb-8">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-[#0B2545] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-blue-600">route</span>
              Next Steps &amp; Engagement Cadence
            </div>
            <ol className="space-y-2 text-[13px] text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span><strong className="text-[#0B2545]">Intake Feasibility:</strong> Preliminary verification of accessible statutory repositories and record digitisation across the target jurisdiction.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span><strong className="text-[#0B2545]">Bilateral NDA:</strong> Mutual non-disclosure agreement issued for signature before receiving confidential identifier documents.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span><strong className="text-[#0B2545]">Scope &amp; Fixed-Fee Quote:</strong> Itemized scope schedule, exclusions, and transparent fee schedule returned within 24 business hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span><strong className="text-[#0B2545]">Delivery &amp; Debrief:</strong> Encrypted PDF report delivered with primary source exhibits and dedicated analyst briefing.</span>
              </li>
            </ol>
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
                      Required Turnaround Cadence <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="scope-urgency"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2545] font-medium text-[15px] focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/10 outline-none transition-all cursor-pointer"
                    >
                      <option value="Standard Delivery (7–10 Business Days)">Standard Delivery (7–10 Business Days) · Standard Fee</option>
                      <option value="Priority Delivery (4–6 Business Days)">Priority Delivery (4–6 Business Days) · +25% Surcharge</option>
                      <option value="Expedited Delivery (2–3 Business Days)">Expedited Delivery (2–3 Business Days) · +50% Surcharge</option>
                      <option value="Active Deal Window (Milestone Cadence)">Active Deal Window · Custom Milestone Schedule</option>
                    </select>
                  </div>
                </div>

                {/* Core Report Inclusions Banner */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-[#0B2545] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-emerald-600">verified</span>
                      Baseline Fixed-Price Core Deliverable
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                      Standard Inclusions
                    </span>
                  </div>
                  <p className="text-[13px] text-slate-600 leading-relaxed mb-3">
                    Every baseline mandate includes comprehensive 30-year deed continuity, Sub-Registrar / CERSAI encumbrance verification, and primary civil court dispute screening.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                    {corePillars.map((cp) => (
                      <div key={cp.label} className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span className="font-medium leading-tight">{cp.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Separately-Priced Add-On Research Modules */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                        Optional Research Add-On Modules
                      </label>
                      <span className="text-xs text-slate-500">
                        Separately priced modules to expand depth according to your deal risk profile
                      </span>
                    </div>
                    <span className="text-xs text-blue-600 font-semibold shrink-0">
                      {formData.researchAreas.length} selected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {optionalAddOnModules.map((area) => {
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
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-display font-bold text-[14px] block leading-snug">
                                {area.label}
                              </span>
                            </div>
                            <span className="font-body text-[12px] text-slate-500 leading-tight block mt-1">
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
