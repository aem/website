import Education from '../components/resume/Education';
import Projects from '../components/resume/Projects';
import React, { Component } from 'react';
import Skills from '../components/resume/Skills';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid">
        {title("Resume | Adam Markon")}
        <h2 className="underline">About Adam</h2>
        <div className="resume">
          <Education />
          <div className="horizontal-divider"></div>
          <section className="side-panel">
            <Projects />
            <div className="horizontal-divider"></div>
            <Skills />
          </section>
        </div>
      </section>
    );
  }
}
