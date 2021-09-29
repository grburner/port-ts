import React, { useEffect, useState, useContext } from "react";
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import ProjectGroup from './components/ProjectGroup';
import Contact from './components/Contact';
import PortfolioContext from './utils/context';
import ReviewGroup from './components/ReviewGroup';

const App: React.FC = () => {
  const [portfolioState, setPortfolioState] = useState({
    width: window.innerWidth,
    projectArrangement: [0,1,2,3],
    rearrange: (projectArrangement: number[]) => {
      setPortfolioState({...portfolioState, width: window.innerWidth, projectArrangement: projectArrangement})
    },
  })

  useEffect(() => {
    const handleResize = () => {
      setPortfolioState({...portfolioState, width: window.innerWidth})
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <PortfolioContext.Provider value={portfolioState}>
      <div className="App">
        <NavBar />
        <Hero />
        <AboutMe />
        <ProjectGroup />
        <Contact />
      </div>
    </PortfolioContext.Provider>
  );
};

export default App;
