type JourneyStep = {
  label: string
  title: string
  description: string
}

type FlowStep = {
  label: string
  title: string
  description: string
}

type FormulaPart = {
  title: string
  description: string
}

type TrustZone = {
  level: 'good' | 'check' | 'careful'
  title: string
  description: string
  items: string[]
}

export function JourneyVisual({ steps }: { steps: JourneyStep[] }) {
  return (
    <div className="journey-visual" aria-label="NorthFluent AI learning journey">
      {steps.map((step) => (
        <div className="journey-visual__step" key={step.title}>
          <div>
            <p className="journey-visual__label">{step.label}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ProcessDiagram({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="process-diagram" aria-label="AI system process diagram">
      {steps.map((step, index) => (
        <div className="process-diagram__item" key={step.title}>
          <span className="process-diagram__label">{step.label}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          {index < steps.length - 1 ? (
            <span className="process-diagram__connector" aria-hidden="true">
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export function FormulaStrip({ parts }: { parts: FormulaPart[] }) {
  return (
    <div className="formula-strip" aria-label="Prompt formula visual">
      {parts.map((part, index) => (
        <div className="formula-strip__part" key={part.title}>
          <span className="formula-strip__symbol">{index === 0 ? 'Start' : '+'}</span>
          <h3>{part.title}</h3>
          <p>{part.description}</p>
        </div>
      ))}
    </div>
  )
}

export function TrustMeter({ zones }: { zones: TrustZone[] }) {
  return (
    <div className="trust-meter" aria-label="AI trust meter">
      {zones.map((zone) => (
        <div className={`trust-meter__zone trust-meter__zone--${zone.level}`} key={zone.title}>
          <div>
            <p className="tool-preview__label">{zone.title}</p>
            <p>{zone.description}</p>
          </div>
          <ul>
            {zone.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
