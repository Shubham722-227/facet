import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhoWeServe from "../components/WhoWeServe";

export const metadata = {
  title: "Who We Serve | Due Diligence for Banks, Law Firms, Corporates & Investors",
  description: "Learn how FACET Verify aligns due diligence research for lending institutions, counsel, property developers, and deal teams.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page">
        <section className="bg-navy" style={{ padding: "4rem 0 4.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container">
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#F8FAFC" }}>Who We Serve</span>
            </nav>
            <div className="eyebrow eyebrow-dark">
              Industry Verticals
            </div>
            <h1 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
              Due Diligence Built Around Your Decision.
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.7" }}>
              Research scope depends on your organizational mandate, fiduciary duties, and transaction risk question. Explore our tailored sector practices.
            </p>
          </div>
        </section>

        <WhoWeServe />
      </main>
      <Footer />
    </>
  );
}
