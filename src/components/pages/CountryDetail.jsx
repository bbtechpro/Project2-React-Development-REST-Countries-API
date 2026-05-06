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
                        <img src="" alt="" id="flag-detail" />
                    </div>
                    <div className="details-right">
                        <h2>Peru</h2>
                        <div className="info">
                            <p><strong>Native Name: </strong></p>
                            <p><strong>Population: </strong></p>
                            <p><strong>Region: </strong></p>
                            <p><strong>Sub Region: </strong></p>
                            <p><strong>Capital: </strong></p>
                            <p><strong>Top Level Domain: </strong></p>
                            <p><strong>Languages: </strong></p>
                            <p><strong>Currencies: </strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryDetail;