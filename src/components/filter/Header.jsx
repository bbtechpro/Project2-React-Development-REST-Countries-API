import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { useState } from "react";

function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [showSun, setShowSun] = useState(false);

    function handleToggle() {
        const newMode = !darkMode;

        setDarkMode(newMode);

        // HALFWAY ANIMATION
        setTimeout(() => {
            setShowSun(newMode);
        }, 200);
    }

    return (
        <nav>
            <span>Where in the World?</span>

            <label className="switch">
                <input 
                type="checkbox" 
                checked={darkMode}
                onChange={handleToggle} ></input>
                <span className="slider round">
                    {showSun ? (
                      <FaSun className="sun-icon icon" />  
                    ) : (
                        <IoMoon className="moon-icon icon" />
                    )}
                </span>
            </label>
        </nav>
    )
}

export default Header;