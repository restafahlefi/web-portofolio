import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

// Using standard Next.js fonts
import { Inter as InterFont, JetBrains_Mono as MonoFont } from 'next/font/google';

const inter = InterFont({
  subsets: ['latin'],
  variable: '--font-inter',
});

const mono = MonoFont({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Resta Fahlefi | Senior Software Engineer",
  description: "Portfolio Mochamad Resta Fahlefi, Senior Software Engineer Jakarta. 5+ tahun, 50+ project, 20+ klien. Spesialis React, Next.js, Node.js.",
  keywords: ["Senior Software Engineer", "Fullstack Developer", "React Developer", "Next.js Portfolio", "Jakarta Developer", "Resta Fahlefi"],
  metadataBase: new URL('https://mrestafahlefi.vercel.app'),
  openGraph: {
    title: "Resta Fahlefi | Senior Software Engineer",
    description: "Senior Software Engineer Jakarta. 5+ tahun membangun produk SaaS dengan Next.js & Node.js.",
    type: "website",
    url: "https://mrestafahlefi.vercel.app",
    siteName: "RF.dev — Resta Fahlefi Portfolio",
    locale: "id_ID",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resta Fahlefi — Senior Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resta Fahlefi | Senior Software Engineer",
    description: "Senior Software Engineer Jakarta. 5+ tahun membangun produk SaaS dengan Next.js & Node.js.",
    images: ["/assets/images/og-image.png"],
  },
};

// JSON-LD Structured Data for SEO rich snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mochamad Resta Fahlefi',
  jobTitle: 'Senior Software Engineer',
  url: 'https://mrestafahlefi.vercel.app',
  image: 'https://mrestafahlefi.vercel.app/assets/images/og-image.png',
  description: 'Senior Software Engineer berbasis di Jakarta. 5+ tahun membangun produk SaaS dengan Next.js & Node.js.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta',
    addressCountry: 'ID',
  },
  sameAs: [
    'https://github.com/restafahlefi',
    'https://linkedin.com/in/restafahlefi',
    'https://instagram.com/resta.fahlefi',
  ],
  knowsAbout: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Laravel', 'MongoDB'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased bg-[#0a0a0f] text-white selection:bg-blue-500/30`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
