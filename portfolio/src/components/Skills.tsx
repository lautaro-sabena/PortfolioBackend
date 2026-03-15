"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faServer, 
  faDatabase, 
  faBox, 
  faListCheck,
  faHashtag 
} from "@fortawesome/free-solid-svg-icons";
import { 
  faJs, 
  faReact, 
  faNode, 
  faDocker, 
  faGit, 
  faGithub, 
  faBitbucket 
} from "@fortawesome/free-brands-svg-icons";

interface Skill {
  name: string;
  icon: any;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      { name: ".NET", icon: faCode },
      { name: "ASP.NET Core", icon: faServer },
      { name: "Node.js", icon: faNode },
      { name: "REST APIs", icon: faServer },
      { name: "WebSockets", icon: faServer },
      { name: "JWT", icon: faServer },
      { name: "C#", icon: faHashtag },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: faReact },
      { name: "Next.js", icon: faReact },
      { name: "HTML5", icon: faCode },
      { name: "CSS3", icon: faCode },
      { name: "TypeScript", icon: faCode },
      { name: "JavaScript", icon: faJs },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: faDatabase },
      { name: "MySQL", icon: faDatabase },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: faDocker },
      { name: "Git", icon: faGit },
      { name: "GitHub", icon: faGithub },
      { name: "Bitbucket", icon: faBitbucket },
      { name: "Jira", icon: faListCheck },
      { name: "Trello", icon: faListCheck },
    ],
  },
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
          Skills & Tools
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-xs font-medium text-foreground mb-3">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2 py-1 text-[11px] border border-border rounded text-muted"
                  >
                    <FontAwesomeIcon icon={skill.icon} className="w-3 h-3" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
