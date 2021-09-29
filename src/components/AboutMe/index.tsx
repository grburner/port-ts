import React from 'react';
import './style.css';
import IconRow from '../IconRow';
import { IconContext } from 'react-icons';

const AboutMe: React.FC = () => {
  return (
    <section id={'about-me'}>
      <div></div>
      <div className={'aboutme-container'}>
        <h3 className={'lead'}>{"Let's work together"}</h3>
        <article className={'aboutme-body'}>
          {
            'After graduating from University of Pennsylvania’s LPS Web Development bootcamp I have spent the past year building Shopify stores, modifying existing stores, and integrating third party services as a freelancer and in a front end development role at Tako, a Shopify agency. Work includes converting InVision and Figma designs into functional Shopify storefronts, integrating and configuring 3rd party Shopify applications to meet store needs and developing custom applications and middleware to improve on customer processes. Additionally, Upwork projects have provided me with the opportunity to build various server-side applications to integrate and streamline business processes, build with the google app suite, and work with various 3rd party service’s APIs. Daily communication with clients to gather feedback, project requirements, and general customer service is also something that I do daily and take very seriously, as evidenced by my 5 start, 100% feedback rating on Upwork. I look forward to having the opportunity to bring these experiences and skills into my next web development opportunity.'
          }
        </article>
        <h5>{'Technologies:'}</h5>
        <IconContext.Provider value={{ color: '#36394f', size: '3.5rem' }}>
          <IconRow />
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default AboutMe;
