import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../../pages/HomePage';

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
            path="/list"
            exact
            render={(routerProps) => <ListPage {...routerProps} />}
          />
          <Route
            path="/details" //should be something like "/pokeData/:pokeName"
            exact
            render={(routerProps) => <DetailsPage {...routerProps} />}
          />
        </Switch>
      </Router>

    </>
  );
}
