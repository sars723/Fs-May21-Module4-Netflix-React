import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import RegistrationResult from "./RegistrationResult";

export default class Registration extends Component {
  state = {
    registration: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    errorName: "",
    errorSurname: "",
    errorEmail: "",
    errorPassword: "",
    errorconfirmPassword: "",
    isValid: true,
  };
  handleChange = (key, value) => {
    this.setState(
      {
        registration: {
          ...this.state.registration,
          [key]: value,
        },
      },
      () => {
        console.log(this.state.registration);
      }
    );
  };
  checkNameValidation = () => {
    if (this.state.registration.name.length < 2) {
      this.setState({
        errorName: "name should be at least 2 chars",
        isValid: false,
      });
    } else {
      this.setState({
        errorName: "",
        isValid: true,
      });
    }
  };
  checkSurnameValidation = () => {
    if (this.state.registration.surname.length < 3) {
      this.setState({
        errorSurname: "surname should be at least 3 chars",
        isValid: false,
      });
    } else {
      this.setState({
        errorSurname: "",
        isValid: true,
      });
    }
  };
  checkEmailValidation = () => {
    if (
      !this.state.registration.email.match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      )
    ) {
      this.setState({ errorEmail: "invalid Email address", isValid: false });
    } else {
      this.setState({
        errorEmail: "",
        isValid: true,
      });
    }
  };
  checkPasswordValidation = () => {
    if (
      this.state.registration.password.length > 8 &&
      /\d/.test(this.state.registration.password) &&
      /[a-zA-Z]/.test(this.state.registration.password)
    ) {
      this.setState({
        errorPassword: "",
        isValid: true,
      });
    } else {
      this.setState({ errorPassword: "invalid password", isValid: false });
    }
  };
  checkConfirmPasswordValidation = () => {
    if (
      parseInt(this.state.registration.password) !==
      parseInt(this.state.registration.confirmPassword)
    ) {
      this.setState({
        errorconfirmPassword: "the passwords you entered are not the same",
        isValid: true,
      });
    }
  };
  /* checkFormValidati0n = () => {
    if (this.state.registration.name.length < 2) {
      this.setState({
        errorName: "name should be at least 2 chars",
        isValid: false,
      });

      console.log(this.state.errorName);
    }
    if (this.state.registration.surname.length < 3) {
      this.setState({
        errorSurname: "surname should be at least 3 chars",
        isValid: false,
      });
    }
    if (
      !this.state.registration.email.match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      )
    ) {
      this.setState({ errorEmail: "invalid Email address", isValid: false });
    }
    if (
      this.state.registration.password.length < 8 ||
      !/[a-z]/.test(this.state.registration.password) ||
      !/[A-Z]/.test(this.state.registration.password)
    ) {
      this.setState({ errorPassword: "invalid password", isValid: false });
    }
    if (
      this.state.registration.password !==
      this.state.registration.confirmPassword
    ) {
      this.setState({
        errorconfirmPassword: "the passwords you entered are not the same",
        isValid: false,
      });
    }
    console.log(this.state.registration);
    console.log(this.state.isValid);
  }; */
  /*  componentDidMount = () => {
    this.checkFormValidati0n();
  }; */
  /* componentDidUpdate = (prevState) => {
    if (prevState !== this.state.registration) {
      this.checkFormValidati0n();
    }
  }; */
  handleSubmit = (e) => {
    e.preventDefault();
    /*   this.checkFormValidati0n(); */
    if (this.state.isValid) {
      this.props.getFilledForm(this.state.registration);
      this.props.history.push("/registration-result");
    } else {
      return false;
    }
  };
  render() {
    return (
      <Container id="registration">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2> Form Validation </h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  value={this.state.registration.name}
                  onChange={(e) => {
                    this.handleChange("name", e.target.value);
                    this.checkNameValidation();
                  }}
                />
                <div style={{ color: "red" }}>{this.state.errorName}</div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your Surname"
                  value={this.state.registration.surname}
                  onChange={(e) => {
                    this.handleChange("surname", e.target.value);
                    this.checkSurnameValidation();
                  }}
                />
                <div style={{ color: "red" }}>{this.state.errorSurname}</div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your Email"
                  value={this.state.registration.email}
                  onChange={(e) => {
                    this.handleChange("email", e.target.value);
                    this.checkEmailValidation();
                  }}
                />
                <div style={{ color: "red" }}>{this.state.errorEmail}</div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter your password"
                  value={this.state.registration.password}
                  onChange={(e) => {
                    this.handleChange("password", e.target.value);
                    this.checkPasswordValidation();
                  }}
                />
                <div style={{ color: "red" }}>{this.state.errorPassword}</div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="confirm your password"
                  value={this.state.registration.confirmPassword}
                  onChange={(e) => {
                    this.handleChange("confirmPassword", e.target.value);
                    this.checkConfirmPasswordValidation();
                  }}
                />
                <div style={{ color: "red" }}>
                  {this.state.errorconfirmPassword}
                </div>
              </Form.Group>
              <Button variant="success" className="btn-sm" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
