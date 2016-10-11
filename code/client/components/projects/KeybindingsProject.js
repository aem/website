import React, { Component } from 'react';

export default class KeybindingsProject extends Component {
  render() {
    return (
      <div
        itemScope
        itemType="http://schema.org/CreativeWork"
      >
        <div className="project-heading">
          <h3 itemProp="name">keybound-component</h3>
          <h6>Technologies:</h6>
          <span itemProp="keywords">
            React.js, Node.js, NPM, Babel, ESLint, Gulp, Codecov, Mocha, TravisCI | <a itemProp="url" href="https://github.com/aem/keybound-component">GitHub</a> | <a href="https://npmmjs.com/package/keybound-component">NPM</a> | <img className="badge" src="https://img.shields.io/codecov/c/github/aem/keybound-component.svg" />
          </span>
        </div>
        <p itemProp="description">
          While at HubSpot, working on the content composer mentioned in the <code>docs-soap</code> description, we also encountered a need for a clean, declarative library for global keybindings so we could allow users to save and format their post via the keyboard. All of our internal solutions were either hacked together or they used anti-patterns.
        </p>
        <p>
          This library uses a React Higher-Order-Component to wrap each component and pass the wrapped component a <code>registerListener</code> function via <code>this.props</code> that can be used to register simple keybindings.
        </p>
      </div>
    );
  }
}
