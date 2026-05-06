function CountryCard() {
    return (
        <div className="wrapper">
            <div className="card">
                <img className="flag" src="https://flagcdn.com/pe.svg" alt="" />
                <div className="card-body">
                    <h5>Peru</h5>
                    <p>Population: </p>
                    <p>Region: </p>
                    <p>Capital: </p>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;