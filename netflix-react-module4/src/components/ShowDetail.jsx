import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Badge, ListGroup } from "react-bootstrap";

const ShowDetail = ({ history, match }) => {
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=3d9e8fbe&i=" + match.params.id
      );
      if (response.ok) {
        const fetchedMovie = await response.json();
        setMovie(fetchedMovie);
        console.log(fetchedMovie);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <Container id="ShowDetail-container">
      <Row className="justify-content-center my-5">
        {movie && (
          <>
            <Col className="d-flex col-4  ">
              <div>
                <h4>{movie.Title}</h4>
                {movie && (
                  <img
                    onClick={() => history.push("/comments/" + movie.imdbID)}
                    src={movie.Poster}
                    className="img-fluid mt-2"
                    alt=" "
                  />
                )}
              </div>
            </Col>
            <Col className="d-flex col-6 flex-column justify-content-end">
              {/* <Row className=""> */}
              <div>
                <h6>{movie.Year}</h6>
                <p style={{ color: "red" }}>
                  {movie.Genre}/{movie.Country}/{movie.Language}/{movie.Runtime}
                </p>
                <Badge variant="warning">IMDb</Badge>
                <Badge
                  variant="warning"
                  style={{ marginLeft: "5px", marginBottom: "20px" }}
                >
                  {movie.imdbRating}
                </Badge>
                <h6>Plot</h6>
                <p>{movie.Plot}</p>
              </div>
              <div>
                <ListGroup style={{ backgroundColor: " #141414" }}>
                  <ListGroup.Item className="bg-warning text-dark d-flex justify-content-between">
                    <strong className="text-primary">Crew</strong>
                  </ListGroup.Item>

                  <ListGroup.Item className=" text-dark d-flex justify-content-between">
                    <strong>Director</strong> <span>{movie.Director}</span>
                  </ListGroup.Item>

                  <ListGroup.Item className=" text-dark d-flex justify-content-between">
                    <strong>Writer</strong> <span>{movie.Writer}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className=" text-dark d-flex justify-content-between">
                    <strong>Actors</strong> <span>{movie.Actors}</span>
                  </ListGroup.Item>
                </ListGroup>
              </div>
              {/*  </Row> */}
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default ShowDetail;
