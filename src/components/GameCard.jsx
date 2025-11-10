// src/components/GameCard.jsx
import React from 'react';
import './GameCard.css';
// import './GameCard.css'; // Не забудьте импортировать стили

const GameCard = ({ image, title, status }) => {
    
    // Логика для стилизации: выделяем "Free" и "Coming Soon"
    const isHighlighted = status === 'Free' || status === 'Coming Soon';
    
    return (
        <div className="game-card">
            <img src={image} alt={title} className="game-card__image" />
            <div className="game-card__info">
                <p className="game-card__title">{title}</p>
                
                {/* Динамическое присвоение класса для выделения */}
                <p className={`game-card__status ${isHighlighted ? 'highlight' : ''}`}>
                    {status}
                </p>
            </div>
        </div>
    );
};

export default GameCard;