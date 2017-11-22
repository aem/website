import styled from 'styled-components';
import { textColorPrimary, textColorDark } from 'styles';
import React from 'react';

const TileLayout = styled.div`
  border-left: 5px solid ${textColorPrimary};
  border-top: 5px solid ${textColorDark};
  border-bottom: 5px solid white;
  border-right: 5px solid white;
  padding: 10px;
  text-align: center;
`;

const TileContainer = styled.div`
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &.open {
    transform: scale(1.03);
  }
`;

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  onClick = () => {
    this.setState(old => {
      return { open: !old.open };
    });
  };

  render() {
    return (
      <TileLayout onClick={this.onClick}>
        <TileContainer className={this.state.open ? 'open' : ''}>
          <img src={this.props.imgUrl} />
          <h3>{this.props.title}</h3>
          <p>{this.props.body}</p>
        </TileContainer>
      </TileLayout>
    );
  }
}
