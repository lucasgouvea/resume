import React, { Component } from "react";

class SubSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, subtitle, content, rightContent } = this.props;
    return (
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">{title}</h3>
          <div className="subheading mb-3">{subtitle}</div>
          <p>{content}</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{rightContent}</span>
        </div>
      </div>
    );
  }
}

export default SubSection;
