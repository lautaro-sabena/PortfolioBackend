export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    name: "TaskFlow API",
    description: "REST API built with ASP.NET Core implementing JWT authentication, modular architecture and containerized deployment.",
    technologies: ["ASP.NET Core", "EF Core", "PostgreSQL", "Docker", "JWT"],
    github: "https://github.com/lautaro-sabena/TaskFlowAPI",
  },
  {
    name: "BookingHub",
    description: "Fullstack booking platform with scheduling logic, REST API backend and React frontend interface.",
    technologies: ["ASP.NET Core", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/lautaro-sabena/BookingHubAPI",
  },
  {
    name: "Developer Portfolio",
    description: "Modern developer portfolio built with Next.js and TailwindCSS focusing on performance and minimal design.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/lautaro-sabena/portfolio",
  },
];
