import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nivetha Sathiyapal | Websites & Digital Tools for Local Businesses in Bolzano",
  description:
    "Helping local businesses in Bolzano turn visitors into customers with clean websites, digital menus, WhatsApp ordering flows, and simple admin tools.",
  openGraph: {
    title: "Nivetha Sathiyapal | Websites & Digital Tools for Local Businesses in Bolzano",
    description:
      "Helping local businesses in Bolzano turn visitors into customers with clean websites, digital menus, WhatsApp ordering flows, and simple admin tools.",
    url: "https://studionives.com",
    siteName: "Nivetha Sathiyapal",
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
