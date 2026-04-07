import type { Metadata } from "next";
import Script from "next/script";
import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI実践研修プログラム | 株式会社fan-mily",
  description:
    "欲しいものを作りながら学ぶ5日間。週45時間分の業務自動化を実証済み。助成金対応で実質28万円から。",
  openGraph: {
    title: "AI実践研修プログラム | 株式会社fan-mily",
    description:
      "欲しいものを作りながら学ぶ5日間。週45時間分の業務自動化を実証済み。助成金対応で実質28万円から。",
    type: "website",
    locale: "ja_JP",
    url: "https://ai-kenshu.fan-mily.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI実践研修プログラム | 株式会社fan-mily",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI実践研修プログラム | 株式会社fan-mily",
    description:
      "欲しいものを作りながら学ぶ5日間。週45時間分の業務自動化を実証済み。助成金対応で実質28万円から。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <FloatingCTA />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
