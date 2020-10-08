import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import MyModal from '../MyModal';
import { readMovies, deleteMovie } from '../../actions';

class ReadMovies extends Component {
  myModal = (obj) => {
    this.showModal = obj && obj.handleShow;
  };

  showMyModal = (heading, body) => {
    this.showModal(heading, body);
  };

  listMovies() {
    return this.props.movies.map((movie) => {
      return (
        <div className="col px-0" key={movie._id}>
          <div className="card m-2">
            <div className="card-body">
              <Link to={`/favorites/read/${movie._id}`}>
                <img
                  className="card-img-top"
                  src={movie.Poster}
                  alt={movie.Title}
                  // style={{ maxHeight: '400px' }}
                />
              </Link>
            </div>
            <h5 className="card-title text-dark">{movie.Title}</h5>
            <div className="d-flex justify-content-center">
              <Link
                to={`/favorites/update/${movie._id}`}
                // className="btn btn-sm btn-warning mx-3 mb-3"
                className={
                  movie.reaction === ''
                    ? 'btn btn-sm btn-success mx-3 mb-3'
                    : 'btn btn-sm btn-warning mx-3 mb-3'
                }
              >
                <span>{movie.reaction === '' ? 'Add' : 'Edit'} Reaction</span>
              </Link>
              <button
                onClick={() => {
                  this.props.deleteMovie(movie._id);
                  this.showMyModal(
                    'Deleted Successfully!',
                    `${movie.Title} deleted successfully!`
                  );
                }}
                className="btn btn-sm btn-danger mx-3 mb-3"
                style={{ zIndex: 5 }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  displayListMovies() {
    if (Object.entries(this.props.movies).length === 0) {
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
        <section id="read-movies">
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
    movies: Object.values(state.favoriteMovie),
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { readMovies, deleteMovie })(
  ReadMovies
);
