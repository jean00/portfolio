import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <h1>Jean </h1>
      <ul className="options">
        <li>
          <a href="#landing-page"> Home </a>
        </li>
        <li>
          <a href="#about"> About </a>
        </li>
        <li>
          <a href="#skills"> Skills </a>
        </li>
        <li>
          <a href="#projects"> Projects </a>
        </li>
        <li>
          <a href="#contacts"> Contacts</a>
        </li>
      </ul>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FontAwesomeIcon className="menu" icon={faBars} />
      </button>
      {isOpen ? (
        <div className="dropdown">
          <ul>
            <li>
              <a href="#landing-page"> Home </a>
            </li>
            <li>
              <a href="#about"> About </a>
            </li>
            <li>
              <a href="#skills"> Skills </a>
            </li>
            <li>
              <a href="#projects"> Projects </a>
            </li>
            <li>
              <a href="#contacts"> Contacts</a>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
