import React, { Component } from 'react';
import Tile from '../components/Tile';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid">
        {title("Home | Adam Markon")}
        <div className="tiles">
          <Tile imageUrl={require('../img/headshot.png')} overlayText="A Little Bit About Me"/>
          <Tile imageUrl={require('../img/code.png')} overlayText="Software Developer"/>
          <Tile imageUrl={require('../img/gonuxstream.png')} overlayText="TV Producer"/>
          <Tile imageUrl={require('../img/aepi.png')} overlayText="Fraternity Man"/>
          <Tile imageUrl={require('../img/biking.png')} overlayText="Bicyclist"/>
        </div>
      </section>
    );
  }
}
