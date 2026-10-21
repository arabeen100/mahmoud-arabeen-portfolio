import { useEffect, useRef } from 'react'
import './BlueprintBackground.css'

/**
 * Fixed blueprint-paper backdrop: a faint grid that lights up around the pointer,
 * plus a touch of film grain. The pointer effect is skipped on touch / reduced motion.
 */
export default function BlueprintBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const canTrack =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || !canTrack) return undefined

    let frame = 0
    let x = 0
    let y = 0

    const onMove = (event) => {
      x = event.clientX
      y = event.clientY
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        el.style.setProperty('--mx', `${x}px`)
        el.style.setProperty('--my', `${y}px`)
        el.dataset.active = 'true'
      })
    }
    const onLeave = () => {
      el.dataset.active = 'false'
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div ref={ref} className="blueprint" aria-hidden="true">
      <div className="blueprint__grid" />
      <div className="blueprint__spot" />
      <div className="blueprint__grain" />
    </div>
  )
}
