import React, { useState, useContext } from "react";
import "./style.css";
import "../../global.css";
import ProjectDesc from '../ProjectDesc';
import ProjectRenderer from '../ProjectRenderer';
import ArrowBar from '../ArrowBar';
import ReviewGroup from '../ReviewGroup';

const ProjectGroup: React.FC = () => {
  const [projectIndex, setProjectIndex] = useState<number>(1);

  const handleDescChange = (newValue: number) => {
    setProjectIndex(newValue)
  }

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
        <ArrowBar />
      </div>
      <div></div>
      <div></div>
        <ProjectDesc projectIndex={projectIndex} />
      <div></div>
      <div></div>
      {/* <div>
        <ReviewGroup />
      </div> */}
    </div>
  );
};

export default ProjectGroup;
