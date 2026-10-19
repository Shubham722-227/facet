import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import WhyFacet from "../components/WhyFacet";

export const metadata = {
  title: "About FACET Verify | Due Diligence & Investigative Intelligence",
  description: "Learn about FACET Verify's approach to evidence-led research, investigative analysis and structured risk reporting.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>About Us</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Our Practice & Philosophy
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              Independent Thinking. Evidence-Led Research.
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              FACET Verify was built to provide clarity where public registries, corporate cross-holdings, and transaction counterparties present ambiguity.
            </p>
          </div>
        </section>

        <AboutSection />
        <WhyFacet />
      </main>
      <Footer />
    </>
  );
}
