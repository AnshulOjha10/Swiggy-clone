import React, { useState } from 'react';
import Foodcard from './components/Foodcard';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterSection from './components/FilterSection';
const App = () => {
  const [country, setCountry] = useState('Indian');

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
  };

  return (
    <div className='Parent'>
      <Header/>
      <FilterSection selectedCountry={country} onCountryChange={handleCountryChange} />
      <Foodcard country={country} />
      <Footer/>
    </div>
  );
};

export default App;