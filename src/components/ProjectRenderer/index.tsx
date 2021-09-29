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
      <ProjectImage active={props.projectIndex === 0 ? 'true' : 'false'} image={data.projects[projectArrangement[0]].image} />
    </div>
  );
};

export default ProjectRenderer;
