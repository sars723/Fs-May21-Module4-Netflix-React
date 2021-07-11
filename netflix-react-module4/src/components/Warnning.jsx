import React from "react";
import { Alert, Col } from "react-bootstrap";

const Warnning = ({ variant, msg }) => {
  return (
    <Col sm={2} className="my-3">
      <Alert variant={variant}>{msg}</Alert>
    </Col>
  );
};

export default Warnning;
