import React from 'react';
import './style.css';
import dbdashImg from "../../assets/dbdash.png";
import googlebooksImg from "../../assets/googlebooks.png";
import winehubImg from "../../assets/winehub.png";
import weatherDashImg from '../../assets/weatherDash.png'

const ProjectImage: React.FC<{image: number}> = (props) => {

    const imgPick = (image:number) => {
        switch (image) {
            case 0:
                return dbdashImg
            case 1:
                return googlebooksImg
            case 2: 
                return winehubImg
            case 3:
                return weatherDashImg
            default:
                return dbdashImg
        }
    }

    return (
    <div>
        <img className={'still-img'} src={imgPick(props.image)} alt='wine hub'/>
    </div>
    );
};

export default ProjectImage;