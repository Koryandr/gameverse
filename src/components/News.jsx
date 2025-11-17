import React from "react";
import { Search } from "lucide-react";
import "./News.css";
import { motion, useInView } from "framer-motion";

const News = () => {
  // Refs для блоков
  const newGameRef = React.useRef(null);
  const tournamentsRef = React.useRef(null);

  // inView для блоков
  const newGameInView = useInView(newGameRef, { amount: 0.2 });
  const tournamentsInView = useInView(tournamentsRef, { amount: 0.2 });

  // Состояния, чтобы анимация была один раз
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const [tournamentsAnimated, setTournamentsAnimated] = React.useState(false);

  // Variants для анимации
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Отслеживаем появление блоков
  React.useEffect(() => {
    if (newGameInView) setHasAnimated(true);
  }, [newGameInView]);

  React.useEffect(() => {
    if (tournamentsInView) setTournamentsAnimated(true);
  }, [tournamentsInView]);

  const tournamentImgs = [
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

      {/* Блок с новыми играми */}
      <motion.div
        ref={newGameRef}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={variants}
        className="new-game"
      >
        <img src="horizen.png" alt="Horizon" />
        <img src="callofduty.png" alt="Call of Duty" />
        <img src="gta.png" alt="GTA VI" />
        <img src="lara.png" alt="Lara Croft" />
      </motion.div>

      <p className="tournaments">Popular Tournaments</p>

      {/* Блок турниров */}
      <motion.div
        ref={tournamentsRef}
        initial="hidden"
        animate={tournamentsAnimated ? "visible" : "hidden"}
        variants={variants}
        className="Tournaments-news"
      >
        {tournamentImgs.map((src, i) => (
          <div key={i} className="tournament-card">
            <img src={src} alt={`tournament-${i}`} />
            <button className="light-button">
              <img src="Light.png" alt="light" />
            </button>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default News;
