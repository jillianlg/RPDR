import React from 'react';
import PropTypes from 'prop-types';

// const Queen = ({ name, image_url, seasons:[season], quote }) => (
const Queen = ({ name, image_url, quote }) => (
  <>
    <h3>{name}</h3>
    {/* <p>{season.id}</p> */}
    <p>{quote}</p>
    <img src={image_url} />
  </>
);

Queen.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  // seasons: PropTypes.array.isRequired,
  image_url: PropTypes.string.isRequired,
};

export default Queen;
