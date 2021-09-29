import React, { useState, useContext } from "react";
import "./style.css";
import "../../global.css";
import ProjectDesc from '../ProjectDesc';
import ProjectRenderer from '../ProjectRenderer';
import ArrowBar from '../ArrowBar';
import ReviewGroup from '../ReviewGroup';
import PortfolioContext from "../../utils/context";

const ProjectGroup: React.FC = () => {
  const [projectIndex, setProjectIndex] = useState<number>(1);
  const context = useContext(PortfolioContext)

  const handleDescChange = (newValue: number) => {
    setProjectIndex(newValue)
  }

  return (
    <section className={"project-container"}>
      <div>
        <div className={"project-header"}>
          <h3>{"Projects"}</h3>
          <p className={"sub-text"}>
            {"from bootcamp, freelance, and personal projects"}
          </p>
        </div>
        <figure className={`project-images`}>
          <ProjectRenderer projectIndex={projectIndex} onChange={handleDescChange}/>
        </figure>
        <ArrowBar onChange={handleDescChange}/>
      </div>
        <ProjectDesc projectIndex={context.projectArrangement[0]} />
    </section>
  );
};

export default ProjectGroup;
