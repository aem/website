import React from 'react';
import styled from 'styled-components';
import { textColorPrimary } from 'styles';

const Chevron = styled.span`
  font-size: 14px;
  display: inline-block;
  transform: rotate(180deg);
  position: relative;
  top: -2px;
  margin-left: 5px;
`;

const Button = styled.button`
  z-index: 2;
  font-family: 'Catamaran', Arial, Helvetica, sans-serif;
  background: none;
  border: none;
  font-size: 16px;
  height: fit-content;
  margin: 0;
  margin: 25px 15px;

  &:active {
    background: none;
    box-shadow: none;
    border: none;
  }
`;

const Underline = styled.div`
  z-index: 1;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  border-bottom: ${({ hovered }) => (hovered ? '40' : '10')}px solid
    ${textColorPrimary};
  transition: border-bottom 0.15s ease-in-out;
  position: absolute;
  bottom: -5px;
`;

const NavigationWrapper = styled.div`
  position: relative;
  bottom: 15px;
`;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      open: false
    };
  }

  onMouseEnter = () => {
    this.setState(() => {
      return {
        hovered: true
      };
    });
  };

  onMouseLeave = () => {
    this.setState(() => {
      return {
        hovered: false
      };
    });
  };

  onClick = () => {
    this.setState(old => {
      return {
        open: !old.open
      };
    });
  };

  render() {
    return (
      <NavigationWrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        <Button>
          Current Page <Chevron down={this.state.open}>▲</Chevron>
        </Button>
        <Underline hovered={this.state.hovered} />
      </NavigationWrapper>
    );
  }
}
