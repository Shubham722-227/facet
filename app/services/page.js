import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import WhyFacet from "../components/WhyFacet";

export const metadata = {
  title: "Due Diligence & Investigative Intelligence Services | FACET Verify",
  description: "Explore FACET Verify services covering property, counterparties, litigation, third parties, investigations, transactions and asset ownership research.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page" style={{ minHeight: "80vh" }}>
        {/* Header */}
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>Services</span>
            </nav>

            <div className="eyebrow eyebrow-dark">
              Our Capabilities
            </div>

            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              One Partner for Critical Due Diligence Questions.
            </h1>

            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              FACET Verify supports property, corporate and transaction decisions through scoped research, source review and investigative analysis. Choose a defined vertical or combine workstreams.
            </p>
          </div>
        </section>

        <ServicesSection />
        <WhyFacet />
      </main>
      <Footer />
    </>
  );
}
