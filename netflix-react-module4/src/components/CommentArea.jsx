import React, { Component } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";
import Warnning from "./Warnning";
import Loader from "./Loader";
import { withRouter } from "react-router-dom";
class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };
  fetchComments = async () => {
    console.log(this.props.match.params.id);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          /* this.props.movie.imdbID */ this.props.match.params.id,
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
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchComments();
    }

    console.log("componentDidUpdate");
  };
  render() {
    return (
      <Container id="comment-area">
        <h3 className="text-center my-5">Comment Area</h3>
        <Row className="justify-content-center">
          <Col className="col-3">
            {this.state.isLoading && <Loader />}
            {this.state.isError && <Warnning variant="danger" msg="error" />}
            <h6>Comments</h6>
            {this.state.comments &&
              this.state.comments.map((comment) => (
                <SingleComment
                  comment={comment}
                  movieAsin={this.props.match.params.id}
                  fetchComments={this.fetchComments}
                />
              ))}
          </Col>
          <Col className="col-4 d-flex justify-content-end">
            <AddComment
              movieAsin={this.props.match.params.id}
              fetchComments={this.fetchComments}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CommentArea;
