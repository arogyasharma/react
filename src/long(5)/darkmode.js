import React, { useState } from 'react';
import styles from './ThemeSwitcher.module.css';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;


///css(ThemeSwitcher.module.css)


.light {
    background-color: #f9f9f9;
    color: #222;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .dark {
    background-color: #222;
    color: #f9f9f9;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  button {
    margin-top: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }
  