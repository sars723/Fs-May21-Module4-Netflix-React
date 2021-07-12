import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";
import Warnning from "./Warnning";
import Loader from "./Loader";
export default class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };
  fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.movie.imdbID,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjU5ODIxMTYsImV4cCI6MTYyNzE5MTcxNn0.8MvrleUyNnGi8PZcgSUn0YgXUikYnYef9LtyALWyUq4",
          },
        }
      );
      if (response.ok) {
        const fetchedComments = await response.json();
        console.log(fetchedComments);
        this.setState({ comments: fetchedComments, isLoading: false });
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
      });
      console.log(error);
    }
  };
  componentDidMount = () => {
    this.fetchComments();
    console.log("componentDidMount");
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.movie.imdbID !== this.props.movie.imdbID) {
      this.fetchComments();
    }

    console.log("componentDidUpdate");
  };
  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}
        {this.state.isError && <Warnning variant="danger" msg="error" />}
        <Modal
          show={this.props.show}
          onHide={this.props.handleClose}
          className="text-dark"
        >
          <Modal.Header closeButton>
            <Modal.Title>Comments</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-dark">
            {this.state.comments &&
              this.state.comments.map((comment) => (
                <SingleComment
                  comment={comment}
                  movie={this.props.movie}
                  fetchComments={this.fetchComments}
                />
              ))}
            <AddComment
              movie={this.props.movie}
              fetchComments={this.fetchComments}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
