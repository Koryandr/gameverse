import React from "react";
import { Search } from "lucide-react";
import "./News.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const News = () => {
  const [refGames, inViewGames] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [refTournaments, inViewTournaments] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const tournamentCards = [
    "PopularTournamentCard1.png",
    "PopularTournamentCard2.png",
    "PopularTournamentCard3.png",
    "PopularTournamentCard4.png",
  ];

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
          <input type="text" placeholder="Search" className="search-input" />
          <Search className="search-icon" />
        </div>
      </div>

      {/* Анимация блока new-game */}
      <motion.div
        ref={refGames}
        initial="hidden"
        animate={inViewGames ? "visible" : "hidden"}
        className="new-game"
        variants={containerVariants}
      >
        <motion.img variants={variants} src="horizen.png" alt="Horizon" />
        <motion.img variants={variants} src="callofduty.png" alt="Call of Duty" />
        <motion.img variants={variants} src="gta.png" alt="GTA VI" />
        <motion.img variants={variants} src="lara.png" alt="Lara Croft" />
      </motion.div>

      <p className="tournaments">Popular Tournaments</p>

      {/* Анимация блока турниров */}
      <motion.div
        ref={refTournaments}
        initial="hidden"
        animate={inViewTournaments ? "visible" : "hidden"}
        className="Tournaments-news"
        variants={containerVariants}
      >
        {tournamentCards.map((src, i) => (
          <motion.div
            key={i}
            className="tournament-card"
            variants={variants}
          >
            <img src={src} alt={`tournament-${i}`} />
            <button className="light-button">
              <img src="Light.png" alt="light" />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default News;
