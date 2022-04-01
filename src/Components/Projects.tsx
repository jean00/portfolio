import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { projects } from "./data/data";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  return (
    <section id="projects">
      <h1> My projects</h1>
      <div className="container">
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="arrow left"
          onClick={prevSlide}
        />
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          className="arrow right"
          onClick={nextSlide}
        />

        {projects.map((e, index) => {
          return (
            <div className="images" key={index}>
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

        {projects.map((e, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <>
                  <h3>{e.name}</h3>
                  <img src={e.gif} alt={`${e.name}'s gif`}></img>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="link">
        <a rel="noopener noreferrer"
          className="url"
          target="_blank"
          href="https://github.com/jean00"
        >Click here to see more on my GitHub</a>
      </div>
      <a href="#contacts">
        <div className="arrowButton skillsButton"></div>
      </a>
    </section>
  );
};

export default Projects;
