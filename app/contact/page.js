import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Contact FACET Verify | Due Diligence Inquiries",
  description: "Share a brief outline of the property, person, business or transaction you need to review. We will contact you to discuss scope and next steps.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>Contact</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Direct Practice Desk
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              Tell Us What You Need to Understand.
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              Reach out directly to discuss an engagement, clarify jurisdictional feasibility, or request an initial consultation under Non-Disclosure Agreement.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
