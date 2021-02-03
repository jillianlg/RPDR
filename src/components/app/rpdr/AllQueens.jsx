import React, { Component } from 'react';
import { getQueens } from '../services/dragRaceApi';
import QueenList from './QueenList';

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
      <QueenList queens={queens} />
    );
  }
}
