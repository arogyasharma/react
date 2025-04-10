import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductReview.module.css';

function ProductReview({ name, image, description }) {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  const handleAddReview = () => {
    if (text.trim() && rating >= 1 && rating <= 5) {
      setReviews([...reviews, { text, rating }]);
      setText('');
      setRating(5);
    }
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2>{name}</h2>
      <p>{description}</p>

      <div className={styles.reviewSection}>
        <h3>Add a Review</h3>
        <textarea
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <button onClick={handleAddReview}>Submit</button>

        <h3>User Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((r, i) => (
            <div key={i} className={styles.review}>
              <strong>⭐ {r.rating}</strong>
              <p>{r.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

ProductReview.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProductReview;


///app.js

import React from 'react';
import ProductReview from './ProductReview';

function App() {
  return (
    <div>
      <ProductReview
        name="Bluetooth Speaker"
        image="https://via.placeholder.com/150"
        description="High-quality portable speaker with amazing sound."
      />
    </div>
  );
}

export default App;



//css (ProductReview.module.css)

.card {
    width: 350px;
    margin: 20px auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    font-family: Arial, sans-serif;
    text-align: center;
  }
  
  .image {
    width: 100%;
    border-radius: 10px;
  }
  
  .reviewSection {
    margin-top: 20px;
    text-align: left;
  }
  
  .reviewSection textarea {
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
  }
  
  .reviewSection input {
    width: 60px;
    margin-right: 10px;
  }
  
  .reviewSection button {
    padding: 6px 12px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .review {
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 10px;
  }
  