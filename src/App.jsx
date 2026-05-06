import { CountryProvider } from "./backend/context/CountryContext.jsx";
import { fetchAllCountries } from "./backend/services/countriesAPI";
import "./App.css";

// Temporary test — delete @ production!
fetchAllCountries()
  .then((data) => {
    console.log("✅ API working! First country:", data[0]);
  })
  .catch((err) => {
    console.error("❌ API failed:", err.message);
  });


function App() {
  return(
    <CountryProvider>

    </CountryProvider>
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
