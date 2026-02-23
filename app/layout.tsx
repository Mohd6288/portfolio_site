import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


{<html suppressHydrationWarning></html>}
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Alkhalifa | Junior Data Analyst | Power BI • Excel • SQL • Python",
  description: "Junior Data Analyst with First-Class Honours in Creative Computing from Goldsmiths, University of London. Specializing in data analytics, reporting, dashboards, and business intelligence using Power BI, Excel, SQL, and Python. Supporting digital transformation aligned with Saudi Vision 2030.",
  keywords: ["Mohammed Alkhalifa", "Data Analyst", "Power BI", "Excel", "SQL", "Python", "Data Analytics", "Business Intelligence", "Machine Learning", "Data Visualization", "Saudi Vision 2030"],
  authors: [{ name: "Mohammed Alkhalifa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohammed Alkhalifa | Junior Data Analyst",
    description: "Junior Data Analyst specializing in reporting, dashboards, and business intelligence using Power BI, Excel, SQL, and Python.",
    siteName: "Mohammed Alkhalifa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Alkhalifa | Junior Data Analyst",
    description: "Junior Data Analyst specializing in reporting, dashboards, and business intelligence using Power BI, Excel, SQL, and Python.",
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
      </body>
    </html>
  );
}
