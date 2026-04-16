type ImagePlaceholderProps = {
  label: string
  title: string
  guidance: string
  src?: string
  alt?: string
}

export default function ImagePlaceholder({
  label,
  title,
  guidance,
  src,
  alt,
}: ImagePlaceholderProps) {
  return (
    <aside className="image-placeholder" aria-label={`${title} image guidance`}>
      {src ? (
        <img className="image-placeholder__image" src={src} alt={alt ?? title} />
      ) : (
        <div className="image-placeholder__visual" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      )}
      <div className="image-placeholder__copy">
        <p className="tool-preview__label">{label}</p>
        <h3>{title}</h3>
        <p>{guidance}</p>
      </div>
    </aside>
  )
}
