"use client";

import Link from "next/link";

export default function ClientSectors() {
  const sectors = [
    { title: "Private Equity & Venture Capital", icon: "trending_up", desc: "Country-specific M&A target diligence, founder background checks, and cap table vetting across US, Europe, and India." },
    { title: "International Law Firms", icon: "gavel", desc: "Multi-jurisdiction litigation dockets, enforcement research, and asset tracing to support dispute strategy." },
    { title: "Institutional Lenders & Debt Funds", icon: "account_balance", desc: "Pre-disbursement collateral scrutiny, country-specific UCC/Charge filings, and promoter solvency verification." },
    { title: "Multinational Enterprises", icon: "storefront", desc: "FCPA, UK Bribery Act, and global vendor vetting to prevent regulatory sanctions and supply chain disruption." },
    { title: "Real Estate Developers & Funds", icon: "apartment", desc: "Land revenue surveys, municipal conversions, and developmental zoning compliance across growth corridors." },
    { title: "Family Offices & Strategic Acquirers", icon: "home_work", desc: "Discreet counterparty vetting, beneficial ownership mapping, and reputation checks before capital commitments." }
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-20 bg-[#F7F8FA] border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0B2545] font-display font-bold text-[12px] uppercase tracking-wider mb-3">
              Global Client Sectors
            </div>
            <h2 className="font-display font-extrabold text-[34px] sm:text-[42px] text-[#0B2545] tracking-tight leading-tight">
              Intelligence Built for Country-Specific Capital Decisions.
            </h2>
            <p className="font-body text-[17px] text-[#4B5563] mt-2">
              Tailored research scopes addressing specific risk parameters across US, European, and Indian statutory frameworks.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-display font-bold text-[15px] text-[#0B2545] hover:text-[#134074] transition-colors shrink-0 group"
          >
            <span>Explore All Industry Applications</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* 6 Compact Sector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((sec) => (
            <Link
              key={sec.title}
              href="/industries"
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#0B2545]/30 transition-all flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0B2545]/5 border border-[#0B2545]/10 flex items-center justify-center text-[#0B2545] shrink-0 group-hover:bg-[#0B2545] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[22px]">{sec.icon}</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-[17px] text-[#0B2545] group-hover:text-[#134074] transition-colors leading-snug mb-1">
                  {sec.title}
                </h3>
                <p className="font-body text-[14px] text-slate-500 leading-normal">
                  {sec.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
