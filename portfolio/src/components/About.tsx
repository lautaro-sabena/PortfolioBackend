"use client";

import { motion } from "framer-motion";

const expertise = [
  "REST API Design",
  "Clean Architecture",
  "System Design",
  "PostgreSQL & EF Core",
  "Docker & DevOps",
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base text-muted leading-relaxed mb-8 max-w-2xl">
            After 4+ years optimizing real-time systems in Unity, I now focus on crafting 
            backend services that scale — applying the same rigor to API design and distributed architecture.
          </p>

          <div className="flex flex-wrap gap-2">
            {expertise.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs border border-border rounded-full text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
