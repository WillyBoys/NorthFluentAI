import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import InfoCard from '../components/InfoCard'
import PageSection from '../components/PageSection'
import { JourneyVisual } from '../components/VisualBlocks'
import everydayAiImage from '../assets/Focused productivity in a bright workspace.png'
import { learningSteps } from '../data/siteContent'

const aiEverydayCards = [
  {
    icon: 'school',
    title: 'AI in school',
    description:
      'Students use AI to review concepts, brainstorm essay outlines, create practice questions, and study more efficiently.',
  },
  {
    icon: 'work',
    title: 'AI at work',
    description:
      'Professionals use AI to draft emails, summarize meetings, plan projects, analyze information, and speed up repetitive tasks.',
  },
  {
    icon: 'creative',
    title: 'AI in creativity',
    description:
      'Creators use AI to explore ideas, generate drafts, edit content, test styles, and turn rough concepts into starting points.',
  },
  {
    icon: 'tools',
    title: 'AI in daily tools',
    description:
      'AI already appears in search engines, recommendation systems, customer support, writing assistants, and productivity apps.',
  },
] as const

const teachingAreas = [
  {
    icon: 'basics',
    title: 'Understanding what AI is',
    description:
      'Learn the basic ideas behind AI without getting buried in jargon.',
  },
  {
    icon: 'prompt',
    title: 'Learning how to prompt better',
    description:
      'Practice giving clearer instructions so AI can return more useful answers.',
  },
  {
    icon: 'judgment',
    title: 'Recognizing strengths and limits',
    description:
      'See where AI helps, where it fails, and why human review still matters.',
  },
  {
    icon: 'responsible',
    title: 'Using AI responsibly',
    description:
      'Build habits around fact checking, privacy, bias awareness, and over reliance.',
  },
] as const

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy hero-copy--featured">
            <p className="section-eyebrow">NorthFluent AI</p>
            <h1>AI is everywhere. Learn how to use it wisely.</h1>
            <p className="hero-lead">
              NorthFluent AI is a beginner friendly platform built to help
              people understand what AI is, what it does well, where it falls
              short, and how to use it effectively and responsibly.
            </p>
            <div className="hero-actions">
              <Link to="/ai-basics" className="button button-primary">
                Explore AI Basics
              </Link>
              <Link to="/prompt-better" className="button button-secondary">
                Learn to Prompt Better
              </Link>
            </div>
            <div className="hero-trust-bar">
              <span>No hype</span>
              <span>Plain language</span>
              <span>Practical judgment</span>
            </div>
          </div>

          <aside className="hero-panel" aria-label="NorthFluent AI learning journey">
            <p className="hero-panel__eyebrow">Beginner journey</p>
            <ul className="hero-panel__list">
              <li>First, see why AI matters in daily life.</li>
              <li>Then, learn what AI really is and what it is not.</li>
              <li>Next, practice writing clearer prompts.</li>
              <li>Finally, build judgment about when to trust and verify.</li>
            </ul>
            <Link to="/prompt-improver" className="text-link">
              Practice with the Prompt Tool
            </Link>
          </aside>
        </div>
      </section>

      <PageSection
        eyebrow="Why AI matters now"
        title="AI is no longer just for researchers or tech companies"
        intro="It is already showing up in classrooms, workplaces, creative tools, search, customer support, writing assistants, coding tools, and more."
      >
        <ImagePlaceholder
          label="Everyday AI"
          title="Everyday AI use"
          guidance="A real workspace image helps keep the site grounded in practical learning instead of abstract hype."
          src={everydayAiImage}
          alt="Person using a laptop in a bright workspace"
        />
        <div className="card-grid card-grid--four">
          {aiEverydayCards.map((card) => (
            <InfoCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="What NorthFluent AI teaches"
        title="Build confidence without building blind trust"
        intro="Real AI literacy means understanding both the possibilities and the shortcomings."
        surface="muted"
      >
        <div className="card-grid card-grid--four">
          {teachingAreas.map((card) => (
            <InfoCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Clean learning path"
        title="First you care, then you understand, then you practice, then you judge"
        intro="The site is organized as a simple beginner journey instead of a collection of unrelated pages."
      >
        <JourneyVisual
          steps={learningSteps.map((item) => ({
            label: item.step,
            title: item.title,
            description: item.description,
          }))}
        />
      </PageSection>

      <PageSection
        eyebrow="Powerful, but not perfect"
        title="AI can be exciting and useful, but it can also be wrong, biased, or over trusted"
        intro="NorthFluent AI is built around one central idea: AI is a powerful tool, but it is not magic. People need to understand how it works, how to use it well, and where human judgment still matters."
        surface="accent"
      >
        <div className="split-panel">
          <div className="split-panel__main">
            <h3>Possibility</h3>
            <p>
              AI can help people learn faster, draft ideas, organize information,
              create content, and solve problems more efficiently.
            </p>
          </div>
          <div className="split-panel__side">
            <h3>Responsibility</h3>
            <p>
              AI can also produce confident mistakes, miss context, reflect bias,
              or make people too dependent on instant answers.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection className="cta-strip">
        <div className="cta-panel">
          <div>
            <p className="section-eyebrow">Best place to start</p>
            <h2>Start by learning what AI actually is.</h2>
            <p className="section-intro">
              A clear foundation makes every prompt, tool, and AI decision
              easier to understand.
            </p>
          </div>
          <div className="cta-panel__actions">
            <Link to="/ai-basics" className="button button-primary">
              Start with AI Basics
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  )
}
