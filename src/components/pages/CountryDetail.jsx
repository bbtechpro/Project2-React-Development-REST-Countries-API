import { IoMdHome } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../filter/Header";
import { useCountryContext } from "../../backend/context/CountryContext.jsx";

function CountryDetail() {
    const { cca3 } = useParams();
    const navigate = useNavigate();
    const { countries } = useCountryContext();
    const [country, setCountry] = useState(null);
    const [borderCountries, setBorderCountries] = useState([]);

    useEffect(() => {
        const foundCountry = countries.find(c => c.cca3 === cca3);
        if (foundCountry) {
            setCountry(foundCountry);
            
            // Find border countries
            if (foundCountry.borders) {
                const borders = foundCountry.borders.map(borderCode => 
                    countries.find(c => c.cca3 === borderCode)
                ).filter(Boolean);
                setBorderCountries(borders);
            }
        }
    }, [cca3, countries]);

    const handleBorderClick = (borderCca3) => {
        navigate(`/country/${borderCca3}`);
    };

    const handleBackClick = () => {
        navigate('/');
    };

    if (!country) {
        return (
            <>
                <Header />
                <div className="details-container">
                    <p>Loading country details...</p>
                </div>
            </>
        );
    }

    const nativeName = country.name.nativeName 
        ? Object.values(country.name.nativeName)[0]?.common || country.name.common
        : country.name.common;

    const languages = country.languages 
        ? Object.values(country.languages).join(', ')
        : 'N/A';

    const currencies = country.currencies 
        ? Object.values(country.currencies).map(c => c.name || c).join(', ')
        : 'N/A';

    return (
        <>
            <Header />
            <div className="details-container">
                <button className="back-button" onClick={handleBackClick}>
                    Back
                    <IoMdHome />
                </button>
                <div className="flexbox">
                    <div className="flag-container">
                        <img src={country.flags.svg} alt={country.name.common} id="flag-detail" />
                    </div>
                    <div className="details-right">
                        <h2>{country.name.common}</h2>
                        <div className="info">
                            <p><strong>Native Name: </strong>{nativeName}</p>
                            <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
                            <p><strong>Region: </strong>{country.region}</p>
                            <p><strong>Sub Region: </strong>{country.subregion || 'N/A'}</p>
                            <p><strong>Capital: </strong>{country.capital?.[0] || 'N/A'}</p>
                            <br />
                            <p><strong>Top Level Domain: </strong>{country.tld?.[0] || 'N/A'}</p>
                            <p><strong>Languages: </strong>{languages}</p>
                            <p><strong>Currencies: </strong>{currencies}</p>
                        </div>
                        <div className="border-countries">
                            <span>Border Countries: </span>
                            {borderCountries.length > 0 ? (
                                borderCountries.map(border => (
                                    <button 
                                        key={border.cca3}
                                        className="border-tag"
                                        onClick={() => handleBorderClick(border.cca3)}
                                        style={{ cursor: 'pointer', marginRight: '8px', marginBottom: '8px' }}
                                    >
                                        {border.name.common}
                                    </button>
                                ))
                            ) : (
                                <span className="border-tag">No border countries</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryDetail;