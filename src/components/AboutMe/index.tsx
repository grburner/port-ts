import React from 'react';
import './style.css';
import IconRow from '../IconRow';
import { IconContext } from 'react-icons';
import Icons from '../../util_iconrender';

const AboutMe: React.FC = () => {

    return (
        <div id={'about-me'}>
            <div></div>
            <div className={'aboutme-container'}>
                <h3 className={'lead'}>{"Let's work together"}</h3>
                <div className ={'aboutme-body'}>{'I recently graduated the University of Pennsylvania’s Full Stack Web Development Bootcamp. After gaining unique experiences in multiple industries over the past 8 years I decided that web development and data analysis best fit my skillset and passion for always learning. The Penn LPS bootcamp provided me with a 6 month, deep dive into the MERN stack, with a focus on teamwork in a remote environment and creative problem solving.'}</div>
                <IconContext.Provider value={{ color: "#36394f", size: "3.5rem"}}>
                    <IconRow />
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default AboutMe;