import React from "react";
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import ProjectGroup from './components/ProjectGroup';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutMe />
      <ProjectGroup />
      <Contact />
    </div>
  );
};

export default App;
