import React, { useState } from "react";
import "./navbar.css";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import logo from "../assert/logo.jpeg";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="mainContainer">
      <div className="loremdiv">
        <div className="loremtext1">Lorem ipsum dolor</div>
        <div className="loremtext2">Lorem ipsum dolor</div>
        <div className="loremtext1">Lorem ipsum dolor</div>
      </div>
      <div className="container">
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
        <div>
          <img src={logo} className="img-logo" alt="logo.jpg" />
        </div>

        <div className="logo"> LOGO </div>
        <div className="logocontainer">
          <div>
            <CiSearch />
          </div>
          <div>
            <CiHeart />
          </div>
          <div>
            <IoBagOutline />
          </div>
          <div className="selectCon">
            <CiUser />
          </div>
          <div>
            <select className="selectCon">
              <option value="ENG">ENG</option>
            </select>
          </div>
        </div>
      </div>
      <div className="navbar">
        <ul className={isMobile ? "nav-links-mobile" : ""}>
          <li>
            <a href="#shop">SHOP</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#stories">STORIES</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      {/* about */}
      <div className="aboutdiv">
        <div className="about">Discover our products</div>
        <div>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
