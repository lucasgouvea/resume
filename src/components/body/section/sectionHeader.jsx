import React, { Component } from "react";
import PropTypes from "prop-types";
import Tag from "./tag";

class SectionHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { headingLevel, titleStyle, title } = this.props;
    return (
      <div class="section-header">
        <Tag headingLevel={headingLevel} style={titleStyle} title={title} />
      </div>
    );
  }
}

SectionHeader.propTypes = {
  headingLevel: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.string.isRequired
};

export default SectionHeader;
