import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './login.css';

const Login = () => {
  return (
    <div className="login-show">
      <Container>
        <Row>
          <Col md={6} className="m-auto">
            <Card className="p-4 mb-4">
              <Card.Body>
                <h1>
                  <i className="fas fa-sign-in-alt"></i> Login
                </h1>
                <p>
                  Log in to list your bootcamp or rate, review and favorite
                  bootcamps
                </p>
                <Form>
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
                  <div className="d-grid gap-2 mb-3">
                    <Button type="submit">Login</Button>
                  </div>
                </Form>
                <p>
                  Forgot Password?{' '}
                  <Link style={{ textDecoration: 'none' }} to="/reset-password">
                    Reset Password
                  </Link>
                </p>
                <p className="mb-3">
                  New Customer?{' '}
                  <Link style={{ textDecoration: 'none' }} to={`/register`}>
                    Create your account
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

export default Login;
