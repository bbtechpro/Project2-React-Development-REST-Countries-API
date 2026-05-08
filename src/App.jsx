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
      <Router>
        <Header setTriviaOpen={setTriviaOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:cca3" element={<CountryDetail />} />
        </Routes>
        <Trivia isOpen={triviaOpen} onClose={() => setTriviaOpen(false)} />
      </Router>
    </CountryProvider>
  )
}

export default App
