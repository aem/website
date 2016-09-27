import React, { Component } from 'react';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section>
        {title("Home | Adam Markon")}
        <blockquote>
          Click the links at the top to learn more about me!
        </blockquote>
      </section>
    );
  }
}
