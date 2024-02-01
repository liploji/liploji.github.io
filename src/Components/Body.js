import React from "react";
import About from "./Body/About";
import Education from "./Body/Education";
import Experience from "./Body/Experience";
import Projects from "./Body/Projects";
import Skills from "./Body/Skills";
import Interests from "./Body/Interests";
import Awards from "./Body/Awards";
import "../App.css";

const Body = () => {
  return (
    <div className="container-fluid p-0">
      <About />
      <hr class="m-0" />
      <Education />
      <hr class="m-0" />
      <Experience />
      <hr class="m-0" />
      <Projects />
      <hr class="m-0" />
      <Skills />
      <hr class="m-0" />
      <Interests />
      <hr class="m-0" />
      <Awards />
    </div>
  );
};

export default Body;
