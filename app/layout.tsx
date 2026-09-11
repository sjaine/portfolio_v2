import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { DM_Mono } from "next/font/google";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CustomCursor from "./components/ui/CustomCursor";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo", 
  display: "swap",
});

const ibmSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400"],
  variable: "--font-dm-mono",
  subsets: ["latin"],
  display: "swap",
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
      <body
        className={`${ibmSans.variable} ${archivo.variable} ${dmMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        {/* <CustomCursor /> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
