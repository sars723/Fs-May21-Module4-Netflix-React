import React, { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Warnning from "./Warnning";
import Icon from "react-component-bytesize-icons";

class SingleComment extends Component {
  state = {
    isError: false,
  };

  deleteComment = async () => {
    console.log(this.props.movieAsin);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.comment._id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjU3NjU5MjYsImV4cCI6MTYyNjk3NTUyNn0.mG30nOku9zWiAwzzXDKObPmdvi867vPVrtbkFsstOSs",
          },
        }
      );
      if (response.ok) {
        alert("successfuly deleted");
        this.props.fetchComments();
      } else {
        this.setState({
          isError: true,
        });
        alert("sth wrong");
      }
    } catch (error) {
      this.setState({
        isError: true,
      });
      console.log(error);
    }
  };
  render() {
    return (
      <>
        {this.state.isError && <Warnning variant="danger" msg="error" />}

        <ListGroup variant="flush">
          <ListGroup.Item>
            <div
              className="d-flex justify-content-between mb-3 text-dark"
              style={{ borderBottom: "1px solid black" }}
            >
              <p>{this.props.comment.comment}</p>
              <Button
                className="btn-sm"
                variant="danger"
                onClick={this.deleteComment}
              >
                <Icon name="trash" />
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}
export default SingleComment;
