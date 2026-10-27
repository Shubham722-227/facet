"use client";

import Link from "next/link";

export default function WhoWeServe({ onOpenConsultation }) {
  const sectors = [
    {
      icon: "account_balance",
      title: "Banks & Structured Credit",
      desc: "Pre-sanction borrower forensic validation, collateral encumbrance verification, and related-party circular debt auditing.",
      useCase: "Wholesale Credit Appraisal"
    },
    {
      icon: "balance",
      title: "Law Firms & Counsel",
      desc: "Cross-border asset discovery for arbitral enforcement, adverse witness background debriefs, and evidence chain corroboration.",
      useCase: "Section 9 & Asset Tracing Orders"
    },
    {
      icon: "domain",
      title: "Land Funds & REITS",
      desc: "Multi-decade title search, revenue gazette discrepancies, agricultural zoning conversions, and promoter litigation checks.",
      useCase: "Land Acquisition Pre-Closing"
    },
    {
      icon: "trending_up",
      title: "PE & Sovereign Funds",
      desc: "Management team forensic track records, customer concentration verification, and off-the-books vendor liabilities.",
      useCase: "Growth & Buyout Diligence"
    },
    {
      icon: "local_shipping",
      title: "Global Procurement",
      desc: "Tier-1 to Tier-3 supplier integrity, factory ownership legitimacy, export control list clearances, and anti-bribery vetting.",
      useCase: "Supply Chain Security"
    },
    {
      icon: "shield_person",
      title: "Family Offices",
      desc: "Co-investor character assessment, foundation asset integrity, fiduciary vetting, and philanthropic compliance.",
      useCase: "Co-Investment Risk Vetting"
    }
  ];

  return (
    <section id="industries" className="w-full px-4 sm:px-8 lg:px-12 py-24 bg-surface-container-low/40">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-left mb-16">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
            Institutional Application
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-primary tracking-tight">
            Built for Specialized Risk Environments.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border border-border-subtle/80"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[22px]">{sector.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  {sector.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                  {sector.desc}
                </p>
              </div>
              <div className="pt-4 font-mono text-[11px] text-secondary font-semibold border-t border-border-subtle/50 flex items-center justify-between">
                <span>UseCase: {sector.useCase}</span>
                <span className="material-symbols-outlined text-[16px] text-slate-400">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
