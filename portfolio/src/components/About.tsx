"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function About() {
  const { t } = useTranslation();

  const focusAreas = t("about.focusAreas") as unknown as string[];

  return (
    <section id="about" className="py-12 border-b border-border">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium tracking-wider uppercase text-foreground/60 border border-border rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              {t("about.available")}
            </span>
          </div>

          <p className="text-base text-muted leading-relaxed mb-4">
            {t("about.description1")}
          </p>

          <p className="text-base text-muted leading-relaxed mb-5">
            {t("about.description2")}
          </p>

          <div>
            <p className="text-sm text-muted mb-3">{t("about.focusOn")}</p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-xs border border-border rounded-full text-muted"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
