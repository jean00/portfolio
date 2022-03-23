import React from "react";
import { ReactComponent as IconMenu } from "../Images/landing_image.svg"


const LandingPage = () => {
  return (
    <section>
      <div id = "landing-page" >
        <div className="title">
          <h1> Welcome to my web-site</h1>
          <p>Here you can find informations about me and my knowledge </p>
          <button> Contact me </button>
        </div>

        <div className="icon" >
          <IconMenu className = "about-image"width = "70%" ></IconMenu>
        </div>
      </div>
      <a href = "#about">
        <div className="arrowButton"></div>
      </a>
    </section>
  );
};

export default LandingPage;
