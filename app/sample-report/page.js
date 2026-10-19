import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SampleReportPreview from "../components/SampleReportPreview";

export const metadata = {
  title: "Sample Due Diligence Report | FACET Verify",
  description: "Review an illustrative sample report demonstrating source citations, risk matrices, deed registries and litigation findings.",
};

export default function SampleReportPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>Sample Report</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Deliverable Inspection
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              Illustrative Due Diligence Deliverable.
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              Inspect our reporting format, primary source audit trails, and risk categorization framework on an anonymized real estate and counterparty matter.
            </p>
          </div>
        </section>

        <SampleReportPreview />
      </main>
      <Footer />
    </>
  );
}
