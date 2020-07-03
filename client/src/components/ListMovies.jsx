import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import favorites from '../api/favorites';
import { listMovies, createMovies } from '../actions';
import Modal from '../components/Modal';
class ListMovies extends Component {
  addToFavorites = async (movie) => {
    const fetchFavorites = await favorites.get('/favorites');
    const imdbAlreadyExists = fetchFavorites.data.some(
      (favorite) => favorite.imdbID === movie.imdbID
    );

    if (imdbAlreadyExists) {
      // return <Modal />;
      return alert('Movie already added!');
    }

    this.props.createMovies({ ...movie });
  };

  displayListMovies() {
    if (!this.props.movies.Search) {
      return <div className="display-4 text-center">Search Movie...</div>;
    }

    return this.props.movies.Search.map((movie) => {
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
        <section id="list-movie">
          <div className="bg-dark text-center py-5 mt-5">
            <div className="container">
              <div className="row">
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
    movies: state.searchMovie,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { listMovies, createMovies })(
  ListMovies
);
