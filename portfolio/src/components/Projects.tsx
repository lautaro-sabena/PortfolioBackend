"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects as projectsData } from "@/data/projects";
import { useTranslation } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useTranslation();
  
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
    <section id="projects" className="py-12 border-b border-border">
      <div className="max-w-2xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm font-medium tracking-widest uppercase text-muted mb-6"
        >
          {t("projects.title")}
        </motion.h2>

        <div className="space-y-5">
          {projectsData.map((project, index) => {
            const projectInfo = getProjectData(index);
            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="pb-5 border-b border-border/50 last:border-0"
              >
                <h3 className="text-base font-medium text-foreground mb-1">
                  {projectInfo.name}
                </h3>
                <p className="text-sm text-muted mb-3">
                  {projectInfo.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {projectInfo.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs text-muted bg-foreground/5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {projectInfo.github && (
                  <a
                    href={projectInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-foreground bg-background border border-foreground/20 rounded hover:border-foreground/50 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" />
                    {t("projects.source")}
                  </a>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
