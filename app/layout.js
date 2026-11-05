import "./globals.css";
import WhatsAppBubble from "./components/WhatsAppBubble";

export const metadata = {
  metadataBase: new URL("https://www.facetverify.com"),
  title: {
    default: "FACET Verify | India's Best Due Diligence & Investigative Intelligence Company",
    template: "%s | FACET Verify",
  },
  description: "India's premier due diligence and corporate investigative intelligence company. Sourced public-record verification, promoter background checks, 30-year property title verification, and litigation risk screening across India, the US, UK, and Europe.",
  keywords: [
    "Best Due Diligence Company in India",
    "India Due Diligence Firm",
    "FACET Verify",
    "Corporate Due Diligence India",
    "Property Due Diligence India",
    "Promoter Background Verification",
    "Investigative Intelligence Firm",
    "Land Title Verification India",
    "Litigation Screening e-Courts",
    "NCLT Insolvency Checks",
    "Vendor Due Diligence",
    "M&A Due Diligence India",
    "Asset & Ownership Intelligence",
    "Bengaluru Due Diligence Agency"
  ],
  authors: [{ name: "FACET Verify", url: "https://www.facetverify.com" }],
  creator: "FACET Verify",
  publisher: "FACET Verify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "FACET Verify | India's Best Due Diligence & Investigative Intelligence Company",
    description: "Make Confident Decisions. See the Full Picture. Sourced public-record verification, promoter background checks, land title due diligence, and litigation risk screening.",
    url: "https://www.facetverify.com",
    siteName: "FACET Verify",
    images: [
      {
        url: "/facet_hero.png",
        width: 1200,
        height: 630,
        alt: "FACET Verify - India's Best Due Diligence Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FACET Verify | India's Best Due Diligence Company",
    description: "Make Confident Decisions. See the Full Picture. Sourced public-record verification and investigative analysis.",
    images: ["/facet_hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.facetverify.com/#organization",
      "name": "FACET Verify",
      "legalName": "FACET (Fraud Analysis, Credibility & Estate Title)",
      "url": "https://www.facetverify.com",
      "logo": "https://www.facetverify.com/logo.svg",
      "image": "https://www.facetverify.com/facet_hero.png",
      "description": "FACET Verify is India's best due diligence and investigative intelligence company. Specialized in promoter background verification, 30-year property title verification, NCLT insolvency searches, and corporate litigation risk screening.",
      "telephone": "+91 72890 87530",
      "email": "info@facetverify.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bengaluru Operations Hub",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560049",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9716,
        "longitude": 77.5946
      },
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "European Union" }
      ],
      "priceRange": "$$",
      "knowsAbout": [
        "Corporate Due Diligence",
        "Property Due Diligence India",
        "Promoter Background Verification",
        "Litigation Screening e-Courts",
        "NCLT IBC Insolvency Searches",
        "Asset Tracing and Ownership Intelligence",
        "Vendor Risk Assessment",
        "Fraud and Corporate Intelligence"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Due Diligence & Investigative Intelligence Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Property & Real Estate Due Diligence",
              "url": "https://www.facetverify.com/services/property-due-diligence"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Litigation, Legal & Regulatory Due Diligence",
              "url": "https://www.facetverify.com/services/litigation-regulatory-due-diligence"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vendor & Third-Party Due Diligence",
              "url": "https://www.facetverify.com/services/vendor-third-party-due-diligence"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fraud & Corporate Investigative Intelligence",
              "url": "https://www.facetverify.com/services/fraud-investigative-intelligence"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Asset & Ownership Intelligence",
              "url": "https://www.facetverify.com/services/asset-ownership-intelligence"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.facetverify.com/#website",
      "url": "https://www.facetverify.com",
      "name": "FACET Verify",
      "description": "India's Best Due Diligence Company and Investigative Intelligence Firm",
      "publisher": {
        "@id": "https://www.facetverify.com/#organization"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="FACET Verify" />
        <meta name="apple-mobile-web-app-title" content="FACET Verify" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

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
        <WhatsAppBubble />
      </body>
    </html>
  );
}
