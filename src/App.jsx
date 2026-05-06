import { CountryProvider } from "./backend/context/CountryContext.jsx";
import { useCountryContext } from "./backend/context/CountryContext.jsx";
import { fetchAllCountries } from "./backend/services/countriesAPI";
import "./App.css";

// // Temporary test — delete @ production!
// fetchAllCountries()
//   .then((data) => {
//     console.log("✅ API working! First country:", data[0]);
//   })
//   .catch((err) => {
//     console.error("❌ API failed:", err.message);
//   });


// function App() {
//   return(
//     <CountryProvider>

//     </CountryProvider>
//   )
// }

// export default App;

// Place all Components between the CountryProvider wrapper
// eg
// return (
//   <CountryProvider>
//     <Header />
//     <CountryList />
//   </CountryProvider>
// )


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
