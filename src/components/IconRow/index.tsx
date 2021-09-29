import React from 'react';
import './style.css';
import {
  DiJsBadge,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiCss3,
  DiHtml5,
  DiJqueryLogo,
} from 'react-icons/di';
import { SiMysql, SiTypescript } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { FaShopify } from "react-icons/fa";
import { BsBootstrapFill, BsFillDropletFill } from 'react-icons/bs';

const IconRow: React.FC = () => {
  return (
    <figure className={'icon-group'}>
      <div><DiJsBadge /></div>
      <div><DiReact /></div>
      <div><DiNodejsSmall /></div>
      <div><FaShopify /></div>
      <div><BsFillDropletFill /></div>
      <div><DiMongodb /></div>
      <div><SiMysql /></div>
      <div><DiCss3 /></div>
      <div><DiHtml5 /></div>
      <div><SiTypescript /></div>
      <div><AiFillGithub /></div>
      <div><DiJqueryLogo /></div>
      {/* <div><BsBootstrapFill /></div> */}
    </figure>
  );
};

export default IconRow;
