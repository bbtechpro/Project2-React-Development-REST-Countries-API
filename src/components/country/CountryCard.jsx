function CountryCard({country}) {
    return (
        <div className="card">
            <img className="flag" src={country.flags.png} alt={country.name.common} />
            <div className="card-body">
                <h3>{country.name.common}</h3>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital?.[0]}</p>
            </div>
        </div>
    );
}

export default CountryCard;