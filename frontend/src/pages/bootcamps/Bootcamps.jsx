import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import './bootcamps.css';

const Bootcamps = () => {
  return (
    <div className="bootcamps-show">
      <Container>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <h4 className="mb-3">By Location</h4>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="miles">
                        <Form.Control
                          type="text"
                          name="miles"
                          placeholder="Miles From"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="zipcode">
                        <Form.Control
                          type="text"
                          name="zipcode"
                          placeholder="Enter Zipcode"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mt-3">
                    <Form.Control
                      type="submit"
                      value="Find Bootcamps"
                      className="btn btn-primary btn-block"
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bootcamps;
