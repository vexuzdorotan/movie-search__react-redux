import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/js/src/collapse.js';

import GoogleAuth from './GoogleAuth';
import { listMovies } from '../actions/index.js';

class SearchMovies extends Component {
  constructor(props) {
    super(props);

    this.state = { profile: '' };
  }

  onSetProfile = (profile) => {
    this.setState({ profile });
  };

  formOnSubmit = (formValues) => {
    this.props.listMovies(formValues.search);
  };

  renderList() {
    return (
      <Fragment>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
            <Link className="navbar-brand text-success font-weight-bold" to="/">
              YTS.vex
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link"
                    to="/"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/favorites"
                    activeClassName="active"
                  >
                    My Favorites
                  </NavLink>
                </li>
              </ul>

              <span className="navbar-text text-danger mr-2">
                Login as {this.state.profile}
              </span>

              <GoogleAuth onSetProfile={this.onSetProfile} />

              <form
                onSubmit={this.props.handleSubmit(this.formOnSubmit)}
                className="form-inline mt-2 mt-md-0"
              >
                <div>
                  <Field
                    className="form-control my-2 my-sm-0"
                    name="search"
                    component="input"
                    type="text"
                    placeholder="Type a movie or series"
                  />

                  <button
                    className="btn btn-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </nav>
        </header>
      </Fragment>
    );
  }

  render() {
    return <React.Fragment>{this.renderList()}</React.Fragment>;
  }
}

const formWrapped = reduxForm({
  form: 'searchMovie',
})(SearchMovies);

export default connect(null, { listMovies })(formWrapped);
