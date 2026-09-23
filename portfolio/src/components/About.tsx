"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "@/context/LanguageContext";

export default function About() {
  const { t } = useTranslation();

  const focusAreas = t("about.focusAreas") as unknown as string[];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="glass scroll-mt-24 rounded-[32px] px-6 sm:px-8 pt-9 pb-8"
    >
      <span className="chip inline-flex items-center gap-2 py-1.5 pr-3 pl-2.5 text-xs font-semibold tracking-wide rounded-full">
        <span className="w-[7px] h-[7px] bg-[#30d158] rounded-full shadow-[0_0_0_3px_rgba(48,209,88,.22),0_0_10px_rgba(48,209,88,.8)]" />
        {t("about.available")}
      </span>

      <h1 className="text-[clamp(38px,7vw,56px)] leading-[1.02] font-bold tracking-[-0.035em] mt-[22px] mb-1.5">
        Lautaro Sabena
      </h1>
      <p className="text-[19px] font-medium text-muted tracking-tight mb-6">
        Fullstack Software Engineer
      </p>

      <p className="text-base leading-relaxed text-fg2 mb-3.5 text-pretty">{t("about.description1")}</p>
      <p className="text-base leading-relaxed text-fg2 mb-6 text-pretty">{t("about.description2")}</p>

      <p className="text-[13px] font-semibold text-muted mb-2.5">{t("about.focusOn")}</p>
      <div className="flex flex-wrap gap-2 mb-7">
        {focusAreas.map((area, index) => (
          <span key={index} className="chip px-3.5 py-[7px] text-[13px] font-medium rounded-full">
            {area}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2.5">
        <Link
          href="#projects"
          className="btn-primary h-11 px-[22px] inline-flex items-center text-[15px] font-semibold rounded-full hover:bg-primary-hover transition-colors"
        >
          {t("about.viewProjects")}
        </Link>
        <a
          href="/cv.pdf"
          download
          className="glass-strong h-11 px-5 inline-flex items-center gap-2 text-[15px] font-semibold rounded-full hover:bg-[var(--chip)] transition-colors"
        >
          <FontAwesomeIcon icon={faArrowDown} className="w-[13px] h-[13px]" />
          {t("about.cv")}
        </a>
        <div className="flex gap-2 ml-auto">
          <a
            href="https://github.com/lautaro-sabena"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass-strong w-11 h-11 grid place-items-center rounded-full hover:bg-[var(--chip)] transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="w-[19px] h-[19px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/lautarosabena/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass-strong w-11 h-11 grid place-items-center rounded-full hover:bg-[var(--chip)] transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-[19px] h-[19px]" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
