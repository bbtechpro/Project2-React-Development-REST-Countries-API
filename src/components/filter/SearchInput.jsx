import { IoSearch } from "react-icons/io5";

function SearchInput() {
    return (
        <div className="search-container">
            <IoSearch className="search-icon" />
            <input 
            type="text" 
            id="search" 
            placeholder="Search for a country..." />
        </div>
    )
}

export default SearchInput;