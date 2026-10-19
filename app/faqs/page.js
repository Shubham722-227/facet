import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";

export const metadata = {
  title: "Frequently Asked Questions | FACET Verify",
  description: "Clear answers on due diligence practice, scope definitions, legal advice boundaries, and data confidentiality.",
};

export default function FaqsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>FAQs</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Common Questions
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              Clear Answers on Due Diligence Practice.
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              Transparency regarding our scope, turnaround times, legal opinion boundaries, pricing logic, and data handling standards.
            </p>
          </div>
        </section>

        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
