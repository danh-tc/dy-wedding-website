import type { Metadata } from "next";
import { Geist, Geist_Mono, Alex_Brush, Mulish } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Danh & Yen Wedding",
  description: "Welcome to our wedding!",
  icons: {
    icon: "/dylogo.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${alexBrush.variable} ${mulish.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
