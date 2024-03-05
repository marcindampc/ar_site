import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./navigation/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Architekt Rodziny",
  description: "blog osobisty o rodzinie, małżeństwie i macierzyństwie",
  generator: 'Next.js',
  applicationName: 'Architekt Rodziny',
  referrer: 'origin-when-cross-origin',
  keywords: ['rodzina', 'macierzyństwo'],
  // authors: [{ name: '' }, { name: '', url: '' }],
  // creator: '',
  // publisher: '',
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      {/* TODO: font to be changed */}
      <body className={inter.className}>
        <Nav />
        {children}</body>
    </html>
  );
}
