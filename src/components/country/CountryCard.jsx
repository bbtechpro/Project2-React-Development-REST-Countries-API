import { useCountryContext } from '../../backend/context/CountryContext.jsx'
import { useNavigate } from 'react-router-dom'

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
        <button 
          onClick={(e) => {
            e.stopPropagation()
            saved ? removeFavourite(country.cca3) : addFavourite(country)
          }}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>
    </div>
  )
}

export default CountryCard

