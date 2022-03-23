import React from "react";
import { ReactComponent as IconMenu } from "../Images/about_image.svg"


const About = () => {
  return (
    <section id = "about">
      <div>
        <h1> About me </h1>
        <p> Hey there! I&apos;m jean! A guy from Milan who 
          is trying to enter in the web development World.<br/>
          Thank you for coming here, take a good seat and take a look at my projects and skills.
        </p>
        <div className="about-image">
          <IconMenu className="icon" width="50%"></IconMenu>
        </div>
      </div>
    </section>
  );
};

export default About;
