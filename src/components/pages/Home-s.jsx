// import Filters from "../components/Filter/Filters";
// import Header from "../components/Filter/Header";
// import SearchInput from "../components/Filter/SearchInput";
// import CountryList from "../components/country/CountryList";
// import { useState } from "react";
// import { useEffect } from "react";

// export default function Home() {
//   const [allCountries, setAllCountries] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedRegion, setSelectedRegion] = useState("");

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch(`${import.meta.env.BASE_URL}data/data.json`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setAllCountries(Array.isArray(data) ? data : data.countries || []);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchCountries();
//   }, []);

//   const filteredCountries = (allCountries || []).filter((c) => {
//     const countryName =
//       typeof c.name === "string" ? c.name : c.name?.common || "";
//     const countryRegion = c.region || "";
//     const matchesSearch = countryName
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     const matchesRegion = selectedRegion
//       ? countryRegion === selectedRegion
//       : true;
//     return matchesSearch && matchesRegion;
//   });

//   return (
//     <>
//       <Header />
//       <div className="container">
//           <div className="top">
//             <SearchInput
//               searchTerm={searchTerm}
//               setSearchTerm={setSearchTerm}
//             />
//             <Filters region={selectedRegion} setRegion={setSelectedRegion} />
//           </div>
//           {filteredCountries.length === 0 ? (
//             <p className="no-results">No countries found.</p>
//           ) : (
//             <CountryList countries={filteredCountries} />
//           )}
//       </div>
//     </>
//   );
// }
