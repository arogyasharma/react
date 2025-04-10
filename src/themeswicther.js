import React, { useState } from 'react';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  const pageStyle = {
    backgroundColor: darkMode ? '#222' : '#fff',
    color: darkMode ? '#fff' : '#000',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '20px'
  };

  return (
    <div style={pageStyle}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
