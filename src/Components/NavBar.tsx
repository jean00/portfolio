import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <nav>
        <h1>Jean </h1>
        <ul>
          <li>
            <a href="#about"> About </a>
          </li>
          <li>
            <a href="#"> Projects </a>
          </li>
          <li>
            <a href="#"> Skills </a>
          </li>
          <li>
            <a href="#"> Contacts</a>
          </li>
        </ul>
        <button onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
          {/* responsive */}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
