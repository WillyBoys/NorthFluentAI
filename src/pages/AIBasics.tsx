import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import InfoCard from '../components/InfoCard'
import LearningPathNav from '../components/LearningPathNav'
import PageSection from '../components/PageSection'
import { ProcessDiagram } from '../components/VisualBlocks'
import aiSystemsImage from '../assets/Futuristic data center with code display.png'
import { primaryLearningPath } from '../data/learningPaths'

const systemParts = [
  {
    icon: 'algorithm',
    title: 'Algorithms',
    description:
      'Algorithms are the rules and processes that tell a system how to learn from information or respond to input.',
  },
  {
    icon: 'data',
    title: 'Data',
    description:
      'Data gives AI systems examples to learn from. The quality and type of data strongly affect the quality of the results.',
  },
  {
    icon: 'model',
    title: 'Models',
    description:
      'A model is the trained system that has learned patterns from data and can now make predictions or generate responses.',
  },
  {
    icon: 'compute',
    title: 'Computing power',
    description:
      'AI systems need hardware and computing resources to train models and run them efficiently.',
  },
  {
    icon: 'human',
    title: 'Human design and oversight',
    description:
      'People decide how AI systems are built, what data they use, what goals they aim for, and how they should be used.',
  },
] as const

const aiKinds = [
  {
    icon: 'chat',
    title: 'Chatbots and language models',
    description:
      'These tools respond to questions, explain ideas, summarize information, and generate text.',
  },
  {
    icon: 'media',
    title: 'Image and media tools',
    description:
      'These tools create images, audio, video, or other content from prompts.',
  },
  {
    icon: 'recommend',
    title: 'Recommendation and prediction systems',
    description:
      'These systems suggest content, detect spam, predict trends, or help classify information.',
  },
  {
    icon: 'cloud',
    title: 'Cloud based AI',
    description:
      'These tools run through online services and apps rather than entirely on your own device.',
  },
  {
    icon: 'robot',
    title: 'Embodied AI',
    description:
      'These systems connect AI to physical machines such as robots, smart devices, drones, or self driving systems.',
  },
  {
    icon: 'tools',
    title: 'Task specific tools',
    description:
      'These focused tools help with jobs like note taking, transcription, code support, or customer service.',
  },
] as const

const misconceptions = [
  'AI is not magic.',
  'AI is not always right.',
  'AI is not neutral by default.',
  'AI is not a replacement for human judgment.',
]

const aiProcessSteps = [
  {
    label: '01',
    title: 'Data',
    description: 'Examples and information the system learns patterns from.',
  },
  {
    label: '02',
    title: 'Model',
    description: 'The trained system that uses those patterns to respond.',
  },
  {
    label: '03',
    title: 'Prompt',
    description: 'The instructions or input a person gives the AI.',
  },
  {
    label: '04',
    title: 'Output',
    description: 'The response, prediction, draft, or recommendation it returns.',
  },
  {
    label: '05',
    title: 'Human review',
    description: 'The judgment people add before trusting or using the result.',
  },
]

export default function AIBasics() {
  return (
    <>
      <section className="content-hero">
        <div className="container content-hero__layout content-hero__layout--single">
          <div className="content-hero__copy">
            <p className="section-eyebrow">AI Basics</p>
            <h1>What is AI, really?</h1>
            <p className="hero-lead">
              AI can sound mysterious, but the basic ideas behind it are easier
              to understand than many people think. Learning the basics helps
              you use AI more confidently and more responsibly.
            </p>
            <div className="hero-note">
              <p className="tool-preview__label">Main idea</p>
              <p>
                AI is not a person or a mind. It is a human-built system that
                uses data, algorithms, and computing power to perform tasks like
                prediction, generation, recognition, and pattern matching.
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/prompt-better" className="button button-primary">
                Continue to Prompt Better
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LearningPathNav
        items={[...primaryLearningPath]}
        currentPath="/ai-basics"
        label="Beginner journey"
      />

      <PageSection
        eyebrow="What is AI?"
        title="At its core, AI is a tool for processing information and producing useful outputs"
        intro="Artificial intelligence is a broad term for computer systems that can perform tasks that usually require human-like intelligence, such as recognizing patterns, generating text, analyzing information, making predictions, or responding to language."
      >
        <ProcessDiagram steps={aiProcessSteps} />
        <div className="split-panel">
          <div className="split-panel__main">
            <h3>Simple version</h3>
            <p>
              AI looks for patterns in information, then uses those patterns to
              make predictions, generate responses, or support decisions.
            </p>
          </div>
          <div className="split-panel__side">
            <h3>Responsible use reminder</h3>
            <p>
              Because AI works from patterns, it can be useful and still be
              incomplete, biased, or wrong. Important answers need review.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        eyebrow="What makes up an AI system?"
        title="AI depends on more than one thing working together"
        intro="Beginners often hear about AI as if it is one mysterious object. In practice, AI systems are built from several connected pieces."
        surface="muted"
      >
        <ImagePlaceholder
          label="Behind the scenes"
          title="Systems behind AI"
          guidance="This image connects the beginner explanation to the real infrastructure, data, and computing systems behind AI."
          src={aiSystemsImage}
          alt="Data center and code display representing AI infrastructure"
        />
        <div className="card-grid card-grid--auto">
          {systemParts.map((part) => (
            <InfoCard
              key={part.title}
              icon={part.icon}
              title={part.title}
              description={part.description}
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="AI is not alive"
        title="Human-like output does not mean human understanding"
        intro="Even when AI sounds natural, it does not mean it is conscious, emotional, or alive."
      >
        <div className="compare-grid">
          <div className="compare-card">
            <p className="tool-preview__label">Myth</p>
            <h3>If AI sounds human, it must think like a human.</h3>
          </div>
          <div className="compare-card compare-card--highlight">
            <p className="tool-preview__label">Reality</p>
            <h3>AI can generate human-like responses without having human understanding.</h3>
            <p>
              It does not have feelings, beliefs, self awareness, or personal
              experience. It works by recognizing patterns and producing output.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Different kinds of AI"
        title="AI shows up in many forms, not just chatbots"
        intro="These categories help beginners recognize how broad AI already is."
        surface="accent"
      >
        <div className="card-grid card-grid--auto">
          {aiKinds.map((kind) => (
            <InfoCard
              key={kind.title}
              icon={kind.icon}
              title={kind.title}
              description={kind.description}
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Common misconceptions"
        title="Four ideas worth correcting early"
        intro="Understanding AI starts with seeing it clearly."
      >
        <ul className="signal-list">
          {misconceptions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </PageSection>

      <PageSection surface="muted">
        <div className="takeaway-panel">
          <p className="section-eyebrow">What you learned</p>
          <h2>AI is a human-built tool that needs clear direction and human review.</h2>
          <p>
            You now have the foundation for the next skill: asking AI better
            questions so the results are easier to understand and use.
          </p>
        </div>
      </PageSection>

      <PageSection className="cta-strip">
        <div className="cta-panel">
          <div>
            <p className="section-eyebrow">Key takeaway</p>
            <h2>AI is a powerful tool, but it is still a tool.</h2>
            <p className="section-intro">
              Once you understand what AI is, the next step is learning how to
              communicate with it more clearly.
            </p>
          </div>
          <div className="cta-panel__actions">
            <Link to="/prompt-better" className="button button-primary">
              Continue to Prompt Better
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  )
}
