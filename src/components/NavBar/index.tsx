import React from "react";
import "./style.css";
// import CollapsibleContent from '../CollapsibleContact';

const NavBar: React.FC = () => {

  return (
    <div className={'nav-wrapper'}>
      <nav className={'navbar'}>
        <div/>
        <ul>
          <li><p className={'navbar-item'}>ABOUT</p></li>
          <li><p className={'navbar-item'}>PROJECTS</p></li>
          <li><p className={'navbar-item'}>CONTACT</p></li>
          <li>
            <a href={'https://drive.google.com/file/d/19JZx7slGKI5ei0TyB5ka4wTPf9z66TpP/view?usp=sharing'} className={'navbar-item'} target={"_blank"} rel={"noopener norefferrer"} download>
              <p className={'navbar-item'}>RESUME</p>
            </a>
          </li>
        </ul>
      </nav>
      {/* <CollapsibleContent /> */}
    </div>
  );
};

export default NavBar;
