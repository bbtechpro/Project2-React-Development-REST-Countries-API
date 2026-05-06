import { useState } from 'react'
import Trivia from './components/country/Trivia'
import './App.css'
import Header from './components/filter/Header'
import HomePage from './components/pages/Home'


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

