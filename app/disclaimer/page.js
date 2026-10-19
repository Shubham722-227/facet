import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Due Diligence Disclaimer | FACET Verify",
  description: "Statutory limitations, source scope, and professional boundaries of FACET Verify due diligence reports.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>Disclaimer</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Legal Notice
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              Due Diligence Disclaimer
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              Important information regarding report scope, source completeness, and professional legal boundaries.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="card-white" style={{ padding: "2.5rem", lineHeight: "1.8", color: "var(--text-body)" }}>
              <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
                Statement of Scope and Professional Limitations
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                FACET Verify reports are prepared for the agreed scope and are based on records and information accessible through the sources used for the engagement, together with any other material specifically agreed with the client. Sources may be incomplete, delayed, inaccurate or unavailable. Findings reflect the information identified during the stated research period and should be read with the scope, methodology and limitations described in the report.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Unless expressly agreed and legally authorised, a report is not a legal opinion, certified title opinion, valuation, audit, guarantee of title, guarantee against fraud or substitute for advice from an appropriately qualified professional. Clients should obtain independent legal, financial, tax, valuation or technical advice where appropriate.
              </p>
              <h3 className="heading-sm" style={{ color: "var(--navy-primary)", marginTop: "2rem", marginBottom: "0.75rem" }}>
                Public Record Reliability & Regional Nuances
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Indian land registries, municipal development authorities, and judicial cause lists vary significantly in terms of digitization, indexing standards, and update frequencies across states and districts. A search indicating no active litigation or encumbrance at the time of query reflects only records accessible on that date.
              </p>
              <p>
                For further clarification or to request a customized Scope of Work, please contact our engagement team at enquiries@facetverify.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
