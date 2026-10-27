import "./globals.css";

export const metadata = {
  title: "FACET | Institutional Due Diligence & Investigative Intelligence",
  description: "FACET delivers forensic due diligence, investigative intelligence, ownership research, and conflict assessment to empower sovereign institutions, counsel, and sponsors before high-stakes capital allocations.",
  keywords: [
    "FACET",
    "Forensic Due Diligence",
    "Investigative Intelligence",
    "UBO Discovery",
    "Title Verification",
    "Litigation Risk",
    "M&A Due Diligence",
    "Asset Tracing",
    "Corporate Intelligence"
  ],
  authors: [{ name: "FACET Global Intelligence" }],
  openGraph: {
    title: "FACET | Institutional Due Diligence & Investigative Intelligence",
    description: "Look Beyond the Surface. Forensics, corporate intelligence, and risk assessment for high-stakes capital allocations.",
    siteName: "FACET",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Fonts: Inter & Space Grotesk */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap"
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
                      "primary": "#001026",
                      "primary-container": "#0b2545",
                      "on-primary": "#ffffff",
                      "secondary": "#0050cc",
                      "secondary-container": "#0266ff",
                      "on-secondary": "#ffffff",
                      "accent-electric": "#0EA5E9",
                      "verification-green": "#10B981",
                      "evidence-flag": "#EF4444",
                      "surface-canvas": "#F7F8FA",
                      "surface-card": "#FFFFFF",
                      "surface-container-low": "#eff4ff",
                      "surface-container": "#e6eeff",
                      "surface-container-high": "#dee9fc",
                      "surface-container-highest": "#d9e3f6",
                      "on-surface": "#121c2a",
                      "on-surface-variant": "#44474e",
                      "border-subtle": "#E2E8F0",
                      "border-active": "#CBD5E1",
                      "error-container": "#ffdad6",
                      "on-error-container": "#93000a",
                    },
                    borderRadius: {
                      DEFAULT: "0.125rem",
                      lg: "0.25rem",
                      xl: "0.5rem",
                      full: "0.75rem",
                      "2xl": "1rem",
                    },
                    spacing: {
                      "space-xs": "0.25rem",
                      "space-sm": "0.5rem",
                      "space-md": "1rem",
                      "space-lg": "1.5rem",
                      "space-xl": "2.5rem",
                      "margin": "3rem",
                      "margin-mobile": "1.25rem",
                      "gutter": "1.5rem",
                      "gutter-mobile": "1rem",
                    },
                    fontFamily: {
                      "display-xl": ["'Space Grotesk'", "sans-serif"],
                      "headline-lg": ["'Space Grotesk'", "sans-serif"],
                      "headline-md": ["'Space Grotesk'", "sans-serif"],
                      "headline-sm": ["'Space Grotesk'", "sans-serif"],
                      "body-lg": ["'Inter'", "sans-serif"],
                      "body-md": ["'Inter'", "sans-serif"],
                      "body-sm": ["'Inter'", "sans-serif"],
                      "label-md": ["'Inter'", "sans-serif"],
                      "label-sm": ["'Inter'", "sans-serif"],
                    },
                    fontSize: {
                      "display-xl": ["64px", { lineHeight: "72px", letterSpacing: "-0.03em", fontWeight: "700" }],
                      "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "600" }],
                      "headline-md": ["28px", { lineHeight: "36px", letterSpacing: "-0.015em", fontWeight: "600" }],
                      "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }],
                      "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "400" }],
                      "body-md": ["15px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
                      "body-sm": ["13px", { lineHeight: "20px", letterSpacing: "0em", fontWeight: "400" }],
                      "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" }],
                      "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "600" }],
                    }
                  }
                }
              };
            `,
          }}
        />
      </head>
      <body className="bg-surface-canvas text-on-surface font-body-md text-body-md antialiased">
        {children}
      </body>
    </html>
  );
}
