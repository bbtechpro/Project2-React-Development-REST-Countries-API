import { FiMoon, FaSun } from "react-icons/fi";

function Header() {
    return (
        <nav>
            <span>Where in the World?</span>
            <label className="switch">
                <input type="checkbox" id="toggle"></input>
                <span className="slider round">
                <FiMoon />
                </span>
            </label>
        </nav>
    )
}

export default Header;