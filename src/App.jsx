import { useState } from 'react'
import { CountryProvider } from './backend/context/CountryContext.jsx'
import Trivia from './components/country/Trivia'
import Header from './components/filter/Header'
import HomePage from './components/pages/Home'
import './App.css'


function App() {
  const [triviaOpen, setTriviaOpen] = useState(false)

  return (
    <CountryProvider>
      <Header
        setTriviaOpen={setTriviaOpen}
      />
      <HomePage />
      <Trivia isOpen={triviaOpen} onClose={() => setTriviaOpen(false)} />
    </CountryProvider>
  )
}

export default App