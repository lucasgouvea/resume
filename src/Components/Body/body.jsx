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
              309 R. PREF. TIGRE MAIA · ITAJUBÁ, MG · (12) 99616-4013 ·
              <a href="mailto:name@email.com">lucasgouvea93@gmail.com</a>
            </div>
            <p className="lead mb-5">
              About to graduate Computer Engineer, seeking new challenges and
              passionate for Software Development involving new technologies.
              Capable of learn new frameworks fast. Self-taught, aiming to
              become a Software Engineer.
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
                <div className="subheading mb-3">Hivelabs - Itajubá</div>
                <p>Fullstack mobile developer, using React Native & NodeJS.</p>
                <p>
                  Responsible for bringing new technologies such as Docker into
                  the development process.
                </p>
                <p />
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">February 2019 - Present</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Software Development Internship</h3>
                <div className="subheading mb-3">FITec - SJC</div>
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
                <span className="text-primary">July 2018 - January 2019</span>
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
                Javascript: NodeJS, AngularJS, ReactJS
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Android: React Native
              </li>

              <li>
                <i className="fa-li fa fa-check" />
                Tools: Git, Maven, Docker, Jenkins
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Capable of quick deploying web apps on AWS using Node + React +
                Mongo
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Capable of handling UNIX based systems
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
            <p className="mb-0">
              Strongly interested in developing and architecting systems based
              on the state of the art technologies. Besides that, I enjoy
              reading books on themes such as psychology, philosophy, and
              neuroscience. Cyberpunk enthusiast, lover of sci-fi series and
              retrogaming.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Body;
