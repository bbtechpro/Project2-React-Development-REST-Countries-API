import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { useState } from "react";

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <nav>
            <span>Where in the World?</span>
            <label className="switch">
                <input type="checkbox" id="toggle"></input>
                <span className="slider round">
                    <IoMoon className="moon-icon" />
                </span>
            </label>
        </nav>
    )
}

export default Header;