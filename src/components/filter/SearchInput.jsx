import { IoSearch } from "react-icons/io5";
import { useCountryContext } from "../../backend/context/CountryContext";

function SearchInput() {
    const { searchQuery, setSearchQuery } = useCountryContext();

    return (
        <div className="search-container">
            <IoSearch className="search-icon" />
            <input
                type="text"
                id="search"
                placeholder="Search for a country..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
        </div>
    )
}

export default SearchInput;