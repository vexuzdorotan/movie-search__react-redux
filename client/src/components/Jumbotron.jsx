import React, { Component } from 'react';
import { connect } from 'react-redux';
import pluralize from 'pluralize';

import { jumbotron } from '../actions';

class Jumbotron extends Component {
  componentDidMount() {
    this.props.jumbotron(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.jumbotron(this.props.location.pathname);
    }
  }

  render() {
    return (
      <div className="jumbotron text-light bg-dark m-0 mt-5 pb-2">
        <h1 className="display-4 text-warning">
          You have {this.props.favoriteLength}{' '}
          {pluralize('favorite', this.props.favoriteLength)}
          {this.props.jumbotronState.display}
        </h1>
        <p className="lead">{this.props.jumbotronState.lead}</p>
        <hr className="my-4 bg-light" />
        <p className="text-muted">{this.props.jumbotronState.paragraph}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jumbotronState: state.jumbotron,
    favoriteLength: Object.keys(state.favoriteMovie).length,
  };
};

export default connect(mapStateToProps, { jumbotron })(Jumbotron);
