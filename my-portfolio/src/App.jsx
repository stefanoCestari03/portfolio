import { useState, useEffect } from 'react'
import Portfolio from './components/Portfolio'
import PortfolioClassic from './components/PortfolioClassic'
import VersionToggle from './components/VersionToggle'

function App() {
  const [version, setVersion] = useState('immersive')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio-view')
      if (saved === 'classic' || saved === 'immersive') setVersion(saved)
    } catch {
      // localStorage unavailable (private browsing, etc.) — keep default
    }
  }, [])

  const toggleVersion = () => {
    setVersion((current) => {
      const next = current === 'immersive' ? 'classic' : 'immersive'
      try {
        localStorage.setItem('portfolio-view', next)
      } catch {
        // ignore
      }
      return next
    })
  }

  return (
    <>
      {version === 'immersive' ? <Portfolio /> : <PortfolioClassic />}
      <VersionToggle version={version} onToggle={toggleVersion} />
    </>
  )
}

export default App
