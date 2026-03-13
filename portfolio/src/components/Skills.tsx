"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    skills: ["C#", "TypeScript", "JavaScript", "Kotlin (Basic)"],
  },
  {
    name: "Backend",
    skills: ["ASP.NET Core", "REST APIs", "Node.js", "Entity Framework"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "SQL Server"],
  },
  {
    name: "Tools & Other",
    skills: ["Docker", "Git", "Linux", "Unity", "Real-time systems"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-600 text-sm">
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
