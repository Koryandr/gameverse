import React from "react";
import './BrowseGamesSection.css';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const BrowseGamesSection = () => {

    const [ref, inView] = useInView({
        threshold: 0.2, // 20% элемента должно быть видно
        triggerOnce: true, // анимация запускается только один раз
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },   // изначальное состояние
            visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.6 }  // длительность анимации
        },
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
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="best-games"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
                >
                <motion.img variants={variants} src="GameCard.png" alt="FIFA 23" />
                <motion.img variants={variants} src="GameCard2.png" alt="League of Legends" />
                <motion.img variants={variants} src="GameCard3.png" alt="Valorant" />
            </motion.div>

            
        </div>
    );
}

export default BrowseGamesSection;