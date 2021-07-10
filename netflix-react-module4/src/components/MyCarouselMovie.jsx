import React, { Component } from "react";
import { Col } from "react-bootstrap";
/* import CommentArea from "./CommentArea"; */

export default class MyCarouselMovie extends Component {
  /*  state = {
    selected: false,
  }; */
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className=" px-2">
        <img
          className="d-block img-fluid carousel-img my-2 "
          src={this.props.movie.Poster}
          alt={this.props.movie.Title}
          /*  onClick={() => {
            this.setState({ selected: !this.state.selected });
          }} */
        />
        {/*   {this.state.selected&&<CommentArea/>} */}
      </Col>
    );
  }
}
