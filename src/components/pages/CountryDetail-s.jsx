// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Header from "../components/Filter/Header";
// import Home from "./Home";
// import { FaArrowLeft } from "react-icons/fa";

// export default function CountryDetail() {
//   const { name } = useParams();
//   const [country, setCountry] = useState(null);

//   const navigate = useNavigate();


//   useEffect(() => {
//     fetch(`${import.meta.env.BASE_URL}data/data.json`)
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((c) => c.alpha3Code === name);
//         setCountry(found);
//       });
//   }, [name]);

//   if (!country) return <p className="loading">Loading...</p>;

//   return (
//     <>
//     <Header />
//     <div className="detail">
//         <div className="wrapper">
//             <button className="back-btn" onClick={() => navigate("/")}>
//                 <FaArrowLeft /> 
//                 Back
//             </button>
//             <img draggable="false" src={country.flags?.png} />

//             <div className="infos">
//                 <h1 className="country-name">{country.name}</h1>
//                 <div className="cols">
//                     <div className="col1">
//                         <p>Native Name: 
//                             <span>{country.nativeName}</span>
//                         </p>
//                         <p>Population: 
//                             <span>{country.population}</span>
//                         </p>
//                         <p>Region: 
//                             <span>{country.region}</span>
//                         </p>
//                         <p>Sub Region: 
//                             <span>{country.subregion}</span>
//                         </p>
//                         <p>Capital: 
//                             <span>{country.capital}</span>
//                         </p>
//                     </div>
//                     <div className="col2">
//                         <p>Top Level Domain: 
//                             <span>{country.topLevelDomain}</span>
//                         </p>
//                         <p>Currencies: {" "}
//                             <span>{country.currencies.map((curr) => curr.name).join(", ")}</span>
//                         </p>
//                         <p>Languages: {" "}
//                             <span>{country.languages.map((lang) => lang.name).join(", ")}</span>
//                         </p>
//                     </div>
//                 </div>
//               <div className="border-countries">
//                 Border Countries:{" "}
//                 {country.borders && country.borders.length > 0 ? (
//                     country.borders.map((border) => (
//                     <span key={border} className="border-item">
//                         {border}
//                     </span>
//                     ))
//                 ) : (
//                     <span>None</span>
//                 )}
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   );
// }