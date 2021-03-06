import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import history from '../history';
import SearchMovies from './SearchMovies';
import Jumbotron from './Jumbotron';
import ListMovies from './ListMovies';
import ReadMovies from './Movies/ReadMovies';
import CreateMovie from './Movies/CreateMovie';
import ReadMovie from './Movies/ReadMovie';
import UpdateMovie from './Movies/UpdateMovie';
import NoMatch from './NoMatch';

import MyModal from './MyModal';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <SearchMovies />
          <Route component={Jumbotron}></Route>
          <Switch>
            <Route path="/" exact component={ListMovies}></Route>
            <Route path="/favorites" exact component={ReadMovies}></Route>
            <Route
              path="/favorites/create"
              exact
              component={CreateMovie}
            ></Route>
            <Route
              path="/favorites/read/:id"
              exact
              component={ReadMovie}
            ></Route>
            <Route
              path="/favorites/update/:id"
              exact
              component={UpdateMovie}
            ></Route>
            <Route path="/test" exact component={MyModal}></Route>
            <Route component={NoMatch}></Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
