import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class SingleComment extends Component {
  deleteComment = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.movie.imdbID,
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
        alert("sth wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div
        className="d-flex justify-content-between mb-3"
        style={{ borderBottom: "1px solid black" }}
      >
        {console.log(this.props.comment)}
        <p>{this.props.comment.comment}</p>
        <Button
          className="btn-sm"
          variant="danger"
          onClick={this.deleteComment}
          style={{ margin: "4px" }}
        >
          X
        </Button>
      </div>
    );
  }
}
