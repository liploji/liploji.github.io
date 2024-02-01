import React from "react";
import "../../App.css";

const Skills = () => {
  return (
    <section className="resume-section" id="skills">
      <div class="resume-section-content">
        <h2 class="mb-5">Skills</h2>
        <div class="subheading mb-3">Programming Languages & Tools</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-python"></i>
          </li>
          <li class="list-inline-item">C#</li>
          <li class="list-inline-item">
            <i class="fab fa-html5"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-css3-alt"></i>
          </li>
        </ul>
        <div class="subheading mb-3">Workflow</div>
        <ul class="fa-ul mb-0">
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Efficient Programming
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            People Pleasing
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Cross Functional Teams
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Agile Development & Scrum
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
