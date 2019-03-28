import React, { Component } from "react";

class Tag extends Component {
  render() {
    const { headingLevel, title, titleStyle } = this.props;
    const Tag = `h${headingLevel}`;
    return <Tag className={titleStyle}>{title}</Tag>;
  }
}

export default Tag;
