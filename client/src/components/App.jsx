import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import SearchMovies from './SearchMovies';
import ListMovies from './ListMovies';
import ReadMovies from './Movies/ReadMovies';
import CreateMovie from './Movies/CreateMovie';
import ReadMovie from './Movies/ReadMovie';
import UpdateMovie from './Movies/UpdateMovie';
import DeleteMovie from './Movies/DeleteMovie';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <SearchMovies />
          <Switch>
            <Route path="/" exact component={ListMovies}></Route>
            <Route path="/favorites" exact component={ReadMovies}></Route>
            <Route
              path="/favorites/create"
              exact
              component={CreateMovie}
            ></Route>
            <Route path="/favorites/read" exact component={ReadMovie}></Route>
            <Route
              path="/favorites/update"
              exact
              component={UpdateMovie}
            ></Route>
            <Route
              path="/favorites/delete"
              exact
              component={DeleteMovie}
            ></Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
