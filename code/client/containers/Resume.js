import React, { Component } from 'react';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section>
        {title("Resume | Adam Markon")}
        <blockquote>
          Resume here
        </blockquote>
      </section>
    );
  }
}
