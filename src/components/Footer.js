import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>GNN</h4>
            <p>Your trusted source for global news and insights.</p>
          </div>
          <div className="footer-section">
            <h5>Sections</h5>
            <ul>
              <li><a href="/world">World</a></li>
              <li><a href="/politics">Politics</a></li>
              <li><a href="/business">Business</a></li>
              <li><a href="/technology">Technology</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Company</h5>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="https://twitter.com">Twitter</a>
              <a href="https://facebook.com">Facebook</a>
              <a href="https://instagram.com">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Global News Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}