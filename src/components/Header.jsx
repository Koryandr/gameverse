import React from "react";
import { motion, useInView } from "framer-motion";

const Header = () => {
  // ref для анимации
  const heroRef = React.useRef(null);

  // inView для блока
  const heroInView = useInView(heroRef, { amount: 0.2 });

  // состояние, чтобы анимация была один раз
  const [hasAnimated, setHasAnimated] = React.useState(false);

  // фиксируем анимацию при первом появлении
  React.useEffect(() => {
    if (heroInView) setHasAnimated(true);
  }, [heroInView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <div className="nav">
        <img src="Gemini_Generated_Image_fhdy3rfhdy3rfhdy2.png" height={110} />
        <div className="navbar">
          <p>HOME</p>
          <p>GAME</p>
          <p>NEWS</p>
          <p>CONTACT</p>
        </div>
      </div>

      <div className="hero-section">
        <div className="content-container">
          <div className="main-text">
            <p>SUPERHERO</p>
            <p>GAME-SHOP</p>
          </div>
          <div className="small-text">
            <p>
              Welcome to GameVerse a place where every player becomes<br />
              the hero of their own story. Here you'll find the best titles, exclusive<br />
              new releases, and legendary hits, all gathered in one place.
            </p>
          </div>
          <button className="shop-button">START SHOPPING</button>
        </div>

        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          variants={variants}
        >
          <img
            src="17626047240802.png"
            className="hero-image"
            width={800}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
