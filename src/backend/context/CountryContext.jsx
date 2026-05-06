import { createContext, useContext, useState } from "react";
import useCountries from "../hooks/useCountries";


// Created the Context Object
const CountryContext = createContext();

// Created the Provider component
export const CountryProvider = ({ children }) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Inserted custom hook here
  const { countries, loading, error } = useCountries(region, searchQuery);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // Everything in this object is available to any component
  const value = {
    countries,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    region,
    setRegion,
    darkMode,
    toggleDarkMode,
  };

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
};

// 5. Custom hook for consuming the context
export const useCountryContext = () => {
  return useContext(CountryContext);
};