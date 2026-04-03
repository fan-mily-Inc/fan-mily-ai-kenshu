import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI実践研修プログラム | 株式会社fan-mily",
  description:
    "欲しいものを作りながら学ぶ5日間のAI実践研修。AIエージェント構築からアプリ開発まで、実務直結の法人向けDX・AI研修プログラム。人材開発支援助成金対応。",
  openGraph: {
    title: "AI実践研修プログラム | 株式会社fan-mily",
    description:
      "欲しいものを作りながら学ぶ5日間のAI実践研修。法人向けDX・AI研修プログラム。",
    type: "website",
    locale: "ja_JP",
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
      <body>{children}</body>
    </html>
  );
}
