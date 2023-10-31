import React from "react";
import "./ThirdLanding.css";
import { Button } from "react-bootstrap";
import cardsImg from "../images/cards.png";
import cardsImg2 from "../images/cards2.jpg";

const ThirdLanding = () => {
  return (
    <div className="thirdLanding">
      <div className="first">
        <h1>
          Create Unique Cards <br /> in <span>Style</span>
        </h1>
        <p>
          Our cards offer more than just attractive design. They <br /> also
          feature instant payment notifications and in-app <br /> card security
          management. Plus, you can start making <br /> purchases right away
          using Google Pay or Apple Pay.
        </p>
        <Button variant="dark">Get a Card</Button>
      </div>
      <img src={cardsImg2} alt="" />
    </div>
  );
};

export default ThirdLanding;
