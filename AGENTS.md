# AGENTS.md - AI Agent Guide for Portfolio Project

## Project Overview
This is a personal portfolio website for a Computer Science student named Somath. It's a single-page React application showcasing skills, projects, experience, education, and contact information.

## Tech Stack
- **Framework:** React 19 with Vite 8
- **Styling:** Tailwind CSS 4
- **Language:** JavaScript (JSX)
- **Build Tool:** Vite
- **Linting:** ESLint with React-specific plugins

## Project Structure
```
portfolio/
├── public/              # Static assets (favicon, icons)
├── src/
│   ├── assets/          # Images, SVGs
│   ├── components/      # React components (one per section)
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # App-level styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json
└── vite.config.js
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Code Conventions
- **Component Style:** Functional components with default exports
- **File Naming:** PascalCase for component files (e.g., `Hero.jsx`)
- **Component Naming:** PascalCase for component names
- **Styling:** Tailwind CSS utility classes (no CSS modules)
- **Imports:** Named imports for React, default imports for local components
- **Exports:** Default exports for components

## Component Pattern
Each component follows this structure:
```jsx
export default function ComponentName() {
  return (
    <section id="section-id" className="...">
      {/* Content */}
    </section>
  );
}
```

## Styling Guidelines
- Use Tailwind CSS utility classes exclusively
- Custom colors defined as CSS variables in `index.css`:
  - `--color-accent` / `--color-accent-hover`
  - `--color-heading`
  - `--color-text` / `--color-text-muted`
  - `--color-bg` / `--color-bg-card`
  - `--color-border`
- Responsive design using Tailwind prefixes (`sm:`, `md:`, `lg:`)
- Sections use `min-h-screen` for full viewport height

## Adding New Sections
1. Create a new component in `src/components/`
2. Add the component to `App.jsx` imports and render order
3. Add navigation link in `Navbar.jsx`
4. Use consistent section styling with `id` attribute for anchor links

## Accessibility
- Skip-to-content link is implemented in `App.jsx`
- Use semantic HTML (`section`, `nav`, `main`, etc.)
- Include `aria-label` for important interactive elements
- Ensure proper heading hierarchy (h1, h2, h3)

## Common Tasks
### Add a new project to Projects.jsx
```jsx
<div className="project-card">
  <h3>Project Name</h3>
  <p>Description</p>
  <div className="tech-tags">
    <span>React</span>
    <span>Tailwind</span>
  </div>
  <a href="#">View Project</a>
</div>
```

### Add a new skill to Skills.jsx
```jsx
<div className="skill-item">
  <span>Skill Name</span>
  <div className="skill-bar">
    <div className="skill-progress" style={{ width: '80%' }}></div>
  </div>
</div>
```

### Add a new experience to Experience.jsx
```jsx
<div className="experience-item">
  <h3>Job Title</h3>
  <p className="company">Company Name</p>
  <p className="date">Start - End</p>
  <ul>
    <li>Achievement 1</li>
    <li>Achievement 2</li>
  </ul>
</div>
```

## Notes for AI Agents
- Always maintain the existing code style and patterns
- Use Tailwind CSS classes, not inline styles
- Keep components simple and focused on a single responsibility
- Test responsive design at different breakpoints
- Ensure accessibility standards are met
- Run `npm run lint` after making changes
- Check that all imports are correct and components are properly exported
