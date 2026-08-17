const experiences = [
  {
    role: "Data Entry Officer",
    company: "[Company Name]",
    period: "[Start Date] &ndash; [End Date]",
    responsibilities: [
      "Data entry and data management",
      "Ensuring information accuracy and consistency",
      "Administrative support using Microsoft Office / Microsoft 365",
      "Maintaining organized and up-to-date records",
    ],
  },
  {
    role: "Admin &amp; HR Intern",
    company: "[Company Name]",
    period: "[Start Date] &ndash; [End Date]",
    responsibilities: [
      "Providing administrative support to teams",
      "Document management and filing",
      "Data entry and record keeping",
      "Coordination of HR-related administrative tasks",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-bg-secondary scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-3">
          Experience
        </p>
        <h2 className="text-3xl font-bold text-heading mb-8">
          Where I&apos;ve Worked
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <article
              key={exp.role}
              className="bg-bg-card border border-border rounded-lg p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-heading font-semibold text-lg">
                    {exp.role}
                  </h3>
                  <p className="text-accent text-sm">{exp.company}</p>
                </div>
                <p
                  className="text-text-muted text-sm mt-1 sm:mt-0 sm:text-right"
                  dangerouslySetInnerHTML={{ __html: exp.period }}
                />
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-text-muted text-sm"
                  >
                    <span
                      className="text-accent mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      &#9654;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
