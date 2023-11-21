import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        setCountries(response.data);
      } catch (error) {
        console.error('Erreur Axios:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`);
      setCountries(response.data);
    } catch (error) {
      console.error('Erreur Axios:', error);
    }
  };

  return (
    <div>
      <h1>Country Information App</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km²</p>
            <p>Languages: {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
            <img src={country.flags.png} alt="Flag" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;