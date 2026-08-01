import "@/app/globals.css";

import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { baseURL, description, siteName, title } from "@/config";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: {
    default: title,
    template: `%s — ${siteName}`,
  },
  description,
  keywords: [
    "AI infrastructure",
    "edge computing",
    "distributed systems",
    "industrial data",
    "systems engineering",
    "llama.cpp",
  ],
  authors: [{ name: siteName, url: baseURL }],
  creator: siteName,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: baseURL,
    title,
    description,
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "CryptoCanuck — AI infrastructure and edge systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
