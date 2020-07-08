import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import favorites from '../api/favorites';
import { listMovies, createMovies } from '../actions';
import MyModal from './MyModal';
class ListMovies extends Component {
  myModal = (obj) => {
    this.showModal = obj && obj.handleShow;
  };

  showMyModal = (heading, body) => {
    this.showModal(heading, body);
  };

  addToFavorites = async (movie) => {
    const fetchFavorites = await favorites.get('/favorites');
    const imdbAlreadyExists = fetchFavorites.data.some(
      (favorite) => favorite.imdbID === movie.imdbID
    );

    if (imdbAlreadyExists) {
      this.showMyModal('Already Existed!', `${movie.Title} already existed!`);
      return;
    }

    this.props.createMovies({ ...movie });
    this.showMyModal(
      'Added Successfully!',
      `${movie.Title} added successfully!`
    );
  };

  displayListMovies() {
    if (this.props.movies.length === 0) {
      return <div>Your searches will display here...</div>;
    }

    return this.props.movies.map((movie) => {
      return (
        <div
          className="card"
          key={movie.imdbID}
          onClick={() => this.addToFavorites(movie)}
        >
          <div className="card-body">
            <img
              className="card-img-top"
              src={movie.Poster}
              alt={movie.Title}
            />
          </div>
          <h5 className="card-title text-dark">{movie.Title}</h5>
        </div>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <MyModal ref={this.myModal} />;
        <section id="list-movie">
          <div className="bg-dark text-center">
            <div className="container">
              <div className="row">
                <MyModal />
                <div className="card-columns p-2">
                  {this.displayListMovies()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: Object.values(state.searchMovie),
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { listMovies, createMovies })(
  ListMovies
);
