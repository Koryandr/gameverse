import React from "react";
import './BrowseGamesSection.css';

const BrowseGamesSection = () => {
    return (
        <div className="games-section">
            <div className="left-content">
                <p className="games-collect">
                    PLAY YOUR BEST GAME AND COLLECT REWARDS
                </p>

                <button className="browse-button">
                    BROWSE ALL GAMES
                </button>
            </div>

            <div className="best-games">
                <img src="GameCard.png" alt="FIFA 23" />
                <img src="GameCard2.png" alt="League of Legends" />
                <img src="GameCard3.png" alt="Valorant" />
            </div>
        </div>
    );
}

export default BrowseGamesSection;