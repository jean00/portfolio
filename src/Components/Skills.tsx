import React from "react";
import { skills } from "./data/data";

const Skills = () => {
  return (
    <section id="skills">
      <h1> Skills and technologies </h1>
      <div className="container">
        {skills.map((e, index) => {
          return (
            <div className="item" key={index}>
              <div className="content-item">
                <i> <img src={e.url} /> </i>
                <span>{e.name} </span>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#projects">
        <div className="arrowButton skillsButton"></div>
      </a>
    </section>
  );
};

export default Skills;
