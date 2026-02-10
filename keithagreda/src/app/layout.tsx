import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keith Agreda",
  description:
    "Keith Agreda - Full-stack web developer based in General Santos City, Philippines. I create fast, reliable web applications with clean user experiences.",
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
          content="hMfbP8tat3YTZc5qxN363p2lpmmPmK1QK3hIfZZYiLM"
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
