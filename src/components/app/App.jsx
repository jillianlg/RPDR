import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../../pages/HomePage';
import QueenDetails from '../../container/details/QueenDetails';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <HomePage {...routerProps} />}
          />
          <Route
            path="/QueenDetails/:id" 
            exact
            render={(routerProps) => <QueenDetails {...routerProps} />}
          />
        </Switch>
      </Router>

    </>
  );
}
