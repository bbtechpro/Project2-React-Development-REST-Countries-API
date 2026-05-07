import { createContext, useContext, useState, useEffect } from "react";
import useCountries from "../hooks/useCountries";

// Created the Context Object
const CountryContext = createContext();

// Created the Provider component
export const CountryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("");
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("darkMode") === "true"
  );
  const [favourites, setFavourites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("favourites")) || []; }
    catch { return []; }
  });

  useEffect(() => { localStorage.setItem("darkMode", darkMode); }, [darkMode]);
  useEffect(() => { localStorage.setItem("favourites", JSON.stringify(favourites)); }, [favourites]);

  // Inserted custom hook here
  const { countries, loading, error } = useCountries(region, searchQuery);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const addFavourite = (country) => {         // Takes full country object as its argument
    setFavourites((prev) => {                 // fn takes current state if the favs array
      const alreadySaved = prev.some(item => item.cca3 === country.cca3);  // loops the prev array & returns any matches with same cca3 code
      if (alreadySaved) return prev;
      return [...prev, country];
    });
  };

  const removeFavourite = (cca3) => {
    setFavourites((prev) => prev.filter((item) => item.cca3 !== cca3));
  };

  const isFavourite = (cca3) => {
    return favourites.some((item) => item.cca3 === cca3);
  };

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
    favourites,
    addFavourite,
    removeFavourite,
    isFavourite,
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
