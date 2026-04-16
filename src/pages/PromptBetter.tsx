import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import InfoCard from '../components/InfoCard'
import LearningPathNav from '../components/LearningPathNav'
import PageSection from '../components/PageSection'
import { FormulaStrip } from '../components/VisualBlocks'
import promptingImage from '../assets/Focused study in a modern workspace.png'
import { primaryLearningPath } from '../data/learningPaths'
import {
  promptFramework,
  promptFrameworkFormula,
} from '../data/promptFramework'

const strategies = [
  {
    icon: 'prompt',
    title: 'Zero shot prompting',
    description:
      'Ask AI to complete a task without examples. Best for quick requests, summaries, and simple tasks.',
    example: 'Summarize this article in five bullet points.',
  },
  {
    icon: 'model',
    title: 'Few shot prompting',
    description:
      'Give examples so AI can follow a pattern. Best when style, format, or structure matters.',
    example: 'Use these two sample captions, then write three more in the same style.',
  },
  {
    icon: 'strategy',
    title: 'Step by step prompting',
    description:
      'Ask AI to work through a problem in stages. Best for learning, planning, and problem solving.',
    example: 'Walk me through this math problem one step at a time.',
  },
  {
    icon: 'tools',
    title: 'Multi step prompting',
    description:
      'Break a large task into smaller prompts. Best for building stronger results one piece at a time.',
    example: 'First help me outline the essay, then help me improve the introduction.',
  },
  {
    icon: 'judgment',
    title: 'Constrained prompting',
    description:
      'Set rules for format, tone, length, or structure. Best when the result must follow requirements.',
    example: 'Explain this in under 100 words using simple language.',
  },
  {
    icon: 'growth',
    title: 'Recursive prompting',
    description:
      'Use one answer as the starting point for revision. Best for improving writing, ideas, or drafts.',
    example: 'Make this answer clearer, shorter, and more professional.',
  },
  {
    icon: 'warning',
    title: 'Adversarial prompting',
    description:
      'Ask AI to challenge an idea or find weaknesses. Best for critical thinking and stronger arguments.',
    example: 'Find three weak points in this argument and suggest improvements.',
  },
  {
    icon: 'human',
    title: 'Role prompting',
    description:
      'Ask AI to respond from a specific role or perspective. Best when audience or tone matters.',
    example: 'Respond like a patient tutor explaining this to a beginner.',
  },
] as const

const examples = [
  {
    weak: 'Tell me about AI',
    better:
      'Explain what AI is in plain language for a beginner. Include one example of what it does well and one example of where it can fail. Keep it under 150 words.',
  },
  {
    weak: 'Help with my essay',
    better:
      'Help me outline a 500 word essay about why AI literacy matters for college students. Give me an introduction idea, three body paragraph points, and a conclusion idea.',
  },
]

const tips = [
  'Be clear about what you want.',
  'Give enough context.',
  'Ask for a specific format.',
  'Break large tasks into smaller pieces.',
  'Revise and refine instead of expecting the first answer to be perfect.',
]

export default function PromptBetter() {
  return (
    <>
      <section className="content-hero">
        <div className="container content-hero__layout content-hero__layout--single">
          <div className="content-hero__copy">
            <p className="section-eyebrow">Prompt Better</p>
            <h1>Get better results by asking better questions.</h1>
            <p className="hero-lead">
              Prompting is the skill of telling AI what you want clearly. A
              better prompt can lead to better explanations, stronger drafts,
              clearer structure, and more useful output.
            </p>
            <div className="hero-note">
              <p className="tool-preview__label">Main idea</p>
              <p>
                Prompting is not about special tricks. It is about clarity,
                context, structure, and practice.
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/prompt-improver" className="button button-primary">
                Try the Prompt Tool
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LearningPathNav
        items={[...primaryLearningPath]}
        currentPath="/prompt-better"
        label="Beginner journey"
      />

      <PageSection
        eyebrow="Why prompting matters"
        title="AI tools respond based on the input they receive"
        intro="When a prompt is vague, the answer is often vague. When a prompt is clear, specific, and guided, the response is usually more useful."
      >
        <div className="split-panel">
          <div className="split-panel__main">
            <h3>Weak prompt</h3>
            <p>Make me better at interviews.</p>
          </div>
          <div className="split-panel__side">
            <h3>Clearer prompt</h3>
            <p>
              Help me practice for an entry-level customer service interview.
              Ask me five common questions and give short feedback after each
              answer.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Simple prompt formula"
        title={promptFrameworkFormula}
        intro="This formula gives AI enough direction without making the prompt feel complicated."
        surface="muted"
      >
        <FormulaStrip parts={[...promptFramework]} />
      </PageSection>

      <PageSection
        eyebrow="Core prompting strategies"
        title="Different prompting styles help with different kinds of tasks"
        intro="You do not need to memorize every strategy. Start with the ones that match what you are trying to do."
      >
        <ImagePlaceholder
          label="Prompt practice"
          title="Clear communication with AI"
          guidance="A focused study image reinforces that prompting is a practical communication skill, not a technical trick."
          src={promptingImage}
          alt="Person writing notes beside a laptop in a modern workspace"
        />
        <div className="card-grid card-grid--auto">
          {strategies.map((strategy) => (
            <InfoCard
              key={strategy.title}
              icon={strategy.icon}
              title={strategy.title}
              description={strategy.description}
              footer={<p className="card-example">Example: {strategy.example}</p>}
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Before and after"
        title="Stronger prompts remove unnecessary guessing"
        intro="These examples show how task, audience, format, and constraints change the quality of the request."
        surface="accent"
      >
        <div className="example-stack">
          {examples.map((example) => (
            <div className="compare-grid" key={example.weak}>
              <div className="compare-card">
                <p className="tool-preview__label">Weak prompt</p>
                <p>{example.weak}</p>
              </div>
              <div className="compare-card compare-card--highlight">
                <p className="tool-preview__label">Better prompt</p>
                <p>{example.better}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Beginner prompting tips"
        title="The first answer does not have to be the final answer"
        intro="Prompting gets easier when you treat it as a conversation and revision process."
      >
        <ul className="signal-list">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </PageSection>

      <PageSection surface="muted">
        <div className="takeaway-panel">
          <p className="section-eyebrow">Key takeaway</p>
          <h2>Prompting is clearer communication, not a secret code.</h2>
          <p>
            Start with the task, add useful context, choose a format, and revise
            the response when it is not quite right.
          </p>
        </div>
      </PageSection>

      <PageSection className="cta-strip">
        <div className="cta-panel">
          <div>
            <p className="section-eyebrow">Practice it</p>
            <h2>Use the Prompt Improver to turn a weak prompt into a stronger one.</h2>
            <p className="section-intro">
              Paste a rough prompt, then compare the improved version and learn
              why the changes make it more useful.
            </p>
          </div>
          <div className="cta-panel__actions">
            <Link to="/prompt-improver" className="button button-primary">
              Try the Prompt Tool
            </Link>
            <Link to="/strengths-and-limits" className="button button-secondary">
              Continue to Strengths and Limits
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  )
}
