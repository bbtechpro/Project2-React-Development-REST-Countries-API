import './App.css'
import Header from './components/filter/Header'
import HomePage from './components/pages/Home'
// import { CountryProvider } from "./backend/context/CountryContext.jsx";
// import { fetchAllCountries } from "./backend/services/countriesAPI";

function App() {

  return (
    <>
      <Header />
      <HomePage />
    </>
  )
}

export default App;

// Place all Components between the CountryProvider wrapper
// eg
// return (
//   <CountryProvider>
//     <Navbar />
//     <CountryList />
//   </CountryProvider>
// )
