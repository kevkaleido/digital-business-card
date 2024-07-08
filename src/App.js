import React, { useState } from 'react';
import './App.css';
import BusinessCard from './BusinessCard';
import profilePic from './profile-pic.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const cardData = {
    name: "Kelvin Mba",
    jobTitle: "Web Developer",
    email: "kelvinkalumba189@gmail.com",
    phone: "2348108384674",
    website: "",
    profilePic: profilePic
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <h1>Digital</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <BusinessCard {...cardData} />
    </div>
  );
}

export default App;
