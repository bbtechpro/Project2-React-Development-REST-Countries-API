import { useCountryContext } from '../../backend/context/CountryContext.jsx'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
=======
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
>>>>>>> be7e60312d11173cdadc4accf4357ec40ebb4aad

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
