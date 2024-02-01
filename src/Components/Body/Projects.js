import React from "react";
import "../../App.css";

const Projects = () => {
  return (
    <section className="resume-section" id="project">
      <div className="resume-section-content">
        <h2 className="mb-5">Projects</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-5">
              {/* Project 1 */}
              <h3 className="mb-0">Fake News Detection Model</h3>
              <div className="subheading mb-3">
                Computer Science Research Project 1 & 2
              </div>
              <p>
                A Fake News Detection Model that uses Tessaract Optical
                Character Recognition and Natural Language Processing paired
                with Logistic Regression. The model uses Optical Character
                Recognition on an image and it extracts the text found in the
                image. It would then use the extracted text in the Natural
                Language Processing and Logistic Regression added in the model.
                It would determine whether the image is fake or not based on the
                data that is being used as a reference.
              </p>

              <div className="social-icons">
                <a
                  className="social-icon"
                  href="https://github.com/liploji/FakeNewsDetectionModel"
                  title="Github Link"
                >
                  <i className="far fa-file"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-5">
              {/* Project 2 */}
              <h3 className="mb-0">Funko Pop Web scraping Bot</h3>
              <div className="subheading mb-3">Personal Project</div>
              <p>
                A Web Scraping Bot for Discord that will check for Funko Pops
                being sold in Bigboys.ph and shop.filbar.online. The bot accepts
                new keywords that the user inputs and it may also delete the
                keywords that the user inputed. The bot uses the keywords
                inputed by the user to check the Funko Pop listing of the
                websites stated above. It only checks the websites' first page
                of funko pops to check for the keywords listed by the user.
              </p>
              <div className="social-icons">
                <a
                  className="social-icon"
                  href="https://github.com/liploji/Funko-Pop-Webscrapper-Bot"
                  title="Github Link"
                >
                  <i className="far fa-file"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-5">
              {/* Project 3 */}
              <h3 className="mb-0">Sweet Tooth Website</h3>
              <div className="subheading mb-3">School Project</div>
              <p>
                An online shopping website created using HTML and CSS for a
              concept store called “Sweet Tooth” that sells a variety of baked
              goods.
              </p>
              <div className="social-icons">
                <a
                  className="social-icon"
                  href="https://github.com/liploji/SweetToothProject"
                  title="Github Link"
                >
                  <i className="far fa-file"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-5">
              {/* Project 4 */}
              <h3 className="mb-0">Recipe Repo Website</h3>
              <div className="subheading mb-3">School Project</div>
              <p>
                 A website created using React, HTML and CSS that uses the Edamam
              API. It generates recipes based on the input of the user and their
              preferences.
              </p>
              <div className="social-icons">
                <a
                  className="social-icon"
                  href="https://github.com/liploji/reciperepo"
                  title="Github Link"
                >
                  <i className="far fa-file"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Projects;
