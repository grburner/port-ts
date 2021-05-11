import React, { useState } from "react";
import "./style.css";
import CollapsibleContact from '../CollapsibleContact';

const NavBar: React.FC = () => {
  const [contactView, setContactView] = useState(false);

  const toggleView = () => {
    console.log('toggleview' + contactView)
    contactView ? setContactView(false) : setContactView(true)
  }

  return (
    <div className={'nav-wrapper'}>
      <nav className={'navbar'}>
        <div/>
        <ul>
          <li>
            <p onClick={() => {toggleView()}}className={'navbar-item'}>CONTACT</p>
          </li>
          <li>
            <a href={'https://drive.google.com/file/d/1cAVBG0_xzey5yQYfny85bB3HThQJ-gcG/view?usp=sharing'} className={'navbar-item'} target={"_blank"} rel={"noopener norefferrer"} download>
              <p className={'navbar-item'}>RESUME</p>
            </a>
          </li>
        </ul>
      </nav>
      { contactView ? <CollapsibleContact /> : '' }
    </div>
  );
};

export default NavBar;
