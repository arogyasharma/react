import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name, price, available }) => {
  const cardStyle = {
    backgroundColor: available ? '#d0f0c0' : '#f8d7da',
    padding: '10px',
    margin: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>{available ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired
};

function ProductCatalog() {
  const products = [
    { name: 'Laptop', price: 60000, available: true },
    { name: 'Headphones', price: 1500, available: false },
    { name: 'Keyboard', price: 1200, available: true }
  ];

  return (
    <div>
      <h2>Product Catalog</h2>
      {products.map((prod, index) => (
        <Product key={index} {...prod} />
      ))}
    </div>
  );
}

export default ProductCatalog;
