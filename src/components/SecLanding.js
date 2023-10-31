import React from "react";
import "./SecLanding.css";
import Versatile from "../images/versatile.png";
import Accepted from "../images/Grayscale.png";
import Customer from "../images/customerSupport.png";
import Management from "../images/manage.png";
import Spend from "../images/spend.png";

const SecLanding = () => {
  return (
    <div className="seclanding">
      <h1>
        Flex Your Digital Wealth with <span>Cadena</span>
      </h1>
      <div className="seclanding-content">
        <div className="first">
          <div>
            <h4>
              <span>Versatile</span> Use
            </h4>
            <img src={Versatile} alt="" />
            <p>
              Use your digital card for online
              <br /> <span>purchases</span>, in-store purchases, and
              <br /> more
            </p>
          </div>
          <div>
            <h4>
              Accepted <span>Everywhere</span>
            </h4>
            <img src={Accepted} alt="" />
            <p>
              Use your digital card at any
              <br /> merchant that accepts{" "}
              <span>
                Visa or <br />
                Mastercard.
              </span>
            </p>
          </div>
          <div>
            <h4>
              Easy <span>Management</span>
            </h4>
            <img src={Management} alt="" />
            <p>
              Manage your digital card and
              <br /> transactions easily through our <br />{" "}
              <span>user-friendly</span> app.
            </p>
          </div>
          <div>
            <h4>
              <span>Customer</span> Support
            </h4>
            <img src={Customer} alt="" />
            <p>
              Our team is ready to help you with <br /> any{" "}
              <span>questions or issues</span>
              you may <br /> have.
            </p>
          </div>
        </div>
        <div className="sec">
          <h4>
            <span>Effortlessly</span> Spend
          </h4>
          <p>
            Our digital card allows you to spend <br /> your{" "}
            <span>digital assets</span> with ease."
          </p>
          <img src={Spend} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecLanding;
