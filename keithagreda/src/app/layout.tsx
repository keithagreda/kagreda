import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Keith Agreda",
  description:
    "Keith Agreda — Full-stack web developer based in General Santos City, Philippines. I create fast, reliable web applications with clean user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Replace the content value with your actual verification token from Google */}
        <meta
          name="google-site-verification"
          content="google-site-verification=d5Zqm803QtQB_HTrTn26C4BnbyqwAQBjyMIt9FaTZhM"
        />
      </head>
      <body className={`antialiased font-sans`}>{children}</body>
    </html>
  );
}
