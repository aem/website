import { head } from 'react-isomorphic-render';
import React, { Component } from 'react';

import Tile from '../components/Tile';
import { tiles } from '../Constants';

const title = 'Home | Adam Markon';
const description = 'Adam is a Boston-based software developer, photographer, and cyclist.';
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
  constructor() {
    super();
    this.state = {
      open: ""
    };
  }

  setOpen = (id) => {
    this.setState({open: id});
  };

  render() {
    return (
      <section className="container-fluid">
        {head(title, meta)}
        <div className="tiles">
          <Tile
            body={tiles.get('aboutMe')}
            header="A Little Bit About Me"
            id="aboutMe"
            imageUrl={require('../img/headshot.png')}
            open={this.state.open}
            setOpen={this.setOpen}
          />
          <Tile
            body={tiles.get('developer')}
            header="Software Developer"
            id="developer"
            imageUrl={require('../img/code.png')}
            open={this.state.open}
            setOpen={this.setOpen}
          />
          <Tile
            body={tiles.get('video')}
            header="TV Producer"
            id="video"
            imageUrl={require('../img/gonuxstream.png')}
            open={this.state.open}
            setOpen={this.setOpen}
          />
          <Tile
            body={tiles.get('biking')}
            header="Bicyclist"
            id="biking"
            imageUrl={require('../img/biking.png')}
            open={this.state.open}
            setOpen={this.setOpen}
          />
        </div>
      </section>
    );
  }
}
