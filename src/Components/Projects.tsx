import React from "react";
import { projects } from "./data/data";

const Projects = () => {
  return(
    <section id = "projects">
      <h1> My projects</h1>
      <div className="container">
        {projects.map((e, index) => {
          return(
          <div key = {index}>
            <div>
              <h3>{e.name}</h3>
              <div className="hover">
                <img src={e.gif} alt = {`${e.name}'s gif`}></img>
              </div>
            </div>
          </div>
        );
        //video troppo grandi. superano la grandezza del section
        })}
      </div>
      <a href="#projects">
        <div className="arrowButton skillsButton"></div>
      </a>
    </section>
  );
};

export default Projects;
