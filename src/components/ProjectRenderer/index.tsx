import React, { useContext } from "react";
import PortfoioContext from "../../utils/context";
import ProjectImage from '../ProjectImage';
import data from '../../data.json';

interface Props {
  onChange: (newValue: number) => void
}

const ProjectRenderer: React.FC<Props> = (props) => {
  const { width, projectArrangement } = useContext(PortfoioContext)

  return (
    <div className={`project-images`}>
      <div onClick={() => props.onChange(0)}>
        <ProjectImage image={data.projects[projectArrangement[0]].image} />
      </div>
      {width < 700 ? (
        ""
      ) : (
        <div onClick={() => props.onChange(1)}>
          <ProjectImage image={data.projects[projectArrangement[1]].image} />
        </div>
      )}
      {width < 1300 ? (
        ""
      ) : (
        <div onClick={() => props.onChange(2)}>
          <ProjectImage image={data.projects[projectArrangement[2]].image} />
        </div>
      )}
    </div>
  );
};

export default ProjectRenderer;
