import { useState, useEffect } from 'react'
import './styles/global.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress((scrollTop / docHeight) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Cursor />
      {/* Scroll progress bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${progress}%`,
        background: 'var(--accent)',
        zIndex: 200,
        transition: 'width 0.1s linear',
      }} />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App