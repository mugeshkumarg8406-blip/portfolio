# Mugeshkumar G — Portfolio (React)

A React + Vite version of the portfolio, with a working dark/light theme switch and
the interactive canvas dot-grid background.

## Structure

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx              # owns theme state, composes all sections
│   ├── index.css            # design tokens (dark + light), all component styles
│   └── components/
│       ├── DotGridBackground.jsx   # canvas engine, theme-aware
│       ├── ThemeToggle.jsx         # the dark/light switch
│       ├── TopBar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── TechStack.jsx
│       ├── Projects.jsx
│       ├── Internship.jsx
│       ├── Certifications.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
└── README.md
```

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally to check it
```

The output goes to `dist/` — deploy that folder to Netlify, Vercel, GitHub Pages, etc.

## How the theme switch works

- `App.jsx` holds `theme` state (`'dark'` | `'light'`) and toggles it via the switch
  in the top bar.
- On every change, a `useEffect` sets `document.documentElement.dataset.theme`, which
  flips the CSS custom properties defined in `src/index.css` (`:root` = dark,
  `html[data-theme="light"]` = light overrides). Every color in the app is driven by
  these variables, so the whole UI re-themes instantly.
- `DotGridBackground.jsx` receives the current `theme` as a prop and reads it through
  a ref inside its animation loop, so the dot color (light dots on dark / dark dots on
  light) updates live without restarting the canvas or dropping frames.
- Theme choice lives in React state only (no `localStorage`), so it resets to dark on
  reload. If you want it to persist across visits, wrap the `useState` initializer and
  the `useEffect` with `localStorage.getItem('theme')` / `setItem(...)`.

## Customize

| What | Where |
|---|---|
| Name, greeting, domain, hero buttons/socials | `src/components/Hero.jsx` |
| About copy | `src/components/About.jsx` |
| Tech stack pills | `src/components/TechStack.jsx` — `GROUPS` array |
| Projects | `src/components/Projects.jsx` — currently a placeholder |
| Internship entries | `src/components/Internship.jsx` — `ENTRIES` array |
| Certifications | `src/components/Certifications.jsx` — `CERTS` array |
| Contact email | `src/components/Contact.jsx` |
| Colors (both themes), spacing, type scale | `src/index.css` — `:root` and `html[data-theme="light"]` blocks |
| Dot-grid behavior | `src/components/DotGridBackground.jsx` — constants at the top |
| Resume file | Put `resume.pdf` in `public/` — the Resume button already points to `/resume.pdf` |
| Profile photo | Replace the placeholder `<svg>` in `Hero.jsx`'s `.hero-photo` with an `<img>` |
