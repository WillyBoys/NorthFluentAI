import type { ReactNode } from 'react'
import Icon, { type IconName } from './Icon'

type InfoCardProps = {
  eyebrow?: string
  title: string
  description: string
  footer?: ReactNode
  accent?: string
  icon?: IconName
}

export default function InfoCard({
  eyebrow,
  title,
  description,
  footer,
  accent,
  icon,
}: InfoCardProps) {
  return (
    <article className="info-card">
      {icon ? (
        <span className="info-card__icon">
          <Icon name={icon} />
        </span>
      ) : null}
      {accent ? <span className="info-card__accent">{accent}</span> : null}
      {eyebrow ? <p className="info-card__eyebrow">{eyebrow}</p> : null}
      <h3>{title}</h3>
      <p>{description}</p>
      {footer ? <div className="info-card__footer">{footer}</div> : null}
    </article>
  )
}
