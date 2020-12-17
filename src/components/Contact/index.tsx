import React from 'react';
import './style.css';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

const Contact: React.FC = () => {
    return (
        <div className={'footer'}>
            <div></div>
            <div className={'contact-icon-group'}>
                <a href={'https://www.linkedin.com/in/gburner/'} target={'_blank'}>
                    <FaLinkedin size={30} className={'icon'}/>
                </a>
                <a href={'https://github.com/grburner'} target={'_blank'}>
                    <AiFillGithub size={30} className={'icon'}/>
                </a>
                <a href={'mailto:grburner@gmail.com'}>
                    <HiOutlineMail size={30} className={'icon'}/>
                </a>
            </div>
            <div />
        </div>
    );
};

export default Contact;