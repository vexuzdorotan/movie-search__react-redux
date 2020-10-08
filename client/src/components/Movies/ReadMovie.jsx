import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { readMovie } from '../../actions';

class ReadMovie extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.readMovie(id);
  }

  renderList() {
    if (!this.props.movie) {
      return console.log('Loading');
    }

    return (
      <Fragment>
        <section className="list-movie">
          <div className="bg-dark text-center py-5">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="row no-gutters overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col-auto col-lg-6 mx-auto">
                      <img
                        src={this.props.movie.Poster}
                        className="card-img-top"
                        alt={this.props.movie.Title}
                      />
                    </div>
                    <div className="col-lg-6 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 text-primary">
                        {this.props.movie.Type.toUpperCase()}
                      </strong>
                      <h3 className="mb-0">{this.props.movie.Title}</h3>
                      <div className="mb-1 text-muted">
                        {this.props.movie.Year}
                      </div>
                      <p className="card-text font-italic">
                        {this.props.movie.reaction
                          ? this.props.movie.reaction
                          : '*No reaction essay yet. Please add.*'}
                      </p>
                      <Link
                        to={`/favorites/update/${this.props.movie._id}`}
                        // className="btn btn-sm btn-warning mx-3 mb-3"
                        className={
                          this.props.movie.reaction === ''
                            ? 'btn btn-sm btn-success w-50 mx-auto mx-3'
                            : 'btn btn-sm btn-warning w-50 mx-auto mx-3'
                        }
                      >
                        <span>
                          {this.props.movie.reaction === '' ? 'Add' : 'Edit'}{' '}
                          Reaction
                        </span>
                      </Link>
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
