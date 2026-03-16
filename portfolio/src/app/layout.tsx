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
  title: "Lautaro Sabena | Fullstack Engineer",
  description: "Fullstack Software Engineer specializing in C#, .NET and modern web development.",
  keywords: ["Full Stack Engineer", ".NET Developer", "C#", "ASP.NET Core", "Software Engineer", "Portfolio"],
  authors: [{ name: "Lautaro Sabena" }],
  icons: {
    icon: "/icono.png",
  },
  openGraph: {
    title: "Lautaro Sabena | Fullstack Engineer",
    description: "Fullstack Software Engineer specializing in C#, .NET and modern web development.",
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
