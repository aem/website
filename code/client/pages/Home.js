import React, { Component, PropTypes } from 'react';
import { title } from 'react-isomorphic-render';

export default class Page extends Component {
  render() {
    return (
      <section>
        {title("Home | Adam Markon")}
        <h2>Work in progress...</h2>
      </section>
    );
  }
}
