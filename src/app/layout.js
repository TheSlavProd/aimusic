import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Песни на заказ с AI - Создание уникальных песен | AI Music Studio",
  description: "Создаем уникальные песни на заказ с помощью искусственного интеллекта. Поздравительные, рекламные и авторские песни под ключ. Подписка на Canva Pro. Заказать песню в Telegram, WhatsApp.",
  keywords: "песни на заказ, AI музыка, поздравительные песни, рекламные песни, создание песен, музыкальная студия, искусственный интеллект, Canva Pro, заказать песню",
  authors: [{ name: "AI Music Studio" }],
  creator: "AI Music Studio",
  publisher: "AI Music Studio",
  robots: "index, follow",
  openGraph: {
    title: "Песни на заказ с AI - Создание уникальных песен",
    description: "Создаем уникальные песни на заказ с помощью искусственного интеллекта. Поздравительные, рекламные и авторские песни под ключ.",
    type: "website",
    locale: "ru_RU",
    siteName: "AI Music Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Песни на заказ с AI - Создание уникальных песен",
    description: "Создаем уникальные песни на заказ с помощью искусственного интеллекта",
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AI Music Studio" />
        <meta name="application-name" content="AI Music Studio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
