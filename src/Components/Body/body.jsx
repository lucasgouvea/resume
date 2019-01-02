import React, { Component } from "react";

class Body extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex d-column"
          id="about"
        >
          <div className="my-auto">
            <h1 className="mb-0">
              Lucas
              <span className="text-primary">Gouvea</span>
            </h1>
            <div className="subheading mb-5">
              141 Rua Nilo Máximo · Jacareí, SP · (12) 99616-4013 ·
              <a href="mailto:name@email.com">lucasgouvea93@gmail.com</a>
            </div>
            <p className="lead mb-5">
              About to graduate Computer Engineer, seeking new challenges and
              passionate for Software Development involving new technologies.
              Capable of learn fast new frameworks. Self-taught, aiming to
              become a software engineer.
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/lucas-gouvea-56a288139/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/lucasgouvea">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </section>

        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="experience"
        >
          <div className="my-auto">
            <h2 className="mb-5">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Software Development Internship</h3>
                <div className="subheading mb-3">FITec</div>
                <p>
                  Worked on Ericsson's BSCS billing & rating system, developing
                  features and writing automated tests.
                </p>
                <p>
                  Fullstack developer and architect of FITFaces, a new internal
                  tool to the company.
                </p>
                <p />
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">July 2018 - Present</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="education"
        >
          <div className="my-auto">
            <h2 className="mb-5">Education</h2>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Universidade Federal de Itajubá</h3>
                <div className="subheading mb-3">
                  Bachelor of Computer Engineering
                </div>
                <div />
                <p />
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">December 2019</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="skills"
        >
          <div className="my-auto">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">Languages and technologies</div>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check" />
                Java: Spring Boot, JPA, Hibernate
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Javascript: NodeJS, AngularJS, ReactJS, NPM
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Tools: Git, Maven, Jenkins
              </li>
            </ul>
            <div className="subheading mb-3" />
          </div>
        </section>

        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="interests"
        >
          <div className="my-auto">
            <h2 className="mb-5">Interests</h2>
            <p>?</p>
            <p className="mb-0">?</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Body;
