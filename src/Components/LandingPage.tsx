import React from "react";
import { ReactComponent as IconMenu } from "../Images/landing_image.svg";

const LandingPage = () => {
  return (
    <section id="landing-page">
      <div className="container">
        <div className="title">
          <h1> Welcome to my web-site</h1>
          <p>Here you can find informations about me and my knowledge </p>
          <a href = "#contacts">
            <button> Contact me </button>
          </a>
        </div>

        <div className="landing-div-svg">
          <IconMenu width="70%"></IconMenu>
        </div>
      </div>
      <a href="#about">
        <div className="arrowButton"></div>
      </a>
    </section>
  );
};

export default LandingPage;
