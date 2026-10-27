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
      <main className="w-full pt-20 bg-surface-canvas min-h-screen">
        <section className="bg-gradient-to-b from-[#0B2545] to-[#133966] text-white py-20 px-4 sm:px-8 lg:px-12 border-b border-slate-700">
          <div className="max-w-[1440px] mx-auto">
            <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-slate-600">/</span>
              <span className="text-white font-medium">FAQs</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-display font-bold text-white mb-4 border border-white/15">
              COMMON QUESTIONS
            </div>
            <h1 className="font-display font-extrabold text-[36px] sm:text-[48px] text-white tracking-tight mb-4 leading-tight">
              Clear Answers on Due Diligence Practice.
            </h1>
            <p className="font-body text-[18px] text-slate-300 max-w-2xl leading-relaxed">
              Transparency regarding our scope, turnaround times, legal opinion boundaries, pricing logic, and data handling standards.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <FaqSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
