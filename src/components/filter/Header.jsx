import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext-s";

function Header() {
    const { isDarkMode, toggleTheme } = useTheme();

    const [showSun, setShowSun] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSun(isDarkMode);
        }, 200);
        return () => clearTimeout(timer);
    }, [isDarkMode])

    return (
        <nav>
            <span>Where in the World?</span>

            <label className="switch">
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleTheme} ></input>
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