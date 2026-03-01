import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const ibmSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["400"],
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jaineysshin",
  description: "Annyeong, Welcome!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmSans.variable} ${dmMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
