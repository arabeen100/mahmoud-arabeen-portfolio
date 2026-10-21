import './Decor.css'

/** Faint dot lattice that fades out from one corner of its positioned parent. */
export function DotGrid({ corner = 'tl', className = '' }) {
  return <span className={`dots dots--${corner} ${className}`} aria-hidden="true" />
}

/** Small "+" registration marks on the four corners of its positioned parent. */
export function CornerMarks({ offset = '-6px' }) {
  return (
    <span className="corner-marks" style={{ '--cm-offset': offset }} aria-hidden="true">
      <i className="cm cm--tl" />
      <i className="cm cm--tr" />
      <i className="cm cm--bl" />
      <i className="cm cm--br" />
    </span>
  )
}
