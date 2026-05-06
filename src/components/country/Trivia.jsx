import React, { useState, useEffect } from 'react'
import { fetchTriviaCountries } from '../../backend/services/countriesAPI'

const TOTAL_QUESTIONS = 5

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function Trivia({ isOpen, onClose }) {

  const [queue, setQueue] = useState([])
  const [current, setCurrent] = useState(0)
  const [options, setOptions] = useState([])
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [loading, setLoading] = useState(true)

  // Fetch trivia countries when modal opens
  useEffect(() => {
    if (!isOpen) return

    const loadTrivia = async () => {
      setLoading(true)
      try {
        const data = await fetchTriviaCountries(15)
        const picked = shuffle(data).slice(0, TOTAL_QUESTIONS)
        setQueue(picked)
        setCurrent(0)
        setScore(0)
        setSelected(null)
        setFinished(false)
      } catch (err) {
        console.error('Failed to load trivia:', err.message)
      } finally {
        setLoading(false)
      }
    }

    loadTrivia()
  }, [isOpen])

  // Build answer options whenever current question changes
  useEffect(() => {
    if (queue.length === 0) return

    const correct = queue[current]
    const others = shuffle(
      queue.filter((_, i) => i !== current)
    ).slice(0, 3)

    setOptions(shuffle([correct, ...others]))
    setSelected(null)
  }, [current, queue])

  const handleAnswer = (country) => {
    if (selected) return
    setSelected(country)
    if (country.name.common === queue[current].name.common) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (current + 1 >= TOTAL_QUESTIONS) {
      setFinished(true)
    } else {
      setCurrent(prev => prev + 1)
    }
  }

  const handleRestart = () => {
    const reshuffled = shuffle(queue)
    setQueue(reshuffled)
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
  }

  if (!isOpen) return null

  const correctAnswer = queue[current]?.name?.common

  return (
    <div className="trivia-overlay" onClick={onClose}>

      <div className="trivia-modal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="trivia-header">
          <h2>Name this flag</h2>
          <div className="trivia-meta">
            <span className="score-pill">Score: {score}</span>
            <button className="close-btn" onClick={onClose}>&#x2715;</button>
          </div>
        </div>

        {/* Body */}
        {loading ? (
          <div className="trivia-body">
            <p>Loading questions...</p>
          </div>

        ) : finished ? (
          <div className="trivia-body trivia-results">
            <p className="results-score">{score} / {TOTAL_QUESTIONS}</p>
            <p className="results-label">
              {score === TOTAL_QUESTIONS ? 'Perfect score!' : score >= 3 ? 'Nice work!' : 'Keep practicing!'}
            </p>
            <button className="next-btn" onClick={handleRestart}>Play again</button>
          </div>

        ) : (
          <div className="trivia-body">

            {/* Progress */}
            <p className="question-label">Question {current + 1} of {TOTAL_QUESTIONS}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((current + 1) / TOTAL_QUESTIONS) * 100}%` }}
              />
            </div>

            {/* Flag */}
            <div className="flag-display">
              <img
                src={queue[current]?.flags?.png}
                alt="mystery flag"
              />
            </div>

            {/* Options */}
            <div className="options-grid">
              {options.map((country) => {
                const name = country.name.common
                const isCorrect = name === correctAnswer
                const isSelected = selected?.name?.common === name

                let btnClass = 'option-btn'
                if (selected) {
                  if (isCorrect) btnClass += ' correct'
                  else if (isSelected) btnClass += ' wrong'
                }

                return (
                  <button
                    key={name}
                    className={btnClass}
                    onClick={() => handleAnswer(country)}
                    disabled={!!selected}
                  >
                    {name}
                  </button>
                )
              })}
            </div>

            {/* Feedback */}
            {selected && (
              <p className={`feedback ${selected.name.common === correctAnswer ? 'correct' : 'wrong'}`}>
                {selected.name.common === correctAnswer
                  ? 'Correct!'
                  : `Not quite — it's ${correctAnswer}.`}
              </p>
            )}

            {/* Next button */}
            <button
              className="next-btn"
              onClick={handleNext}
              disabled={!selected}
            >
              {current + 1 === TOTAL_QUESTIONS ? 'See results' : 'Next question'}
            </button>

          </div>
        )}
      </div>
    </div>
  )
}