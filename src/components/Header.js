import React from "react";
import PropTypes from "prop-types";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Nav, Container, Row, Col } from "react-bootstrap";

const Header = props => {
  const { branding } = props;
  return (
    <Nav className="navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      {/* <div className="container"> */}
      <Container>
        <Row>
          <Col>
            <a href="/" className="navbar-brand">
              {branding}
            </a>
          </Col>
          {/* <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
					</ul> */}
          <Col>
            <Nav className="justify-content-end" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        {/* </div> */}
      </Container>
    </Nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
