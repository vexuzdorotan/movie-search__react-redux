import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import SearchMovies from './SearchMovies';
import ListMovies from './ListMovies';

class App extends Component {
  renderList() {
    return (
      <Fragment>
        <SearchMovies />
        <ListMovies />
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={this.renderList}></Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
