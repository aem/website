import DocsSoap from '../components/projects/DocsSoapProject';
import React, { Component } from 'react';
import { title } from 'react-isomorphic-render';
import Website from '../components/projects/WebsiteProject';

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid">
        {title("Open Source Projects | Adam Markon")}
        <h2 className="underline">Open-Source Projects</h2>
        <Website />
        <hr />
        <DocsSoap />
      </section>
    );
  }
}
