import { IoMdHome } from "react-icons/io";
import Header from "../filter/Header";

function CountryDetail() {
    return (
        <>
        <Header />
            <div className="details-container">
                <button className="back-button">
                    Back
                    <IoMdHome />
                </button>
                <div className="flexbox">
                    <div className="flag-container">
                        <img src="https://flagcdn.com/w320/pe.png" alt="" id="flag-detail" />
                    </div>
                    <div className="details-right">
                        <h2>Peru</h2>
                        <div className="info">
                            <p><strong>Native Name: </strong></p>
                            <p><strong>Population: </strong></p>
                            <p><strong>Region: </strong></p>
                            <p><strong>Sub Region: </strong></p>
                            <p><strong>Capital: </strong></p>
                            <br />
                            <p><strong>Top Level Domain: </strong></p>
                            <p><strong>Languages: </strong></p>
                            <p><strong>Currencies: </strong></p>
                        </div>
                        <div className="border-countries">
                            <span>Border Countries: </span>
                            <a href="" className="border-tag">Country</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryDetail;