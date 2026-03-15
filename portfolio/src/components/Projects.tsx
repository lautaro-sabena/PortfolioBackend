"use client";

import { motion } from "framer-motion";
import { projects as projectsData } from "@/data/projects";
import { useTranslation } from "@/context/LanguageContext";

export default function Projects() {
  const { t, language } = useTranslation();
  
  const projectList = t("projects.list") as unknown as Array<{
    name: string;
    description: string;
  }>;

  const getProjectData = (index: number) => {
    const translated = projectList?.[index];
    const original = projectsData[index];
    return {
      name: translated?.name || original.name,
      description: translated?.description || original.description,
      technologies: original.technologies,
      github: original.github,
    };
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-medium tracking-widest uppercase text-muted mb-8"
        >
          {t("projects.title")}
        </motion.h2>

        <div className="space-y-4">
          {projectsData.map((project, index) => {
            const projectInfo = getProjectData(index);
            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group border-b border-border py-5 hover:border-foreground/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-foreground mb-1">
                      {projectInfo.name}
                    </h3>
                    <p className="text-sm text-muted mb-2 max-w-xl">
                      {projectInfo.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {projectInfo.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] text-muted bg-foreground/5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-2 sm:mt-0 sm:ml-4">
                    {projectInfo.github && (
                      <a
                        href={projectInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted hover:text-foreground transition-colors"
                      >
                        {t("projects.source")}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
