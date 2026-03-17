import type { Metadata } from "next";

const baseUrl = process.env.SITE_URL || "https://mohammedalkhalifa.com";

export const metadata: Metadata = {
  title: "محمد الخليفة | محلل بيانات | Power BI • Excel • SQL • Python",
  description: "محلل بيانات حاصل على مرتبة الشرف الأولى في الحوسبة الإبداعية من جامعة جولدسميث، لندن. متخصص في تحليل البيانات والتقارير ولوحات المعلومات وذكاء الأعمال باستخدام Power BI و Excel و SQL و Python. يدعم التحول الرقمي المتوافق مع رؤية السعودية 2030.",
  keywords: ["محمد الخليفة", "Mohammed Alkhalifa", "محلل بيانات", "Power BI", "Excel", "SQL", "Python", "تحليل بيانات", "ذكاء أعمال", "تعلم آلي", "رؤية 2030", "الدمام", "السعودية"],
  alternates: {
    canonical: "/ar",
    languages: {
      en: "/",
      ar: "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: `${baseUrl}/ar`,
    title: "محمد الخليفة | محلل بيانات",
    description: "محلل بيانات متخصص في التقارير ولوحات المعلومات وذكاء الأعمال باستخدام Power BI و Excel و SQL و Python.",
    siteName: "بورتفوليو محمد الخليفة",
  },
};

export default function ArLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div dir="rtl" lang="ar" className="font-sans">
      {children}
    </div>
  );
}
