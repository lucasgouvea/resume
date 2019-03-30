import React, { Component } from "react";

class SectionContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderContentListMap = contentListMap => {
    let contentListArr = [];
    for (let [key, val] of contentListMap.entries()) {
      contentListArr.push(
        <ul key={key} className="fa-ul mb-0">
          <li className="list-item">
            <i className="fa-li fa fa-check list-icon" />
            <p>
              <b>{key}</b> : {val}
            </p>
          </li>
        </ul>
      );
    }
    return contentListArr;
  };

  renderSocialIcons = id => {
    if (id === "about") {
      return (
        <div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/lucas-gouvea-56a288139/">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://github.com/lucasgouvea">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  };
  render() {
    const { id, content, contentListMap } = this.props;

    let contentStyle;
    if (contentListMap) {
      contentStyle = "list-container";
    }
    return (
      <div className={contentStyle}>
        <p className="lead mb-5">{content}</p>
        {contentListMap ? this.renderContentListMap(contentListMap) : <div />}
        {this.renderSocialIcons(id)}
      </div>
    );
  }
}

export default SectionContent;
