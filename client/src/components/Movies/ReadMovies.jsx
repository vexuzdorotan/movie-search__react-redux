import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { readMovies } from '../../actions';

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
        <Link to={`/favorites/read/${movie.id}`} key={movie.id}>
          <div className="card">
            <div className="card-body">
              <img
                className="card-img-top"
                src={movie.Poster}
                alt={movie.Title}
              />
            </div>
            <h5 className="card-title text-dark">{movie.Title}</h5>
          </div>
        </Link>
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

export default connect(mapStateToProps, { readMovies })(ReadMovies);
