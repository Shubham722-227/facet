import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InsightsSection from "../components/InsightsSection";

export const metadata = {
  title: "Insights & Guides | FACET Verify Knowledge Centre",
  description: "Practical guides, regulatory overviews, and due diligence checklists prepared by FACET Verify specialists.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>Insights</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Knowledge Centre
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              Practical Guidance for Better Due Diligence.
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              Explore tactical briefings on property title chain research, encumbrance certificate limitations, promoter scrutiny, and Indian judicial dockets.
            </p>
          </div>
        </section>

        <InsightsSection />
      </main>
      <Footer />
    </>
  );
}
