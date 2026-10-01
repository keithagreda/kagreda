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
  title: "Keith Agreda | Full-Stack Developer · AI Integrations",
  description:
    "Full-stack developer with 3+ years building .NET, Angular, and Next.js business applications and production AI voice integrations. Based in the Philippines, open to remote roles.",
  openGraph: {
    title: "Keith Agreda | Full-Stack Developer · AI Integrations",
    description:
      "Business applications, data workflow optimization, and production AI voice integrations. Explore projects built with .NET, Angular, Next.js, and Vapi.",
    type: "website",
  },
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
