import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import "./Navbar.css";

const Navbar = () => {
  const [isNavExtended, setIsNavExtended] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar_name">Jay Patel</div>
      <div className="navbar_navigation">
        <TiThMenu
          className="navbar_button"
          onClick={() => setIsNavExtended(!isNavExtended)}
        />

        <div
          className={isNavExtended ? "navbar_links_extended" : "navbar_links"}
        >
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
