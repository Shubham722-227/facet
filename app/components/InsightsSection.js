"use client";

import { useState } from "react";
import Link from "next/link";

export default function InsightsSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  const featuredArticle = {
    category: "Cross-Border M&A",
    readTime: "8 Min Read // March 2025",
    title: "Unmasking Layered SPVs in Cross-Border Infrastructure Acquisitions.",
    summary: "How private equity sponsors are leveraging multi-jurisdictional register triangulation to uncover hidden beneficial owners and sanction contamination in offshore special purpose holding structures.",
    author: "M. V. ALDRICH, SENIOR INVESTIGATIVE COUNSEL",
    fullContent: [
      "In modern cross-border infrastructure and commercial acquisitions, beneficial ownership is frequently obscured across multiple intermediary holding tiers spanning Cyprus, Delaware, the Cayman Islands, and local operating SPVs.",
      "Standard database screening algorithms frequently flag false positives while completely missing complex circular nominee trusts. Deterministic attribution requires forensic analysis of statutory director voting declarations, registered share pledges, and historical debt service agreements.",
      "FACET's cross-border methodology triangulates public registry disclosures, gazette notifications, and judicial dispute filings to reconstruct the true economic hierarchy behind target entities."
    ]
  };

  const supportingArticles = [
    {
      category: "Asset Tracing",
      readTime: "5 Min Read",
      reportNo: "REPORT NO. 44-B",
      tagColor: "text-secondary",
      title: "Pre-Insolvency Asset Alienation: Evidentiary Safe Harbors",
      summary: "Techniques for establishing the chronological timeline of illicit property transfers before corporate rescue petitions.",
      fullContent: [
        "Creditors facing non-performing assets often discover that prime real estate or corporate shareholdings were alienated in the shadow of insolvency.",
        "Establishing an avoidance action under bankruptcy regimes (such as Section 43/66 of the IBC or Chapter 11 fraudulent conveyances) hinges upon proving transaction timing, artificial undervaluation, and shared beneficial control between transferor and transferee.",
        "Our evidentiary audits trace revenue mutation registers and registered consideration escrows to produce defensible affidavits for commercial courts."
      ]
    },
    {
      category: "Sanctions Risk",
      readTime: "6 Min Read",
      reportNo: "REPORT NO. 44-C",
      tagColor: "text-evidence-flag",
      title: "The New Vector: Sanction Evasion via Maritime Shell Flags",
      summary: "Detecting automatic identification system (AIS) dark-voyages and flag-of-convenience transfers in high-seas commodity trades.",
      fullContent: [
        "Secondary sanctions enforcement has heightened scrutiny on commodity financiers, maritime underwriters, and charterers.",
        "Illicit cargo transfers rely increasingly on AIS manipulation, sudden flag-state transfers, and layered offshore ownership entities registered in jurisdictions with minimal regulatory disclosure.",
        "FACET integrates satellite telemetry data with corporate shareholding databases to map vessel ownership back to sanctioned state entities."
      ]
    }
  ];

  return (
    <section id="insights" className="w-full px-4 sm:px-8 lg:px-12 py-24 bg-surface-canvas relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
              Intelligence Briefings
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-primary tracking-tight">
              Perspectives on Risk &amp; Due Diligence.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors font-bold mt-4 md:mt-0"
          >
            <span>View All Insights</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Insight Card */}
          <div
            onClick={() => setActiveArticle(featuredArticle)}
            className="lg:col-span-7 bg-white/85 backdrop-blur-xl rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between cursor-pointer border border-border-subtle"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  {featuredArticle.category}
                </span>
                <span className="font-body-sm text-xs text-on-surface-variant">
                  {featuredArticle.readTime}
                </span>
              </div>
              <h3 className="font-headline-md text-2xl sm:text-headline-md text-primary mb-4 leading-tight">
                {featuredArticle.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {featuredArticle.summary}
              </p>
            </div>
            <div className="pt-6 flex items-center justify-between border-t border-border-subtle/50">
              <span className="font-mono text-xs text-secondary font-bold">
                AUTHOR: {featuredArticle.author}
              </span>
              <span className="material-symbols-outlined text-primary">arrow_outward</span>
            </div>
          </div>

          {/* 2 Supporting Editorial Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {supportingArticles.map((art) => (
              <div
                key={art.title}
                onClick={() => setActiveArticle(art)}
                className="bg-white/85 backdrop-blur-xl rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer border border-border-subtle"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-0.5 rounded bg-surface-container ${art.tagColor} font-label-sm text-label-sm uppercase tracking-wider font-semibold`}>
                      {art.category}
                    </span>
                    <span className="font-body-sm text-xs text-on-surface-variant">
                      {art.readTime}
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-[18px] text-primary mb-2 font-bold">
                    {art.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {art.summary}
                  </p>
                </div>
                <div className="pt-4 flex justify-between items-center text-xs font-mono text-primary font-semibold border-t border-border-subtle/50 mt-4">
                  <span>{art.reportNo}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border border-border-subtle max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded bg-surface-container text-primary font-mono text-xs font-bold uppercase">
                {activeArticle.category}
              </span>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <h3 className="font-headline-md text-2xl text-primary font-bold mb-3">
              {activeArticle.title}
            </h3>

            <div className="space-y-4 text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6">
              {activeArticle.fullContent.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="p-4 bg-surface-canvas rounded-xl border border-border-subtle text-xs text-slate-500 font-mono mb-6">
              Evidentiary Citation Protocol: Multi-jurisdictional register triangulation and authenticated filings.
            </div>

            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="w-full py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider"
            >
              Close Briefing
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
