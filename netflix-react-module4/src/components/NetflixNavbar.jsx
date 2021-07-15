import {
  Container,
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import profilePic from "../assets/profile-pic.jpg";
import { FaSearch, FaBell, FaSortDown } from "react-icons/fa";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class NetflixNavbar extends Component {
  state = {
    query: "",
  };
  handleSearch = (event) => {
    event.preventDefault();
    this.props.searchCallback(this.state.query.toLowerCase());
    console.log(this.state.query.toLowerCase());
  };
  render() {
    return (
      <Navbar
        className="bg-dark-netflix home-navbar mx-3"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <img id="logo-navbar" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto menu">
            <Link
              to="/"
              className={
                this.props.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>

            <Link
              to="/Tv-Shows"
              className={
                this.props.location.pathname === "/Tv-Shows"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Tv Shows
            </Link>
            <Link
              to="/register"
              className={
                this.props.location.pathname === "/register"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Registration
            </Link>
            <Nav.Link href="#features">Movie</Nav.Link>
            <Nav.Link href="#features">Recently Added</Nav.Link>
            <Nav.Link href="#features">My List</Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
              <Button
                id="search-icon"
                variant="outline-success"
                onClick={this.handleSearch}
              >
                <FaSearch />
              </Button>
            </Form>

            <Nav.Link eventKey={2} href="/">
              <FaBell />
            </Nav.Link>
            <Nav.Link
              className="d-flex align-items-center"
              eventKey={3}
              href="/"
            >
              Tigers{" "}
              <img
                className="mx-2"
                id="profile-pic"
                src={profilePic}
                alt="profile-pic"
              />{" "}
              <FaSortDown />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NetflixNavbar);
