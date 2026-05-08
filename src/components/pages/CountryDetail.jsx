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
                            <p>Border Countries: </p>
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

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Header from "../components/Filter/Header";
// import Home from "./Home";
// import { fetchCountriesByCode } from "../../countriesAPI.js";
// import { useCountries } from "../../backend/hooks/useCountries.js"
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


// // import { IoMdHome } from "react-icons/io";
// // import Header from "../filter/Header";

// // function CountryDetail() {
// //     return (
// //         <>
// //         <Header />
// //             <div className="details-container">
// //                 <button className="back-button">
// //                     Back
// //                     <IoMdHome />
// //                 </button>
// //                 <div className="flexbox">
// //                     <div className="flag-container">
// //                         <img src="https://flagcdn.com/w320/pe.png" alt="" id="flag-detail" />
// //                     </div>
// //                     <div className="details-right">
// //                         <h2>Peru</h2>
// //                         <div className="info">
// //                             <p><strong>Native Name: </strong></p>
// //                             <p><strong>Population: </strong></p>
// //                             <p><strong>Region: </strong></p>
// //                             <p><strong>Sub Region: </strong></p>
// //                             <p><strong>Capital: </strong></p>
// //                             <br />
// //                             <p><strong>Top Level Domain: </strong></p>
// //                             <p><strong>Languages: </strong></p>
// //                             <p><strong>Currencies: </strong></p>
// //                         </div>
// //                         <div className="border-countries">
// //                             <span>Border Countries: </span>
// //                             <a href="" className="border-tag">Country</a>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }

// // export default CountryDetail;