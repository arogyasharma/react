import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'; // Global styles
import styles from './ProfileCard.module.css'; // CSS Module

function ProfileCard({ name, age, location }) {
  const inlineStyle = {
    backgroundColor: age < 30 ? '#e3f2fd' : '#ffe0b2',
    padding: '10px',
    borderRadius: '8px'
  };

  return (
    <div className={`card ${styles.shadow}`} style={inlineStyle}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired
};

export default ProfileCard;


////css (ProfileCard.module.css)

.shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

///css (styles.css)
.card {
  width: 300px;
  margin: 20px auto;
  text-align: center;
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
}


//app.js 
import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <h1>Profile Card</h1>
      <ProfileCard name="Arogya Sharma" age={20} location="Sikkim" />
      <ProfileCard name="John Doe" age={32} location="Chennai" />
    </div>
  );
}

export default App;
