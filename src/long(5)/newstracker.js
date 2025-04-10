import React, { useEffect, useState } from 'react';
import './styles.css';

function NewsFeed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Sample API - You can replace this with a real news API
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then((data) => {
        // Simulate featured articles by marking odd articles as featured
        const withAuthors = data.map((item, index) => ({
          ...item,
          author: `Author ${index + 1}`,
          featured: index % 2 === 0
        }));
        setArticles(withAuthors);
      });
  }, []);

  return (
    <div className="news-container">
      {articles.map((article) => (
        <div
          key={article.id}
          className="news-card"
          style={{
            backgroundColor: article.featured ? '#fff8e1' : '#f0f0f0',
            border: article.featured ? '2px solid #fbc02d' : '1px solid #ccc'
          }}
        >
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <p><strong>By:</strong> {article.author}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;


///app.js
import React from 'react';
import NewsFeed from './NewsFeed';

function App() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>📰 News Feed Dashboard</h2>
      <NewsFeed />
    </div>
  );
}

export default App;


///css

.news-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 700px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
  }
  
  .news-card {
    padding: 15px;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .news-card h3 {
    margin-top: 0;
    color: #333;
  }
  