import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/filter/ThemeContext-s.jsx'
import { CountryProvider } from './backend/context/CountryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CountryProvider>
        <App />
      </CountryProvider>
    </ThemeProvider>
  </StrictMode>,
)
