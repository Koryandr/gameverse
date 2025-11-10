// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'; 
import GameShowcase from './components/GameShowcase'; // <-- 1. Импортируем!

function App() {
  return (
    <div className="App">
      
      {/* 🚀 Рекомендация: секция 'Main' (герой) и 'Header' 
          обычно не обертываются тегом <header> вместе. 
          Лучше использовать просто <div>, чтобы не путать браузер. */}
      
      {/* Оставляем Header и Main, как у вас */}
      <Header/>
      <Main/> 
      
      {/* 2. Размещаем наш новый макет сразу после Main */}
      <GameShowcase /> 
      
    </div>
  );
}

export default App;