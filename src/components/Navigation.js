import React from 'react';

const navLinks = [
  { text: 'Home', path: '/' },
  { text: 'World', path: '/world' },
  { text: 'Politics', path: '/politics' },
  { text: 'Business', path: '/business' },
  { text: 'Technology', path: '/technology' },
  { text: 'Sports', path: '/sports' }
];

export function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <h1>TEST NETWORK</h1>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.text} href={link.path}>{link.text}</a>
          ))}
        </div>
        <button className="mobile-menu" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}