import React from "react";
import "../../App.css";

const Education = () => {
  return (
    <section className="resume-section" id="education">
      <div class="resume-section-content">
        <h2 class="mb-5">Education</h2>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Adamson University</h3>
            <div class="subheading mb-3">Bachelor of Science</div>
            <div>Computer Science</div>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">October 2017 - April 2021</span>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Humber College</h3>
            <div class="subheading mb-3">Diploma</div>
            <div>Computer Programming and Analysis</div>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">January 2021 - April 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
