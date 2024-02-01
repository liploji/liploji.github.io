import React from "react";
import "../../App.css";

const Experience = () => {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-5">
              {/* Senior Data Analyst */}
              <h3 className="mb-0">Senior Data Analyst</h3>
              <div className="subheading mb-3">Uber</div>
              <p className="experience-paragraph">
                Collaboratively administrate the progress of the web application
                being developed to ensure the quality of the application. Played
                a key role in checking the past and latest iteration of the
                application and uploading the bugs found in the team task board.
                Produced the daily report for the team noting the current
                progress of the sprint and what changed during the day.
              </p>
              <p className="text-muted">September 2022 - January 2023</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-5">
              {/* Junior Data Analyst */}
              <h3 className="mb-0">Junior Data Analyst</h3>
              <div className="subheading mb-3">Uber</div>
              <p className="experience-paragraph"></p>
              <p className="text-muted">October 2021 - August 2022</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-5">
              {/* Junior Data Analyst */}
              <h3 className="mb-0">Junior Data Analyst</h3>
              <div className="subheading mb-3">Uber</div>
              <p className="experience-paragraph">
                Collaboratively administrate the progress of the web application
                being developed to ensure the quality of the application. Played
                a key role in checking the past and latest iteration of the
                application and uploading the bugs found in the team task board.
                Produced the daily report for the team noting the current
                progress of the sprint and what changed during the day.
              </p>
              <p className="text-muted">March 2021 - May 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
