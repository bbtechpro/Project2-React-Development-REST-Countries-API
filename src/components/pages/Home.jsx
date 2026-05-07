import CountryCard from "../country/CountryCard";
import SearchInput from "../filter/SearchInput";
import RegionFilter from "../filter/RegionFilter";
import useCountries from "../../backend/hooks/useCountries";

function HomePage() {

    const { countries, loading, error } = useCountries();

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <div className="filter-search">
                <SearchInput />
                <RegionFilter />
            </div>
            <div className="wrapper">
                {countries.map((country) => {
                    <CountryCard
                        key={country.cca3}
                        country={country}
                    />
                })}
            </div>
        </div>
    )
}

export default HomePage;