import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import favorites from '../api/favorites';
import { listMovies, createMovies } from '../actions';
import MyModal from './MyModal';
class ListMovies extends Component {
  componentDidUpdate() {
    this.searchError(this.props.movies.Response);
  }

  myModal = (obj) => {
    this.showModal = obj && obj.handleShow;
  };

  showMyModal = (heading, body) => {
    this.showModal(heading, body);
  };

  addToFavorites = async (movie) => {
    let userId = this.props.auth.userId;
    if (userId === null) {
      userId = 0;
    }

    const fetchFavorites = await favorites.get('/favorites', {
      params: {
        userId: userId,
      },
    });

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

  searchError = (val) => {
    if (val === 'False') {
      this.showMyModal(`Invalid Input`, `${this.props.movies.Error}`);
    }
  };

  listMovies() {
    return this.props.movies.Search.map((movie) => {
      return (
        <div className="col p-2" key={movie.imdbID}>
          <div className="card">
            <div className="card-body">
              <img
                className="card-img-top"
                src={movie.Poster}
                alt={movie.Title}
                title="Add to Favorites"
                onClick={() => this.addToFavorites(movie)}
              />
            </div>
            <h5 className="card-title text-dark">{movie.Title}</h5>
          </div>
        </div>
      );
    });
  }

  displayListMovies() {
    if (!this.props.movies.Search) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    return (
      <div className="row row-cols-1 row-cols-lg-3">{this.listMovies()}</div>
    );
  }

  render() {
    return (
      <Fragment>
        <MyModal ref={this.myModal} />
        <section className="list-movie">
          <div className="bg-dark text-center">
            <div className="container">{this.displayListMovies()}</div>
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
