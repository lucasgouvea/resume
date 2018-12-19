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
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fab fa-github" />
              </a>
              <a href="#">
                <i className="fab fa-facebook-f" />
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
                <p>blablabla</p>
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

            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5" />
              </li>
              {/*               <li className="list-inline-item">
                <i className="fab fa-css3-alt" />
              </li> */}
              <li className="list-inline-item">
                <i className="fab fa-js-square" />
              </li>
              {/*               <li className="list-inline-item">
                <i className="fab fa-angular" />
              </li> */}
              <li className="list-inline-item">
                <i className="fab fa-react" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node" />
              </li>
              {/*               <li className="list-inline-item">
                <i className="fab fa-sass" />
              </li> */}
              {/*               <li className="list-inline-item">
                <i className="fab fa-less" />
              </li> */}
              {/*               <li className="list-inline-item">
                <i className="fab fa-wordpress" />
              </li> */}
              {/*               <li className="list-inline-item">
                <i className="fab fa-gulp" />
              </li> */}
              {/*               <li className="list-inline-item">
                <i className="fab fa-grunt" />
              </li> */}
              <li className="list-inline-item">
                <i className="fab fa-npm" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-git" />
              </li>
            </ul>

            <div className="subheading mb-3">Languages and technologies</div>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check" />
                Java (Spring boot, JPA, hibernate)
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Javascript (AngularJS, NodeJS, ReactJS, NPM)
              </li>
            </ul>
          </div>
        </section>

        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="interests"
        >
          <div className="my-auto">
            <h2 className="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors. In the winter, I am an avid skier and novice ice
              climber. During the warmer months here in Colorado, I enjoy
              mountain biking, free climbing, and kayaking.
            </p>
            <p className="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre
              movies and television shows, I am an aspiring chef, and I spend a
              large amount of my free time exploring the latest technology
              advancements in the front-end web development world.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Body;
