import React from "react";
import "../../App.css";

const About = () => {
  return (
    <section className="resume-section" id="about">
      <div class="resume-section-content">
        <h1 class="mb-0">
          ZELDRIX ARCHIEVAL R.
          <span class="text-primary">DON</span>
        </h1>
        <div class="subheading mb-5">
          71 Allanford Road, Scarborough, ON, M1T 2N3 · (+1) 437-242-5273 ·
          <a href="mailto:zeldrix.don@gmail.com">zeldrix.don@gmail.com</a>
        </div>
        <p class="lead mb-5">
          I am an exemplary graduate of Bachelor of Science in Computer Science
          of Adamson University pursuing further studies in Humber College under
          the program Computer Programming and Analysis. I am currently honing
          my skills in React, HTML, CSS. I have work experience as a Data
          Analyst in Uber where we used Python, SQL, and Google Big Query.
        </p>
        <div class="social-icons">
          <a
            class="social-icon"
            href="https://www.linkedin.com/in/zeldrixdon/"
            title="LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            class="social-icon"
            href="https://github.com/liploji"
            title="Github"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            class="social-icon"
            href="https://drive.google.com/file/d/1ocw9WayW-ewykBjvtnKEw5SP0CvG73vk/view?usp=sharing"
            target="_blank"
            title="Resume"
          >
            <i class="far fa-file"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
