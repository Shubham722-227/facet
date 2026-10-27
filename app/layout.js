import "./globals.css";

export const metadata = {
  title: "FACET Verify | Global Due Diligence & Investigative Intelligence",
  description: "Country-specific due diligence, public-record verification, and investigative intelligence across the United States, Europe, the UK, and India. Supporting M&A, institutional lending, and executive risk assessment.",
  keywords: [
    "FACET Verify",
    "Country-Specific Due Diligence",
    "Global Due Diligence",
    "Investigative Intelligence",
    "US Due Diligence",
    "European Company Search",
    "India Due Diligence",
    "Promoter Background Check",
    "PACER Litigation Verification",
    "Vendor Due Diligence",
    "M&A Due Diligence",
    "OFAC Sanctions Screening",
    "Asset & Ownership Intelligence"
  ],
  authors: [{ name: "FACET Verify" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo-mark.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  openGraph: {
    title: "FACET Verify | Due Diligence & Investigative Intelligence",
    description: "Make Confident Decisions. See the Full Picture. Structured research, public-record verification and investigative analysis.",
    siteName: "FACET Verify",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/logo-mark.svg" type="image/svg+xml" />

        {/* Modern, Highly Readable Typography: Plus Jakarta Sans & Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Inter:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          id="tailwind-config"
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      "primary": "#0B2545",
                      "primaryColor": "#0B2545",
                      "primary-container": "#133966",
                      "facet-red": "#0B2545",
                      "facet-red-hover": "#134074",
                      "facet-accent": "#134074",
                      "secondary": "#1F2937",
                      "secondary-container": "#374151",
                      "accent-electric": "#134074",
                      "verification-green": "#26865A",
                      "warning-amber": "#C98316",
                      "evidence-flag": "#D92D3A",
                      "surface-canvas": "#F7F8FA",
                      "surface-card": "#FFFFFF",
                      "surface-dark": "#0B2545",
                      "surface-dark-card": "#133966",
                      "on-surface": "#1F2937",
                      "on-surface-variant": "#4B5563",
                      "on-surface-muted": "#6B7280",
                      "border-subtle": "#E5E7EB",
                      "border-active": "#D1D5DB",
                      "border-dark": "rgba(255, 255, 255, 0.12)",
                    },
                    borderRadius: {
                      DEFAULT: "0.25rem",
                      lg: "0.5rem",
                      xl: "0.75rem",
                      "2xl": "1rem",
                      "3xl": "1.5rem",
                      full: "9999px",
                    },
                    fontFamily: {
                      "display": ["'Plus Jakarta Sans'", "sans-serif"],
                      "headline": ["'Plus Jakarta Sans'", "sans-serif"],
                      "body": ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
                      "display-xl": ["'Plus Jakarta Sans'", "sans-serif"],
                      "headline-lg": ["'Plus Jakarta Sans'", "sans-serif"],
                      "headline-md": ["'Plus Jakarta Sans'", "sans-serif"],
                      "headline-sm": ["'Plus Jakarta Sans'", "sans-serif"],
                      "body-lg": ["'Plus Jakarta Sans'", "sans-serif"],
                      "body-md": ["'Plus Jakarta Sans'", "sans-serif"],
                      "body-sm": ["'Plus Jakarta Sans'", "sans-serif"],
                      "label-md": ["'Plus Jakarta Sans'", "sans-serif"],
                      "label-sm": ["'Plus Jakarta Sans'", "sans-serif"],
                    },
                    fontSize: {
                      "display-xl": ["64px", { lineHeight: "74px", letterSpacing: "-0.035em", fontWeight: "800" }],
                      "headline-lg": ["46px", { lineHeight: "54px", letterSpacing: "-0.025em", fontWeight: "700" }],
                      "headline-md": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
                      "headline-sm": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "600" }],
                      "body-lg": ["19px", { lineHeight: "30px", letterSpacing: "-0.01em", fontWeight: "400" }],
                      "body-md": ["17px", { lineHeight: "26px", letterSpacing: "-0.005em", fontWeight: "400" }],
                      "body-sm": ["15px", { lineHeight: "22px", letterSpacing: "0em", fontWeight: "400" }],
                      "label-md": ["13px", { lineHeight: "18px", letterSpacing: "0.05em", fontWeight: "600" }],
                      "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" }],
                    }
                  }
                }
              };
            `,
          }}
        />
      </head>
      <body className="bg-surface-canvas text-on-surface font-body text-body-md antialiased selection:bg-facet-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
