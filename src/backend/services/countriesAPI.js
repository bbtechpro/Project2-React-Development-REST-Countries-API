const BASE_URL = "https://restcountries.com/v3.1";

// Get all countries (homepage)
export const fetchAllCountries = async () => {
  const response = await fetch(
    `${BASE_URL}/all?fields=name,flags,population,region,capital,cca3`
  );
  if (!response.ok) throw new Error("Failed to fetch countries");
  return response.json();
};

// Search by name
export const fetchCountryByName = async (name) => {
  const response = await fetch(`${BASE_URL}/name/${name}`);
  if (!response.ok) throw new Error(`Country "${name}" not found`);
  return response.json();
};

// Filter by region
export const fetchCountriesByRegion = async (region) => {
  const response = await fetch(`${BASE_URL}/region/${region}`);
  if (!response.ok) throw new Error(`No countries found in region "${region}"`);
  return response.json();
};

// Detail page — single country by cca3 code
export const fetchCountryByCode = async (code) => {
  const response = await fetch(`${BASE_URL}/alpha/${code}`);
  if (!response.ok) throw new Error(`Country code "${code}" not found`);
  return response.json();
};

// Border countries — takes an array of cca3 codes
export const fetchBorderCountries = async (codes) => {
  const codeString = codes.join(",");
  const response = await fetch(`${BASE_URL}/alpha?codes=${codeString}&fields=name,cca3`);
  if (!response.ok) throw new Error("Failed to fetch border countries");
  return response.json();
};