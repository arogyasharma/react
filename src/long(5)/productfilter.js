import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductFilter.module.css';

const ProductCard = ({ name, category, price }) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>₹{price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { name: 'Smartphone', category: 'Electronics', price: 20000 },
    { name: 'T-shirt', category: 'Clothing', price: 500 },
    { name: 'Table Lamp', category: 'Home Decor', price: 800 },
    { name: 'Jeans', category: 'Clothing', price: 1200 },
    { name: 'Headphones', category: 'Electronics', price: 1500 },
    { name: 'Wall Art', category: 'Home Decor', price: 1300 },
  ];

  const categories = ['All', 'Electronics', 'Clothing', 'Home Decor'];

  const filtered = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className={styles.container}>
      <div className={styles.filterBar}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? styles.active : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((prod, idx) => (
          <ProductCard key={idx} {...prod} />
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;


//app.js

import React from 'react';
import ProductFilter from './ProductFilter';

function App() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Product Filter</h2>
      <ProductFilter />
    </div>
  );
}

export default App;


//css(ProductFilter.module.css)
.container {
  max-width: 700px;
  margin: auto;
  font-family: Arial;
}

.filterBar {
  text-align: center;
  margin-bottom: 20px;
}

.filterBar button {
  margin: 5px;
  padding: 8px 12px;
  border: none;
  background-color: #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.active {
  background-color: #4caf50;
  color: white;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.card {
  border: 1px solid #ccc;
  padding: 15px;
  width: 200px;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
}
