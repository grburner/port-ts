import React from 'react';
import './style.css';
import dbdashImg from "../../assets/dbdash.png";
import googlebooksImg from "../../assets/googlebooks.png";
import winehubImg from "../../assets/winehub.png";
import weatherDashImg from '../../assets/weatherDash.png'
import studentDirectory from '../../assets/studentDirectory.png'

const ProjectImage: React.FC<{image: number, active: string}> = (props) => {

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
            case 4:
                return studentDirectory
            default:
                return dbdashImg
        }
    }

    return (
    <div>
        <img className={props.active === 'true' ? 'active still-img' : 'still-img'} src={imgPick(props.image)} alt='wine hub'/>
    </div>
    );
};

export default ProjectImage;