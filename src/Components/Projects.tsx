import React from "react";
import { projects } from "./data/data";

const Projects = () => {
  return (
    <section id="projects">
      <h1> My projects</h1>
      <div className="container">
        {projects.map((e, index) => {
          return (
            <div key={index}>
              <div className="content-item">
                <h3>{e.name}</h3>
                <img src={e.gif} alt={`${e.name}'s gif`}></img>
                <a rel="noopener noreferrer" href={e.url} target="_blank">
                  <div className="overlay">
                    <p>{e.description}</p>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#contacts">
        <div className="arrowButton skillsButton"></div>
      </a>
    </section>
  );
};

export default Projects;
