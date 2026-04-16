import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import InfoCard from '../components/InfoCard'
import LearningPathNav from '../components/LearningPathNav'
import PageSection from '../components/PageSection'
import { TrustMeter } from '../components/VisualBlocks'
import judgmentImage from '../assets/Productive work at a wooden desk.png'
import { primaryLearningPath } from '../data/learningPaths'

const strengths = [
  'Summarizing information',
  'Rewriting and improving drafts',
  'Brainstorming ideas',
  'Explaining concepts in simpler language',
  'Generating first drafts',
  'Supporting coding and technical tasks',
  'Translation and transcription',
  'Recognizing patterns in large amounts of data',
  'Helping with repetitive work',
]

const improvingAreas = [
  {
    icon: 'media',
    title: 'Multimodal tools',
    description:
      'AI is getting better at working across text, images, audio, video, and documents.',
  },
  {
    icon: 'chat',
    title: 'More natural assistance',
    description:
      'AI tools are becoming better at conversation, planning, tutoring, and workplace support.',
  },
  {
    icon: 'robot',
    title: 'Embodied systems',
    description:
      'AI connected to robots, smart machines, vehicles, and devices is becoming more capable over time.',
  },
] as const

const limits = [
  {
    icon: 'warning',
    title: 'Confident wrong answers',
    description:
      'AI can sound certain even when the answer is incomplete, misleading, or false.',
  },
  {
    icon: 'clarity',
    title: 'Missing context',
    description:
      'AI may overlook nuance, personal situations, local rules, or details that were not included in the prompt.',
  },
  {
    icon: 'judgment',
    title: 'Bias and shallow output',
    description:
      'AI can reflect bias from data and may produce generic responses that need human revision.',
  },
  {
    icon: 'human',
    title: 'No real human experience',
    description:
      'AI can imitate empathy or confidence, but it does not truly understand emotion, values, or lived experience.',
  },
] as const

const helpfulUses = [
  'Explaining a difficult concept',
  'Giving practice questions',
  'Helping brainstorm ideas',
  'Reviewing your draft',
  'Offering feedback',
]

const unhelpfulUses = [
  'Doing all the thinking for you',
  'Writing everything without your input',
  'Replacing study with copying',
  'Making you dependent on instant answers',
]

const doubleCheckItems = [
  'Medical information',
  'Legal or financial guidance',
  'School assignments',
  'Important emails or public writing',
  'Factual claims and statistics',
  'Sensitive decisions',
]

const trustZones = [
  {
    level: 'good' as const,
    title: 'Good for',
    description: 'Useful when the task is low risk, creative, or easy to review.',
    items: ['Brainstorming', 'Drafting', 'Summaries'],
  },
  {
    level: 'check' as const,
    title: 'Double check',
    description: 'Helpful, but the result should be reviewed before you rely on it.',
    items: ['Facts', 'School or work outputs', 'Public writing'],
  },
  {
    level: 'careful' as const,
    title: 'Be careful with',
    description: 'High-stakes areas need expert review and extra caution.',
    items: ['Medical', 'Legal', 'Financial'],
  },
]

export default function StrengthsAndLimits() {
  return (
    <>
      <section className="content-hero">
        <div className="container content-hero__layout">
          <div className="content-hero__copy">
            <p className="section-eyebrow">Strengths and Limits</p>
            <h1>Where AI Shines and Struggles</h1>
            <p className="hero-lead">
              AI can save time, generate ideas, and support learning, but it can
              also be wrong, shallow, or misleading. Learning the difference
              helps you use it more wisely.
            </p>
          </div>

          <aside className="content-hero__panel">
            <p className="tool-preview__label">Main idea</p>
            <p>
              Knowing what to trust AI with and what to double check is one of
              the most important AI skills.
            </p>
          </aside>
        </div>
      </section>

      <LearningPathNav
        items={[...primaryLearningPath]}
        currentPath="/strengths-and-limits"
        label="Beginner journey"
      />

      <PageSection
        eyebrow="What AI does well right now"
        title="AI is useful for structured, repeatable, and idea-heavy tasks"
        intro="These strengths are real, but they still require review before the output is used in important contexts."
      >
        <ul className="signal-list signal-list--columns">
          {strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </PageSection>

      <PageSection
        eyebrow="What AI is getting better at"
        title="AI tools are improving, but improvement is not the same as perfection"
        intro="This section should feel forward looking without suggesting that AI can replace human judgment."
        surface="muted"
      >
        <div className="card-grid card-grid--three">
          {improvingAreas.map((area) => (
            <InfoCard
              key={area.title}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Where AI falls short"
        title="The most risky AI mistakes often sound polished"
        intro="A confident answer can still be incomplete, biased, shallow, or wrong."
      >
        <div className="card-grid card-grid--auto">
          {limits.map((limit) => (
            <InfoCard
              key={limit.title}
              icon={limit.icon}
              title={limit.title}
              description={limit.description}
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Learning versus dependence"
        title="AI should help you learn, not do all the thinking for you"
        intro="This is one of the core NorthFluent AI ideas."
        surface="accent"
      >
        <ImagePlaceholder
          label="Human review"
          title="Human judgment with technology"
          guidance="The image emphasizes that AI output should be reviewed, questioned, and connected back to human decision-making."
          src={judgmentImage}
          alt="Person reviewing charts on a laptop while taking notes"
        />
        <div className="compare-grid">
          <div className="compare-card compare-card--highlight">
            <p className="tool-preview__label">Helpful uses</p>
            <ul className="check-list">
              {helpfulUses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="compare-card">
            <p className="tool-preview__label">Unhelpful uses</p>
            <ul className="check-list">
              {unhelpfulUses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Human oversight matters"
        title="AI works best when paired with human judgment"
        intro="People still need to verify facts, understand context, make ethical choices, protect privacy, and take responsibility for decisions."
      >
        <TrustMeter zones={trustZones} />
        <ul className="signal-list signal-list--columns">
          {doubleCheckItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </PageSection>

      <PageSection className="cta-strip">
        <div className="cta-panel">
          <div>
            <p className="section-eyebrow">Key takeaway</p>
            <h2>Use AI as support, not as a substitute for thinking and judgment.</h2>
            <p className="section-intro">
              Good AI use means knowing when to ask for help, when to revise,
              and when to slow down and verify.
            </p>
          </div>
          <div className="cta-panel__actions">
            <Link to="/about" className="button button-primary">
              Learn About the Mission
            </Link>
            <Link to="/prompt-improver" className="button button-secondary">
              Practice in the Prompt Tool
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  )
}
