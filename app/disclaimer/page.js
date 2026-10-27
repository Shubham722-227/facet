import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Due Diligence Disclaimer | FACET Verify",
  description: "Statutory limitations, source scope, and professional boundaries of FACET Verify due diligence reports.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        <section className="bg-gradient-to-b from-[#0B2545] to-[#133966] text-white py-20 px-4 sm:px-8 lg:px-12 border-b border-slate-700">
          <div className="max-w-[1440px] mx-auto">
            <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-slate-600">/</span>
              <span className="text-white font-medium">Disclaimer</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-display font-bold text-white mb-4 border border-white/15">
              LEGAL NOTICE & STATUTORY BOUNDARIES
            </div>
            <h1 className="font-display font-extrabold text-[36px] sm:text-[48px] text-white tracking-tight mb-4 leading-tight">
              Due Diligence Disclaimer
            </h1>
            <p className="font-body text-[18px] text-slate-300 max-w-2xl leading-relaxed">
              Important information regarding report scope, source completeness, and professional legal boundaries.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm leading-relaxed text-slate-700 space-y-6">
            <h2 className="font-display font-bold text-2xl text-primary mb-4">
              Statement of Scope and Professional Limitations
            </h2>
            <p>
              FACET Verify reports are prepared for the agreed scope and are based on records and information accessible through the sources used for the engagement, together with any other material specifically agreed with the client. Sources may be incomplete, delayed, inaccurate or unavailable. Findings reflect the information identified during the stated research period and should be read with the scope, methodology and limitations described in the report.
            </p>
            <p>
              Unless expressly agreed and legally authorised, a report is not a legal opinion, certified title opinion, valuation, audit, guarantee of title, guarantee against fraud or substitute for advice from an appropriately qualified professional. Clients should obtain independent legal, financial, tax, valuation or technical advice where appropriate.
            </p>
            <h3 className="font-display font-bold text-xl text-primary pt-4">
              Public Record Reliability &amp; Regional Nuances
            </h3>
            <p>
              Indian land registries, municipal development authorities, and judicial cause lists vary significantly in terms of digitization, indexing standards, and update frequencies across states and districts. A search indicating no active litigation or encumbrance at the time of query reflects only records accessible on that date.
            </p>
            <p className="pt-2 text-sm text-slate-500">
              For further clarification or to request a customized Scope of Work, please contact our engagement team at <span className="font-semibold text-primary">enquiries@facetverify.com</span>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
