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
        <img src="horizen.png"/>
        <img src="callofduty.png"/>
        <img src="gta.png"/>
        <img src="lara.png"/>
    </div>

    <p className="tournaments">Popular Tournaments</p>
    </>
  );
};

export default News;