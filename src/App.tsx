import React from "react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import "./Style/style.css";

const App = () => {
  return (
    <div className="app">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contacts></Contacts>
      </main>
    </div>
  );
};

export default App;
