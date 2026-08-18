import ath from "../assets/ath.JPG";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-16 flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">
        <img
          src={ath}
          alt="Somath"
          className="w-40 h-40 rounded-full object-cover mx-auto mb-8 border-4 border-accent"
        />
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
          Welcome
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-6">
          Hi, I&apos;m <span className="text-accent">Somath</span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-text-muted font-medium mb-6">
          Computer Science Student &amp; Aspiring Software Developer
        </h2>

        <p className="text-text-muted leading-relaxed max-w-xl mx-auto mb-10">
          A Year 3 Computer Science student passionate about building practical
          software solutions. I enjoy working across the stack &mdash; from
          designing backend APIs with Java and Spring Boot to crafting
          responsive interfaces with React.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-border text-text text-sm font-medium rounded-lg hover:bg-bg-card hover:text-heading transition-colors"
          >
            Contact Me
          </a>

          {/* Replace "#" with path to CV file when available */}
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-border text-text-muted text-sm font-medium rounded-lg hover:bg-bg-card hover:text-heading transition-colors"
            aria-label="Download CV (coming soon)"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
