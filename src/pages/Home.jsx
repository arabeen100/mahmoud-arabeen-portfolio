import { useEffect } from 'react'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import { profile, skills, projects, experience } from '../mocks'

export default function Home() {
  useEffect(() => {
    document.title = `${profile.name} | ${profile.role}`
  }, [])

  return (
    <>
      <Hero profile={profile} />
      <TechStack skills={skills} />
      <Projects projects={projects} />
      <Experience items={experience} />
    </>
  )
}
