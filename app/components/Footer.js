"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-card shadow-[0_-1px_8px_rgba(11,37,69,0.03)] pt-12 pb-8 border-t border-border-subtle">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        {/* Institutional Standard Banner */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-6 gap-4 bg-surface-container-low rounded-xl px-6 py-4 mb-10 border border-border-subtle/80">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary text-[26px]">verified_user</span>
            <div>
              <p className="font-headline-sm text-base sm:text-headline-sm text-primary font-bold">
                Evidence-led due diligence &amp; corporate intelligence
              </p>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">
                ISO-27001 Aligned forensic chain of custody for cross-border transactions and regulatory defense.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant uppercase tracking-widest bg-surface-card px-4 py-2 rounded-lg shadow-[0_1px_2px_rgba(11,37,69,0.04)] border border-border-subtle shrink-0">
            <span className="w-2 h-2 rounded-full bg-verification-green"></span>
            <span>Institutional Verification Standard</span>
          </div>
        </div>

        {/* 5 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10 border-b border-border-subtle">
          {/* Col 1: Capabilities */}
          <div className="flex flex-col gap-2.5">
            <span className="font-label-md text-xs uppercase tracking-wider text-primary font-bold">
              Capabilities
            </span>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/services/ma-investment-due-diligence">
              M&amp;A Due Diligence
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/services/asset-ownership-intelligence">
              Asset Tracing &amp; Recovery
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/services/seller-promoter-due-diligence">
              Executive Vetting (KMP)
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/services/fraud-investigative-intelligence">
              Forensic Accounting Intake
            </Link>
          </div>

          {/* Col 2: Sectors */}
          <div className="flex flex-col gap-2.5">
            <span className="font-label-md text-xs uppercase tracking-wider text-primary font-bold">
              Sectors
            </span>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/industries">
              Private Equity &amp; Credit
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/industries">
              Sovereign Wealth Funds
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/industries">
              Cross-Border Infrastructure
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/industries">
              Digital Assets &amp; Fintech
            </Link>
          </div>

          {/* Col 3: Methodologies */}
          <div className="flex flex-col gap-2.5">
            <span className="font-label-md text-xs uppercase tracking-wider text-primary font-bold">
              Methodologies
            </span>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/how-it-works">
              HUMINT Field Networks
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/how-it-works">
              Sanctions &amp; PEP Mapping
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/how-it-works">
              Beneficial Ownership Triangulation
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/how-it-works">
              Litigation Risk Matrices
            </Link>
          </div>

          {/* Col 4: Governance */}
          <div className="flex flex-col gap-2.5">
            <span className="font-label-md text-xs uppercase tracking-wider text-primary font-bold">
              Governance
            </span>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/about">
              Advisory Council
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/privacy-policy">
              Data Protection Policy
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/about">
              Ethical Intelligence Charter
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/about">
              FCPA &amp; UK Bribery Act
            </Link>
          </div>

          {/* Col 5: Legal & Disclaimers */}
          <div className="flex flex-col gap-2.5">
            <span className="font-label-md text-xs uppercase tracking-wider text-primary font-bold">
              Legal &amp; Disclaimers
            </span>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/terms">
              Terms of Engagement
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/privacy-policy">
              Client Privilege Protocols
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/disclaimer">
              Evidentiary Safe Harbors
            </Link>
            <Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors" href="/how-it-works">
              Air-Gapped Vault Security
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Confidentiality Assurance */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-on-surface-variant">
          <p>© {currentYear} FACET Global Intelligence Ltd. All institutional rights reserved.</p>
          <p className="max-w-xl text-left md:text-right leading-relaxed">
            Confidentiality Assurance: Intelligence dossiers, entity manifests, and privileged advisory outputs are delivered exclusively under formal NDA and encrypted air-gapped cryptographic protocols.
          </p>
        </div>
      </div>
    </footer>
  );
}
