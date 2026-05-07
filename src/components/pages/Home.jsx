import CountryCard from "../country/CountryCard-o.jsx";
import SearchInput from "../filter/SearchInput";
import RegionFilter from "../filter/RegionFilter";
import { useCountryContext } from "../../backend/context/CountryContext.jsx";

function HomePage() {
    const { countries, loading, error } = useCountryContext();

    return (
        <div className="page-wrapper">
            <div className="filter-search">
                <SearchInput />
                <RegionFilter />
            </div>
            <div className="wrapper">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {countries.map(country => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    )
}

export default HomePage;