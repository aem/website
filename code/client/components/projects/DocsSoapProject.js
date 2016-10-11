import DocsSoapDemo from '../DocsSoapDemo';
import React, { Component } from 'react';

export default class DocsSoapProject extends Component {
  render() {
    return (
      <div
        itemScope
        itemType="http://schema.org/CreativeWork"
      >
        <div className="project-heading">
          <h3 itemProp="name">docs-soap</h3>
          <h6>Technologies:</h6>
          <span itemProp="keywords">
            Node.js, NPM, Babel, Flow, ESLint, Gulp, Codecov, Mocha, TravisCI | <a itemProp="url" href="https://github.com/aem/docs-soap">GitHub</a> | <a href="https://npmmjs.com/package/docs-soap">NPM</a> | <img className="badge" src="https://img.shields.io/codecov/c/github/aem/docs-soap.svg" />
          </span>
        </div>
        <p itemProp="description">
          During my time at <a href="https://www.hubspot.com" target="_blank">HubSpot</a> I worked on the COS (Content Optimization System) Blog Publishing team, developing the new Content Composer, a distraction-free writing environment to produce content for your blog in an ideal writing environment. One requirement for the product was that it had to gracefully handle the scenario when content was pasted into it from third-party sources such as Microsoft Word and Google Docs. Enter <code>docs-soap</code>, the open-source version of the parser I wrote to handle the case where content was pasted in from Google Docs. Check out a quick demo of the product below.
        </p>
        <DocsSoapDemo />
      </div>
    );
  }
}
