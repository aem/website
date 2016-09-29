import Education from '../components/resume/Education';
import React, { Component } from 'react';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid">
        {title("Resume | Adam Markon")}
        <h2 className="underline">About Adam</h2>
        <div className="resume">
          <Education />
        </div>
      </section>
    );
  }
}
