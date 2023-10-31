import React from "react";
import "./Footer.css";
import logo from "../images/logo.png";
import social1 from "../images/Social icon1.png";
import social2 from "../images/Social icon2.png";
import social3 from "../images/Social icon3.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <img src={social1} alt="" />
        <img src={social2} alt="" />
        <img src={social3} alt="" />
      </div>
      <div>
        <img src={logo} alt="" />
      </div>{" "}
      <div>
        <p>Copyright © 2023 cadena. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
