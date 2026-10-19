import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScopeBuilder from "../components/ScopeBuilder";

export const metadata = {
  title: "Request a Due Diligence Quote | FACET Verify",
  description: "Tell FACET Verify about your subject, transaction and research needs to receive a scoped due diligence proposal.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>Pricing & Scope</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Transparent Proposal Model
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              Build the Right Scope for Your Requirement.
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              Due diligence requirements vary by jurisdiction, deed volume count, and depth of tribunal searches. We review your parameters and respond with a transparent proposal and fixed fee.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <ScopeBuilder isModal={false} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
