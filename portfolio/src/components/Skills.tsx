"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faDatabase,
  faListCheck,
  faHashtag,
  faLayerGroup,
  faVial,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faReact,
  faNode,
  faDocker,
  faGit,
  faGithub,
  faBitbucket,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "@/context/LanguageContext";

interface Skill {
  name: string;
  icon: IconDefinition;
}

interface SkillCategory {
  nameKey: string;
  icon: IconDefinition;
  hue: number;
  skills: Skill[];
}

const tile = (h: number) =>
  `linear-gradient(145deg, oklch(0.72 0.17 ${h}), oklch(0.55 0.19 ${h + 20}))`;

const skillCategories: SkillCategory[] = [
  {
    nameKey: "skills.categories.backend",
    icon: faServer,
    hue: 255,
    skills: [
      { name: ".NET", icon: faCode },
      { name: "ASP.NET Core", icon: faServer },
      { name: "Node.js", icon: faNode },
      { name: "NestJS", icon: faServer },
      { name: "Prisma", icon: faDatabase },
      { name: "EF Core", icon: faDatabase },
      { name: "REST APIs", icon: faServer },
      { name: "WebSockets", icon: faServer },
      { name: "JWT", icon: faServer },
      { name: "C#", icon: faHashtag },
    ],
  },
  {
    nameKey: "skills.categories.frontend",
    icon: faReact,
    hue: 200,
    skills: [
      { name: "React", icon: faReact },
      { name: "Next.js", icon: faReact },
      { name: "HTML5", icon: faCode },
      { name: "CSS3", icon: faCode },
      { name: "Tailwind CSS", icon: faCode },
      { name: "TypeScript", icon: faCode },
      { name: "JavaScript", icon: faJs },
    ],
  },
  {
    nameKey: "skills.categories.databases",
    icon: faDatabase,
    hue: 150,
    skills: [
      { name: "PostgreSQL", icon: faDatabase },
      { name: "MySQL", icon: faDatabase },
    ],
  },
  {
    nameKey: "skills.categories.devops",
    icon: faLayerGroup,
    hue: 30,
    skills: [
      { name: "Docker", icon: faDocker },
      { name: "Git", icon: faGit },
      { name: "GitHub", icon: faGithub },
      { name: "GitHub Actions", icon: faGithub },
      { name: "Turborepo", icon: faLayerGroup },
      { name: "Jest", icon: faVial },
      { name: "Bitbucket", icon: faBitbucket },
      { name: "Jira", icon: faListCheck },
      { name: "Trello", icon: faListCheck },
    ],
  },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-[22px] font-bold tracking-tight mt-3 mx-2 mb-0.5">{t("skills.title")}</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-3">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.nameKey}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="glass p-5 rounded-[26px]"
          >
            <div className="flex items-center gap-2.5 mb-3.5">
              <span
                className="w-8 h-8 rounded-[10px] grid place-items-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,.4)]"
                style={{ background: tile(category.hue) }}
              >
                <FontAwesomeIcon icon={category.icon} className="w-3.5 h-3.5" />
              </span>
              <h3 className="text-base font-semibold tracking-tight">{t(category.nameKey)}</h3>
              <span className="ml-auto text-xs font-medium text-muted font-mono">
                {String(category.skills.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="chip inline-flex items-center gap-1.5 px-[11px] py-1.5 text-[12.5px] font-medium rounded-full"
                >
                  <FontAwesomeIcon icon={skill.icon} className="w-[11px] h-[11px] text-muted" />
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
