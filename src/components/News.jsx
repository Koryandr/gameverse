import React from "react";
import { Search } from "lucide-react";
import "./News.css";

const News = () => {
  return (
    <>
      <div className="news-nav">
        <img src="1300388.png" width={50} alt="logo" />
        <p className="games-text">ONLY THE BEST NEWS</p>
        <img src="1300388.png" width={50} alt="logo" />
      </div>

      <div className="navbar-news">
        <p className="news-main">News</p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <Search className="search-icon" />
        </div>
      </div>

      <div className="new-game">
        <img src="horizen.png" alt="Horizon" />
        <img src="callofduty.png" alt="Call of Duty" />
        <img src="gta.png" alt="GTA VI" />
        <img src="lara.png" alt="Lara Croft" />
      </div>

      <p className="tournaments">Popular Tournaments</p>

      <div className="Tournaments-news">
        {[
          "PopularTournamentCard1.png",
          "PopularTournamentCard2.png",
          "PopularTournamentCard3.png",
          "PopularTournamentCard4.png",
        ].map((src, i) => (
          <div key={i} className="tournament-card">
            <img src={src} alt={`tournament-${i}`} />
            <button className="light-button">
              <img src="Light.png" alt="light" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
