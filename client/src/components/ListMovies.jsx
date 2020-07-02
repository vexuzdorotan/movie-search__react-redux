import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { listMovies } from '../actions/index';
class ListMovies extends Component {
  componentDidMount() {
    console.log(this.props.movies);
  }

  displayListMovies() {
    if (!this.props.movies.Search) {
      return <div className="display-4 text-center">Search Movie...</div>;
    }

    return this.props.movies.Search.map((movie) => {
      return (
        <div className="card" key={movie.imdbID}>
          <div className="card-body">
            <img
              className="card-img-top"
              src={movie.Poster}
              alt={movie.Title}
            />
            {/* <h5 className="card-title text-dark">{movie.Title}</h5> */}
          </div>
          <h5 className="card-title text-dark">{movie.Title}</h5>
        </div>
      );
    });
  }

  render() {
    return (
      <Fragment>
        {console.log(this.props.movies.Search)}
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
    movies: state.movie,
  };
};

export default connect(mapStateToProps, { listMovies })(ListMovies);
