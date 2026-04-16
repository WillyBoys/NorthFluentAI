# NorthFluent AI

NorthFluent AI is a beginner friendly AI education platform designed to help people understand what AI is, what AI does well, where AI falls short, and how to use it effectively and responsibly.

This repository is intended to support the first MVP version of the platform.

## Purpose

The goal of NorthFluent AI is to help beginners become fluent in AI, not dependent on it.

The site should help users answer questions like:

- What is AI and how does it work at a basic level?
- What can AI help me do in real life?
- Where does AI fail or need human oversight?
- How do I write better prompts and use AI more effectively?
- How can I use AI responsibly in school, work, and creative projects?

## MVP Scope

This first version should stay small, polished, and useful.

Core pages:

- Home
- AI Basics
- Prompt Better
- Strengths and Limits
- About
- Prompt Improver Tool

Optional later additions:

- Beginner Quiz
- Before and after prompt examples
- Recommended AI tools page
- Real world examples section

Do not add yet:

- User accounts
- Payments
- Dashboards
- Community features
- Complex backend systems

## Tech Stack Assumptions

This project is currently structured for:

- React
- Vite
- TypeScript
- Simple CSS or lightweight styling

Keep the initial architecture simple. Prioritize a clean front end and static educational content first.

## Design and Product Rules

When building NorthFluent AI, follow these priorities:

1. Clarity over complexity
2. Usefulness over hype
3. Honesty over marketing language
4. Scalability over one off work
5. Polished MVP over oversized ambition

The tone should be:

- Clear
- Practical
- Honest
- Beginner friendly
- Encouraging
- Professional

## Primary Navigation

The main navigation should be:

- Home
- AI Basics
- Prompt Better
- Strengths and Limits
- About
- Try the Tool

## Recommended User Flow

Primary learning path:

Home → AI Basics → Prompt Better → Prompt Improver Tool

Secondary learning path:

Home → Strengths and Limits → About

## Project Structure

```text
.
├── AGENTS.md
├── PROJECT_OVERVIEW.md
├── CONTENT_PLAN.md
├── ROADMAP.md
├── README.md
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── components/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── AIBasics.tsx
    │   ├── PromptBetter.tsx
    │   ├── StrengthsAndLimits.tsx
    │   ├── About.tsx
    │   └── PromptImprover.tsx
    └── styles/
        └── global.css
```

As the project grows, it is reasonable to add:

```text
src/
  data/
  assets/
  hooks/
  utils/
```

## Content Intent by Page

### Home

Purpose:
Introduce NorthFluent AI, explain why it exists, and guide users into the most useful sections.

Should include:

- Hero section with name, tagline, and short mission statement
- Primary call to action to start learning
- Secondary call to action to try the Prompt Improver Tool
- Overview of what NorthFluent AI teaches
- Why AI literacy matters
- Featured learning cards
- Tool preview

### AI Basics

Purpose:
Teach what AI is in simple language.

Should include:

- What AI is
- What machine learning is
- What generative AI is
- How AI produces answers or predictions
- Real world beginner examples
- A transition to Prompt Better

### Prompt Better

Purpose:
Teach beginners how to write better prompts.

Should include:

- Why prompt quality matters
- A simple prompt formula
- Weak and improved examples
- Common prompting mistakes
- A call to try the Prompt Improver Tool

### Strengths and Limits

Purpose:
Give a balanced and honest view of AI.

Should include:

- What AI does well
- Where AI struggles
- Why human oversight matters
- Privacy, bias, and fact checking reminders

### About

Purpose:
Explain the mission, audience, and future direction.

Should include:

- Who the platform is for
- Mission and brand promise
- What makes NorthFluent AI different
- Long term vision

### Prompt Improver Tool

Purpose:
Provide an immediately useful interactive feature.

Should include:

- Input area for a rough prompt
- Improve button
- Improved prompt output
- Optional explanation of why the revision is better
- Example starter prompts

## Local Development

If this repository is being used as a Vite app, the standard setup is:

```bash
npm install
npm run dev
```

Typical additional commands:

```bash
npm run build
npm run preview
```

## Prompt Improver API Setup

The Prompt Improver can use a server side Gemini API route at:

```text
/api/improve-prompt
```

Required environment variables:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

Optional environment variable:

```bash
GEMINI_MODEL=gemini-2.5-flash
```

For Vercel deployment, keep the serverless function in the root `api/` folder.
The frontend uses `HashRouter`, so no SPA rewrite file is required for Vercel.
That keeps the Vite app and the `/api` function simple to run together.

For local full stack testing, use the normal Vite dev server:

```bash
npm run dev
```

During local development, Vite now includes a small dev middleware for:

```text
/api/improve-prompt
```

That means the Prompt Improver works locally through `npm run dev`, while the
root `api/` folder is still used by Vercel in deployment.

## GitHub Pages Deployment

This project is prepared for GitHub Pages as a static Vite site.

Important limitation:

GitHub Pages cannot run server side functions. The educational pages will work
on GitHub Pages, but the Gemini-powered Prompt Improver endpoint at
`/api/improve-prompt` requires a server runtime. For the Prompt Improver, use
local development with `npm run dev` or deploy to a platform that supports
server functions, such as Vercel.

To deploy the static site on GitHub Pages:

1. Push the project to a GitHub repository.
2. In GitHub, open the repository settings.
3. Go to `Pages`.
4. Set `Build and deployment` to `GitHub Actions`.
5. Push to the `main` branch.

The workflow file is located at:

```text
.github/workflows/deploy-pages.yml
```

Do not commit real API keys. Keep real secrets in `.env.local` locally, or in
your deployment platform's secret/environment variable settings.

If the Vite project has not been initialized yet, create it first and then copy the provided files into the generated project structure.

Example:

```bash
npm create vite@latest northfluent-ai -- --template react-ts
cd northfluent-ai
npm install
```

Then place the project files into the generated folder and continue building from there.

## Build Expectations for Codex

Codex should follow these expectations:

- Preserve the beginner friendly educational mission
- Keep the MVP small and polished
- Do not add backend complexity unless explicitly requested
- Do not add authentication, payments, or dashboards
- Write simple, readable React components
- Prefer modular components over one massive page file
- Keep copy clear and non technical unless a concept is being explained simply
- Make calls to action clear and useful
- Keep the site scalable for future lessons and tools

## Accessibility Expectations

All pages should aim for:

- Clear heading hierarchy
- Good color contrast
- Readable text spacing and font sizing
- Buttons and links with clear labels
- Inputs with visible labels
- Responsive layout for desktop and mobile

## Suggested Next Steps

Recommended implementation order:

1. Create or confirm the Vite React TypeScript app
2. Build the Navbar and Footer
3. Build the Home page
4. Build the AI Basics page
5. Build the Prompt Better page
6. Build the Strengths and Limits page
7. Build the About page
8. Build the Prompt Improver Tool page
9. Refine styling and spacing
10. Add optional enhancements only after the MVP is polished

## Source of Truth

Use these files together:

- `AGENTS.md` for behavior and implementation guardrails
- `PROJECT_OVERVIEW.md` for mission, audience, and product identity
- `CONTENT_PLAN.md` for page content direction and teaching goals
- `ROADMAP.md` for scope and future phases
- `README.md` for setup, project expectations, and local development

## Notes for Future Expansion

Possible future areas after the MVP:

- More lessons and examples
- AI for students
- AI for job seekers
- AI for creators
- AI for small business
- Downloadable resources
- Premium guides or courses
- Newsletter or workshops

These should only be explored after the first version is clean, useful, and complete.
