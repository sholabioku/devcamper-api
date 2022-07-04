import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  return (
    <div className="register-show">
      <Container>
        <Row>
          <Col md={6} className="m-auto">
            <Card className="p-4 mb-4">
              <Card.Body>
                <h1>
                  <i class="fas fa-user-plus"></i> Register
                </h1>
                <p>
                  Register to list your bootcamp or rate, review and favorite
                  bootcamps
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter full name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="password2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password2"
                      placeholder="Confirm password"
                      required
                    />
                  </Form.Group>

                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title>User Role</Card.Title>
                      <Form.Check
                        type="radio"
                        name="role"
                        value="user"
                        checked
                        label="Regular User (Browse, Write reviews, etc)"
                      />
                      <Form.Check
                        type="radio"
                        name="role"
                        value="publisher"
                        label="Bootcamp Publisher"
                      />
                    </Card.Body>
                  </Card>
                  <p className="text-danger">
                    * You must be affiliated with the bootcamp in some way in
                    order to add it to DevCamper.
                  </p>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="submit"
                      value="Register"
                      className="btn btn-primary btn-block"
                    />
                  </Form.Group>
                </Form>
                <p className="mb-3">
                  Already have an account?{' '}
                  <Link style={{ textDecoration: 'none' }} to={`/login`}>
                    Sign-In
                  </Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
