import { head } from 'react-isomorphic-render';
import React, { Component } from 'react';

import Tile from '../components/Tile';
import { tiles } from '../Constants';

const title = 'Home | Adam Markon';
const description = 'Adam is a software developer specializing in front-end web development with ReactJS, as well as a professional sports broadcaster.';
const meta = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
  { name: 'google-site-verification', content: '_D_UusvbMFmpydhJYUZ9Qr7Mi1WJkeiieGGO3Lk0IJA' },
  { name: 'description', content: description},
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:locale', content: 'en-US' },
  { property: 'og:image', content: require('../img/headshot.png')}
];

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid">
        {head(title, meta)}
        <div className="tiles">
          <Tile imageUrl={require('../img/headshot.png')} header="A Little Bit About Me" body={tiles.get('aboutMe')}/>
          <Tile imageUrl={require('../img/code.png')} header="Software Developer" body={tiles.get('developer')}/>
          <Tile imageUrl={require('../img/gonuxstream.png')} header="TV Producer" body={tiles.get('video')}/>
          <Tile imageUrl={require('../img/aepi.png')} header="Fraternity Man" body={tiles.get('fraternity')}/>
          <Tile imageUrl={require('../img/biking.png')} header="Bicyclist" body={tiles.get('biking')}/>
        </div>
      </section>
    );
  }
}
