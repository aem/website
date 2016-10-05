import { head } from 'react-isomorphic-render'
import React, { Component } from 'react'

const title = 'Page Not Found | Adam Markon';
const description = `We couldn't find the page you were looking for.`;
const meta = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
  { name: 'google-site-verification', content: '_D_UusvbMFmpydhJYUZ9Qr7Mi1WJkeiieGGO3Lk0IJA' },
  { name: 'description', content: description},
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:locale', content: 'en_US' },
  { property: 'og:image', content: 'https://media4.giphy.com/media/ALalVMOVR8Qw/200_s.gif'}
];

export default class NotFound extends Component {
  render() {
    return (
      <div>
        {head(title, meta)}
        <h2 className="underline">Page Not Found</h2>
        <h6>A brief poem, if you will...</h6>
        <blockquote>
          404 Not Found
          <br />
          You arrived here, curious
          <br />
          But alas, no content
        </blockquote>
      </div>
    );
  }
}
