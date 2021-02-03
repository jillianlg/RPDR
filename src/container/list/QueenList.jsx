import React from 'react';
import styles from './Queen.css';
import PropTypes from 'prop-types';
import Queen from './Queen';
import { Link } from 'react-router-dom';

const QueenList = ({ queens }) => {
  const queenElements = queens.map(queen => (
    <li key={queen.id}>
      <Link to={`/QueenDetails/${queen.id}`}>
        <Queen {...queen} />
      </Link>
    </li>
  ));

  return (
    <ul className={styles.Queen}>
      {queenElements}
    </ul>
  );
};

QueenList.propTypes = {
  queens: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    seasons: PropTypes.array.isRequired,
    image_url: PropTypes.string.isRequired,
  })).isRequired
};

export default QueenList;
