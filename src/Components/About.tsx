import React from "react";
import { ReactComponent as IconMenu } from "../Images/about_image.svg";

const About = () => {
  return (
    <section id="about">
      <div className="text">
        <h1> About me </h1>
        <p>
          {" "}
          Hey there! I&apos;m Jean. A guy from Milan who is trying to enter in
          the <strong> web development </strong> World.
          <br />
          My professional journey started back in January 2021, I worked as a help desk,
          but, in October 2021 i decided to quit because I wanted to become 
          a web developer, my dream job. During my past work experience and in my free time  
          I studied many languages like: HTML, CSS, JavaScript, Java, etc.
          Now i&apos;m currently learning React js and TypeScript and this site
          is for show my skills as <strong>Web developer</strong>.<br />
          Thank you for coming here, take a good seat and take a look at my website.
        </p>
      </div>
      <a href="#skills">
        <div className="arrowButton aboutBtn"></div>
      </a>
    </section>
  );
};

export default About;
