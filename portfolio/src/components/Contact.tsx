"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

const inputCls =
  "border-0 bg-transparent text-[15px] text-foreground placeholder:text-muted/60 outline-none py-3.5 min-w-0";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="glass scroll-mt-24 rounded-[32px] px-6 pt-8 pb-6"
    >
      <div className="text-center mb-[22px]">
        <h2 className="text-[26px] font-bold tracking-tight mb-1.5">{t("contact.title")}</h2>
        <p className="text-[15px] text-muted">{t("contact.subtitle")}</p>
      </div>

      <form action="https://formspree.io/f/mjgaakkv" method="POST" className="flex flex-col gap-3.5">
        <div className="chip rounded-[18px] overflow-hidden">
          <label className="grid grid-cols-[88px_1fr] items-center min-h-[50px] px-4 border-b">
            <span className="text-[15px] font-medium">{t("contact.name")}</span>
            <input type="text" name="name" required placeholder={t("contact.namePlaceholder")} className={inputCls} />
          </label>
          <label className="grid grid-cols-[88px_1fr] items-center min-h-[50px] px-4 border-b">
            <span className="text-[15px] font-medium">{t("contact.email")}</span>
            <input type="email" name="email" required placeholder={t("contact.emailPlaceholder")} className={inputCls} />
          </label>
          <label className="flex flex-col gap-1.5 px-4 py-3.5">
            <span className="text-[15px] font-medium">{t("contact.message")}</span>
            <textarea
              name="message"
              rows={4}
              required
              placeholder={t("contact.messagePlaceholder")}
              className="border-0 bg-transparent text-[15px] leading-normal text-foreground placeholder:text-muted/60 outline-none resize-none"
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn-primary h-[50px] rounded-full text-base font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
        >
          {t("contact.send")}
        </button>
      </form>
    </motion.section>
  );
}
