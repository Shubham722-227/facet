import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScopeBuilder from "../components/ScopeBuilder";

export const metadata = {
  title: "Get a Quote | FACET Verify",
  description: "Request a scoped due diligence proposal and fee estimate from FACET Verify.",
};

export default function GetAQuotePage() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-[#F7F8FA] min-h-screen">
        {/* Header Hero Banner */}
        <section className="relative bg-[#0B2545] text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-b border-[#133966] overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-80 h-80 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto z-10">
            <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-slate-600">/</span>
              <span className="text-white font-medium">Get a Quote</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-display font-bold text-sky-200 mb-4 border border-white/15">
              CONFIDENTIAL ENGAGEMENT DESK
            </div>

            <h1 className="font-display font-extrabold text-[36px] sm:text-[48px] text-white tracking-tight mb-4 leading-tight">
              Request a Due Diligence Proposal.
            </h1>

            <p className="font-body text-[17px] sm:text-[18px] text-slate-300 max-w-2xl leading-relaxed">
              Tell us what you need to verify, the purpose of the review, and any timing constraints. We will assess the requirement and respond with a proposed scope, deliverables, fee, and estimated timeline.
            </p>

            {/* Credibility highlights */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/10 text-[13px] text-slate-300 font-medium">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400 text-[18px]">lock</span>
                Confidential &amp; NDA Ready
              </span>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sky-300 text-[18px]">schedule</span>
                24-Hour Scope Response
              </span>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-300 text-[18px]">verified</span>
                Transparent Fixed-Fee Schedules
              </span>
            </div>
          </div>
        </section>

        {/* Scope Intake Form Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <ScopeBuilder isModal={false} />
        </section>
      </main>
      <Footer />
    </>
  );
}
