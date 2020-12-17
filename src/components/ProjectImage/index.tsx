import React from 'react';
import './style.css';

const ProjectImage: React.FC<{image: string}> = (props) => {
    return (
    <div>
        <img className={'still-img'} src={props.image} alt='wine hub'/>
    </div>
    );
};

export default ProjectImage;