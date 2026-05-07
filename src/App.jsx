import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CountryProvider } from './backend/context/CountryContext.jsx'
import Trivia from './components/country/Trivia'
import Header from './components/filter/Header'
import HomePage from './components/pages/Home'
import CountryDetail from './components/pages/CountryDetail'
import './App.css'


function App() {
  const [triviaOpen, setTriviaOpen] = useState(false)

  return (
    <CountryProvider>
<<<<<<< HEAD
      <Router>
        <Header />
        <button onClick={() => setTriviaOpen(true)}>Play Trivia</button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:cca3" element={<CountryDetail />} />
        </Routes>
        <Trivia isOpen={triviaOpen} onClose={() => setTriviaOpen(false)} />
      </Router>
=======
      <Header
        setTriviaOpen={setTriviaOpen}
      />
      <HomePage />
      <Trivia isOpen={triviaOpen} onClose={() => setTriviaOpen(false)} />
>>>>>>> be7e60312d11173cdadc4accf4357ec40ebb4aad
    </CountryProvider>
  )
}

export default App