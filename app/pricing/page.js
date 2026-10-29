import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScopeBuilder from "../components/ScopeBuilder";
import { PRICING_MODEL } from "../data/content";

export const metadata = {
  title: "Pricing & Scope Model | FACET",
  description: "Fixed-price Core Due Diligence Reports, separately priced research add-on modules, and defined turnaround commitments under bilateral NDA.",
};

export default function PricingPage() {
  const { coreReport, optionalModules, turnaroundOptions, confidentialityProtocol } = PRICING_MODEL;

  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-[#F7F8FA] min-h-screen">
        
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#0B2545] to-[#133966] text-white py-20 px-4 sm:px-8 lg:px-12 border-b border-slate-700">
          <div className="max-w-[1440px] mx-auto">
            <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-slate-600">/</span>
              <span className="text-white font-medium">Pricing &amp; Scope</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-display font-bold text-sky-200 mb-4 border border-white/15">
              TRANSPARENT ENGAGEMENT MODEL
            </div>
            <h1 className="font-display font-extrabold text-[36px] sm:text-[50px] text-white tracking-tight mb-4 leading-tight max-w-3xl">
              Transparent Pricing. Defined Scope.
            </h1>
            <p className="font-body text-[18px] sm:text-[19px] text-slate-300 max-w-2xl leading-relaxed">
              Every mandate is structured with a fixed-price Core Due Diligence Report, optional research add-ons, and realistic delivery commitments under bilateral confidentiality.
            </p>
          </div>
        </section>

        {/* 1. Core Report vs Add-On Architecture Overview */}
        <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Core Due Diligence Report Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B2545] to-[#133966] text-white rounded-3xl p-8 sm:p-10 border border-[#1E4D82] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-display font-bold uppercase tracking-wider border border-white/15 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Baseline Anchor
                  </div>
                  <h2 className="font-display font-extrabold text-[28px] text-white leading-tight">
                    {coreReport.title}
                  </h2>
                  <p className="font-body text-slate-200 text-[15px] mt-2 leading-relaxed">
                    {coreReport.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300 mb-3">
                    Standard Baseline Inclusions:
                  </div>
                  <ul className="space-y-2.5 text-[14px] text-slate-200">
                    {coreReport.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-emerald-400 text-[18px] shrink-0 mt-0.5">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block font-display mb-0.5">Fixed-Price Proposal:</strong>
                  We review your target survey numbers or corporate identifiers and quote a fixed fee prior to mandate kickoff.
                </div>
              </div>
            </div>

            {/* Right: Optional Research Modules */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold block mb-1">
                  Modular Expansion
                </span>
                <h3 className="font-display font-extrabold text-[26px] text-[#0B2545] leading-tight">
                  Optional Research Modules
                </h3>
                <p className="font-body text-[15px] text-slate-600 mt-1 leading-relaxed">
                  Select only the specific modules your transaction requires to keep research efficient, targeted, and cost-effective.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {optionalModules.map((mod) => (
                  <div
                    key={mod.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0B2545]/30 hover:shadow-md transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B2545] bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {mod.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">Optional Add-On</span>
                    </div>
                    <h4 className="font-display font-bold text-[16px] text-[#0B2545] leading-snug">
                      {mod.name}
                    </h4>
                    <p className="font-body text-[13px] text-slate-500 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 2. Realistic Turnaround Cadence & Fee Commitments */}
        <section className="py-16 px-4 sm:px-8 lg:px-12 bg-white border-y border-slate-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0B2545] font-bold block mb-1">
                Realistic Delivery Windows
              </span>
              <h2 className="font-display font-extrabold text-[30px] sm:text-[36px] text-[#0B2545] tracking-tight">
                Turnaround Options &amp; Delivery Commitments.
              </h2>
              <p className="font-body text-[15px] sm:text-[16px] text-slate-600 mt-2">
                Public search fees and on-the-ground archival inspection schedules dictate realistic timelines. We define firm delivery dates before kickoff.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {turnaroundOptions.map((opt, i) => (
                <div
                  key={opt.cadence}
                  className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200 flex flex-col justify-between hover:border-[#0B2545]/30 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="space-y-3">
                    <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white font-mono font-bold text-xs flex items-center justify-center">
                      0{i + 1}
                    </span>
                    <h3 className="font-display font-bold text-[18px] text-[#0B2545] leading-tight">
                      {opt.cadence}
                    </h3>
                    <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-[#0B2545] font-display font-bold text-[14px]">
                      {opt.timeline}
                    </div>
                    <p className="font-body text-[13px] text-slate-600 leading-relaxed">
                      {opt.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-200 text-xs font-mono font-semibold text-slate-500">
                    {opt.feeStructure}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Bilateral NDA Engagement Protocol */}
        <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                <span className="material-symbols-outlined text-[18px] text-emerald-600">lock</span>
                Confidentiality Standard
              </div>
              <h3 className="font-display font-extrabold text-[24px] sm:text-[28px] text-[#0B2545]">
                {confidentialityProtocol.title}
              </h3>
              <p className="font-body text-[15px] text-slate-600 leading-relaxed">
                {confidentialityProtocol.description}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/get-a-quote"
                className="px-7 py-3.5 rounded-xl bg-[#0B2545] text-white font-display font-bold text-[14px] hover:bg-[#134074] transition-all shadow-md"
              >
                Initiate Scoped Intake
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-white text-[#0B2545] font-display font-bold text-[14px] border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Request Bilateral NDA
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Intake Form Anchor */}
        <section id="intake-builder" className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <ScopeBuilder isModal={false} />
        </section>

      </main>
      <Footer />
    </>
  );
}

