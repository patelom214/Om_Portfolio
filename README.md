# Om Patel — Developer Portfolio

A premium, animated developer portfolio built with React, Tailwind CSS, and Framer Motion.

## Tech stack
- React 19 + Vite
- Tailwind CSS 3
- Framer Motion (animations)
- React Icons

## Features
- Glassmorphism UI with an animated aurora-gradient background and canvas particles
- Custom cursor (desktop only — automatically disabled on touch devices)
- Typing animation through your roles in the hero
- Signature "developer.json" terminal card in the hero
- Dark / light mode toggle
- Scroll-reveal animations on every section
- Animated stats counter, skill progress bars, and timelines (education + experience)
- Project filter system by technology
- Contact form with inline validation
- Back-to-top button, loading screen, responsive down to mobile
- SEO meta tags (title, description, keywords, Open Graph, Twitter card)

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, or any static host.

### Deploying to Vercel
1. Push this folder to a GitHub repo.
2. Import the repo in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.

## Customizing content

Almost everything text-based lives in **`src/data.js`** — your name, roles, about text, education, skills, experience, projects, achievements, services, and testimonials. Edit that file and the whole site updates.

To change contact details, edit the `profile` object at the top of `src/data.js`:
- `email`, `phone`, `linkedin`, `github`, `resumeUrl`

### Adding your photo
The hero now shows a circular photo with an animated glow ring instead of the terminal card. Replace `public/profile-photo.jpg` with your own photo (same filename, or update `photoUrl` in `src/data.js` to match your file). Use a square-ish photo — it gets cropped into a circle automatically.

### Adding your resume
Drop your resume PDF into the `public/` folder (e.g. `public/resume.pdf`) and set:
```js
resumeUrl: '/resume.pdf'
```

### Adding your GitHub link
Update `github: 'https://github.com/your-username'` in `src/data.js`. The same link is used in the navbar, hero, footer, and contact section automatically.

### Project screenshots
Each project card currently shows a placeholder preview block. To use real screenshots, place images in `public/projects/` and swap the placeholder `<div>` in `src/components/Projects.jsx` for an `<img>` tag pointing at your image.

### Contact form
The form validates client-side but does not currently send email anywhere (there's no backend wired up). To make it functional, connect it to a form service like Formspree, EmailJS, or your own API endpoint inside the `handleSubmit` function in `src/components/Contact.jsx`.

## Project structure
```
src/
  data.js              # All editable content
  index.css            # Global styles, fonts, glass/gradient utilities
  App.jsx              # Page composition
  components/
    AuroraBackground.jsx
    CustomCursor.jsx
    LoadingScreen.jsx
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Education.jsx
    ServicesAchievements.jsx
    Testimonials.jsx
    Contact.jsx
    Footer.jsx
    BackToTop.jsx
    Reveal.jsx
    SectionHeading.jsx
```
