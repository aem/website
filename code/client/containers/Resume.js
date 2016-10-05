import { head } from 'react-isomorphic-render';
import React, { Component } from 'react';

import Education from '../components/resume/Education';
import Experience from '../components/resume/Experience';
import Interests from '../components/resume/Interests';
import Projects from '../components/resume/Projects';
import Skills from '../components/resume/Skills';

const title = 'Resume | Adam Markon';
const description = `Adam Markon is a software developer and video producer. Learn more about him and download a copy of his resume`;
const meta = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
  { name: 'google-site-verification', content: '_D_UusvbMFmpydhJYUZ9Qr7Mi1WJkeiieGGO3Lk0IJA' },
  { name: 'description', content: description},
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:locale', content: 'en_US' },
  { property: 'og:image', content: `https://adammarkon.com${require('../img/headshot.png')}`}
];

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid resume-section">
        {head(title, meta)}
        <blockquote>
          Below you'll find a current, HTML copy of my resume. For a PDF version, <a href="https://s3-us-west-2.amazonaws.com/adam-markon-public-assets/AdamMarkonResume_final.pdf" target="_blank">click here!</a>
        </blockquote>
        <hr />
        <div className="resume">
          <Education />
          <div className="horizontal-divider"></div>
          <div className="middle-section">
            <aside className="side-panel">
              <Projects />
              <div className="horizontal-divider"></div>
              <Skills />
            </aside>
            <div className="rotating-divider"></div>
            <Experience />
          </div>
          <div className="horizontal-divider"></div>
          <Interests />
        </div>
      </section>
    );
  }
}
