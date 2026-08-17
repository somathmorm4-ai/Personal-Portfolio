const coursework = [
  "Advanced Java Programming",
  "Linux Network Administration",
  "Introduction to Cloud Computing",
  "Microsoft Azure Fundamentals",
  "Management Information Systems",
  "Database Systems",
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-3">
          Education
        </p>
        <h2 className="text-3xl font-bold text-heading mb-8">
          Academic Background
        </h2>

        <div className="bg-bg-card border border-border rounded-lg p-6">
          <div className="mb-5">
            <h3 className="text-heading font-semibold text-lg">
              Norton University
            </h3>
            <p className="text-text-muted text-sm">
              Bachelor of Science in Computer Science &mdash; Year 3
            </p>
          </div>

          <div>
            <h4 className="text-heading font-medium text-sm mb-3">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="text-xs px-3 py-1.5 bg-bg border border-border rounded-md text-text-muted"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
