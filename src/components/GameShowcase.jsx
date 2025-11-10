// src/components/GameShowcase.jsx
import React from 'react';
import GameColumn from './GameColumn';
import './GameShowcase.css';
// Импортируем данные из вашего нового файла
import { newRelease, freeGames, comingSoon } from '../data/gameData'; 
import './GameShowcase.css'; // Будем использовать этот файл для CSS Grid

const GameShowcase = () => {
    return (
        // Родительский контейнер, к которому мы применим CSS Grid
        <section className="game-showcase-container"> 
            
            <GameColumn
                title="New Release"
                games={newRelease}
            />
            
            <GameColumn
                title="Free Games"
                games={freeGames}
            />
            
            <GameColumn
                title="Coming Soon"
                games={comingSoon}
            />
        </section>
    );
};

export default GameShowcase;