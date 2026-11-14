# ReplyFlow

ReplyFlow is a frontend-only smart customer support inbox for managing tickets, conversations, customers, and agent preferences from one focused workspace.

## Features

- Dashboard with ticket volume, priority, and activity summaries
- Inbox search, status/priority filters, and configurable date sorting
- Ticket details with replies, internal notes, and editable status/priority
- Customer directory with derived ticket statistics and ticket history
- Persistent profile, inbox, and appearance preferences
- Light and dark application themes
- Responsive layout for desktop, tablet, and mobile screens
- Local ticket and preference persistence through `localStorage`

## Screenshots

Screenshots can be added here for portfolio presentation:

- `[Dashboard screenshot]`
- `[Inbox screenshot]`
- `[Ticket details screenshot]`
- `[Settings screenshot]`

## Tech stack

- React 19
- Vite
- JavaScript
- React Router
- Tailwind CSS v4
- Recharts
- Context API and browser `localStorage`

## Project structure

```text
src/
├── components/       Reusable layout, dashboard, customer, ticket, and UI components
├── context/          Ticket and application preference providers
├── data/             Seed ticket data
├── pages/            Route-level dashboard, inbox, ticket, customer, and settings views
├── App.jsx           Application routes
├── index.css         Tailwind entry point and theme tokens
└── main.jsx          Application bootstrap and providers
```

## Getting started

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Commands

```bash
npm run dev      # Start the development server
npm run lint     # Run Oxlint
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## Deployment

The project is configured as a standard Vite single-page application and has no required environment variables or server-only secrets.

To deploy with Vercel:

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into Vercel.
3. Use the detected Vite settings, or set the build command to `npm run build` and the output directory to `dist`.
4. Deploy.

For direct CLI deployment, install and authenticate with Vercel, then run:

```bash
npx vercel
npx vercel --prod
```

Because this is a client-side SPA, configure a rewrite to serve `index.html` for deep links if your hosting provider does not handle Vite history fallback automatically.

## Future improvements

- Connect tickets to a backend service
- Add authentication and role-based access
- Add automated tests and end-to-end route coverage
- Replace placeholder avatar handling with profile image uploads
- Add real-time team collaboration
