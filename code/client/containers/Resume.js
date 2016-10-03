import Education from '../components/resume/Education';
import Experience from '../components/resume/Experience';
import Interests from '../components/resume/Interests';
import Projects from '../components/resume/Projects';
import React, { Component } from 'react';
import Skills from '../components/resume/Skills';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid resume-section">
        {title("Resume | Adam Markon")}
        <blockquote>
          Below you'll find a current, HTML copy of my resume. For a PDF version, <a href="https://s3-us-west-2.amazonaws.com/adam-markon-public-assets/AdamMarkonResume_final.pdf" target="_blank">click here!</a>
        </blockquote>
        <hr />
        <div className="resume">
          <Education />
          <div className="horizontal-divider"></div>
          <div className="middle-section">
            <div className="side-panel">
              <Projects />
              <div className="horizontal-divider"></div>
              <Skills />
            </div>
            <div className="vertical-divider"></div>
            <Experience />
          </div>
          <div className="horizontal-divider"></div>
          <Interests />
        </div>
      </section>
    );
  }
}
