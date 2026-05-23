# Kanak Tekwani Portfolio

Professional 3D portfolio for Kanak Tekwani, a software engineer focused on
backend systems, cloud infrastructure, AI-enabled applications, and automation.

Live site: https://kanaktekwani.github.io/portfolio/

## Highlights

- Full-screen 3D character scene built with Three.js and React Three Fiber.
- GSAP-powered intro, scroll, and section transitions.
- Responsive sections for background, skills, career trajectory, featured work,
  and contact.
- Featured project carousel covering AI voice verification, LLM video search,
  and cloud infrastructure automation.
- Custom cursor, animated social rail, and interactive technology stack.

## Tech Stack

- React 18
- TypeScript
- Vite
- Three.js / React Three Fiber
- GSAP
- GitHub Pages

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

For GitHub Pages:

```bash
npm run build:pages
```

## Project Structure

- `src/components/` - Portfolio sections and interactive UI.
- `src/components/Character/` - 3D scene setup, lighting, animation, and model
  loading.
- `src/components/styles/` - Component-level styles.
- `public/` - Static assets, encrypted model files, Draco decoder, and images.

## Repository Purpose

This repository is the source for my resume-facing portfolio site. It is meant
to show front-end polish while highlighting the backend, AI, and cloud systems I
build.
