import DocsSoap from '../components/projects/DocsSoapProject';
import React, { Component } from 'react';
import { title } from 'react-isomorphic-render';
import Website from '../components/projects/WebsiteProject';

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid">
        {title("Open Source Projects | Adam Markon")}
        <Website />
        <hr />
        <DocsSoap />
      </section>
    );
  }
}
