import React, { Component } from 'react';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section>
        {title("Contact Adam Markon")}
        <blockquote>
          Contact form here
        </blockquote>
      </section>
    );
  }
}
