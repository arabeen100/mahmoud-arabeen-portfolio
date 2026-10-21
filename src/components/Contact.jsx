import { useEffect, useState } from 'react'
import { LinkedinIcon, GithubIcon, MailIcon } from './icons'
import { DotGrid } from './Decor'
import './Contact.css'

const socialIcons = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
}

// Egypt observes a single timezone, so Cairo time is "local time" for the whole country.
const timeFormat = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Africa/Cairo',
})

function LocalTime() {
  const [time, setTime] = useState(() => timeFormat.format(new Date()))

  useEffect(() => {
    const id = setInterval(() => setTime(timeFormat.format(new Date())), 20000)
    return () => clearInterval(id)
  }, [])

  return (
    <p className="local-time">
      <span className="local-time__dot" aria-hidden="true" />
      Egypt · {time} local time
    </p>
  )
}

/** "M. S. ARABEEN" from "Mahmoud Samy Arabeen". */
function drawnBy(name) {
  const parts = name.split(' ')
  const initials = parts.slice(0, -1).map((part) => `${part[0]}.`)
  return [...initials, parts.at(-1)].join(' ').toUpperCase()
}

export default function Contact({ profile, socials }) {
  const { contact, name, role, revision } = profile
  const surname = name.split(' ').at(-1)

  const sheet = [
    ['Project', 'Portfolio'],
    ['Engineered by', drawnBy(name)],
    ['Role', role.toUpperCase()],
    ['Rev.', revision],
    ['Scale', '1:1'],
    ['Sheet', '01 / 01'],
  ]

  return (
    <footer id="contact" className="section contact">
      <DotGrid corner="br" />
      <span className="contact__watermark" aria-hidden="true">
        {surname}
      </span>
      <div className="container contact__inner">
        <span className="contact__label" aria-hidden="true">
          // 04 — Say hello
        </span>
        <h2 className="contact__title">Contact</h2>
        <p className="contact__summary">{contact.summary}</p>
        <a href={`mailto:${contact.email}`} className="contact__email">
          <MailIcon width="14" height="11" />
          {contact.email}
        </a>
        <ul className="contact__socials">
          {socials.map((social) => {
            const Icon = socialIcons[social.id]
            return (
              <li key={social.id}>
                <a href={social.url} aria-label={social.label} target="_blank" rel="noreferrer">
                  <Icon width="18" height="18" />
                </a>
              </li>
            )
          })}
        </ul>
        <LocalTime />

        <button
          type="button"
          className="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 13V3m0 0L3.5 7.5M8 3l4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <dl className="title-block" aria-label="Document information">
          {sheet.map(([label, value]) => (
            <div key={label} className="title-block__cell">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </footer>
  )
}
