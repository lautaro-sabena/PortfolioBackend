"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Backend",
    skills: ["ASP.NET Core", "REST APIs", "Node.js", "Entity Framework"],
  },
  {
    name: "Languages",
    skills: ["C#", "TypeScript", "JavaScript", "Kotlin"],
  },
  {
    name: "Data",
    skills: ["PostgreSQL", "SQL Server", "Redis"],
  },
  {
    name: "Tools",
    skills: ["Docker", "Git", "Linux", "Unity"],
  },
];

export default function Skills() {
  return (
    <section className="py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted">
            Skills &amp; Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-sm font-medium text-foreground mb-4">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
