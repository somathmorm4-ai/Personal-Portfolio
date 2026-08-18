const projects = [
  {
    title: "AI Perfume Shop Assistant",
    description:
      "An AI-powered perfume shopping application where users can browse perfume products and receive AI-driven product recommendations.",
    technologies: ["React", "Vite", "JavaScript", "Spring Boot", "MySQL"],
    // github: "#",
    // demo: "#",
  },
  {
    title: "Hotel Management System",
    description:
      "A hotel management web application for managing bookings, guests, and room operations.",
    technologies: ["PHP", "MySQL", "XAMPP"],
    // github: "#",
    // demo: null,
  },
  {
    title: "Spring Boot POS System",
    description:
      "A backend POS system for managing categories, products, tables, cashiers, and orders.",
    technologies: [
      "Java",
      "Spring Boot",
      "JDBC / JPA",
      "PostgreSQL",
      "Swagger",
    ],
    // github: "#",
    // demo: null,
  },
  {
    title: "University Library System",
    description:
      "A university library management application for tracking books, members, and borrowing records.",
    technologies: ["Java", "Java Swing", "Database"],
    // github: "#",
    // demo: null,
  },
];

function ProjectCard({ project }) {
  return (
    <article className="bg-bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors">
      <h3 className="text-heading font-semibold text-lg mb-3">
        {project.title}
      </h3>

      <p className="text-text-muted text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 bg-accent-dim border border-accent/20 rounded-md text-accent"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-3">
          Projects
        </p>
        <h2 className="text-3xl font-bold text-heading mb-8">
          Things I&apos;ve Built
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
