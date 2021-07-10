import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { FaStream, FaThLarge } from "react-icons/fa";
import CustomCarousel from "./CustomCarousel";

class SearchArea extends Component {
  /*  state = {
    stateMovies: [],
    marvelMovies: [],
    dcMovies: [],
    starWarsMovies: [],
    searchValue: "",
  }

  fetchMovies = async (search, movieSection, e) => {
    if (e) {
      e.preventDefault()
    }

    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=3d9e8fbe&s=" + search
      )

      const parsedResponse = await response.json()
      const movies = parsedResponse.Search

      if (response.ok) {
        this.setState({ [movieSection]: movies })
      } else {
        console.log("something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }

  updateSearchState = (value) => {
    this.setState({ searchValue: value })
  }

  componentDidMount = () => {
    this.fetchMovies("harry potter", "stateMovies")
    this.fetchMovies("marvel", "marvelMovies")
    this.fetchMovies("justice league", "dcMovies")
    this.fetchMovies("star wars", "starWarsMovies")
  } */

  render() {
    return (
      <Container fluid id="search-area">
        <Row className="pl-2 w-100 justify-content-between align-items-center ">
          <Col xm={12} sm={8} md={6} lg={5} className="d-flex mt-3">
            <h3>Tv Shows</h3>
            <NavDropdown title="Generes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/*  <h3 className="mr-3 text-nowrap">Search</h3>
            <form
              onSubmit={(e) =>
                this.fetchMovies(this.state.searchValue, "stateMovies", e)
              }
              className="d-flex"
            >
              <Form.Control
                className="mr-2"
                type="text"
                placeholder="Search"
                value={this.state.search}
                onChange={(e) => this.updateSearchState(e.currentTarget.value)}
              />
              <Button type="submit" variant="secondary">
                Search
              </Button>
            </form> */}
          </Col>
          <Col
            sm={3}
            md={2}
            id="div-Icons"
            className="col d-none d-sm-flex justify-content-end"
          >
            <div className="d-inline-block">
              <div>
                <FaStream />
              </div>
              <div>
                <FaThLarge />
              </div>
            </div>
          </Col>
        </Row>
        {/* <Row className="mt-4 pl-2" id="searchedMovies">
          <CustomCarousel
            rowTitle="Searched Movies"
            movies={this.state.stateMovies}
            searchQuery={this.state.searchValue}
          />
          <CustomCarousel rowTitle="Marvel" movies={this.state.marvelMovies} />
          <CustomCarousel rowTitle="Dc" movies={this.state.dcMovies} />
          <CustomCarousel
            rowTitle="Star Wars"
            movies={this.state.starWarsMovies}
          />
        </Row> */}
      </Container>
    );
  }
}

export default SearchArea;
