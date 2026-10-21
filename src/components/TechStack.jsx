import './TechStack.css'

// A set must be wider than the viewport for the loop to look seamless.
const REPEAT = 2

function MarqueeSet({ skills, hidden }) {
  return (
    <ul className="marquee__set" aria-hidden={hidden || undefined}>
      {Array.from({ length: REPEAT }, (_, n) =>
        skills.map((skill) => (
          <li key={`${skill.id}-${n}`} data-name={skill.name}>
            <img src={skill.logo} alt={n === 0 && !hidden ? skill.name : ''} />
          </li>
        )),
      )}
    </ul>
  )
}

export default function TechStack({ skills }) {
  return (
    <section className="tech">
      <div className="container">
        <h2 className="tech__label">Experience with</h2>
      </div>
      <div className="marquee">
        <div className="marquee__track">
          <MarqueeSet skills={skills} />
          <MarqueeSet skills={skills} hidden />
        </div>
      </div>
    </section>
  )
}
