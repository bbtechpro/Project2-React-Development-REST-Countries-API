import CountryCard from "../country/CountryCard.jsx";
import SearchInput from "../filter/SearchInput";
import RegionFilter from "../filter/RegionFilter";
import { useCountryContext } from "../../backend/context/CountryContext.jsx";

function HomePage() {
    const { countries,
        loading,
        error,
        showFavoritesOnly,
        isFavourite,
    } = useCountryContext();

    const filteredCountries = countries.filter(country => {
        if (showFavoritesOnly) {
            return isFavourite(country.cca3)
        }

        return true;
    })

    return (
        <div className="page-wrapper">
            <div className="filter-search">
                <SearchInput />
                <RegionFilter />
            </div>
            <div className="wrapper">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}

                {showFavoritesOnly &&
                    filteredCountries.length === 0 && (
                        <p className="empty-message">
                            No Favorites Found...
                        </p>
                    )}

                {filteredCountries.map(country => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    )
}

export default HomePage;