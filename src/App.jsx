import { useState } from 'react'
import Trivia from './components/country/Trivia'
import './App.css'
import Header from './components/filter/Header'
import HomePage from './components/pages/Home'
// import { CountryProvider } from "./backend/context/CountryContext.jsx";
// import { fetchAllCountries } from "./backend/services/countriesAPI";


function App() {
  const [triviaOpen, setTriviaOpen] = useState(false)
  return (
    <>
      <Header />
      <button onClick={() => setTriviaOpen(true)}> Play Trivia </button>
      <HomePage />
      <Trivia isOpen={triviaOpen} onClose={() => setTriviaOpen(false)}></Trivia>
    </>
  )
}
export default App;

