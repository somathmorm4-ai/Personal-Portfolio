import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "samathmorm123@gmail.com",
    href: "mailto:samathmorm123@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "https://github.com/somathmorm4-ai",
    href: "https://github.com/somathmorm4-ai",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/somath-morm-262599323/",
    href: "https://www.linkedin.com/in/somath-morm-262599323/",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function validateForm(formData) {
  const errors = {};
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const message = formData.get("message")?.trim();

  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email";
  if (!message) errors.message = "Message is required";
  else if (message.length < 10)
    errors.message = "Message must be at least 10 characters";

  return errors;
}

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <section id="contact" className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-3">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-heading mb-8">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-text-muted leading-relaxed mb-6">
              I&apos;m currently looking for junior software developer roles. If
              you have an opportunity or just want to connect, feel free to
              reach out.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-muted hover:text-heading transition-colors group"
                >
                  <span className="text-accent">{link.icon}</span>
                  <div>
                    <p className="text-xs text-text-muted">{link.label}</p>
                    <p className="text-sm group-hover:text-heading transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-bg-card border border-border rounded-lg p-6 space-y-4"
          >
            {submitted && (
              <p className="text-accent text-sm bg-accent-dim border border-accent/20 rounded-md px-4 py-3">
                Thank you for your message! This is a demo form &mdash; no email
                was sent.
              </p>
            )}

            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm text-heading mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                className="w-full bg-bg border border-border rounded-md px-4 py-2.5 text-sm text-text placeholder-text-muted focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm text-heading mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                className="w-full bg-bg border border-border rounded-md px-4 py-2.5 text-sm text-text placeholder-text-muted focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm text-heading mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className="w-full bg-bg border border-border rounded-md px-4 py-2.5 text-sm text-text placeholder-text-muted focus:border-accent focus:outline-none transition-colors resize-y"
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-white text-sm font-medium rounded-md hover:bg-accent-hover transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
