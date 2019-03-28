import React, { Component } from "react";

class SectionContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderContentList = contentList => {
    let contentListArray = [];
    contentList.forEach(content => {
      contentListArray.push(
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check" />
            {content}
          </li>
        </ul>
      );
    });
    return contentListArray;
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
    const { id, content, contentList } = this.props;
    return (
      <div>
        <p className="lead mb-5">{content}</p>
        {contentList ? this.renderContentList(contentList) : <div />}
        {this.renderSocialIcons(id)}
      </div>
    );
  }
}

export default SectionContent;
