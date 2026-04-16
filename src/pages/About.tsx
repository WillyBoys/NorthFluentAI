import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import InfoCard from '../components/InfoCard'
import LearningPathNav from '../components/LearningPathNav'
import PageSection from '../components/PageSection'
import missionImage from '../assets/Focused professional at work.png'
import { primaryLearningPath } from '../data/learningPaths'

const gains = [
  {
    title: 'Confidence',
    description:
      'Feel less intimidated by AI because the basic ideas are explained clearly.',
  },
  {
    title: 'Clarity',
    description:
      'Understand what AI is, what it is not, and why the difference matters.',
  },
  {
    title: 'Better prompting habits',
    description:
      'Learn how to ask clearer questions and shape more useful AI responses.',
  },
  {
    title: 'Realistic expectations',
    description:
      'Recognize both the value of AI and the places where it can mislead you.',
  },
  {
    title: 'Stronger judgment',
    description:
      'Know when to trust, revise, double check, or avoid using AI output.',
  },
  {
    title: 'A foundation for future skills',
    description:
      'Build a starting point for deeper AI learning, tools, projects, and real world use.',
  },
]

export default function About() {
  return (
    <>
      <section className="content-hero">
        <div className="container content-hero__layout content-hero__layout--single">
          <div className="content-hero__copy">
            <p className="section-eyebrow">About</p>
            <h1>Why I built NorthFluent AI.</h1>
            <p className="hero-lead">
              AI is becoming part of everyday life, but many people still do not
              have a clear and honest place to learn what it is, what it does
              well, and where it should be questioned.
            </p>
            <div className="hero-note">
              <p className="tool-preview__label">Brand promise</p>
              <p>
                The goal is not to make people dependent on AI. The goal is to
                help them become confident, informed, and capable users of it.
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/ai-basics" className="button button-primary">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LearningPathNav
        items={[...primaryLearningPath]}
        currentPath="/about"
        label="Beginner journey"
      />

      <PageSection
        eyebrow="My reason for building this"
        title="Beginners need practical AI literacy, not hype or jargon"
        intro="NorthFluent AI exists because AI is already influencing school, work, creativity, and decision making, while many beginners still feel stuck between excitement, confusion, and overcomplicated explanations."
      >
        <ImagePlaceholder
          label="Mission"
          title="Accessible learning"
          guidance="A human-centered learning image supports the platform mission: practical AI literacy that feels clear, responsible, and approachable."
          src={missionImage}
          alt="Professional reviewing AI-related learning material at a desk"
        />
        <div className="split-panel">
          <div className="split-panel__main">
            <p>
              I wanted to build something that makes AI easier to understand
              without pretending it is perfect. The site teaches what AI can do,
              where it struggles, and how people can use it with better
              judgment.
            </p>
          </div>
          <div className="split-panel__side">
            <p className="tool-preview__label">Central idea</p>
            <p>
              AI is a powerful tool, but it is not magic. People need to
              understand how it works, how to use it well, and where human
              judgment still matters.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Why AI literacy matters"
        title="Access to AI tools is not enough"
        intro="People also need the ability to use those tools thoughtfully, ask better questions, recognize limitations, and make informed decisions."
        surface="muted"
      >
        <div className="compare-grid">
          <div className="compare-card">
            <h3>Without AI literacy</h3>
            <p>
              People may over trust AI, copy weak answers, miss bias, expose
              private information, or assume polished output is always correct.
            </p>
          </div>
          <div className="compare-card compare-card--highlight">
            <h3>With AI literacy</h3>
            <p>
              People can use AI to learn, draft, brainstorm, review, and
              improve while still thinking critically about the result.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        eyebrow="What I want people to gain"
        title="The platform is designed to build skill and judgment together"
        intro="NorthFluent AI is not just about using tools faster. It is about helping people understand what they are doing."
      >
        <div className="card-grid card-grid--auto">
          {gains.map((gain) => (
            <InfoCard key={gain.title} title={gain.title} description={gain.description} />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Vision for the future"
        title="Start small, then grow into a larger AI literacy resource"
        intro="NorthFluent AI is starting as a beginner friendly educational platform, but the long term vision is to grow it into a larger resource with lessons, examples, tools, quizzes, case studies, and real world applications."
        surface="accent"
      >
        <ul className="signal-list signal-list--compact">
          <li>More beginner lessons and examples</li>
          <li>Practice tools that teach while users work</li>
          <li>Use-case paths for students, job seekers, creators, and professionals</li>
          <li>Responsible AI guidance woven through every section</li>
        </ul>
      </PageSection>

      <PageSection surface="muted">
        <div className="takeaway-panel">
          <p className="section-eyebrow">North star</p>
          <h2>Help beginners become fluent in AI, not dependent on it.</h2>
          <p>
            The platform should keep making AI easier to understand while
            reinforcing privacy, fact checking, bias awareness, and human
            responsibility.
          </p>
        </div>
      </PageSection>

      <PageSection className="cta-strip">
        <div className="cta-panel">
          <div>
            <p className="section-eyebrow">Keep learning</p>
            <h2>Become fluent in AI, not dependent on it.</h2>
            <p className="section-intro">
              If you want the most practical next step, try improving a rough
              prompt and study what changed.
            </p>
          </div>
          <div className="cta-panel__actions">
            <Link to="/prompt-improver" className="button button-primary">
              Try the Prompt Tool
            </Link>
            <Link to="/ai-basics" className="button button-secondary">
              Return to AI Basics
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  )
}
