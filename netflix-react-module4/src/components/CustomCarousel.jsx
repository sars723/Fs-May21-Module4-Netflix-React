import React, { Component } from "react";
import MyCarouselMovie from "./MyCarouselMovie";
import { Container, Row, Carousel } from "react-bootstrap";

export default class CustomCarousel extends Component {
  state = {
    movies: [],
  };
  fetchMovies = async () => {
    try {
      console.log(this.props.searchQuery);
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=3d9e8fbe&s=" + this.props.searchQuery
      );
      const fetchedMovies = await response.json();
      this.setState({ movies: fetchedMovies.Search });
      console.log(this.props.searchQuery);
      console.log(this.state.movies[0].Title);
    } catch (error) {
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
      <Container fluid className="my-3 px-4">
        <Carousel interval={null}>
          <Carousel.Item>
            <h5 className="mb-2 ">{this.props.title}</h5>
            <Row>
              {this.state.movies &&
                this.state.movies
                  .filter((movie, i) => i < 6)
                  .map((movie, i) => <MyCarouselMovie key={i} movie={movie} />)}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {this.state.movies &&
                this.state.movies
                  .filter((movie, i) => i >= 4 && i < 10)
                  .map((movie, i) => <MyCarouselMovie key={i} movie={movie} />)}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {this.state.movies &&
                this.state.movies
                  .filter((movie, i) => i >= 2 && i < 8)
                  .map((movie, i) => <MyCarouselMovie key={i} movie={movie} />)}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
