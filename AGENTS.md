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

## Git Commands for Daily Use

### Check Status & History
- `git status` - Check current status (modified, staged, untracked files)
- `git log --oneline -10` - View last 10 commits
- `git diff` - See unstaged changes
- `git diff --staged` - See staged changes

### Staging & Committing
- `git add <file>` - Stage specific file
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit with message
- `git commit --amend` - Amend last commit (message or files)

### Branching
- `git branch` - List local branches
- `git branch <name>` - Create new branch
- `git checkout <branch>` - Switch branch
- `git checkout -b <branch>` - Create and switch to new branch
- `git branch -d <branch>` - Delete branch

### Remote & Push
- `git remote -v` - Check remote connections
- `git push origin <branch>` - Push to remote
- `git pull` - Pull latest changes
- `git fetch` - Fetch remote updates without merging

### Undoing Changes
- `git restore <file>` - Discard changes in file
- `git reset HEAD <file>` - Unstage a file
- `git reset --soft HEAD~1` - Undo last commit, keep changes staged
- `git reset --hard HEAD~1` - Undo last commit and all changes

### Stashing (Save Work Temporarily)
- `git stash` - Stash current changes (work in progress)
- `git stash save "description"` - Stash with a message
- `git stash list` - List all stashes
- `git stash pop` - Apply and remove latest stash
- `git stash apply` - Apply latest stash without removing
- `git stash drop` - Delete latest stash
- `git stash clear` - Delete all stashes

### Important Notes Before Push
- Always `git pull` before pushing to avoid conflicts
- Run `npm run lint` before committing
- Run `npm run build` to verify production build works
- Write clear, descriptive commit messages
- Never commit secrets, API keys, or sensitive data
- Check `git status` before every commit

### Pre-Push Checklist
1. `git status` - Ensure clean or expected state
2. `npm run lint` - Fix any lint errors
3. `npm run build` - Verify production build works
4. `git diff` - Review all changes before staging
5. `git log --oneline -5` - Confirm commit history looks correct
6. `git pull origin main` - Sync with remote before pushing

### Important Notes for Storing Changes
- **Always pull before push** - Avoid merge conflicts by pulling latest changes first
- **Commit often** - Small, frequent commits are easier to track and revert
- **Use stash for quick context switches** - Save WIP without committing incomplete work
- **Never force push to main** - Use `--force` only on personal feature branches
- **Check `.gitignore`** - Ensure `node_modules`, `.env`, and build artifacts are ignored
- **Stage selectively** - Use `git add <file>` instead of `git add .` for precise control
- **Write meaningful commit messages** - Describe what changed and why, not just "update"
- **Review before commit** - Use `git diff` to double-check staged changes
- **Backup before reset** - Create a branch before `git reset --hard` to preserve work

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
    <div className="skill-progress" style={{ width: "80%" }}></div>
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

## Future Updates

- [ ] Add GitHub and Live Demo links to Projects.jsx (uncomment fields and add conditional rendering in ProjectCard)
- [ ] Update `og:url` in `index.html` with actual deployed URL
- [ ] Add a real backend or form service to Contact.jsx form (currently demo only, no email sent)
- [ ] Update CV file in `public/CV.pdf` when new version is available
- [ ] Add more projects as they are completed
- [ ] Update skills list in Skills.jsx as new technologies are learned
- [ ] Add work experience entries to Experience.jsx as career progresses
