import { useEffect, useState } from 'react'
import DotGridBackground from './components/DotGridBackground.jsx'
import TopBar from './components/TopBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import TechStack from './components/TechStack.jsx'
import Projects from './components/Projects.jsx'
import Internship from './components/Internship.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <DotGridBackground theme={theme} />
      <div className="wrap">
        <TopBar theme={theme} onToggleTheme={toggleTheme} />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Internship />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
