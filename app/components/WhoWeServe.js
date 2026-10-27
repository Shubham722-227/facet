"use client";

import Link from "next/link";

export default function WhoWeServe({ onOpenConsultation }) {
  const sectors = [
    {
      icon: "trending_up",
      title: "Private Equity & Venture Capital",
      desc: "Country-specific M&A target diligence, founder track-record verification, cap table analysis, and undisclosed related-party exposure across US, Europe, and India.",
      useCase: "Investment Committee & M&A Diligence"
    },
    {
      icon: "gavel",
      title: "International Law Firms & Legal Teams",
      desc: "Independent factual verification, multi-jurisdiction litigation research (PACER, High Courts), corporate directorship mapping, and asset tracing for transactional & dispute counsel.",
      useCase: "Transactional & Dispute Advisory"
    },
    {
      icon: "account_balance",
      title: "Institutional Lenders & Debt Funds",
      desc: "Pre-disbursement borrower promoter integrity, collateral title checks, country-specific UCC liens and registered charges, and risk support for institutional credit committees.",
      useCase: "Credit Appraisal & Collateral Scrutiny"
    },
    {
      icon: "storefront",
      title: "Multinational Enterprises & Procurement",
      desc: "FCPA, UK Bribery Act, and global vendor vetting, ultimate beneficial ownership (UBO) reviews, and conflict-of-interest checks across international supply chains.",
      useCase: "Global Compliance & Vendor Onboarding"
    },
    {
      icon: "apartment",
      title: "Real Estate Developers & Funds",
      desc: "High-value land parcel title chain investigations, revenue survey mutation verification, joint-venture partner diligence, and municipal development approvals.",
      useCase: "Pre-Acquisition Land & Asset Scrutiny"
    },
    {
      icon: "home_work",
      title: "Family Offices & Strategic Acquirers",
      desc: "Discreet counterparty vetting, reputational intelligence, and beneficial ownership mapping before committing substantial direct capital to new acquisitions.",
      useCase: "Discreet Counterparty & Wealth Vetting"
    }
  ];

  return (
    <section id="who-we-serve" className="w-full px-4 sm:px-8 lg:px-12 py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-primary font-display font-bold text-[12px] uppercase tracking-wider mb-3">
            Target Client Applications
          </div>
          <h2 className="font-display font-extrabold text-[36px] sm:text-[46px] text-primary tracking-tight leading-tight mb-4">
            Due Diligence Built for Your Decision.
          </h2>
          <p className="font-body text-[18px] sm:text-[19px] text-on-surface-variant leading-relaxed">
            Different transactions and relationships carry different risks. FACET Verify tailors its scope to the decisions facing each client.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[26px]">{sector.icon}</span>
                </div>
                
                <h3 className="font-display font-bold text-[22px] text-primary mb-3 leading-snug group-hover:text-[#134074] transition-colors">
                  {sector.title}
                </h3>
                
                <p className="font-body text-[16px] text-on-surface-variant mb-6 leading-relaxed">
                  {sector.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[13px] font-semibold text-slate-500">
                  {sector.useCase}
                </span>
                <span className="material-symbols-outlined text-primary text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
