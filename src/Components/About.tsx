import React from "react";
import { ReactComponent as IconMenu } from "../Images/about_image.svg";

const About = () => {
  return (
    <section id="about">
      <div className="text">
        <h1> About me </h1>
        <p>
          {" "}
          Hey there! I&apos;m jean. A guy from Milan who is trying to enter in
          the <strong> web development </strong> World.
          <br />
          Before of that i was an Help desk but i quit that job because my dream
          is to become a web developer. Fortunately, i studied at school many
          languages including the web languages like: HTML, CSS and JavaScript.
          Now i&apos;m currently learning React js and typescript and this site
          is for show my skills as a <strong>Web developer</strong>.<br />
          Thank you for coming here, take a good seat and take a look at my
          projects and skills.
        </p>
      </div>
      <a href="#skills">
        <div className="arrowButton aboutBtn"></div>
      </a>
    </section>
  );
};

export default About;
