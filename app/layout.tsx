import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "隱私權政策｜長照個管系統",
  description:
    "長照個管系統隱私權政策：了解個案資料、裝置儲存、備份分享、通知權限與資料權利。",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "隱私權政策｜長照個管系統",
    description: "我們珍視每一筆照護紀錄，也重視您對資料的掌控。",
    type: "website",
    locale: "zh_TW",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
