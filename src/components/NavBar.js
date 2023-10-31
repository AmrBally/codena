import React, { useRef } from "react";
import "./NavBar.css";
import logo from "../images/logo.png";
import { Button } from "react-bootstrap";
import { FaTimes, FaBars } from "react-icons/fa";

const NavBar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <img src={logo} alt="" />
      <nav ref={navRef}>
        <div className="links">
          <a href="/">Home</a>
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
        </div>
        <div className="btns">
          <Button variant="light">Log in</Button>
          <Button variant="dark">Sign up</Button>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
export default NavBar;
