import React, { useState } from "react";

const NavBar = () => {
  return (
    <nav>
      <h1>Jean </h1>
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
    </nav>
  );
};

export default NavBar;
