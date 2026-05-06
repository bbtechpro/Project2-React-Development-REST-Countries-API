import { Select } from "react-dropdown-select";
import { useState } from "react";

function RegionFilter() {
    const options = [
        { label: "All", value: "" },
        { label: "Africa", value: "africa" },
        { label: "Americas", value: "americas" },
        { label: "Asia", value: "asia" },
        { label: "Europe", value: "europe" },
        { label: "Oceania", value: "oceania" },
    ];

    const [value, setValue] = useState([options[0]]);

    return (
        <Select
            options={options}
            values={value}
            onChange={(values) => setValue(values)}
        />
    )
}

export default RegionFilter;