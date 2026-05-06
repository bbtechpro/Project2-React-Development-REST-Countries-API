import Select from "react-dropdown-select";
import { useState } from "react";

function RegionFilter() {
    const [value, setValue] = useState([]);

    const options = [
        {label: "All", value: ""},
        {label: "Africa", value: "africa"},
        {label: "Americas", value: "americas"},
        {label: "Asia", value: "asia"},
        {label: "Europe", value: "europe"},
        {label: "Oceania", value: "oceania"},
    ]
}

export default RegionFilter;