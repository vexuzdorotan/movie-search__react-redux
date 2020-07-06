import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { readMovies, readMovie } from '../../actions';

class ReadMovie extends Component {
  componentDidMount() {
    // this.props.readMovies();
    const { id } = this.props.match.params;
    this.props.readMovie(id);
  }

  renderList() {
    if (!this.props.movie) {
      return console.log('Loading');
    }

    return (
      <Fragment>
        <section id="list-movie">
          <div className="bg-dark text-center py-5 mt-5">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col-auto col-lg-6 mx-auto">
                      <img
                        src={this.props.movie.Poster}
                        className="card-img-top"
                        alt={this.props.movie.Title}
                      />
                    </div>
                    <div className="col-lg-6 p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 text-primary">
                        {this.props.movie.Type.toUpperCase()}
                      </strong>
                      <h3 className="mb-0">{this.props.movie.Title}</h3>
                      <div className="mb-1 text-muted">
                        {this.props.movie.Year}
                      </div>
                      <p className="card-text mb-auto">
                        {this.props.movie.reaction
                          ? this.props.movie.reaction
                          : '*No reaction essay yet. Please add.*'}
                      </p>
                      {/* <a href="#" className="stretched-link">
                        Continue reading
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }

  render() {
    return <Fragment>{this.renderList()}</Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.favoriteMovie[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { readMovie })(ReadMovie);
