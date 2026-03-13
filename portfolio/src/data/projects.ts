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
    description: "RESTful task management API with JWT authentication, role-based access control, and containerized deployment. Implements layered architecture with clean separation of concerns.",
    technologies: ["ASP.NET Core", "EF Core", "PostgreSQL", "Docker", "JWT"],
    github: "https://github.com/lautaro-sabena/TaskFlowAPI",
  },
  {
    name: "BookingHub API",
    description: "Multi-tenant booking platform with scheduling validation, business rules engine, and role-based access. Built with domain-driven design principles.",
    technologies: ["ASP.NET Core", "PostgreSQL", "Clean Architecture", "Docker"],
    github: "https://github.com/lautaro-sabena/BookingHubAPI",
  },
  {
    name: "Unity Real-Time Systems",
    description: "Performance-optimized real-time applications including game engines, physics simulations, and networked multiplayer systems. Deep focus on memory management and latency reduction.",
    technologies: ["Unity", "C#", "Real-time Architecture", "Performance"],
    github: "https://github.com/lautaro-sabena",
  },
];
