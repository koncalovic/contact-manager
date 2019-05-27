import React from "react";
import PropTypes from "prop-types";
import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";

const Header = props => {
  const { branding } = props;
  return (
    <Navbar className="navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <Container>
        <NavbarBrand href="/">{branding}</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink href="/">
              <i className="fas fa-home" /> Home
            </NavLink>
            <NavLink href="/contact/add">
              <i className="fas fa-plus" /> Add
            </NavLink>
            <NavLink href="/about">
              <i className="fas fa-question" /> About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
