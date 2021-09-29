import React from 'react';
import '../../global.css';
import './style.css';
import data from '../../data.json';
import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const ProjectGoTo: React.FC<{ index: number }> = (props) => {
  return (
    <div className={'icongroup'}>
      {data.projects[props.index].git !== '' ? (
        <a href={data.projects[props.index].git} target={'_blank'}>
          <AiFillGithub className={'icon'} />
        </a>
      ) : (
        ''
      )}
      {data.projects[props.index].link !== '' ? (
        <a href={data.projects[props.index].link} target={'_blank'}>
          <BsBoxArrowUpRight className={'icon'} />
        </a>
      ) : (
        ''
      )}
    </div>
  );
};

export default ProjectGoTo;
