import React, { Component } from 'react';
import { getQueens } from '../services/dragRaceApi';
import Queen from './Queen';

export default class AllQueens extends Component {
  state = {
    queens: []
  }

  componentDidMount() {
    getQueens()
      .then(queens => this.setState({ queens }));
  }

  render() {
    const { queens } = this.state;

    return (
      <ul>
        {queens.map(queen => (
          <li key={queen.id}>
            <Queen 
              name={queen.name}
              seasons={queen.season.id}
              quote={queen.quote}
              image={queen.image_url}
            />
          </li>
        ))}
      </ul>
    );
  }
}
