import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./navigation/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Architekt Rodziny",
  description: "blog osobisty o rodzinie, małżeństwie i macierzyństwie",
  generator: 'Next.js',
  applicationName: 'ARapp',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

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
