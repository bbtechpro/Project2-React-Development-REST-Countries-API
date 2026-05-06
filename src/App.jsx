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

// Temporary test — delete @ production!
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