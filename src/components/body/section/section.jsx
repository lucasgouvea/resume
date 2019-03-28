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
    let subSectionArray = [];
    subSections.forEach(subSection => {
      subSectionArray.push(
        <SubSection
          title={subSection.title}
          subtitle={subSection.subtitle}
          content={subSection.content}
          rightContent={subSection.rightContent}
        />
      );
    });
    return subSectionArray;
  };
  render() {
    const {
      id,
      headingLevel,
      titleStyle,
      title,
      content,
      contentList,
      subSections
    } = this.props;
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id={id}>
        <div className="my-auto">
          <SectionHeader
            headingLevel={headingLevel}
            titleStyle={titleStyle}
            title={title}
          />
          <SectionContent id={id} content={content} contentList={contentList} />
          {subSections ? this.renderSubSections(subSections) : <div />}
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  id: PropTypes.number.isRequired,
  headingLevel: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Section;
