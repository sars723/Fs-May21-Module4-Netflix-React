import { ListGroup } from "react-bootstrap";
const RegistrationResult = ({ filedForm }) => {
  return (
    <div
      id="registration-result"
      className="d-flex justify-content-center align-items-center text-dark py-5"
    >
      <ListGroup>
        <ListGroup.Item className="bg-danger ">
          <h4> Registration Form Result</h4>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Name:</strong>
          {filedForm.name}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Surname:</strong>
          {filedForm.surname}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Email:</strong>
          {filedForm.email}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <strong>Password:</strong>
          {filedForm.password}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
export default RegistrationResult;
