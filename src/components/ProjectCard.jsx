import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRightIcon } from './icons'

/** Project tile with a cursor-following spotlight and a gentle 3D tilt. */
export default function ProjectCard({ project, index }) {
  const ref = useRef(null)

  function handleMove(event) {
    const el = ref.current
    if (!el || event.pointerType !== 'mouse') return
    const box = el.getBoundingClientRect()
    const px = (event.clientX - box.left) / box.width
    const py = (event.clientY - box.top) / box.height
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
    el.style.setProperty('--rx', `${(0.5 - py) * 6}deg`)
    el.style.setProperty('--ry', `${(px - 0.5) * 8}deg`)
  }

  function handleLeave() {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <Link
      ref={ref}
      to={`/projects/${project.slug}`}
      className="project-card"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <span className="project-card__media">
        <img
          className="project-card__thumb"
          src={project.thumbnail}
          alt=""
          loading="lazy"
          width="390"
          height="235"
        />
        <span className="project-card__glow" aria-hidden="true" />
        <span className="project-card__tag project-card__tag--index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="project-card__tag project-card__tag--type">
          {project.category.replace(' project', '')}
        </span>
      </span>
      <span className="project-card__bar">
        <span>
          <span className="project-card__hint">Click here to visit</span>
          <span className="project-card__title">{project.title}</span>
        </span>
        <ArrowUpRightIcon className="project-card__arrow" width="12" height="12" />
      </span>
    </Link>
  )
}
