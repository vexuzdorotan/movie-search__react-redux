import React from 'react';

import { Modal, Button } from 'react-bootstrap';

import './MyModal.css';

class MyModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      heading: '',
      body: '',
    };
  }

  handleShow(heading, body) {
    this.setState({ show: true, heading, body });
  }
  handleClose() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className="my-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>{this.state.body}</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MyModal;
