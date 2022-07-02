import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import './login.css';

const Login = () => {
  return (
    <div className="login-show">
      <Container>
        <Row>
          <Col md={6} className="m-auto">
            <Card className="bg-white p-4 mb-4">
              <Card.Body>
                <h1>
                  <i class="fas fa-sign-in-alt"></i> Login
                </h1>
                <p>
                  Log in to list your bootcamp or rate, review and favorite
                  bootcamps
                </p>
                <form>
                  <div class="form-group">
                    <label for="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Login"
                      class="btn btn-primary btn-block"
                    />
                  </div>
                </form>
                <p>
                  Forgot Password?
                  <a href="reset-password.html">Reset Password</a>
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
