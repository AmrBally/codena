import React from "react";
import "./Landing.css";
import landingImg from "../images/landing.jpg";
import google from "../images/googleapp-1.png";
import apple from "../images/appleApp.png";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-1">
        <div className="spans">
          <span>New!</span>
          <span>Refer a friend & Get 25% -{">"}</span>
        </div>
        <h1>
          Spend Your{" "}
          <span>
            Money in <br />
            Style
          </span>{" "}
          with a Customized <br /> Card
        </h1>
        <p>
          Use your digital card for online purchases, in-store <br /> purchases,
          and more.
        </p>
        <div className="apps">
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
      <div className="landing-2">
        <img src={landingImg} alt="" />
      </div>
    </div>
  );
};

export default Landing;
