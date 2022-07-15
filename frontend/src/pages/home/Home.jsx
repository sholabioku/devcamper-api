import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login?redirect=/bootcamps');
  };

  return (
    <div className="showcase">
      <div className="dark-overlay">
        <div className="showcase-content">
          <Container>
            <h1 className="display-4">Find a Code Bootcamp</h1>
            <p className="lead">
              Find, rate and read reviews on coding bootcamps
            </p>
            <Form onSubmit={handleSubmit}>
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
              <div className="d-grid gap-2">
                <Button type="submit">Find Bootcamps</Button>
              </div>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
