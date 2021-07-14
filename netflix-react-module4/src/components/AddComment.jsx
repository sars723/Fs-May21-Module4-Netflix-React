import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import Warnning from "./Warnning";

export default class AddComment extends Component {
  state = {
    comments: {
      comment: "",
      rate: 1,
      elementId: this.props.movieAsin,
    },
    isLoading: true,
    isError: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.comments);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comments),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjU5ODIxMTYsImV4cCI6MTYyNzE5MTcxNn0.8MvrleUyNnGi8PZcgSUn0YgXUikYnYef9LtyALWyUq4",
          },
        }
      );
      if (response.ok) {
        alert("successful");
        this.props.fetchComments();

        console.log(response);
      } else {
        this.setState({ isError: true });
        alert("sth wrong");
      }
    } catch (error) {
      this.setState({ isError: true });
      console.log(error);
    }
  };
  handleChange = (key, vlaue) => {
    this.setState({
      comments: { ...this.state.comments, [key]: vlaue },
    });
  };
  render() {
    return (
      <>
        {this.state.isError && <Warnning variant="danger" msg="Error" />}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Enter Your Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={this.state.comments.comment}
              onChange={(e) => {
                this.handleChange("comment", e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>rate</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comments.rate}
              onChange={(e) => {
                this.handleChange("rate", e.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Movie Id</Form.Label>
            <Form.Control
              type="text"
              value={this.state.comments.elementId}
              disabled
              /*   placeholder="Enter movie id"
             value={this.state.comments.elementId}
              onChange={(e) => {
                this.handleChange("elementId", e.target.value);
              }} */
            />
          </Form.Group>
          <Button variant="success" className="btn-sm" type="submit">
            submit
          </Button>
        </Form>
      </>
    );
  }
}
