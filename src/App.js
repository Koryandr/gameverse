import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'; 
import GameShowcase from './components/GameShowcase';
import BrowseGamesSection from './components/BrowseGamesSection';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/> 
      <BrowseGamesSection/>
      <GameShowcase /> 
      <News/>
    </div>
  );
}

export default App;