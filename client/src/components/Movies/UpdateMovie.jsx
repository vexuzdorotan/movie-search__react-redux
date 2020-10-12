import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

import { readMovie, updateMovie } from '../../actions';

class UpdateMovie extends Component {
  componentDidMount() {
    this.props.readMovie(this.props.match.params.id);
  }

  onFormSubmit = (formValues) => {
    this.props.updateMovie(this.props.match.params.id, formValues);
  };

  renderList() {
    if (!this.props.movie) {
      return;
    }

    return (
      <Fragment>
        <section className="list-movie">
          <div className="bg-dark text-center py-5">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                      <h3 className="mb-0">{this.props.movie.Title}</h3>
                      <div className="mb-1 text-muted">
                        {this.props.movie.Year}
                      </div>
                      <form
                        onSubmit={this.props.handleSubmit(this.onFormSubmit)}
                      >
                        <div>
                          <label>Enter your reaction:</label>
                          <Field
                            className="form-control mr-sm-2 mb-2"
                            name="reaction"
                            component="textarea"
                            rows="10"
                          />
                        </div>

                        <button
                          className="btn btn-success my-2 my-sm-0"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
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
    initialValues: _.pick(
      state.favoriteMovie[ownProps.match.params.id],
      'reaction'
    ),
  };
};

const formWrapped = reduxForm({
  form: 'updateMovie',
  enableReinitialize: true,
})(UpdateMovie);

export default connect(mapStateToProps, { readMovie, updateMovie })(
  formWrapped
);
