import React, { PropTypes } from 'react';

const Tile = ({imageUrl, overlayText}) => {
  return (
    <div className="tile-wrapper">
      <a href="#">
        <div className="tile-pad">
          <div className="tile" style={{backgroundImage: `url('${imageUrl}')`}}></div>
          <div className="overlay">{overlayText}</div>
        </div>
      </a>
    </div>
  )
};

Tile.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default Tile;
