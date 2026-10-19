import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "../../data/content";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScopeBuilder from "../../components/ScopeBuilder";

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
      <main className="bg-page" style={{ minHeight: "80vh" }}>
        {/* Breadcrumb Header */}
        <section className="bg-navy" style={{ padding: "3rem 0 3.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <Link href="/services" style={{ color: "#94A3B8", textDecoration: "none" }}>Services</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>{service.title}</span>
            </nav>

            <div className="eyebrow eyebrow-dark">
              Service Vertical {service.number}
            </div>

            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              {service.heroHeadline}
            </h1>

            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "760px", lineHeight: "1.7" }}>
              {service.intro}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "3rem" }}>
              {/* Left Column: Scope Details */}
              <div>
                {/* Scope Areas */}
                <div className="card-white" style={{ marginBottom: "2rem" }}>
                  <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1.25rem" }}>
                    Potential Scope Areas & Investigations
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {service.scopeAreas.map((area, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.9375rem" }}>
                        <span style={{ color: "var(--facet-red)", fontWeight: "bold", marginTop: "2px" }}>›</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="card-white" style={{ marginBottom: "2rem" }}>
                  <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1.25rem" }}>
                    Typical Client Deliverables
                  </h2>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {service.deliverables.map((del, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.9375rem" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--navy-primary)", marginTop: "8px" }}></span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="card-white" style={{ marginBottom: "2rem" }}>
                  <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1.25rem" }}>
                    Methodology & Workflow
                  </h2>
                  <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9375rem" }}>
                    {service.process.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ol>
                </div>

                {/* Limitations */}
                <div style={{
                  padding: "1.25rem 1.5rem",
                  background: "rgba(201, 131, 22, 0.08)",
                  border: "1px solid rgba(201, 131, 22, 0.25)",
                  borderRadius: "6px"
                }}>
                  <strong style={{ color: "var(--warning-amber)", display: "block", marginBottom: "0.35rem" }}>
                    Scope Limitations & Boundaries
                  </strong>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: "1.6" }}>
                    {service.limitations}
                  </p>
                </div>
              </div>

              {/* Right Column: Pre-filled Scope Builder */}
              <div>
                <div style={{ position: "sticky", top: "5.5rem" }}>
                  <ScopeBuilder initialServiceId={service.id} isModal={false} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
