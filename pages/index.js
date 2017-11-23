import Layout from '../components/Layout';
import React from 'react';
import { Pre } from 'lib';
import styled from 'styled-components';
import Tile from '../components/home/Tile';

const TileWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-auto-flow: row;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

const bodies = {
  aboutMe:
    'Hi! I grew up in Minnesota and have since moved to Boston for school. I now study Computer Science and Business Administration at Northeastern University. Check out some of the other tiles to learn a little more about me!',
  developer:
    "I've got roughly 8 years of development experience (I taught myself C at the age of 13!) and my experience has led me to be a web developer with full-stack skills, but specializing in front-end development. I've published several open-source libraries and all of my development work is showcased on this website and my GitHub account.",
  video:
    "Every single Northeastern University Division I home game is televised, made possible by the amazing team at GoNUxstream. I work primarily as a Producer, Director, Technical Director, and, as needed, instant replay operator and graphics producer. We've produced regional broadcasts for Comcast SportsNet, NESN, and nationwide broadcasts on NHLNetowkr and ASN.",
  biking:
    "About two years ago I took up biking, initially as a way to commute to work, and eventually I continued to bike in my free time. Since then I've biked thousands of miles across the city of Boston and its outlying suburbs."
};

export default class Home extends React.Component {
  render() {
    return (
      <Layout title="Adam Markon">
        <TileWrapper>
          <Tile title="👋 I'm Adam!" body={bodies.aboutMe} />
          <Tile title="Software Development" body={bodies.developer} />
          <Tile title="Video Production" body={bodies.video} />
          <Tile title="Biking" body={bodies.biking} />
        </TileWrapper>
      </Layout>
    );
  }
}
