import React, { useState } from 'react';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const formStyle = {
    width: '300px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    margin: '10px 0',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #aaa'
  };

  const errorStyle = {
    color: 'red',
    backgroundColor: '#ffe0e0',
    padding: '8px',
    borderRadius: '4px',
    marginBottom: '10px',
    display: error ? 'block' : 'none'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('All fields are required!');
    } else if (!email.includes('@')) {
      setError('Invalid email address!');
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters!');
    } else {
      setError('');
      alert('Signup successful!');
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: 'center' }}>Signup Form</h2>

      <div style={errorStyle}>{error}</div>

      <input
        type="text"
        placeholder="Name"
        value={name}
        style={inputStyle}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        style={inputStyle}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        style={inputStyle}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        style={{
          ...inputStyle,
          backgroundColor: '#4caf50',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;


