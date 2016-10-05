import React, { Component } from 'react';
import Tile from '../components/Tile';
import { tiles } from '../Constants';
import { title } from 'react-isomorphic-render';

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid">
        {title("Home | Adam Markon")}
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
