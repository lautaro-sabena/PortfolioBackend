import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Lautaro Sabena | Backend Engineer",
  description: "Backend Engineer & System Designer — 4+ years in C#/Unity, now crafting scalable .NET services with clean architecture.",
  keywords: ["Backend Engineer", ".NET Developer", "C#", "ASP.NET Core", "Software Engineer", "Portfolio"],
  authors: [{ name: "Lautaro Sabena" }],
  openGraph: {
    title: "Lautaro Sabena | Backend Engineer",
    description: "Backend Engineer & System Designer — 4+ years in C#/Unity, now crafting scalable .NET services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
