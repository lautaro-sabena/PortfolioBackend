"use client";

import { motion } from "framer-motion";

const skillGroups = [
  { label: "Languages", skills: ["C#", "TypeScript", "Kotlin"] },
  { label: "Backend", skills: ["ASP.NET Core", "REST APIs", "EF Core"] },
  { label: "Data", skills: ["PostgreSQL", "SQL Server"] },
  { label: "Tools", skills: ["Docker", "Git", "Linux", "Unity"] },
];

export default function Skills() {
  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-medium tracking-widest uppercase text-muted mb-8"
        >
          Skills
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-xs font-medium text-foreground mb-2">
                {group.label}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {group.skills.join(", ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
