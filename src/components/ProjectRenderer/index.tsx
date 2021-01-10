import React, { useContext } from "react";
import PortfoioContext from "../../utils/context";
import ProjectImage from '../ProjectImage';
import data from '../../data.json';

interface Props {
  onChange: (newValue: number) => void,
  projectIndex: number
}

const ProjectRenderer: React.FC<Props> = (props) => {
  const { width, projectArrangement } = useContext(PortfoioContext)

  return (
    <div className={`project-images`}>
      <div>{`${projectArrangement}`}</div>
      <div onClick={() => props.onChange(projectArrangement[0])}>
        <ProjectImage active={props.projectIndex === 0 ? 'true' : 'false'} image={data.projects[projectArrangement[0]].image} />
      </div>
      {width < 700 ? (
        ""
      ) : (
        <div onClick={() => props.onChange(projectArrangement[1])}>
          <ProjectImage active={props.projectIndex === 1 ? 'true' : 'false'} image={data.projects[projectArrangement[1]].image} />
        </div>
      )}
      {width < 1300 ? (
        ""
      ) : (
        <div onClick={() => props.onChange(projectArrangement[2])}>
          <ProjectImage active={props.projectIndex === 2 ? 'true' : 'false'} image={data.projects[projectArrangement[2]].image} />
        </div>
      )}
    </div>
  );
};

export default ProjectRenderer;
