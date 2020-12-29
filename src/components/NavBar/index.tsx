import React from "react";
import "./style.css";

const NavBar: React.FC = () => {

  return (
    <div className={'nav-wrapper'}>
      <nav className={'navbar'}>
        <div/>
        <ul>
          <li>
            <a href={'mailto:grburner@gmail.com'}>
              <p className={'navbar-item'}>CONTACT</p>
            </a>
          </li>
          <li>
            <a href={'https://drive.google.com/file/d/1nkBTtPiX5gEIJ_RTHEk7297H7Yy3ygJs/view?usp=sharing'} className={'navbar-item'} target={"_blank"} rel={"noopener norefferrer"} download>
              <p className={'navbar-item'}>RESUME</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
