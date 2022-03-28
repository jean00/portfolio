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
                <img
                  src={`https://img.shields.io/badge/-${e}-333333?style=flat&logo=${e}`}
                ></img>
                <h2> {e} </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
