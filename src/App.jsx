import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Contact from './components/Contact'
import ScrollManager from './components/ScrollManager'
import BlueprintBackground from './components/BlueprintBackground'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'
import { profile, socials } from './mocks'

export default function App() {
  return (
    <>
      <BlueprintBackground />
      <ScrollManager />
      <Header name={profile.name} />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects/:slug' element={<ProjectDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Contact profile={profile} socials={socials} />
    </>
  )
}
