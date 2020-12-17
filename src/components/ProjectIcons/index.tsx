import React from 'react';
import './style.css'
import { DiJsBadge, DiReact, DiNodejsSmall, DiMongodb, DiCss3, DiHtml5, DiJqueryLogo } from 'react-icons/di';
import { SiMysql, SiTypescript } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { BsBootstrapFill } from 'react-icons/bs'

const ProjectIcons: React.FC<{techs: Array<string>}> = ({ techs }) => {

    return (
        <div className={'icon-group'}>
            {techs.includes('js') ? <DiJsBadge /> : ''}
            {techs.includes('react') ? <DiReact /> : ''}
            {techs.includes('node') ? <DiNodejsSmall /> : ''}
            {techs.includes('mongo') ? <DiMongodb /> : ''}
            {techs.includes('mysql') ? <SiMysql /> : ''}
            {techs.includes('css') ? <DiCss3 /> : ''}
            {techs.includes('html') ? <DiHtml5 /> : ''}
            {techs.includes('ts') ? <SiTypescript /> : ''}
            {techs.includes('github') ? <AiFillGithub /> : ''}
            {techs.includes('jquery') ? <DiJqueryLogo /> : ''}
            {techs.includes('bootstrap') ? <BsBootstrapFill /> : ''}
        </div>

    )
};

export default ProjectIcons;