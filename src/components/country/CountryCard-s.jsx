// import { useNavigate } from "react-router-dom";

// export default function CountryCard({ country }) {

//   const navigate = useNavigate();

//   return (
//     <div onClick={() => navigate(`/countries/${country.alpha3Code}`)} className="country-card">
//       <div className="img-wrapper">
//         <img
//           draggable="false"
//           className="country-flag"
//           src={country.flags?.png || country.flag}
//           alt={country.name?.common || country.name}
//         />
//       </div>
//       <div className="country-infos">
//         <h2 className="country-name">{country.name?.common || country.name}</h2>
//         <p className="population">
//           Population:
//           <span>{country.population?.toLocaleString() ?? "N/A"}</span>
//         </p>
//         <p className="region">
//           Region:
//           <span>{country.region}</span>
//         </p>
//         <p className="capital">
//           Capital:
//           <span>
//             {Array.isArray(country.capital)
//               ? country.capital.join(", ")
//               : country.capital || "N/A"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }
