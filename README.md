# Ciano Webs

Marketing and portfolio site for Ciano Webs, a custom web development
studio. Built as a single page React application with a dedicated
route for the privacy policy.

Live site: https://ciano-webs.vercel.app

## Tech stack

- React 19
- Vite 8
- React Router 7
- EmailJS (contact form delivery, no custom backend)
- Plain CSS with design tokens (no CSS framework)

## Getting started

Requires Node 20.19 or newer (or Node 22.13+), matching the engine
requirement of the Vite version used here.

```bash
npm install
npm run dev
```

The dev server starts on the default Vite port and supports hot
module reloading.

## Available scripts

| Command           | What it does                                     |
|--------------------|---------------------------------------------------|
| `npm run dev`      | Starts the local development server                |
| `npm run build`    | Builds the production bundle into `dist`            |
| `npm run preview`  | Serves the production build locally for a check     |
| `npm run lint`     | Runs ESLint across the project                      |

## Project structure

```
src/
  components/     Page sections and route components
  hooks/          Reusable custom hooks (typewriter, custom cursor)
  data/           Static data, currently the portfolio project list
  styles/         Global stylesheet and design tokens
```

Each component in `src/components` is documented at the top of its
file with a short description of what it renders and why, so start
there when exploring the codebase.

## Environment and third party services

The contact form uses EmailJS to deliver messages without a custom
backend. The service ID, template ID, and public key used in
`Contact.jsx` are public facing values meant for client side code,
so they are not treated as secrets and are not stored in an `.env`
file.

## Content security policy

`vercel.json` defines a strict Content Security Policy for the
deployed site. If a new portfolio project is added to
`src/data/projects.js`, its domain must also be added to the
`frame-src` directive in `vercel.json`, otherwise the embedded live
preview iframe on the Portfolio section will be blocked by the
browser.

## Accessibility

The project follows several accessibility practices throughout:
a skip link on the main page, `aria-label` and `aria-live` usage on
interactive elements and form feedback, `aria-hidden` on purely
decorative elements, and visible focus states for keyboard users.
When adding new interactive UI, follow the same patterns already
present in the existing components.

## Deployment

The project deploys to Vercel. `vercel.json` handles client side
route rewrites for React Router and defines the security headers
sent with every response.