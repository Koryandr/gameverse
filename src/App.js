import React from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import BrowseGamesSection from "./components/BrowseGamesSection";
import GameShowcase from "./components/GameShowcase";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />

      <Section>
        <BrowseGamesSection />
      </Section>

      <Section>
        <GameShowcase />
      </Section>

      <Section>
        <News />
      </Section>

      <Footer />
    </div>
  );
}

export default App;

function Section({ children }) {
  return <div className="section">{children}</div>;
}
