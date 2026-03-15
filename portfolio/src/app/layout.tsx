import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
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
  title: "Lautaro Sabena | Full Stack Engineer",
  description: "Full Stack Engineer — 4+ years in C#/Unity, building scalable .NET backend services and modern web applications.",
  keywords: ["Full Stack Engineer", ".NET Developer", "C#", "ASP.NET Core", "Software Engineer", "Portfolio"],
  authors: [{ name: "Lautaro Sabena" }],
  openGraph: {
    title: "Lautaro Sabena | Full Stack Engineer",
    description: "Full Stack Engineer — 4+ years in C#/Unity, building scalable .NET backend services and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
