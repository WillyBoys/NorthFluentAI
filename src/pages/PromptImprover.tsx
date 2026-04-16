import { useState } from 'react'
import InfoCard from '../components/InfoCard'
import LearningPathNav from '../components/LearningPathNav'
import PageSection from '../components/PageSection'
import { promptPracticePath } from '../data/learningPaths'
import {
  promptFramework,
  promptFrameworkFormula,
} from '../data/promptFramework'
import { requestImprovedPrompt } from '../lib/promptImproverApi'
import type { ImprovePromptResponse } from '../types/promptImprover'

const examplePrompts = [
  {
    label: 'Study help',
    prompt: 'Help me study for biology.',
  },
  {
    label: 'Job prep',
    prompt: 'Help me get ready for an interview.',
  },
  {
    label: 'Writing',
    prompt: 'Write me a better email.',
  },
  {
    label: 'Summarizing',
    prompt: 'Summarize this article for me.',
  },
]

function getFrameworkCoverage(prompt: string) {
  const rules = [
    { label: 'Task added', pattern: /task:/i },
    { label: 'Context added', pattern: /context:/i },
    { label: 'Audience added', pattern: /audience:/i },
    { label: 'Format added', pattern: /(format|output format):/i },
    { label: 'Constraints added', pattern: /constraints?:/i },
  ]

  return rules.map((rule) => ({
    label: rule.label,
    included: rule.pattern.test(prompt),
  }))
}

export default function PromptImprover() {
  const [promptInput, setPromptInput] = useState('')
  const [result, setResult] = useState<ImprovePromptResponse | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const canImprove = promptInput.trim().length > 0
  const frameworkCoverage = getFrameworkCoverage(result?.improvedPrompt ?? '')

  async function runImprove(rawPrompt: string) {
    if (!rawPrompt.trim()) {
      setStatus('error')
      setErrorMessage('Please enter a rough prompt before improving it.')
      return
    }

    setStatus('loading')
    setErrorMessage('')
    setCopied(false)

    try {
      const nextResult = await requestImprovedPrompt({ rawPrompt })
      setResult(nextResult)
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong while improving the prompt.',
      )
    }
  }

  async function handleImproveClick() {
    await runImprove(promptInput)
  }

  function handleInputChange(value: string) {
    setPromptInput(value)
    setStatus('idle')
    setErrorMessage('')
    setResult(null)
    setCopied(false)
  }

  async function handleCopyClick() {
    if (!result?.improvedPrompt) {
      return
    }

    try {
      await navigator.clipboard.writeText(result.improvedPrompt)
      setCopied(true)
    } catch {
      setErrorMessage('Copy did not work. You can still select the text manually.')
      setStatus('error')
    }
  }

  async function handleExampleClick(examplePrompt: string) {
    setPromptInput(examplePrompt)
    await runImprove(examplePrompt)
  }

  return (
    <>
      <section className="tool-hero">
        <div className="container tool-hero__layout tool-hero__layout--single">
          <div className="tool-hero__copy">
            <p className="section-eyebrow">Prompt Improver</p>
            <h1>Sharpen Prompts for Better AI Results</h1>
            <p className="hero-lead">
              This tool is designed for beginners. Paste in a simple prompt,
              then see how adding task, context, audience, format, and
              constraints can improve the result.
            </p>
            <div className="hero-note hero-note--stacked">
              <p className="tool-preview__label">What this tool improves</p>
              <div className="hero-note__grid">
                <p>It makes the task clearer.</p>
                <p>It adds context, audience, format, and useful constraints.</p>
                <p>It explains the changes in beginner friendly language.</p>
              </div>
              <p className="hero-note__formula">
                Simple formula: <strong>{promptFrameworkFormula}</strong>
              </p>
            </div>
            <div className="hero-actions">
              <a href="#prompt-tool" className="button button-primary">
                Improve a Prompt
              </a>
            </div>
            <div className="hero-trust-bar">
              <span>Server-side Gemini</span>
              <span>Beginner friendly</span>
              <span>Teaches as it improves</span>
            </div>
          </div>
        </div>
      </section>

      <LearningPathNav
        items={[...promptPracticePath]}
        currentPath="/prompt-improver"
        label="Prompt practice path"
      />

      <PageSection
        id="prompt-tool"
        eyebrow="Try it"
        title="Paste in a rough prompt and improve it"
        intro="You do not need to write a perfect prompt. Start simple, then use the improved version as a better starting point."
      >
        <div className="prompt-tool">
          <div className="prompt-tool__editor">
            <label className="prompt-tool__label" htmlFor="prompt-input">
              Your rough prompt
            </label>
            <textarea
              id="prompt-input"
              className="prompt-tool__textarea"
              value={promptInput}
              onChange={(event) => handleInputChange(event.target.value)}
              placeholder="Example: Help me prepare for a math test."
            />

            <div className="prompt-tool__actions">
              <button
                type="button"
                className="button button-primary prompt-tool__button"
                onClick={handleImproveClick}
                disabled={!canImprove || status === 'loading'}
              >
                {status === 'loading' ? 'Improving Prompt...' : 'Improve Prompt'}
              </button>
              <p className="prompt-tool__hint">
                Tip: the best prompts usually include the task, the situation,
                and the kind of answer you want back.
              </p>
            </div>

            {status === 'error' ? (
              <p className="prompt-tool__message prompt-tool__message--error">
                {errorMessage}
              </p>
            ) : null}

            {status === 'success' ? (
              <p className="prompt-tool__message prompt-tool__message--success">
                Your improved prompt is ready below.
              </p>
            ) : null}
          </div>

          <div className="prompt-tool__results">
            <div className="prompt-tool__panel">
              <div className="prompt-tool__panel-header">
                <p className="tool-preview__label">Improved prompt</p>
                <button
                  type="button"
                  className="button button-secondary button-small"
                  onClick={handleCopyClick}
                  disabled={!result?.improvedPrompt}
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="prompt-output">
                <code>
                  {result?.improvedPrompt ??
                    'Your improved prompt will appear here after you submit a rough prompt.'}
                </code>
              </pre>
            </div>

            <div className="prompt-tool__panel">
              <p className="tool-preview__label">Why this is better</p>
              <ul className="check-list prompt-tool__list">
                {(result?.whyItsBetter ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="prompt-tool__panel">
              <p className="tool-preview__label">Beginner tips</p>
              <ul className="check-list prompt-tool__list">
                {(result?.tips ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="prompt-tool__panel">
              <p className="tool-preview__label">Framework added</p>
              <div className="framework-grid">
                {frameworkCoverage.map((item) => (
                  <div
                    key={item.label}
                    className={`framework-pill${item.included ? ' framework-pill--active' : ''
                      }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Starter examples"
        title="Use one of these if you want a quick way to try the tool"
        intro="These examples are intentionally simple so beginners can see how a weak prompt gets upgraded."
        surface="muted"
      >
        <div className="prompt-examples-grid">
          {examplePrompts.map((example) => (
            <button
              key={example.label}
              type="button"
              className="example-card"
              onClick={() => handleExampleClick(example.prompt)}
            >
              <span className="example-card__label">{example.label}</span>
              <span className="example-card__prompt">{example.prompt}</span>
            </button>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="What to look for"
        title="Good prompts usually include five simple ingredients"
        intro="You do not need to sound technical. You just need to give the AI enough direction to be useful."
      >
        <div className="card-grid card-grid--auto">
          {promptFramework.map((card) => (
            <InfoCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </PageSection>
    </>
  )
}
