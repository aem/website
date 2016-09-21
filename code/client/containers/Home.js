import DocsSoapDemo from '../components/DocsSoapDemo';
import React, { Component } from 'react';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section>
        {title("Home | Adam Markon")}
        <DocsSoapDemo />
      </section>
    );
  }
}
