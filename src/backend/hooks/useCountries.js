import { useState, useEffect } from "react";
import { fetchAllCountries, fetchCountriesByRegion, fetchCountryByName } from "../services/countriesAPI";

// Custom Hook
const useCountries = (region = "", searchQuery = "") => {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Resets the state before every new fetch
    setLoading(true);
    setError(null);

    const getData = async () => {
      try {
        let data;

        if (searchQuery) {
          data = await fetchCountryByName(searchQuery);
        } else if (region) {
          data = await fetchCountriesByRegion(region);
        } else {
          data = await fetchAllCountries();
        }

        setCountries([...data].sort((a, b) => a.name.common.localeCompare(b.name.common)));

      } catch (err) {
        setError(err.message);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    getData();

  }, [region, searchQuery]); // re-runs whenever region or search changes

  return { countries, loading, error };
};

export default useCountries;
