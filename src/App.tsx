import React, { useEffect, useState } from "react";
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import ProjectGroup from './components/ProjectGroup';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutMe />
      <ProjectGroup winwidth={windowSize}/>
      <Contact />
    </div>
  );
};

export default App;
