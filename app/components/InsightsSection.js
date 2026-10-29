"use client";

import { useState } from "react";
import Link from "next/link";

export default function InsightsSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  const featuredArticle = {
    category: "Property Due Diligence",
    readTime: "6 Min Read",
    title: "Due Diligence Beyond the Title Deed: 5 Risk Patterns in Land Transactions",
    summary: "Why registered sale deeds are only the starting point. An analysis of revenue mutation variances, power of attorney risks, partition claims, and municipal conversion ambiguities in Indian property diligence.",
    author: "FACET RESEARCH & INVESTIGATIVE INTELLIGENCE",
    fullContent: [
      "In property acquisitions across Indian states, a registered sale deed confirms execution of an agreement, but does not guarantee unencumbered or marketable title.",
      "Crucial transaction risks emerge from historical mutation gaps in revenue records (such as 7/12, Patta, or Jamabandi rolls), unrevoked power of attorney chains, and pending partition suits in revenue tribunals.",
      "FACET Verify's structured research framework reconciles multi-decade Sub-Registrar books with local revenue mutation entries and state e-Courts dockets to uncover discrepancies before token advances are released."
    ]
  };

  const supportingArticles = [
    {
      category: "Counterparty Vetting",
      readTime: "5 Min Read",
      reportNo: "NOTE // 01",
      title: "Promoter Background Verification: Distinguishing Allegations from Adjudicated Risk",
      summary: "How to objectively separate public interest litigation and unsubstantiated media claims from binding judicial decrees and regulatory disqualifications.",
      fullContent: [
        "High-value transactions often encounter adverse counterparty coverage. A rigorous due diligence deliverable must disambiguate mere procedural notices from confirmed statutory default orders.",
        "Our investigative methodology benchmarks subject names against official MCA directorship lists, DRT recovery registers, and High Court appellate records to provide balanced, actionable risk context."
      ]
    },
    {
      category: "Third-Party Risk",
      readTime: "5 Min Read",
      reportNo: "NOTE // 02",
      title: "Vendor Due Diligence: Beneficial Ownership & Conflict-of-Interest Checks",
      summary: "Identifying circular vendor networks, undisclosed employee cross-affiliations, and shell holding entities in enterprise procurement pipelines.",
      fullContent: [
        "Procurement fraud and vendor favoritism frequently operate through entities registered under close relatives or former executives.",
        "By mapping directorship networks, common registered addresses, and corporate filings, organizations can protect their governance standards and prevent procurement leakages."
      ]
    }
  ];

  return (
    <section id="insights" className="w-full px-4 sm:px-8 lg:px-12 py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-primary font-display font-bold text-[12px] uppercase tracking-wider mb-3">
              Knowledge & Analysis
            </div>
            <h2 className="font-display font-extrabold text-[36px] sm:text-[46px] text-primary tracking-tight leading-tight">
              Perspectives on Risk & Due Diligence.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 font-display font-bold text-[15px] text-primary hover:text-[#134074] transition-colors"
          >
            <span>View All Insights</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Article (Span 7) */}
          <div
            onClick={() => setActiveArticle(featuredArticle)}
            className="lg:col-span-7 bg-slate-50 hover:bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1 rounded-full bg-primary text-white font-display font-bold text-[12px] uppercase tracking-wider">
                  {featuredArticle.category}
                </span>
                <span className="text-[13px] font-semibold text-slate-500">
                  {featuredArticle.readTime}
                </span>
              </div>

              <h3 className="font-display font-bold text-[26px] sm:text-[30px] text-primary mb-4 leading-snug group-hover:text-facet-red transition-colors">
                {featuredArticle.title}
              </h3>

              <p className="font-body text-[17px] text-on-surface-variant mb-6 leading-relaxed">
                {featuredArticle.summary}
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-slate-200">
              <span className="text-[12px] font-display text-slate-500 font-bold uppercase tracking-wider">
                {featuredArticle.author}
              </span>
              <span className="material-symbols-outlined text-primary group-hover:text-facet-red group-hover:translate-x-1 transition-all">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Supporting Articles (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {supportingArticles.map((art) => (
              <div
                key={art.title}
                onClick={() => setActiveArticle(art)}
                className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-display font-bold text-primary uppercase tracking-wider">
                      {art.reportNo}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-[13px] font-semibold text-slate-500">
                      {art.category}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-[20px] text-primary mb-2.5 leading-snug group-hover:text-facet-red transition-colors">
                    {art.title}
                  </h4>

                  <p className="font-body text-[15px] text-on-surface-variant leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[13px] font-bold text-primary group-hover:text-facet-red transition-colors">
                    Read Briefing
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-facet-red group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Article Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-white rounded-2xl p-8 sm:p-10 max-w-2xl w-full shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <span className="text-xs font-display font-bold text-primary uppercase tracking-wider">
                {activeArticle.category}
              </span>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary hover:bg-slate-200 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <h2 className="font-display font-bold text-[26px] text-primary mb-4 leading-snug">
              {activeArticle.title}
            </h2>

            <div className="space-y-4 font-body text-[16px] text-slate-700 leading-relaxed mb-8">
              {activeArticle.fullContent.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <Link
                href="/insights"
                className="text-[14px] font-bold text-primary hover:text-facet-red transition-colors"
              >
                Browse All Briefings
              </Link>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 rounded-lg bg-primary text-white font-display font-bold text-[13px]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
