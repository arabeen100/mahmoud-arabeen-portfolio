import { Fragment, useEffect, useState } from 'react'
import { DotGrid } from './Decor'
import MagneticLink from './MagneticLink'
import './Hero.css'

/** Cycles through the highlighted words; the first one is what assistive tech reads. */
function RotatingWord({ words, interval = 2800 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (words.length < 2 || reduceMotion) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words, interval])

  return (
    <>
      <span className="sr-only">{words[0]}</span>
      <span key={words[index]} className="hero__highlight hero__word" aria-hidden="true">
        {words[index]}
      </span>
    </>
  )
}

export default function Hero({ profile }) {
  const { avatar, headline, intro, cvUrl, name } = profile

  return (
    <section id="home" className="section hero">
      <DotGrid corner="tl" />
      <DotGrid corner="tr" />
      <div className="container hero__inner">
        <div className="hero__portrait">
          <span className="hero__orbit" aria-hidden="true" />
          <div className="hero__avatar">
            <img src={avatar} alt={`Portrait of ${name}`} width="213" height="213" />
          </div>
        </div>
        <h1 className="hero__title">
          {headline.lines.map((line, i) => (
            <Fragment key={line}>
              {line}
              {i < headline.lines.length - 1 ? <br /> : ' '}
            </Fragment>
          ))}
          <RotatingWord words={headline.highlights} />
        </h1>
        <p className="hero__intro">{intro}</p>
        <div className="hero__actions">
          <MagneticLink href="#contact" className="button button--solid">
            Get In Touch
          </MagneticLink>
          <MagneticLink href={cvUrl} className="button button--outline" download>
            Download CV
          </MagneticLink>
        </div>
      </div>
    </section>
  )
}
