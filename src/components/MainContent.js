// src/components/MainContent.js
import React from 'react';
import { getStoryTitle, getCategoryTitle, getCategoryDescription } from '../utils/newsUtils';

// Image imports (if using local images in src folder)
const newsImages = {
  featured: 'https://picsum.photos/400/300?random',
  tech: 'https://picsum.photos/400/300?random',
  business: 'https://picsum.photos/400/300?random',
  sports: 'https://picsum.photos/400/300?random',
  worldNews: 'https://picsum.photos/400/300?random'
};

export function MainContent() {
  // Helper function to get image for story
 // In your getStoryImage function
const getStoryImage = (index) => {
    return `https://picsum.photos/400/300?random=${index}`;
  };

  // Helper function to get image for category
  const getCategoryImage = (category) => {
        return `https://picsum.photos/400/300?random=${category}`;
    
  };

  return (
    <main className="main-content">
      <div className="featured-story">
        <div className="featured-image">
          <img 
            src={newsImages.featured} 
            alt="Featured Story" 
            onError={(e) => {
              e.target.src = '/images/placeholder.jpg';
              e.target.onerror = null;
            }} 
          />
          <div className="featured-overlay">
            <span className="breaking-tag">BREAKING</span>
            <h2>Major Scientific Discovery Reshapes Our Understanding of the Universe</h2>
            <p>Scientists announce groundbreaking findings that could revolutionize physics as we know it.</p>
          </div>
        </div>
        <div className="top-stories">
          <h3>Top Stories</h3>
          <div className="story-list">
            {[1, 2, 3].map((index) => (
              <div key={index} className="story-item">
                <img 
                  src={getStoryImage(index)} 
                  alt={`News story ${index}`}
                  onError={(e) => {
                    e.target.src = '/images/placeholder.jpg';
                    e.target.onerror = null;
                  }} 
                />
                <div className="story-content">
                  <span className="category">
                    {index === 1 ? 'Technology' : index === 2 ? 'Business' : 'Sports'}
                  </span>
                  <h4>{getStoryTitle(index)}</h4>
                  <p>{`${index * 2} hours ago`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="categories-grid">
        {['World News', 'Technology', 'Sports'].map((category) => (
          <div key={category} className="category-section">
            <h3>{category}</h3>
            <div className="category-content">
              <img 
                src={getCategoryImage(category)} 
                alt={category}
                onError={(e) => {
                  e.target.src = '/images/placeholder.jpg';
                  e.target.onerror = null;
                }} 
              />
              <h4>{getCategoryTitle(category)}</h4>
              <p>{getCategoryDescription(category)}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}