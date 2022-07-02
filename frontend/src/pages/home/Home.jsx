import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

import './home.css';

const Home = () => {
  return (
    <div className="showcase">
      <div className="dark-overlay">
        <div className="showcase-content">
          <Container>
            <h1 className="display-4">Find a Code Bootcamp</h1>
            <p className="lead">
              Find, rate and read reviews on coding bootcamps
            </p>
            <Form action="bootcamps.html">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="miles">
                    <Form.Control
                      type="text"
                      name="miles"
                      placeholder="Miles From"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="zipcode">
                    <Form.Control
                      type="text"
                      name="zipcode"
                      placeholder="Enter Zipcode"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Control
                type="submit"
                value="Find Bootcamps"
                className="btn btn-primary btn-block"
              />
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
