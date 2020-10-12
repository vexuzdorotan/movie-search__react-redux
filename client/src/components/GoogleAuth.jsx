import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, readMovies } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.gapi.load('client:auth2', () => {
        window.gapi.client
          .init({
            clientId: process.env.REACT_APP_CLIENT_ID,
            scope: 'email',
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
    }, 500);
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      this.props.onSetProfile(
        this.auth.currentUser.get().getBasicProfile().getName()
      );
    } else {
      this.props.signOut();
      this.props.onSetProfile('Public Guest');
    }
    this.props.readMovies();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return (
        <button className="btn btn-outline-warning mr-2 my-2 my-sm-0">
          <i className="google icon"></i>
          Loading User
        </button>
      );
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="btn btn-outline-danger mr-2 my-2 my-sm-0"
          data-toggle="collapse" data-target=".navbar-collapse.show"
        >
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignInClick}
          className="btn btn-outline-success mr-2 my-2 my-sm-0"
        >
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut, readMovies })(
  GoogleAuth
);
