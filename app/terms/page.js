import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms of Use | FACET Verify",
  description: "Terms and conditions governing the access and use of the FACET Verify website and advisory materials.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>Terms of Use</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Legal Agreement
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              Terms of Use
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              Standard terms governing website access, sample report reviews, and formal due diligence engagements.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="card-white" style={{ padding: "2.5rem", lineHeight: "1.8", color: "var(--text-body)" }}>
              <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
                1. Acceptance of Terms
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                By accessing or browsing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations of India. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
                2. Intellectual Property Rights
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                All text, graphics, trademarks, logos, structure blueprints, and sample report previews displayed on this site are the exclusive property of FACET Verify. No material may be reproduced, copied, or redistributed for commercial gain without express prior written consent.
              </p>

              <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
                3. Engagement & Proposal Terms
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                Informational submissions through our Scope Builder or Contact forms do not constitute a formal contract or create a client relationship until an explicit Engagement Letter and Statement of Work have been counter-signed.
              </p>

              <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
                4. Governing Law & Dispute Resolution
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
