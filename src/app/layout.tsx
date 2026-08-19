import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Resolves automatically on Vercel; set NEXT_PUBLIC_SITE_URL once a real
// domain is attached so share cards point at the domain, not the preview URL.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "IBE Pay — every card you own, one wallet";
const description =
  "Your naira card has a monthly international limit. IBE Pay links every Nigerian bank card and routes each payment to the one that still has room. Join the waitlist.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "IBE Pay",
  keywords: [
    "IBE Pay",
    "Nigerian bank cards",
    "card declined abroad",
    "international spending limit",
    "Verve",
    "naira card",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "IBE Pay",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white">{children}</body>
    </html>
  );
}
