import React, { Component } from 'react';
import { connect } from 'react-redux';

import { jumbotron } from '../actions';

class Jumbotron extends Component {
  componentDidMount() {
    this.props.jumbotron(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.jumbotron(this.props.location.pathname);
      console.log(this.props);
    }
  }

  render() {
    return (
      <div className="jumbotron text-light bg-dark m-0 mt-5">
        <h1 className="display-4">{this.props.jumbotronState.display}</h1>
        <p className="lead">{this.props.jumbotronState.lead}</p>
        <hr className="my-4 bg-light" />
        <p>{this.props.jumbotronState.paragraph}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jumbotronState: state.jumbotron,
  };
};

export default connect(mapStateToProps, { jumbotron })(Jumbotron);
