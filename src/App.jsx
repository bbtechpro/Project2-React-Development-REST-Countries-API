import { CountryProvider } from "./backend/context/CountryContext.jsx";
import { useCountryContext } from "./backend/context/CountryContext.jsx";
import { fetchAllCountries } from "./backend/services/countriesAPI";
import "./App.css";


import { CountryProvider } from "./backend/context/CountryContext.jsx"
import { useCountryContext } from "./backend/context/CountryContext.jsx"
import './App.css'

// Temporary test component — delete after confirming
const TestOutput = () => {
  const { countries, loading, error } = useCountryContext()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <p>✅ Countries loaded: {countries.length}</p>
      <p>First country: {countries[0]?.name?.common}</p>
    </div>
  )
}

function App() {
  return (
    <CountryProvider>
      <TestOutput />
    </CountryProvider>
  )
}

export default App
