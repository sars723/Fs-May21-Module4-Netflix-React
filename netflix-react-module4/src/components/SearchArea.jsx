import React, { Component } from "react";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import { FaStream, FaThLarge } from "react-icons/fa";

class SearchArea extends Component {
  render() {
    return (
      <Row
        id="search-area"
        className=" mb-4 w-100 justify-content-between align-items-center "
      >
        <Col xm={12} sm={8} md={6} className="d-flex mt-3">
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
        </Col>
        <Col
          xm={12}
          sm={4}
          md={6}
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
    );
  }
}

export default SearchArea;
