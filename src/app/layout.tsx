import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Architekt Rodziny",
  description: "blog osobisty o rodzinie, małżeństwie i macierzyństwie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      {/* TODO: font to be changed */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
