const projects = [
  {
    title: "AI Perfume Shop Assistant",
    description:
      "An AI-powered perfume shopping application where users can browse perfume products and receive AI-driven product recommendations.",
    technologies: ["React", "Vite", "JavaScript", "Spring Boot", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Hotel Management System",
    description:
      "A hotel management web application for managing bookings, guests, and room operations.",
    technologies: ["PHP", "MySQL", "XAMPP"],
    github: "#",
    demo: null,
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
    github: "#",
    demo: null,
  },
  {
    title: "University Library System",
    description:
      "A university library management application for tracking books, members, and borrowing records.",
    technologies: ["Java", "Java Swing", "Database"],
    github: "#",
    demo: null,
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

      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 bg-accent-dim border border-accent/20 rounded-md text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm text-text border border-border rounded-md hover:bg-bg-card-hover hover:text-heading transition-colors"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white bg-accent rounded-md hover:bg-accent-hover transition-colors"
            aria-label={`View ${project.title} live demo`}
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
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
