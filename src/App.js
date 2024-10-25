import React from 'react';
import { Topbar } from './components/Topbar';
import { Navigation } from './components/Navigation';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Topbar />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;