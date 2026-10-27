import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | FACET Verify",
  description: "Information collection, data security, and confidentiality policies of FACET Verify.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-[#0B2545]" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#FFFFFF" }}>Privacy Policy</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Data Protection
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              Privacy & Confidentiality Policy
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              How we collect, handle, protect, and purge client inquiries and research deliverables.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="card-white" style={{ padding: "2.5rem", lineHeight: "1.8", color: "var(--text-body)" }}>
              <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
                1. Information We Collect
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                We collect personal identifiers (such as name, company affiliation, corporate email, and telephone number) solely when submitted via our Scope Builder or Contact forms. We also receive transaction parameters and subject property identifiers to evaluate engagement scope.
              </p>

              <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
                2. Use of Information & Confidentiality
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                Information submitted is used exclusively to prepare scoped proposals and execute agreed investigative services. We do not sell, rent, or trade client information. In accordance with our Non-Disclosure protocols, client identities are strictly decoupled from inquiries conducted with public registries or field authorities.
              </p>

              <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
                3. Security Standards & Retention
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                All digital records are transmitted via encrypted protocols and stored on access-controlled infrastructure. Data is retained only for the duration stipulated in the client Statement of Work (SOW), following which documentary files are securely purged.
              </p>

              <h2 className="heading-sm" style={{ color: "var(--navy-primary)", marginBottom: "1rem" }}>
                4. Contact & Inquiries
              </h2>
              <p>
                For questions regarding data processing or to request data deletion, contact our Data Protection Officer at privacy@facetverify.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
