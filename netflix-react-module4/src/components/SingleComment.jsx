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
            Autorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjU5ODIxMTYsImV4cCI6MTYyNzE5MTcxNn0.8MvrleUyNnGi8PZcgSUn0YgXUikYnYef9LtyALWyUq4",
          },
        }
      );
      if (response.ok) {
        alert("successfuly deleted");
      } else {
        alert("sth wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="d-flex justify-content-between">
        <p>{this.props.comment.comment}</p>
        <Button variant="danger" onClick={this.deleteComment}>
          X
        </Button>
      </div>
    );
  }
}
