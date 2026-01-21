import type { Metadata } from "next";
import { Geist, Geist_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-zen-kaku",
});


export const metadata: Metadata = {
  title: "KamiLog",
  description: "Track your Anime wherever and whenever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${zenKaku.variable} antialiased w-screen overflow-hidden`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
