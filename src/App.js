// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'; 
import GameShowcase from './components/GameShowcase';
import BrowseGamesSection from './components/BrowseGamesSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/> 
      <GameShowcase /> 
      <BrowseGamesSection/>
    </div>
  );
}

export default App;