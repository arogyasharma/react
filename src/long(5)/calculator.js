import React, { useState } from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  padding: '10px 15px',
  margin: '5px',
  fontSize: '18px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  cursor: 'pointer'
};

function CalcButton({ label, onClick }) {
  return (
    <button style={buttonStyle} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

CalcButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired
};

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (val) => {
    if (val === '=') {
      try {
        setInput(eval(input).toString()); // Simple eval (use with caution!)
      } catch {
        setInput('Error');
      }
    } else if (val === 'C') {
      setInput('');
    } else {
      setInput(input + val);
    }
  };

  const buttons = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+', 'C'];

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        value={input}
        readOnly
        style={{ padding: '10px', fontSize: '20px', width: '220px', marginBottom: '10px' }}
      />
      <div>
        {buttons.map((btn, i) => (
          <CalcButton key={i} label={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;


///app.js

import React from 'react';
import Calculator from './Calculator';

function App() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Simple Calculator</h2>
      <Calculator />
    </div>
  );
}

export default App;
