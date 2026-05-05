function Header() {
    return (
        <nav>
            <span>Where in the World?</span>
            <label className="switch">
                <input type="checkbox" id="toggle"></input>
                <span className="slider round">
                {/* ICON GOES HERE */}
                </span>
            </label>
        </nav>
    )
}

export default Header;