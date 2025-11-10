// src/components/GameColumn.jsx
import React from 'react';
import GameCard from './GameCard';
import './GameColumn.css'; // Импортируем наш предыдущий компонент
// import './GameColumn.css'; // Импортируем стили для заголовка и списка

// Компонент принимает заголовок и массив игр
const GameColumn = ({ title, games }) => {
    return (
        <div className="column">
            {/* 1. Заголовок и "View More" (используем Flexbox для выравнивания в CSS) */}
            <div className="column__header">
                <h3 className="column__title">{title}</h3>
                <a href="#" className="column__view-more">View More</a>
            </div>
            
            <div className="column__list">
                {/* 2. Использование .map() для перебора массива и рендеринга GameCard */}
                {games.map(game => (
                    <GameCard
                        key={game.id} // Важно! Используем id для уникальности
                        image={game.image}
                        title={game.title}
                        status={game.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default GameColumn;