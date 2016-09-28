import React, { Component } from 'react';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid">
        {title("Contact Adam Markon")}
        <h2 className="underline">Contact Adam</h2>
        <blockquote>
          Contact form here
        </blockquote>
      </section>
    );
  }
}
