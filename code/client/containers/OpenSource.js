import { head } from 'react-isomorphic-render';
import React, { Component } from 'react';

import DocsSoap from '../components/projects/DocsSoapProject';
import Website from '../components/projects/WebsiteProject';

const title = 'Open Source Projects | Adam Markon';
const description = `Learn more about Adam Markon's open-source software projects.`;
const meta = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
  { name: 'google-site-verification', content: '_D_UusvbMFmpydhJYUZ9Qr7Mi1WJkeiieGGO3Lk0IJA' },
  { name: 'description', content: description},
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:locale', content: 'en-US' }
];

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid">
        {head(title, meta)}
        <h2 className="underline">Open-Source Projects</h2>
        <Website />
        <hr />
        <DocsSoap />
      </section>
    );
  }
}
