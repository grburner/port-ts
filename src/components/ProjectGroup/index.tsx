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

  // const imgRearrange = () => {
  //   setProjectIndex(context.projectArrangement[0])
  //   console.log('setarrange')
  // };

  return (
    <div className={"project-container"}>
      <div></div>
      <div>
        <div className={"project-header"}>
          <h3>{"Projects"}</h3>
          <p className={"sub-text"}>
            {"from bootcamp, freelance, and personal projects"}
          </p>
        </div>
        <div className={`project-images`}>
          <ProjectRenderer projectIndex={projectIndex} onChange={handleDescChange}/>
        </div>
        <ArrowBar onChange={handleDescChange}/>
      </div>
      <div></div>
      <div></div>
        <ProjectDesc projectIndex={context.projectArrangement[0]} />
      <div></div>
      <div></div>
      {/* <div>
        <ReviewGroup />
      </div> */}
    </div>
  );
};

export default ProjectGroup;
