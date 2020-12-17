import React, { useState } from "react";
import './style.css';
import '../../global.css';
import ProjectImage from '../ProjectImage';
import ProjectIcons from '../ProjectIcons';
import { IconContext } from 'react-icons';
import data from '../../data.json';
import dbdashImg from '../../assets/dbdash.png';
import googlebooksImg from '../../assets/googlebooks.png';
import winehubImg from '../../assets/winehub.png'

const ProjectGroup: React.FC = () => {
  const [projectIndex, setProjectIndex] = useState<number>(1);

  const imageClickHandler = (imageIndex: number) => {
    setProjectIndex(imageIndex)
  }

  return (
    <div className={'project-container'}>
      <div></div>
      <div>
        <div className={'project-header'}>
          <h1>{'hello'}</h1>
          <h3>{'Projects'}</h3>
          <p className={'project-sub'}>{'from bootcamp, freelance, and personal projects'}</p>
        </div>
        <div className="project-images">
          <div onClick={() => imageClickHandler(0)}>
            <ProjectImage image={dbdashImg}/>
          </div>
          <div onClick={() => imageClickHandler(1)}>
            <ProjectImage image={googlebooksImg}/>
          </div>
          <div onClick={() => imageClickHandler(2)}>
            <ProjectImage image={winehubImg}/>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div>
        <div className={'desc-container'}>
          <h4>{data.projects[projectIndex].title}</h4>
          <h5 className={'desc-section'}>{'Description: '}</h5>
          <p>{data.projects[projectIndex].description}</p>
          <IconContext.Provider value={{ color: "#36394f", size: "3.5rem"}}>
            <ProjectIcons techs={data.projects[projectIndex].tech}/>
          </IconContext.Provider>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectGroup;