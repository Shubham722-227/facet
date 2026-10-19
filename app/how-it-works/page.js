import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

export const metadata = {
  title: "How It Works | FACET Verify Due Diligence",
  description: "Understand how FACET Verify scopes research, reviews sources, analyses findings and delivers structured due diligence reports.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>How It Works</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Structured Methodology
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              A Transparent Process. A Defined Scope. Clear Findings.
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              Good due diligence begins with a clear question. FACET Verify works with you to define the subject, scope, accessible sources, deliverables and timeline before research begins.
            </p>
          </div>
        </section>

        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
