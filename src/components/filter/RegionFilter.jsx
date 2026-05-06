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
    ];

    return (
        <Select 
        options={options}
        values={value}
        onChange={(values) => setValue(values)}
        />
    )
}

export default RegionFilter;