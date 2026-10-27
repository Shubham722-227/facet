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
    title: `${service.title} | FACET Intelligence`,
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
        <section className="bg-primary text-on-primary py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-electric/15 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">CAPABILITIES</Link>
              <span>/</span>
              <span className="text-accent-electric">{service.number}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-accent-electric mb-4">
              <span>MANDATE VERTICAL {service.number}</span>
            </div>

            <h1 className="font-display-xl text-3xl sm:text-5xl text-white tracking-tight mb-4 max-w-3xl">
              {service.title}
            </h1>

            <p className="font-body-lg text-slate-300 max-w-2xl leading-relaxed text-base sm:text-lg">
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
              <div className="bg-white/85 backdrop-blur-xl p-8 rounded-2xl shadow-sm border border-border-subtle">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
                  <h2 className="font-headline-sm text-2xl text-primary font-bold">
                    Forensic Scope Parameters
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.scopeAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-surface-canvas border border-border-subtle/80 flex items-start gap-2.5 text-sm text-on-surface leading-snug"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-electric mt-1.5 shrink-0"></span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Client Deliverables */}
              <div className="bg-white/85 backdrop-blur-xl p-8 rounded-2xl shadow-sm border border-border-subtle">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-[24px]">fact_check</span>
                  <h2 className="font-headline-sm text-2xl text-primary font-bold">
                    Verified Deliverables
                  </h2>
                </div>
                <ul className="space-y-3 pt-2">
                  {service.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-verification-green text-[20px] shrink-0 mt-0.5">check_circle</span>
                      <span className="leading-relaxed">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workflow Phases */}
              <div className="bg-white/85 backdrop-blur-xl p-8 rounded-2xl shadow-sm border border-border-subtle">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-accent-electric text-[24px]">timeline</span>
                  <h2 className="font-headline-sm text-2xl text-primary font-bold">
                    Evidentiary Methodology &amp; Workflow
                  </h2>
                </div>
                <ol className="space-y-4 pt-2">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-on-surface-variant leading-relaxed pt-1">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Scope Boundary Notice */}
              <div className="p-6 rounded-xl bg-error-container/40 border border-evidence-flag/20 text-on-surface flex items-start gap-4">
                <span className="material-symbols-outlined text-evidence-flag text-[24px] shrink-0 mt-0.5">shield</span>
                <div>
                  <div className="font-bold text-sm text-primary mb-1">
                    Defensible Scope Boundary &amp; Evidentiary Safe Harbors
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {service.limitations}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Mandate Action Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white/95 backdrop-blur-xl p-7 rounded-2xl shadow-lg border border-border-subtle space-y-6">
                <div>
                  <span className="font-label-sm text-[11px] font-mono uppercase tracking-widest text-secondary block mb-1">
                    Bespoke Scoping
                  </span>
                  <h3 className="font-headline-sm text-xl text-primary font-bold">
                    Commission This Intelligence Mandate
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    Custom scope formulation based on target entity jurisdictions, timeline horizons, and litigation sensitivities.
                  </p>
                </div>

                <div className="p-4 bg-surface-canvas rounded-xl space-y-2 text-xs font-mono text-slate-600">
                  <div className="flex justify-between">
                    <span>Protocol:</span>
                    <span className="font-bold text-primary">ISO-27001</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Admissibility:</span>
                    <span className="text-verification-green font-bold">Court-Tested</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery:</span>
                    <span className="text-secondary font-bold">Encrypted PDF Dossier</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-xs uppercase tracking-wider font-bold hover:bg-secondary transition-all flex items-center justify-center gap-2"
                >
                  <span>Initiate Intake Consultation</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>

                <div className="text-center">
                  <Link href="/services" className="text-xs text-secondary hover:underline font-mono">
                    ← Return to Capabilities Matrix
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
