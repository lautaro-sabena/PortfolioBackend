"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { projects as projectsData } from "@/data/projects";
import { useTranslation } from "@/context/LanguageContext";

const HUES = [255, 300, 190, 30];
const tile = (h: number) =>
  `linear-gradient(145deg, oklch(0.72 0.17 ${h}), oklch(0.55 0.19 ${h + 20}))`;

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
      live: original.live,
      wip: original.wip,
    };
  };

  return (
    <section id="projects" className="scroll-mt-24 flex flex-col gap-3">
      <h2 className="text-[22px] font-bold tracking-tight mt-3 mx-2 mb-0.5">{t("projects.title")}</h2>

      {projectsData.map((project, index) => {
        const projectInfo = getProjectData(index);
        return (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="glass px-[22px] pt-[22px] pb-5 rounded-[26px] hover:-translate-y-0.5 transition-transform"
          >
            <div className="flex items-start gap-3.5">
              <span
                className="flex-none w-12 h-12 rounded-[14px] grid place-items-center text-white text-xl font-bold shadow-[inset_0_1px_0_rgba(255,255,255,.45),0_4px_14px_rgba(0,0,0,.15)]"
                style={{ background: tile(HUES[index % HUES.length]) }}
              >
                {projectInfo.name[0]}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="flex flex-wrap items-center gap-2 text-lg font-semibold tracking-tight mt-0.5 mb-1">
                  {projectInfo.name}
                  {projectInfo.wip && (
                    <span className="px-[9px] py-[3px] text-[10.5px] font-semibold uppercase tracking-wider rounded-full bg-[oklch(0.8_0.14_75/.28)] border border-[oklch(0.8_0.14_75/.5)]">
                      {t("projects.wip")}
                    </span>
                  )}
                </h3>
                <p className="text-[14.5px] leading-[1.55] text-fg2 mb-3.5 text-pretty">{projectInfo.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {projectInfo.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-[9px] py-1 text-[11.5px] font-medium text-muted rounded-lg bg-[var(--chip)] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {projectInfo.github && (
                    <a
                      href={projectInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-strong h-9 px-3.5 inline-flex items-center gap-[7px] text-[13px] font-semibold rounded-full hover:bg-[var(--chip)] transition-colors"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" />
                      {t("projects.source")}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary h-9 px-3.5 inline-flex items-center gap-[7px] text-[13px] font-semibold rounded-full hover:bg-primary-hover transition-colors"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-[11px] h-[11px]" />
                      {t("projects.liveDemo")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        );
      })}
    </section>
  );
}
