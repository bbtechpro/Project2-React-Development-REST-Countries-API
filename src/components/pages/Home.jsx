import CountryCard from "../country/CountryCard";
import SearchInput from "../filter/SearchInput";
import RegionFilter from "../filter/RegionFilter";
import { useCountryContext } from "../../backend/context/CountryContext";

function HomePage() {

    const { countries, loading, error } = useCountryContext();

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="page-wrapper">
            <div className="filter-search">
                <SearchInput />
                <RegionFilter />
            </div>
            <div className="wrapper">
                {countries.map((country) => {
                    return (
                        <CountryCard
                            key={country.cca3}
                            country={country}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage;