# Repository Guidelines

## Project Structure & Module Organization

This repository contains a single Next.js app in `keithagreda/`. App Router pages, layouts, and global styles live in `keithagreda/src/app/`. Reusable UI components are in `keithagreda/src/app/components/`, with section-specific components grouped under folders such as `about/`, `experience/`, and `projects/`. Shared React hooks live in `keithagreda/src/hooks/`. Static assets, including project thumbnails and SVGs, belong in `keithagreda/public/` and should be referenced with root-relative paths such as `/trianglecentrecourt.webp`.

No dedicated test directory is currently present. Add tests near the feature or under a future `src/__tests__/` folder if test tooling is introduced.

## Build, Test, and Development Commands

Run commands from `keithagreda/`:

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

`npm run dev` starts the local Next.js development server with Turbopack. `npm run build` creates a production build and catches TypeScript, routing, and image usage issues. `npm run start` serves the production build after `npm run build`. `npm run lint` is configured in `package.json`, but verify it works with the installed Next.js version before relying on it in CI.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Components use PascalCase filenames and exports, for example `ProjectCard.tsx` and `ExperienceCard.tsx`. Hooks use camelCase with a `use` prefix, such as `useScrollFocus.ts`. CSS Modules use `*.module.css`; global styles stay in `src/app/globals.css`. Follow the existing two-space indentation style in TSX and keep component props typed with interfaces when shared.

## Testing Guidelines

There is no test framework configured yet. For now, validate changes with `npm run build` and focused manual checks in the browser. If tests are added, prefer React Testing Library for component behavior and name files `*.test.tsx` or `*.spec.tsx`.

## Commit & Pull Request Guidelines

Recent commits use short, imperative, lower-case summaries such as `ui changes` and `mobile responsive update`. Keep commits focused and descriptive. Pull requests should include a brief summary, screenshots for UI changes, affected routes or components, and any build or manual verification performed.

## Security & Configuration Tips

Do not commit secrets or local environment files. Keep public images in `public/`, and avoid linking private or unstable asset URLs directly from components.
