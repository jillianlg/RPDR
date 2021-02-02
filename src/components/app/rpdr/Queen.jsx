import React from 'react';
import PropTypes from 'prop-types';

const Queen = ({ name, image_url, quote }) => (
  <figure>
    <figcaption>{name}</figcaption>
    {/* <p>{season.id}</p> */}
    <p>{quote}</p>
    <img src={image_url} />
  </figure>
);

Queen.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  // season.id: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,

};

export default Queen;
