import { useCountryContext } from '../../backend/context/CountryContext.jsx'

function CountryCard({ country }) {
  const { addFavourite, removeFavourite, isFavourite } = useCountryContext()
  const saved = isFavourite(country.cca3)

  return (
    <div className="card">
      <img className="flag" src={country.flags.png} alt={country.name.common} />
      <div className="card-body">
        <h3>{country.name.common}</h3>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital?.[0]}</p>
        <button onClick={() => saved ? removeFavourite(country.cca3) : addFavourite(country)}>
          {saved ? "♥" : "♡"}
        </button>
      </div>
    </div>
  )
}

export default CountryCard
