import React from "react";
import './BrowseGamesSection.css';
import { motion, useInView } from "framer-motion";

const BrowseGamesSection = () => {
  // ref для блока
  const sectionRef = React.useRef(null);

  // inView для блока
  const sectionInView = useInView(sectionRef, { amount: 0.2 });

  // состояние, чтобы анимация была один раз
  const [hasAnimated, setHasAnimated] = React.useState(false);

  // фиксируем анимацию при первом появлении
  React.useEffect(() => {
    if (sectionInView) setHasAnimated(true);
  }, [sectionInView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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

      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={variants}
        className="best-games"
      >
        <img src="GameCard.png" alt="FIFA 23" />
        <img src="GameCard2.png" alt="League of Legends" />
        <img src="GameCard3.png" alt="Valorant" />
      </motion.div>
    </div>
  );
}

export default BrowseGamesSection;
