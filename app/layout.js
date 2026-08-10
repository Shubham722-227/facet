import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Facet | Real Estate Legal Due Diligence",
  description: "Automated due diligence and title verification for modern real estate transactions. Instantly uncover risks, zoning issues, and historical litigation.",
  keywords: ["PropTech", "Real Estate Due Diligence", "Legal Tech", "Title Search", "Zoning Risk", "Property Transaction"],
  openGraph: {
    title: "Facet | Real Estate Legal Due Diligence",
    description: "Automated due diligence and title verification for modern real estate transactions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
