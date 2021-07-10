import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Loading from "./Loading"

import React, { Component } from "react"

class CommentArea extends Component {
  state = {
    postComment: {
      comment: "",
      rate: "",
      elementId: "",
    },

    allComments: [],

    loading: false,
  }

  /* component did mount */
  componentDidMount = () => {
    this.fetchComments()
  }

  /* isLoading function */
  isLoading = (loading) => {
    this.setState({ loading: loading })
  }

  /*fetch comments */
  fetchComments = async () => {
    try {
      this.isLoading(true)
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjUwNTUzOTEsImV4cCI6MTYyNjI2NDk5MX0.4rreCWruc8iinYHIIdhbPTQo52bs9c82UeMWN-fKg0o",
          },
        }
      )

      const fetchedComments = await response.json()

      if (response.ok) {
        this.setState({ allComments: fetchedComments })
        this.isLoading(false)
      } else {
        console.log("there was an error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  /* Function to handle the submit */

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.postComment),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjUwNTUzOTEsImV4cCI6MTYyNjI2NDk5MX0.4rreCWruc8iinYHIIdhbPTQo52bs9c82UeMWN-fKg0o",

            "Content-Type": "application/json",
          },
        }
      )

      if (response.ok) {
        alert("Post done with success")
        this.fetchComments()
      } else {
        console.log("There was an error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  /*Function to delete comment from the api */
  deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjUwNTUzOTEsImV4cCI6MTYyNjI2NDk5MX0.4rreCWruc8iinYHIIdhbPTQo52bs9c82UeMWN-fKg0o",
          },
        }
      )
      if (response.ok) {
        alert("The comment was deleted with success")
        this.fetchComments()
      } else {
        console.log("There was an error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  /* function to handle the state */
  handleStateComment = (commentRate, value, id) => {
    this.setState({
      postComment: {
        ...this.state.postComment,
        [commentRate]: value,
        elementId: id,
      },
    })
  }

  render() {
    return (
      <div className="comment-area d-flex flex-column align-items-center p-4 position-absolute">
        <div className="align-self-end text-danger">
          <i className="bi bi-x-circle-fill"></i>
        </div>
        <div className="comment-img-div mt-3">
          <img
            className="img-fluid"
            src={this.props.book.img}
            alt={this.props.book.title + "cover picture"}
          />
        </div>
        <div>
          <h4 className="my-4">{this.props.book.title}</h4>

          <form onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Control
              onChange={(e) =>
                this.handleStateComment(
                  "comment",
                  e.currentTarget.value,
                  this.props.book.asin
                )
              }
              as="textarea"
              rows={3}
              placeholder="Add a comment!"
              value={this.state.postComment.comment}
            />
            <Form.Control
              onChange={(e) =>
                this.handleStateComment(
                  "rate",
                  e.currentTarget.value,
                  this.props.book.asin
                )
              }
              className="my-2"
              type="number"
              placeholder="1 to 5 rate the book!"
              value={this.state.postComment.rate}
            />
            <Button className="my-2" variant="success" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <div className="w-100">
          {this.state.Loading ? (
            <Loading />
          ) : (
            this.state.allComments
              .filter((comment) => comment.elementId === this.props.book.asin)
              .map((comment) => (
                <div className="border rounded p-3 mt-4" key={comment._id}>
                  <p>
                    <strong>Comment: </strong>
                    {comment.comment}
                  </p>
                  <p>
                    <strong>Rate: </strong>
                    {comment.rate}
                  </p>
                  <Button
                    onClick={() => this.deleteComment(comment._id)}
                    variant="danger"
                  >
                    <i className="bi bi-trash-fill"></i>
                  </Button>
                </div>
              ))
          )}
        </div>
      </div>
    )
  }
}

export default CommentArea