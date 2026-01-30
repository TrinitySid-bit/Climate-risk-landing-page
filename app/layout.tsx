import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'NestCheck - Property Intelligence Reports for Victoria',
  description: 'Climate risk, planning overlays, crime statistics, schools, hospitals, and transport — all in one comprehensive property intelligence report for Victorian properties.',
  keywords: 'property report, climate risk, bushfire risk, flood risk, planning overlay, crime statistics, Victoria, Melbourne, property intelligence',
  openGraph: {
    title: 'NestCheck - Check Before You Nest',
    description: 'Know everything about your property. Climate risk, planning overlays, crime data, and more.',
    url: 'https://nestcheck.com.au',
    siteName: 'NestCheck',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-S1KR3CF2CG" />
      </body>
    </html>
  );
}