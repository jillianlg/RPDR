import React from 'react';
import PropTypes from 'prop-types';
import getOneQueen from '../../services/dragRaceApi';

const Queen = ({ name, image_url, seasons:[season], quote }) => (
  <figure>
    <figcaption>{name}</figcaption>
    <p>{season.id}</p>
    <p>{quote}</p>
    <img src={image_url} />
  </figure>
);

Queen.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  seasons: PropTypes.array.isRequired,
  image_url: PropTypes.string.isRequired,
};

export default Queen;
