import React, { Component } from "react";
import PropTypes from "prop-types";
import SectionHeader from "./sectionHeader";
import SectionContent from "./sectionContent";
import SubSection from "./subSection";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderSubSections = subSections => {
    return subSections.map((subSection, key) => {
      return (
        <SubSection
          key={key}
          title={subSection.title}
          subtitle={subSection.subtitle}
          content={subSection.content}
          rightContent={subSection.rightContent}
        />
      );
    });
  };
  render() {
    const {
      id,
      headingLevel,
      titleStyle,
      title,
      content,
      contentListMap,
      subSections
    } = this.props;
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id={id}>
        <div className="my-auto section-div">
          <SectionHeader
            headingLevel={headingLevel}
            titleStyle={titleStyle}
            title={title}
          />
          <SectionContent
            id={id}
            content={content}
            contentListMap={contentListMap}
          />
          {subSections ? this.renderSubSections(subSections) : <div />}
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  headingLevel: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.string.isRequired,
  content: PropTypes.string
};

export default Section;
