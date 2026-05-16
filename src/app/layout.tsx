import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Nives | Websites & Tools for Local Businesses in Bolzano",
  description:
    "Modern websites, online ordering tools, and booking systems for cafes, restaurants, bakeries, salons, and small businesses in Bolzano, Italy.",
  openGraph: {
    title: "Studio Nives | Websites & Tools for Local Businesses in Bolzano",
    description:
      "Modern websites, online ordering tools, and booking systems for local businesses in Bolzano, Italy.",
    url: "https://studionives.com",
    siteName: "Studio Nives",
    locale: "en_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <head>
        {/*
         * Privacy-friendly analytics (Plausible):
         * Uncomment and update the data-domain when you have a custom domain.
         *
         * <script
         *   defer
         *   data-domain="studionives.com"
         *   src="https://plausible.io/js/script.js"
         * />
         */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
