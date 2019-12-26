import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

class Detail extends Component {
  state = {
    show: false
  };

  showDetail = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const pizza = this.props.pizza || {};
    console.log(pizza);
    return (
      <div>
        {this.props.pizza?(<Modal show={this.state.show} centered={true} size='lg'>
          <Modal.Header>
            <Modal.Title>{pizza.pizza}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Body</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='dark'>Ajouter au panier</Button>
            <Button variant='dark' onClick={this.showDetail}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>):(<br />)}
        <Button onClick={this.showDetail}>TEST</Button>
      </div>
    );
  }
}

export default Detail;
