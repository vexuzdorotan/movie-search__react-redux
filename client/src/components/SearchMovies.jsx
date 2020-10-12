import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/js/src/collapse.js';

import GoogleAuth from './GoogleAuth';
import MyModal from './MyModal';
import { listMovies } from '../actions/index.js';

class SearchMovies extends Component {
  constructor(props) {
    super(props);

    this.state = { profile: '' };
  }

  myModal = (obj) => {
    this.showModal = obj && obj.handleShow;
  };

  showMyModal = (heading, body) => {
    this.showModal(heading, body);
  };

  onSetProfile = (profile) => {
    this.setState({ profile });
  };

  formOnSubmit = (formValues) => {
    if (!formValues.search) {
      return this.showMyModal('Invalid Input', `Please add text.`);
    }

    this.props.listMovies(formValues.search);
  };

  renderList() {
    return (
      <Fragment>
        <MyModal ref={this.myModal} />
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
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <NavLink
                    exact
                    className="nav-link"
                    to="/"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <NavLink
                    className="nav-link"
                    to="/favorites"
                    activeClassName="active"
                  >
                    My Favorites (
                    <span className="text-danger">
                      {this.props.favoriteLength}
                    </span>
                    )
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
                    data-toggle="collapse" data-target=".navbar-collapse.show"
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

const mapStateToProps = (state) => {
  return {
    favoriteLength: Object.keys(state.favoriteMovie).length,
  };
};

export default connect(mapStateToProps, { listMovies })(formWrapped);
