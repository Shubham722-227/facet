"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SERVICES, BRAND } from "../data/content";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    service: "Property & Real Estate Due Diligence",
    brief: "",
    nda: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        <section className="bg-gradient-to-b from-[#0B2545] to-[#133966] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 border-b border-slate-700 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10">
            <div className="max-w-2xl w-full">
              <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2 text-slate-600">/</span>
                <span className="text-white font-medium">Contact</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-display font-bold text-white mb-4 border border-white/15">
                CONFIDENTIAL ENGAGEMENT DESK
              </div>
              <h1 className="font-display font-extrabold text-[38px] sm:text-[52px] text-white tracking-tight mb-4 leading-tight">
                Contact FACET Verify.
              </h1>
              <p className="font-body text-[19px] text-slate-300 leading-relaxed">
                Discuss an upcoming transaction, request a scoped due diligence proposal, or speak with an investigative specialist.
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
              <div className="relative w-80 h-64 sm:w-[440px] sm:h-[330px] lg:w-[520px] lg:h-[380px] xl:w-[580px] xl:h-[420px]">
                <Image
                  src="/images/mascots/contact.png"
                  alt="FACET Contact Mascot"
                  fill
                  className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)] select-none pointer-events-none"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Office & Intake Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-facet-red font-bold block mb-2">
                  Direct Channels
                </span>
                <h2 className="font-display font-bold text-[28px] text-primary mb-4 leading-snug">
                  Confidential Intake Desk
                </h2>
                <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">
                  All preliminary scoping communications are handled under strict commercial confidentiality protocols.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-[15px] text-primary">Corporate Enquiries &amp; Scoping</div>
                    <div className="font-body text-[15px] text-slate-700 font-semibold">{BRAND.email}</div>
                    <div className="text-[12px] text-slate-500 mt-0.5">Formal scope proposals &amp; feasibility assessment within 24 business hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-[15px] text-primary">WhatsApp &amp; Client Liaison Desk</div>
                    <div className="font-body text-[14px] text-slate-700">Available upon bilateral NDA execution</div>
                    <div className="text-[12px] text-slate-500 mt-0.5">Dedicated liaison for active deal windows &amp; urgent mandates</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-[15px] text-primary">Operations &amp; Research Desks</div>
                    <div className="font-body text-[14px] text-slate-700">{BRAND.address}</div>
                    <div className="text-[12px] text-slate-500 mt-0.5">In-person consultations by prior appointment following mutual scoping</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200">
                <div className="font-display font-bold text-[15px] text-primary mb-1">
                  Need an Immediate Scoped Quote?
                </div>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                  Use our structured Scope Builder to specify property location, counterparty details, or transaction parameters.
                </p>
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-facet-red hover:underline"
                >
                  <span>Open Scope Builder</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[32px]">verified</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2">
                    Message Transmitted
                  </h3>
                  <p className="font-body text-base text-slate-600 max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. Our research director will review your enquiry and get back to you with next steps.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-primary text-white font-display font-bold text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-bold text-2xl text-primary mb-1">
                    Send an Enquiry
                  </h3>
                  <p className="font-body text-sm text-slate-500 mb-4">
                    Tell us what you are looking to investigate and your transaction timeline.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-primary focus:border-facet-red outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                        Organization / Firm
                      </label>
                      <input
                        type="text"
                        placeholder="Law firm, Bank or Company"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-primary focus:border-facet-red outline-none"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-primary focus:border-facet-red outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 ..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-primary focus:border-facet-red outline-none"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                      Primary Service Line
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-primary font-medium focus:border-facet-red outline-none"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                      Enquiry / Scope Summary *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Brief description of the property, entity or transaction requiring due diligence..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-primary focus:border-facet-red outline-none"
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    />
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="contact-nda"
                      checked={formData.nda}
                      onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                      className="mt-1 accent-facet-red"
                    />
                    <label htmlFor="contact-nda" className="text-xs text-slate-600 leading-snug cursor-pointer">
                      Please send a standard bilateral Non-Disclosure Agreement (NDA) prior to receiving detailed deal identifiers.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-facet-red text-white font-display font-bold text-sm tracking-wider uppercase hover:bg-facet-red-hover transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{loading ? "Transmitting..." : "Send Confidential Enquiry"}</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
