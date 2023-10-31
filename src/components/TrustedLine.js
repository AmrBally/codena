import React from "react";
import "./TrustedLine.css";
import stripe from "../images/stripe.png";
import ofrium from "../images/orfium.png";
import kinsta from "../images/kinsto.png";
import bankable from "../images/bankable.png";
import nowports from "../images/nowports.png";

const TrustedLine = () => {
  return (
    <div className="trusted">
      <p>Trusted by 3000+ partners & customers</p>
      <div className="trusted-content">
        <img src={stripe} alt="" />
        <img src={ofrium} alt="" />
        <img src={kinsta} alt="" />
        <img src={bankable} alt="" />
        <img src={nowports} alt="" />
      </div>
    </div>
  );
};

export default TrustedLine;
