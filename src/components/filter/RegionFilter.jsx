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
            className="select"
            options={options}
            values={value}
            onChange={(values) => setValue(values)}
            style={{
                width: "200px",
                border: "none",
                boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
                padding: "0.75rem",
                backgroundColor: "var(--element-color)",
                color: "var(--input-color)"
            }}
        />
    )
}

export default RegionFilter;