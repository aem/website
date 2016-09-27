import React, { Component } from 'react';

export default class WebsiteProject extends Component {
  render() {
    return (
      <div>
        <div className="project-heading">
          <h3>Personal Website</h3>
          <h6>Technologies:</h6><span>Node.js, NPM, React, Webpack, SASS, Bootstrap, Amazon Web Services  |  <a href="https://github.com/aem/website">GitHub</a></span>
        </div>
        <p>
          This entire website is actually one big open-source project. This website is a server-rendered React application, hosted on an Amazon Web Services EC2 instance. The source code in its entirety is <a href="https://github.com/aem/website" target="_blank">available on GitHub.</a> While it would obviously be easier to just build the site as a set of static HTML, JavaScript, and CSS files and host them with a simple Apache server, I had wanted to play with both AWS and isomorphic React for a long time and this seemed like a great opportunity to do so.
        </p>
      </div>
    );
  }
}
