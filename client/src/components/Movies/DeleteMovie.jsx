import React, { Component, Fragment } from 'react';

import Modal from '../Modal';

class DeleteMovie extends Component {
  render() {
    return (
      <Fragment>
        <section id="list-movie">
          <div className="bg-dark text-center py-5 mt-5">
            <div className="container">
              <div className="row">
                <Modal />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default DeleteMovie;
