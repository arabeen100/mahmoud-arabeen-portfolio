import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowUpRightIcon } from '../components/icons'
import { CornerMarks, DotGrid } from '../components/Decor'
import Reveal from '../components/Reveal'
import { profile, projects } from '../mocks'
import NotFound from './NotFound'
import './ProjectDetail.css'

function BackIcon() {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      aria-hidden='true'
    >
      <path
        d='M12 7H2m0 0 4-4M2 7l4 4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  useEffect(() => {
    if (project) document.title = `${project.title} | ${profile.name}`
  }, [project])

  if (!project) return <NotFound />

  const next = projects[(index + 1) % projects.length]

  return (
    <article className='pd'>
      {/* ---------- Hero ---------- */}
      <header className='pd-hero'>
        <div className='pd-hero__media' aria-hidden='true'>
          <img src={project.thumbnail} alt='' />
        </div>
        <DotGrid corner='tr' />
        <div className='container--wide pd-hero__inner'>
          <Link to={{ pathname: '/', hash: '#projects' }} className='back-link'>
            <BackIcon />
            All projects
          </Link>
          <span className='pd-hero__caption' aria-hidden='true'>
            FIG. 01 — {project.title}
          </span>
          <div className='pd-hero__content'>
            <span className='pill'>
              <span className='pill__dot' />
              {project.category}
            </span>
            <h1 className='pd-hero__title'>{project.title}</h1>
            <p className='pd-hero__tagline'>{project.tagline}</p>
            <div className='pd-hero__actions'>
              <a
                href={project.links.live}
                className='button button--solid button--sm'
                target='_blank'
                rel='noreferrer'
              >
                Live demo
                <ArrowUpRightIcon width='11' height='11' />
              </a>
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  className='button button--outline button--sm'
                  target='_blank'
                  rel='noreferrer'
                >
                  View source
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Summary + metadata ---------- */}
      <section className='pd-section container--wide pd-overview'>
        <Reveal className='pd-overview__text'>
          <p className='eyebrow'>Overview</p>
          <h2 className='pd-heading'>The project at a glance</h2>
          {project.overview.map((paragraph) => (
            <p key={paragraph} className='pd-prose'>
              {paragraph}
            </p>
          ))}
          <div className='pd-overview__stack'>
            <span className='meta-card__label'>Built with</span>
            <ul className='chips'>
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal
          as='aside'
          delay={120}
          className='meta-card'
          aria-label='Project details'
        >
          <CornerMarks offset='-6px' />
          <dl className='meta-card__list'>
            {project.meta.map((item) => (
              <div key={item.label} className='meta-card__row'>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className='meta-card__stack min-w-[800px]:hidden'>
            <span className='meta-card__label'>Built with</span>
            <ul className='chips'>
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ---------- Results ---------- */}
      {project.results && (
        <section className='pd-section container--wide'>
          <Reveal className='stats'>
            <CornerMarks offset='-6px' />
            {project.results.map((result) => (
              <div key={result.label} className='stat'>
                <span className='stat__value'>{result.value}</span>
                <span className='stat__label'>{result.label}</span>
              </div>
            ))}
          </Reveal>
        </section>
      )}

      {/* ---------- Features ---------- */}
      <section className='pd-section container--wide'>
        <Reveal>
          <p className='eyebrow'>Features</p>
          <h2 className='pd-heading'>What it covers</h2>
        </Reveal>
        <ul className='features'>
          {project.features.map((feature, i) => (
            <Reveal
              as='li'
              key={feature.title}
              delay={(i % 2) * 100}
              className='feature'
            >
              <span className='feature__index'>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className='feature__title'>{feature.title}</h3>
              <p className='feature__text'>{feature.description}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- Next project ---------- */}
      <section className='pd-section container--wide pd-next'>
        <Reveal>
          <Link to={`/projects/${next.slug}`} className='next-card'>
            <CornerMarks offset='-6px' />
            <span className='next-card__text'>
              <span className='eyebrow'>Next project</span>
              <span className='next-card__title'>{next.title}</span>
              <span className='next-card__tagline'>{next.tagline}</span>
            </span>
            <img
              className='next-card__thumb'
              src={next.thumbnail}
              alt=''
              loading='lazy'
            />
            <ArrowUpRightIcon
              className='next-card__arrow'
              width='14'
              height='14'
            />
          </Link>
        </Reveal>
      </section>
    </article>
  )
}
