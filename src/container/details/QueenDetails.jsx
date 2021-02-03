/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getOneQueen } from '../../services/dragRaceApi';
import Queen from '../list/Queen';

export default class QueenDetails extends Component {
  state= {
    queenData: {}
  }
  
  componentDidMount() {
    getOneQueen(this.props.match.params.id)
      .then(queenData => this.setState({ queenData }));
  }
  
  render() {
    const { queenData } = this.state;
    console.log(queenData);
    return (
      <>
        <Link to="/">Home</Link>   
        <Queen {...queenData} /> 
      </>
    );
  }
}
