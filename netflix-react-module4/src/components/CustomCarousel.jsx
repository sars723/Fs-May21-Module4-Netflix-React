import React, { Component } from "react";
import MyCarouselMovie from "./MyCarouselMovie";
import { Row, Carousel } from "react-bootstrap";
import Warnning from "./Warnning";
import Loader from "./Loader";

export default class CustomCarousel extends Component {
  state = {
    movies: [],

    isLoading: true,
    isError: false,
  };
  fetchMovies = async () => {
    try {
      console.log(this.props.searchQuery);
      const response = await fetch(
        /* "http://www.omdbapi.com/?apikey=3d9e8fbe&s=" + this.props.searchQuery */
        `${process.env.REACT_APP_BE_PROD_URL}/media?s=${this.props.searchQuery}`
        /*  process.env.REACT_APP_BE_PROD_URL + this.props.searchQuery */
      );
      const fetchedMovies = await response.json();
      this.setState({ movies: fetchedMovies });
      console.log(this.props.searchQuery);
      console.log(this.state.movies[0].Title);
      if (response.ok) {
        this.setState({ isLoading: false });
      } else {
        this.setState({ isLoading: false, isError: true });
        alert("sth wrong");
      }
    } catch (error) {
      this.setState({ isLoading: false, isError: true });
      console.log(error);
    }
  };
  componentDidMount = () => {
    this.fetchMovies();
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.fetchMovies();
    }
  }

  render() {
    return (
      <>
        {" "}
        {this.state.isLoading && <Loader />}
        {this.state.isError && <Warnning variant="danger" msg="error" />}
        <h5 className="mb-1 mt-3 ">{this.props.title}</h5>
        {!this.state.movies ? (
          <Warnning variant="danger" msg="movie not found" />
        ) : (
          <Carousel interval={null}>
            <Carousel.Item>
              <Row>
                {this.state.movies &&
                  this.state.movies
                    .filter((movie, i) => i < 6)
                    .map((movie, i) => (
                      <MyCarouselMovie key={i} movie={movie} />
                    ))}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                {this.state.movies &&
                  this.state.movies
                    .filter((movie, i) => i >= 4 && i < 10)
                    .map((movie, i) => (
                      <MyCarouselMovie key={i} movie={movie} />
                    ))}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                {this.state.movies &&
                  this.state.movies
                    .filter((movie, i) => i >= 2 && i < 8)
                    .map((movie, i) => (
                      <MyCarouselMovie key={i} movie={movie} />
                    ))}
              </Row>
            </Carousel.Item>
          </Carousel>
        )}
      </>
    );
  }
}
