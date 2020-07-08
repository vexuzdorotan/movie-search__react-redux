import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import favorites from '../api/favorites';
import { listMovies, createMovies } from '../actions';
import Modal from '../components/Modal';
class ListMovies extends Component {
  // constructor(props) {
  //   super(props);

  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  // }

  addToFavorites = async (movie) => {
    const fetchFavorites = await favorites.get('/favorites');
    const imdbAlreadyExists = fetchFavorites.data.some(
      (favorite) => favorite.imdbID === movie.imdbID
    );

    if (imdbAlreadyExists) {
      console.log('Movie already added!');
      return <Modal />;
      // return alert('Movie already added!');
    }

    this.props.createMovies({ ...movie });
  };

  // modal() {
  //   <>
  //     <Button variant="primary" onClick={handleShow}>
  //       Launch demo modal
  //     </Button>

  //     <Modal show={show} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Modal heading</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={this.handleClose}>
  //           Close
  //         </Button>
  //         <Button variant="primary" onClick={this.handleClose}>
  //           Save Changes
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   </>;
  // }

  displayListMovies() {
    if (this.props.movies.length === 0) {
      return;
      // return <div className="display-4 text-center">Search Movie...</div>;
    }

    return this.props.movies.map((movie) => {
      return (
        <div
          className="card"
          key={movie.imdbID}
          onClick={() => this.addToFavorites(movie)}
        >
          <div className="card-body">
            <img
              className="card-img-top"
              src={movie.Poster}
              alt={movie.Title}
            />
          </div>
          <h5 className="card-title text-dark">{movie.Title}</h5>
        </div>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <section id="list-movie">
          <div className="bg-dark text-center py-5">
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
    movies: Object.values(state.searchMovie),
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { listMovies, createMovies })(
  ListMovies
);
