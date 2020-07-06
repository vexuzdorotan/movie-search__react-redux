import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { readMovies, deleteMovie } from '../../actions';

class ReadMovies extends Component {
  componentDidMount() {
    this.props.readMovies();
  }

  displayListMovies() {
    if (Object.entries(this.props.movies).length === 0) {
      return <div className="display-4 text-center">Loading...</div>;
    }

    return this.props.movies.map((movie) => {
      return (
        <div className="card" key={movie.id}>
          <div className="card-body">
            <Link to={`/favorites/read/${movie.id}`}>
              <img
                className="card-img-top"
                src={movie.Poster}
                alt={movie.Title}
              />
            </Link>
          </div>
          <h5 className="card-title text-dark">{movie.Title}</h5>
          <Link
            to={`/favorites/edit/${movie.id}`}
            className="btn btn-sm btn-warning mx-3 mb-3"
          >
            Edit
          </Link>
          <button
            onClick={() => this.props.deleteMovie(movie.id)}
            className="btn btn-sm btn-danger mx-3 mb-3"
            style={{ zIndex: 5 }}
          >
            Delete
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <section id="read-movies">
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
    movies: Object.values(state.favoriteMovie),
  };
};

export default connect(mapStateToProps, { readMovies, deleteMovie })(
  ReadMovies
);
