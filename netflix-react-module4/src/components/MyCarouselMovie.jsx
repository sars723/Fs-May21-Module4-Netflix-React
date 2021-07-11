import React, { Component } from "react";
import { Col, Button, Modal } from "react-bootstrap";
import SecondComArea from "./SecondComArea";

export default class MyCarouselMovie extends Component {
  state = {
    show: false,
    selected: false,
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className="px-1">
        <img
          className="d-block img-fluid carousel-img my-2 "
          src={this.props.movie.Poster}
          alt={this.props.movie.Title}
          onClick={() => {
            this.handleShow();
            this.setState({ selected: !this.state.selected });
          }}
        />
        {this.state.selected && (
          <SecondComArea
            show={this.state.show}
            handleClose={this.handleClose}
            movie={this.props.movie}
          />
        )}
      </Col>
    );
  }
}
