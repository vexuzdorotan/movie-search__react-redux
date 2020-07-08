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

  displayListMovies() {
    if (Object.entries(this.props.movies).length === 0) {
      return <div>Your favorites will display here...</div>;
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
            to={`/favorites/update/${movie.id}`}
            className="btn btn-sm btn-warning mx-3 mb-3"
          >
            Edit
          </Link>
          <button
            onClick={() => {
              this.props.deleteMovie(movie.id);
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
      );
    });
  }

  render() {
    return (
      <Fragment>
        <MyModal ref={this.myModal} />
        <section id="read-movies">
          <div className="bg-dark text-center">
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
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { readMovies, deleteMovie })(
  ReadMovies
);
