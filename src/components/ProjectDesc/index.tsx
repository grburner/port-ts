import React from 'react';
import './style.css';
import '../../global.css';
import { IconContext } from 'react-icons';
import ProjectIcons from '../ProjectIcons';
import ProjectGoTo from '../ProjectGoTo';
import data from '../../data.json';

interface ProjectDescProps {
  projectIndex: number;
}

const ProjectDesc: React.FC<ProjectDescProps> = (props) => {
  return (
    <div className={'desc-container'}>
      <div>
        <h4 className={'title'}>{data.projects[props.projectIndex].title}</h4>
        <IconContext.Provider value={{ color: '#36394f', size: '1.5rem' }}>
          <ProjectGoTo index={props.projectIndex} />
        </IconContext.Provider>
        <h5 className={'desc-section'}>{'Description: '}</h5>
        <p>{data.projects[props.projectIndex].description}</p>
        <IconContext.Provider value={{ color: '#36394f', size: '3.5rem' }}>
          <ProjectIcons techs={data.projects[props.projectIndex].tech} />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default ProjectDesc;
