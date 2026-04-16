type ImagePlaceholderProps = {
  label: string
  title: string
  guidance?: string
  src?: string
  alt?: string
}

export default function ImagePlaceholder({
  label,
  title,
  src,
  alt,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <aside className="image-placeholder image-placeholder--media-only" aria-label={title}>
        <img className="image-placeholder__image" src={src} alt={alt ?? title} />
      </aside>
    )
  }

  return (
    <aside className="image-placeholder" aria-label={`${title} image guidance`}>
      <div className="image-placeholder__visual" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="image-placeholder__copy">
        <p className="tool-preview__label">{label}</p>
        <h3>{title}</h3>
      </div>
    </aside>
  )
}
