import React, { Component } from 'react';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section>
        {title("Open Source Projects | Adam Markon")}
        <blockquote>
          Open source projects
        </blockquote>
      </section>
    );
  }
}
