/** Section title with a small monospace "drawing label" floating above it. */
export default function SectionHeading({ index, label, tone, children }) {
  return (
    <div className="section-head">
      <span className="section-head__label" aria-hidden="true">
        {`// ${index} — ${label}`}
      </span>
      <h2 className={`section-title section-title--${tone}`}>{children}</h2>
    </div>
  )
}
