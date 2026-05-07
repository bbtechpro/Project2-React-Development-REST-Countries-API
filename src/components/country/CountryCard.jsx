import { useCountryContext } from '../../backend/context/CountryContext.jsx'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
=======
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
=======
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
>>>>>>> be7e60312d11173cdadc4accf4357ec40ebb4aad
>>>>>>> 81675d754a4fd44e75f2f6c5052f6c5bfc58dc51

function CountryCard({ country }) {
  const { addFavourite, removeFavourite, isFavourite } = useCountryContext()
  const navigate = useNavigate()
  const saved = isFavourite(country.cca3)

  const handleCardClick = () => {
    navigate(`/country/${country.cca3}`)
  }

  return (
    <div className="card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img className="flag" src={country.flags.svg} alt={country.name.common} />
      <div className="card-body">
        <h3>{country.name.common}</h3>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital?.[0]}</p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 81675d754a4fd44e75f2f6c5052f6c5bfc58dc51
        <button onClick={(e) => {
          e.stopPropagation()
          saved ? removeFavourite(country.cca3) : addFavourite(country)
        }}>
          {saved ? "♥" : "♡"}
=======
        <button
          className='heart-button'
          onClick={() => saved
            ? removeFavourite(country.cca3)
            : addFavourite(country)}
        >
          {saved ? <IoHeart /> : <IoHeartOutline /> }
>>>>>>> be7e60312d11173cdadc4accf4357ec40ebb4aad
        </button>
      </div>
    </div>
  )
}

export default CountryCard


// import { useCountryContext } from '../../backend/context/CountryContext.jsx'
// import { CountryDetail } from '../pages/CountryDetail.jsx'

// function CountryCard({ country }) {
//   const { addFavourite, removeFavourite, isFavourite } = useCountryContext()
//   const saved = isFavourite(country.cca3)

//   return (
//     <onClick className="displayDetails"><CountryDetail />
//     <div className="card">
//       <img className="flag" src={country.flags.svg} alt={country.name.common} />
//       <div className="card-body">
//         <h3>{country.name.common}</h3>
//         <p>Population: {country.population.toLocaleString()}</p>
//         <p>Region: {country.region}</p>
//         <p>Capital: {country.capital?.[0]}</p>
//         <button onClick={() => saved ? removeFavourite(country.cca3) : addFavourite(country)}>
//           {saved ? "♥" : "♡"}
//         </button>
//       </div>
//     </div>
//     </onClick>
//   )
// }

// export default CountryCard


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
