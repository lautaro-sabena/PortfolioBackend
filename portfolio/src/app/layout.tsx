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
  title: "Lautaro Sabena | Software Engineer",
  description: "Backend .NET Developer with 4+ years experience in C#, ASP.NET Core, and scalable systems. Previously worked with Unity and real-time systems.",
  keywords: ["Software Engineer", "Backend Developer", ".NET", "C#", "ASP.NET Core", "Portfolio"],
  authors: [{ name: "Lautaro Sabena" }],
  openGraph: {
    title: "Lautaro Sabena | Software Engineer",
    description: "Backend .NET Developer focused on scalable systems and clean architecture",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
