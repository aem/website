import React, { Component } from 'react';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid">
        {title("Home | Adam Markon")}
        <h2 className="underline">Home</h2>
        <blockquote>
          Click the links at the top to learn more about me!
        </blockquote>
      </section>
    );
  }
}
