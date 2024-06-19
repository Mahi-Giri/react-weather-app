import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIOptions } from "../../api";

const SearchBar = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const handleChange = (value) => {
        setSearch(value);
        onSearchChange(value);
        console.log(value);
    };

    const loadOptions = (inputValue) => {
        return fetch(
            `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoAPIOptions
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => ({
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    })),
                };
            })
            .catch((err) => console.log(err));
    };

    return (
        <AsyncPaginate
            placeholder="Search For City"
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    );
};

export default SearchBar;
