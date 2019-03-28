import React, { Component } from "react";
import Section from "./section/section";

const skills = [
  "Java: Spring Boot, JPA, Hibernate",
  "Javascript: NodeJS, AngularJS, ReactJS",
  "Android: React Native",
  "Tools: Git, Maven, Docker, Jenkins",
  "Capable of quick deploying web apps on AWS using Node + React" + "+ Mongo",
  "Capable of handling UNIX based systems"
];

const experiences = [
  {
    title: "Software Development Internship",
    subtitle: "FITec - SJC",
    content:
      "Worked on Ericsson's BSCS billing & rating system, developing" +
      "features and writing automated tests.Fullstack developer and architect" +
      "of FITFaces, a new internal" +
      "tool to the company.",
    rightContent: "December 2019"
  },
  {
    title: "Software Development Internship",
    subtitle: "Hivelabs - Itajubá",
    content:
      "Fullstack mobile developer, using React Native & NodeJS. " +
      "Responsible for bringing new technologies such as Docker into" +
      "the development process.",
    rightContent: "December 2019"
  }
];

class Body extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Section
          id="about"
          title="Lucas Gouvea"
          titleStyle="mb-0"
          headingLevel={1}
          content="About to graduate Computer Engineer, seeking new challenges and
            passionate for Software Development involving new technologies.
            Capable of learn new frameworks fast. Self-taught, aiming to
            become a Software Engineer."
        />
        <hr className="m-0" />
        <Section
          id="experience"
          title="Experience"
          titleStyle="mb-5"
          headingLevel={2}
          subSections={experiences}
        />
        <hr className="m-0" />
        <Section
          id="education"
          title="Education"
          titleStyle="mb-5"
          headingLevel={2}
          subSections={[
            {
              title: "Universidade Federal de Itajubá",
              subtitle: "Bachelor of Computer Engineering",
              content: "",
              rightContent: "December 2019"
            }
          ]}
        />
        <hr className="m-0" />
        <Section
          id="skills"
          title="Skills"
          titleStyle="mb-5"
          headingLevel={2}
          contentList={skills}
        />
        <hr className="m-0" />
        <Section
          id="interests"
          title="Interests"
          titleStyle="mb-5"
          headingLevel={2}
          content="Strongly interested in developing and architecting systems based
          on the state of the art technologies. Besides that, I enjoy
          reading books on themes such as psychology, philosophy, and
          neuroscience. Cyberpunk enthusiast, lover of sci-fi series and
          retrogaming."
        />
      </div>
    );
  }
}

export default Body;
