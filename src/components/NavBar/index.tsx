import React, { useState, useEffect } from "react";
import "./style.css";
import CollapsibleContact from '../CollapsibleContact';

const NavBar: React.FC = () => {
  const [contactView, setContactView] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleView = () => {
    console.log('toggleview' + contactView)
    contactView ? setContactView(false) : setContactView(true)
  }

  const highlightNav = () => {
    console.log(window.scrollY)
  }

  useEffect(() => {
    highlightNav();
    window.addEventListener("scroll", highlightNav)
    if (window.scrollY >= 66) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }, [scrolling])

  return (
    <nav className={scrolling ? 'nav-wrapper navbar-highlight' : 'nav-wrapper'}>
      <div className={'navbar'}>
        <ul>
          <li>
            <p onClick={() => {toggleView()}}className={'navbar-item'}>CONTACT</p>
          </li>
          <li>
            <a href={'https://drive.google.com/file/d/1gG6fUfGtL_BmKhr4S3ddp1ifp6itPaq1/view?usp=sharing'} className={'navbar-item'} target={"_blank"} rel={"noopener norefferrer"} download>
              <p className={'navbar-item'}>RESUME</p>
            </a>
          </li>
        </ul>
      </div>
      { contactView ? <CollapsibleContact /> : '' }
    </nav>
  );
};

export default NavBar;
