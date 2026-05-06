import CountryCard from "../country/CountryCard";
import SearchInput from "../filter/SearchInput";
import RegionFilter from "../filter/RegionFilter";

function HomePage() {
    return (
        <div>
            <div className="filter-search">
                <SearchInput />
                <RegionFilter />
            </div>
            <CountryCard />
        </div>
    )
}

export default HomePage;