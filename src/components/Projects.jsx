import { CornerMarks } from './Decor'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Projects.css'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading index="02" label="Selected work" tone="warm">
          Projects
        </SectionHeading>
        <div className="projects__frame">
          <CornerMarks offset="-16px" />
          <ul className="projects__grid">
            {projects.map((project, i) => (
              <Reveal as="li" key={project.slug} delay={(i % 2) * 120}>
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
