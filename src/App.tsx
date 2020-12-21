import React, { useEffect, useState, useContext } from "react";
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import ProjectGroup from './components/ProjectGroup';
import Contact from './components/Contact';
import PortfolioContext from './utils/context';

const App: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <PortfolioContext.Provider value={{width: windowSize, projectArrangement: [0,1,2]}}>
      <div className="App">
        <NavBar />
        <Hero />
        <AboutMe />
        <ProjectGroup />
        {/* <ProjectGroup winwidth={windowSize}/> */}
        <Contact />
      </div>
    </PortfolioContext.Provider>
  );
};

export default App;
