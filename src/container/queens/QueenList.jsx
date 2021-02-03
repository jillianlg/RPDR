import React from 'react';
import styles from '../queens/Queen.css';
import PropTypes from 'prop-types';
import Queen from '../details/QueenDetails';
import { Link } from 'react-router-dom';

const QueenList = ({ queens }) => {
  const queenElements = queens.map(queen => (
    <li key={queen.id}>
      <Link to={`/DetailsPage/${queen.id}`}>
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
