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
    description: "Task management REST API built with ASP.NET Core, implementing JWT authentication, layered architecture, and Docker deployment.",
    technologies: ["ASP.NET Core", "EF Core", "PostgreSQL", "Docker"],
    github: "https://github.com",
  },
  {
    name: "BookingHub API",
    description: "Multi-tenant SaaS booking system with scheduling validation, role-based access, and business logic for appointment management.",
    technologies: ["ASP.NET Core", "PostgreSQL", "Clean Architecture", "Docker"],
    github: "https://github.com",
  },
  {
    name: "Unity Real-Time Systems",
    description: "Collection of performance-oriented real-time applications developed in Unity and C#.",
    technologies: ["Unity", "C#", "Real-time architecture"],
    github: "https://github.com",
  },
];
