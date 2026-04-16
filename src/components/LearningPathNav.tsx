import { Link } from 'react-router-dom'

type LearningPathItem = {
  title: string
  path: string
}

type LearningPathNavProps = {
  items: LearningPathItem[]
  currentPath: string
  label: string
}

export default function LearningPathNav({
  items,
  currentPath,
  label,
}: LearningPathNavProps) {
  return (
    <section className="learning-path">
      <div className="container learning-path__shell">
        <div className="learning-path__header">
          <p className="tool-preview__label">{label}</p>
          <p className="learning-path__copy">
            Move through the site in order, or jump to the section you need most.
          </p>
        </div>

        <div className="learning-path__items" aria-label={label}>
          {items.map((item, index) => {
            const isCurrent = item.path === currentPath

            return isCurrent ? (
              <span
                key={item.path}
                className="learning-path__item learning-path__item--current"
                aria-current="page"
              >
                <span className="learning-path__step">{String(index + 1).padStart(2, '0')}</span>
                <span>{item.title}</span>
              </span>
            ) : (
              <Link key={item.path} to={item.path} className="learning-path__item">
                <span className="learning-path__step">{String(index + 1).padStart(2, '0')}</span>
                <span>{item.title}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
