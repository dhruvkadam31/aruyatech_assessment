# Aruya Tech Assessment

A React + Vite onboarding dashboard for reviewing and approving machine listings.

## Project location

This project lives in `frontend/aruya_tech_assessment`.

## Prerequisites

- Node.js 18 or newer
- npm 10 or newer

## Install

From the project root directory (`frontend/aruya_tech_assessment`):

```bash
npm install
```

## Run locally

Start the development server with:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Dependencies

- `react` ^19.2.6
- `react-dom` ^19.2.6
- `react-router-dom` ^7.15.1
- `tailwindcss` ^4.3.0
- `@tailwindcss/vite` ^4.3.0
- `lucide-react` ^0.470.0

## Dev dependencies

- `vite` ^8.0.12
- `@vitejs/plugin-react` ^6.0.1
- `eslint` ^10.3.0
- `@eslint/js` ^10.0.1
- `eslint-plugin-react-hooks` ^7.1.1
- `eslint-plugin-react-refresh` ^0.5.2
- `globals` ^17.6.0
- `@types/react` ^19.2.14
- `@types/react-dom` ^19.2.3

## Project structure

- `src/main.jsx` - entry point
- `src/App.jsx` - app shell and routing
- `src/pages` - page-level views like `Listings` and `ProductView`
- `src/components` - reusable UI components
- `src/data/listings.js` - sample listing data

## Notes

- The app uses `react-router-dom` for page navigation.
- Images are loaded with lazy behavior and include descriptive `alt` text.
