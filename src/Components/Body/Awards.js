import React from "react";
import "../../App.css";

const Awards = () => {
  return (
    <section className="resume-section" id="awards">
      <div class="resume-section-content">
        <h2 class="mb-5">Awards & Certifications</h2>
        <ul class="fa-ul mb-0">
          <li>
            <span class="fa-li">
              <i class="fas fa-trophy text-warning"></i>
            </span>
            Most Outstanding Information Technology Student (MOITeS), Philippine
            Society of Information Technology Educators (PSITE) 2021
            <div class="social-icons">
              <a
                class="social-icon"
                href="https://drive.google.com/file/d/1hLfAW5kDBUtlIqQMrvSXRVmtl9Qlkyzk/view?usp=sharing"
                title="Certificate Copy"
              >
                <i class="far fa-file"></i>
              </a>
            </div>
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-trophy text-warning"></i>
            </span>
            1st Place Winner, Emerson's Annual Innovation Challenge 2019
            <div class="social-icons">
              <a
                class="social-icon"
                href="https://www.manilatimes.net/2019/11/28/campus-press/adamson-university-wins-emerson-innovation-challenge/659312/"
                title="Manila Times' article of the event"
              >
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Awards;
