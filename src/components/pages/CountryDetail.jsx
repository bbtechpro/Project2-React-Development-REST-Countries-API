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
            </div>
        </>
    )
}

export default CountryDetail;