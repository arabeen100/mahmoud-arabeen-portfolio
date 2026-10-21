import { useEffect, useRef } from 'react'

/** An anchor that drifts slightly towards the pointer while hovered (fine pointers only). */
export default function MagneticLink({ strength = 0.28, children, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const enabled =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || !enabled) return undefined

    const onMove = (event) => {
      const box = el.getBoundingClientRect()
      const dx = event.clientX - (box.left + box.width / 2)
      const dy = event.clientY - (box.top + box.height / 2)
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
    }
    const onLeave = () => {
      el.style.transform = ''
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [strength])

  return (
    <a ref={ref} {...props}>
      {children}
    </a>
  )
}
