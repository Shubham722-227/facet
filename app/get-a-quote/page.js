import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScopeBuilder from "../components/ScopeBuilder";

export const metadata = {
  title: "Request a Scoped Due Diligence Proposal | FACET Verify",
  description: "Request a scoped due diligence proposal and fee estimate from FACET Verify.",
};

export default function GetAQuotePage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>Get a Quote</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Confidential Engagement Desk
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              Request a Due Diligence Proposal.
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              Tell us what you need to verify, the purpose of the review and any timing constraints. We will assess the requirement and respond with a proposed scope, deliverables, fee and estimated timeline.
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
