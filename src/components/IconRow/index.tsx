import React from 'react';
import './style.css'
import { DiJsBadge, DiReact, DiNodejsSmall, DiMongodb, DiCss3, DiHtml5, DiJqueryLogo } from 'react-icons/di';
import { SiMysql, SiTypescript } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { BsBootstrapFill } from 'react-icons/bs'

const IconRow: React.FC = () => {

    return (
        <div className={'icon-group'}>
            <DiJsBadge />
            <DiReact />
            <DiNodejsSmall />
            <DiMongodb />
            <SiMysql />
            <DiCss3 />
            <DiHtml5 />
            <SiTypescript />
            <AiFillGithub />
            <DiJqueryLogo />
            <BsBootstrapFill />
        </div>

    )
};

export default IconRow;

