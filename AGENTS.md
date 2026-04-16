# AGENTS.md

## Project Identity

**Project Name:** NorthFluent AI

**Core Purpose:**
NorthFluent AI is a beginner friendly AI education platform designed to help people understand what AI is, what it does well, where it falls short, and how to use it effectively and responsibly.

**Long Term Goal:**
Build a simple but scalable platform that teaches AI literacy through practical lessons, examples, tools, and real world use cases.

**Target Audience:**
Beginners to AI, especially students, job seekers, professionals, and curious learners who want a clear and honest introduction to AI.

## Core Mission

NorthFluent AI should help users answer these questions:

1. What is AI and how does it work at a basic level?
2. What can AI help me do in real life?
3. Where does AI fail or need human oversight?
4. How do I write better prompts and use AI more effectively?
5. How can I use AI responsibly in school, work, and creative projects?

## Non Negotiable Product Principles

When building NorthFluent AI, always prioritize these in order:

1. Clarity over complexity
2. Usefulness over hype
3. Honesty over marketing language
4. Scalability over one off work
5. Polished MVP over oversized ambition

## Brand Positioning

**Tone:**
Clear, practical, honest, beginner friendly, encouraging, and professional.

**What makes NorthFluent AI different:**
It does not simply promote AI as exciting. It teaches both the possibilities and the shortcomings so beginners can build real confidence and judgment.

**Brand Promise:**
Help beginners become fluent in AI, not dependent on it.

**Approved tagline ideas:**
- Helping beginners become fluent in AI
- Learn what AI does well, where it falls short, and how to use it better
- Beginner friendly AI learning, tools, and guidance

## MVP Product Scope

The first version of NorthFluent AI must stay intentionally small.

### Required Core Pages

1. Home
2. AI Basics
3. Prompt Better
4. Strengths and Limits
5. About
6. Prompt Improver Tool

### Optional Small Features

These may be added only if time and quality allow:
- Beginner AI quiz
- Before and after prompt examples
- Recommended AI tools page
- Real world examples section

### Explicitly Out of Scope for MVP

Do not build these in the first version:
- User accounts
- Payments
- Full dashboards
- Community features
- Complex backend systems
- Large CMS setups
- Overly advanced AI integrations

## Required Information Architecture

### Primary Navigation

Use this top navigation for the MVP:
- Home
- AI Basics
- Prompt Better
- Strengths and Limits
- About
- Try the Tool

### Preferred User Flow

Primary learning path:
Home → AI Basics → Prompt Better → Prompt Improver Tool

Secondary learning path:
Home → Strengths and Limits → About

## Page by Page Requirements

### 1. Home

**Purpose:** Introduce NorthFluent AI, explain its value, and direct users into the educational content and interactive tool.

**Required sections:**
- Hero section with project name, tagline, mission statement, and clear call to action
- What NorthFluent AI teaches
- Why AI literacy matters
- Featured learning paths or cards
- Prompt Improver Tool preview
- Footer with quick links and project attribution

**Primary CTA:** Start Learning
**Secondary CTA:** Try the Prompt Improver

### 2. AI Basics

**Purpose:** Explain AI in simple, beginner friendly language.

**Required sections:**
- What AI is
- What machine learning is
- What generative AI is
- How AI creates predictions or outputs
- Real world beginner examples
- Transition to Prompt Better page

### 3. Prompt Better

**Purpose:** Teach users how to write better prompts.

**Required sections:**
- Why better prompts matter
- What makes a strong prompt
- Prompt formula: Task + Context + Details + Desired Output
- Before and after examples
- Common mistakes beginners make
- CTA to Prompt Improver Tool

### 4. Strengths and Limits

**Purpose:** Present a balanced view of AI capabilities and shortcomings.

**Required sections:**
- What AI does well
- Where AI struggles
- Why human oversight matters
- Fact checking, privacy, and bias awareness
- Closing CTA or next learning step

### 5. About

**Purpose:** Explain the vision, audience, and long term direction of NorthFluent AI.

**Required sections:**
- Who the platform is for
- Mission statement
- What makes NorthFluent AI different
- Future vision and growth direction

### 6. Prompt Improver Tool

**Purpose:** Give users a simple, practical AI related feature they can use immediately.

**Required elements:**
- Tool intro text
- Prompt input textarea
- Improve Prompt action button
- Improved prompt output area
- Optional explanation of why the improved prompt is better
- Optional prompt starter examples

## UX and Design Guidance

### Visual Style

The design should feel:
- Clean
- Modern
- Beginner friendly
- Professional
- Uncluttered

Avoid overly futuristic AI clichés, visual noise, or overly technical interfaces.

### UX Rules

- Make navigation obvious
- Keep reading sections short and scannable
- Use simple headings
- Use strong whitespace and card based layouts where helpful
- Avoid overwhelming beginners with dense technical language
- Every page should have one clear next step

### Content Voice

All writing should be:
- Clear
- Honest
- Friendly
- Direct
- Non academic in tone, unless needed
- Educational without sounding condescending

Do not write like a hype driven startup landing page.
Do not overpromise what AI can do.
Do not imply AI replaces human thinking.

## Technical Guidance for Codex

### Recommended Stack

Use:
- React
- Vite
- TypeScript
- Simple CSS or a lightweight styling approach

Keep the setup easy to maintain and easy for a student project to demo.

### Recommended Project Structure

```text
src/
  components/
  pages/
  data/
  assets/
  styles/
  App.tsx
  main.tsx
```

### Suggested Components

- Navbar
- Footer
- HeroSection
- SectionCard
- CTASection
- PageHeader
- PromptExample
- ToolPanel

### Suggested Pages

- Home.tsx
- AIBasics.tsx
- PromptBetter.tsx
- StrengthsAndLimits.tsx
- About.tsx
- PromptImprover.tsx

### Suggested Data Files

Use data driven content where possible to make scaling easier later.
Examples:
- navigation.ts
- learningCards.ts
- promptExamples.ts
- aiStrengthsLimits.ts

## Build Expectations

When generating or editing code for NorthFluent AI, Codex should:

1. Preserve the beginner friendly mission of the site
2. Keep the MVP small and polished
3. Prefer reusable components over duplicated page sections
4. Use clean semantic HTML where possible
5. Make pages responsive
6. Keep content easy to edit
7. Avoid introducing unnecessary dependencies
8. Avoid backend features unless specifically requested
9. Avoid placeholder jargon or empty marketing copy
10. Always align additions to one or more content pillars

## Content Pillars

All future content should fit one or more of these categories:

1. AI Basics
2. Practical Use Cases
3. Prompting Skills
4. Strengths and Limits
5. Responsible Use
6. Build With AI

## Growth Roadmap Awareness

Codex should understand the project will likely evolve in phases:

### Phase 1
Class project MVP with basic site, 4 to 5 content pages, and prompt improver tool.

### Phase 2
Expanded learning platform with more lessons, examples, and downloadable resources.

### Phase 3
Niche paths such as AI for students, job seekers, creators, and small business.

### Phase 4
Monetization via premium guides, prompt packs, courses, newsletter, workshops, consulting, or speaking.

## Decision Filter

Before adding a feature, ask:
- Does this help beginners understand AI more clearly?
- Does this make the product more useful without adding unnecessary complexity?
- Does this support the NorthFluent AI tone and mission?
- Is this appropriate for the MVP phase?

If the answer is no, do not add it.
