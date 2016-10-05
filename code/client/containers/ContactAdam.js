import { head } from 'react-isomorphic-render';
import React, { Component } from 'react';

const title = 'Contact Me | Adam Markon';
const description = `Contact Adam Markon, a software developer and video producer.`;
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
        <h2 className="underline">Contact Adam</h2>
        <blockquote>
          Contact form here
        </blockquote>
      </section>
    );
  }
}
