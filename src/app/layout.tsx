import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Shadow AI Risk Score — Free Enterprise AI Risk Assessment",
  description:
    "Discover your organization's Shadow AI risk in 2 minutes. Free assessment tool by Aona AI.",
  metadataBase: new URL("https://shadowai.report"),
  openGraph: {
    title: "Shadow AI Risk Score — Free Enterprise AI Risk Assessment",
    description:
      "Discover your organization's Shadow AI risk in 2 minutes. Free assessment tool by Aona AI.",
    url: "https://shadowai.report",
    siteName: "ShadowAI.report",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow AI Risk Score — Free Enterprise AI Risk Assessment",
    description:
      "Discover your organization's Shadow AI risk in 2 minutes. Free assessment tool by Aona AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Shadow AI Risk Score",
              description:
                "Free enterprise Shadow AI risk assessment tool by Aona AI",
              url: "https://shadowai.report",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Aona AI",
                url: "https://aona.ai",
              },
            }),
          }}
        />
      </head>
      <body className="font-manrope antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
