import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "FACET Verify | Due Diligence & Investigative Intelligence",
  description: "FACET Verify combines structured research, public-record verification and investigative analysis to help clients understand property, people, businesses, legal exposure and transaction risk.",
  keywords: [
    "Due Diligence India",
    "Property Due Diligence",
    "Investigative Intelligence",
    "Litigation Search",
    "Promoter Background Check",
    "Vendor Due Diligence",
    "Corporate Risk Assessment",
    "Title Verification",
    "FACET Verify"
  ],
  authors: [{ name: "FACET Verify" }],
  openGraph: {
    title: "FACET Verify | Due Diligence & Investigative Intelligence",
    description: "Make Confident Decisions. See the Full Picture. Sourced due diligence for property, corporate, and high-value transactions.",
    siteName: "FACET Verify",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="facet-body">
        {children}
      </body>
    </html>
  );
}
