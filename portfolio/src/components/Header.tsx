"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useTranslation();

  const navLinks = [
    { href: "#about", labelKey: "nav.about" },
    { href: "#projects", labelKey: "nav.work" },
    { href: "#contact", labelKey: "nav.contact" },
  ];

  return (
    <header className="fixed top-3.5 left-0 right-0 z-50 px-3.5">
      <nav className="glass max-w-[760px] mx-auto py-1.5 pr-1.5 pl-[18px] flex items-center justify-between gap-2.5 rounded-full">
        <Link href="#about" className="text-[15px] font-semibold tracking-tight whitespace-nowrap hover:opacity-80">
          Lautaro Sabena
        </Link>

        <div className="flex items-center gap-1">
          <div className="hidden md:flex items-center gap-0.5 p-[3px] mr-1 rounded-full bg-[var(--chip)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium px-3 py-1.5 rounded-full text-muted hover:bg-[var(--glass-strong)] hover:text-foreground transition-colors"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
