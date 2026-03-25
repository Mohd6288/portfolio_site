import type { Metadata } from "next";
import { Geist, Geist_Mono, Courier_Prime } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-retro",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const baseUrl = process.env.SITE_URL || "https://mohammedalkhalifa.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Mohammed Alkhalifa | Data Analyst & Freelance Developer | Power BI • Python • Next.js",
  description: "Data Analyst and Freelance Developer with First-Class Honours in Creative Computing from Goldsmiths, University of London. Specializing in data analytics, dashboards, web development, and automation using Power BI, Python, SQL, and Next.js. Available for freelance digital solutions aligned with Saudi Vision 2030.",
  keywords: ["Mohammed Alkhalifa", "محمد الخليفة", "Data Analyst", "Freelance Developer", "Power BI", "Excel", "SQL", "Python", "Next.js", "Web Development", "Data Analytics", "Business Intelligence", "Machine Learning", "Data Visualization", "Freelance", "Saudi Vision 2030", "Dammam", "Saudi Arabia"],
  authors: [{ name: "Mohammed Alkhalifa" }],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar",
    },
  },
  verification: {
    google: "google81179bd5f65b7a03",
    other: {
      "msvalidate.01": "1531D1D480A27EB374BAA1B60602CAED",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammed Alkhalifa",
    alternateName: "محمد الخليفة",
    jobTitle: "Junior Data Analyst",
    url: baseUrl,
    email: "M.alkhalifah@hotmail.com",
    telephone: "+966540005871",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dammam",
      addressCountry: "SA",
    },
    worksFor: {
      "@type": "Organization",
      name: "Advanced Micro Technologies",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Alkhobar",
        addressCountry: "SA",
      },
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Goldsmiths, University of London",
    },
    knowsAbout: ["Power BI", "Python", "SQL", "Excel", "Machine Learning", "Data Analytics", "Data Visualization"],
    sameAs: [
      "https://github.com/Mohd6288",
      "https://www.linkedin.com/in/mohammed-alkhalifa-68322b1bb/",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d4a373" />
        <link rel="apple-touch-icon" href="/icons/icon-192.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${courierPrime.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
