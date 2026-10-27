import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "../../data/content";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MandateCTA from "../../components/MandateCTA";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = SERVICES.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};

  return {
    title: `${service.title} | FACET Verify`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = SERVICES.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        {/* Detail Hero */}
        <section className="bg-gradient-to-b from-[#0B2545] to-[#133966] text-white py-24 px-4 sm:px-8 lg:px-12 border-b border-slate-700">
          <div className="max-w-[1440px] mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-slate-600">/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2 text-slate-600">/</span>
              <span className="text-white font-medium">{service.title}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-display font-bold text-white mb-4 border border-white/15">
              SERVICE LINE {service.number} // FACET VERIFY
            </div>

            <h1 className="font-display font-extrabold text-[36px] sm:text-[50px] text-white tracking-tight mb-5 leading-tight max-w-4xl">
              {service.title}
            </h1>

            <p className="font-body text-[19px] text-slate-300 max-w-3xl leading-relaxed">
              {service.intro}
            </p>
          </div>
        </section>

        {/* Content Breakdown */}
        <section className="py-20 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 8 Cols: Detailed Protocol */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Potential Scope Areas */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-facet-red text-[26px]">manage_search</span>
                  <h2 className="font-display font-bold text-2xl text-primary">
                    Scope of Investigation
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.scopeAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-sm text-slate-800 leading-snug"
                    >
                      <span className="material-symbols-outlined text-facet-red text-[18px] shrink-0 mt-0.5">
                        check
                      </span>
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Client Deliverables */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-[26px]">assignment_turned_in</span>
                  <h2 className="font-display font-bold text-2xl text-primary">
                    Documented Deliverables
                  </h2>
                </div>
                <ul className="space-y-3.5">
                  {service.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-slate-700">
                      <span className="material-symbols-outlined text-emerald-600 text-[20px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="leading-relaxed">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workflow Phases */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-facet-red text-[26px]">timeline</span>
                  <h2 className="font-display font-bold text-2xl text-primary">
                    Verification Methodology
                  </h2>
                </div>
                <ol className="space-y-4">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-xl bg-slate-100 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0 border border-slate-200">
                        0{idx + 1}
                      </span>
                      <p className="text-[15px] text-slate-700 leading-relaxed pt-1">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Scope Boundary Notice */}
              <div className="p-6 rounded-2xl bg-slate-100 border border-slate-300 text-slate-800 flex items-start gap-4">
                <span className="material-symbols-outlined text-facet-red text-[24px] shrink-0 mt-0.5">
                  info
                </span>
                <div>
                  <div className="font-display font-bold text-[15px] text-primary mb-1">
                    Evidentiary Scope &amp; Legal Boundaries
                  </div>
                  <p className="font-body text-[14px] text-slate-600 leading-relaxed">
                    {service.limitations}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Mandate Action Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-xl border border-slate-200 space-y-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-facet-red font-bold block mb-1">
                    Scoped Proposal
                  </span>
                  <h3 className="font-display font-bold text-2xl text-primary">
                    Commission This Service
                  </h3>
                  <p className="font-body text-sm text-slate-600 mt-2 leading-relaxed">
                    Submit your target parcel identifiers or counterparty parameters for an agreed scope of work and fee estimate.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-xs font-mono text-slate-600 border border-slate-200">
                  <div className="flex justify-between">
                    <span>Standard:</span>
                    <span className="font-bold text-primary">Lawful Public Records</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sourcing:</span>
                    <span className="text-emerald-700 font-bold">Documented Exhibits</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deliverable:</span>
                    <span className="text-primary font-bold">Source-Cited PDF Report</span>
                  </div>
                </div>

                <Link
                  href="/get-a-quote"
                  className="w-full py-4 rounded-xl bg-facet-red text-white font-display font-bold text-sm tracking-wider uppercase hover:bg-facet-red-hover transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Request Scoped Proposal</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>

                <div className="text-center pt-2">
                  <Link href="/services" className="text-sm font-semibold text-slate-500 hover:text-primary hover:underline">
                    ← Return to All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Mandate CTA */}
        <MandateCTA />
      </main>

      <Footer />
    </>
  );
}
