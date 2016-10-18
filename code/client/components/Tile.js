import cx from 'classnames';
import React, { Component, PropTypes } from 'react';

class Tile extends Component {
  handleClick = () => {
    this.props.open === this.props.id ?
      this.props.setOpen("") :
      this.props.setOpen(this.props.id);
  };

  render() {
    const classes = cx({
      'tile-wrapper': true,
      'open': this.props.open === this.props.id
    });

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="tile-pad">
          <div className="tile" style={{backgroundImage: `url('${this.props.imageUrl}')`}}></div>
          <div className="overlay">
            <h3>{this.props.header}</h3>
            <div className="body-wrapper">
              <p className="body">
                {this.props.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Tile.propTypes = {
  body: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  open: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Tile;
