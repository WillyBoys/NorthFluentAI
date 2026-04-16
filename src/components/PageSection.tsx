import type { ReactNode } from 'react'

type PageSectionProps = {
  eyebrow?: string
  title?: string
  intro?: string
  children: ReactNode
  className?: string
  surface?: 'default' | 'muted' | 'accent'
}

export default function PageSection({
  eyebrow,
  title,
  intro,
  children,
  className = '',
  surface = 'default',
}: PageSectionProps) {
  const classes = ['page-section', `page-section--${surface}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classes}>
      <div className="container">
        {(eyebrow || title || intro) && (
          <div className="section-heading">
            {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
            {title ? <h2>{title}</h2> : null}
            {intro ? <p className="section-intro">{intro}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
