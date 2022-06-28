import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <i className="fas fa-laptop-code" /> DevCamper
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto w-100 justify-content-end">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <i className="fas fa-user-plus"></i> Register
                </Link>
              </li>
              <li className="nav-item d-none d-sm-block">
                <Link className="nav-link" to="#">
                  |
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bootcamps">
                  Browse Bootcamps
                </Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
