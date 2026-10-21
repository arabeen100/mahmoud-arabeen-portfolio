import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Experience.css'

// Companies without a logo asset get a monogram badge instead.
const initials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

export default function Experience({ items }) {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeading index="03" label="Career" tone="cool">
          Experience
        </SectionHeading>
        <ul className="experience__list">
          {items.map((item) => (
            <Reveal as="li" key={item.id}>
              <div className="job__head">
                {item.logo ? (
                  <img className="job__logo" src={item.logo} alt="" />
                ) : (
                  <span className="job__logo job__logo--mono" aria-hidden="true">
                    {initials(item.company)}
                  </span>
                )}
                <h3 className="job__title">{item.title}</h3>
                <span className="job__period">{item.period}</span>
              </div>
              <p className="job__description">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
