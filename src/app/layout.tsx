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
  openGraph: {
    title: "Resta Fahlefi | Senior Software Engineer",
    description: "Senior Software Engineer Jakarta. 5+ tahun membangun produk SaaS dengan Next.js & Node.js.",
    type: "website",
    url: "https://mrestafahlefi.vercel.app",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resta Fahlefi Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased bg-[#0a0a0f] text-white selection:bg-blue-500/30`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
