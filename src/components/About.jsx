export default function About() {
  return (
    <section id="about" className="py-20 px-6 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-3">
          About Me
        </p>
        <h2 className="text-3xl font-bold text-heading mb-8">
          A Bit About Myself
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              I&apos;m a Year 3 Computer Science student at Norton University
              with a strong interest in software development. I enjoy learning
              how systems work and building projects that solve real problems.
            </p>
            <p>
              My focus areas include backend development with Java and Spring
              Boot, frontend development with React, and working with relational
              databases. I&apos;m always looking for opportunities to apply what
              I learn through practical projects.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-bg-card border border-border rounded-lg p-5">
              <h3 className="text-heading font-medium text-sm mb-2">
                What I Enjoy
              </h3>
              <ul className="space-y-2 text-text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5" aria-hidden="true">
                    &#9654;
                  </span>
                  Building full-stack applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5" aria-hidden="true">
                    &#9654;
                  </span>
                  Designing and working with databases
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5" aria-hidden="true">
                    &#9654;
                  </span>
                  Learning backend frameworks and APIs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5" aria-hidden="true">
                    &#9654;
                  </span>
                  Creating responsive user interfaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
