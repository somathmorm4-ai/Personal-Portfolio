const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "REST API", "JPA / Hibernate", "JDBC"],
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Swagger", "Linux"],
  },
  {
    title: "Cloud / Productivity",
    skills: ["Microsoft Azure Fundamentals", "Microsoft 365"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-3">
          Skills
        </p>
        <h2 className="text-3xl font-bold text-heading mb-8">
          Technologies I Work With
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-bg-card border border-border rounded-lg p-5 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-heading font-medium text-sm mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 bg-bg border border-border rounded-md text-text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
