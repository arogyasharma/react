import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function ContactItem({ contact, onDelete, index }) {
  return (
    <div className="contact-item">
      <span>{contact.name} - {contact.phone}</span>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }),
  onDelete: PropTypes.func,
  index: PropTypes.number
};

function ContactListApp() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (name && phone) {
      setContacts([...contacts, { name, phone }]);
      setName('');
      setPhone('');
    }
  };

  const handleDelete = (index) => {
    const updated = contacts.filter((_, i) => i !== index);
    setContacts(updated);
  };

  return (
    <div className="container">
      <h2>Contact List</h2>
      <form onSubmit={handleAdd} className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>

      <div className="list">
        {contacts.length === 0 ? (
          <p>No contacts yet.</p>
        ) : (
          contacts.map((contact, index) => (
            <ContactItem
              key={index}
              contact={contact}
              onDelete={handleDelete}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ContactListApp;


/////css(styles.css)

.container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    font-family: Arial;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .form input {
    padding: 8px;
    border: 1px solid #aaa;
    border-radius: 4px;
  }
  
  .form button {
    padding: 8px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .contact-item {
    display: flex;
    justify-content: space-between;
    background-color: #f8f8f8;
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 4px;
  }
  
  .contact-item button {
    background-color: #e53935;
    border: none;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
  }
  