
import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <h1>RuPaul's Drag Race</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/list" >List</Link>
          </li> */}
        </ul>
      </>
    )
  }
}