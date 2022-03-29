import React from "react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import "./Style/style.css";

const App = () => {
  return (
    <div className="app">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <LandingPage></LandingPage>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contacts></Contacts>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default App;
