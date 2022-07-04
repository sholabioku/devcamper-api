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

            <h4>Filter</h4>
            <Form>
              <Form.Group>
                <Form.Label> Rating</Form.Label>
                <Form.Select className="custom-select mb-2">
                  <option value="any" selected>
                    Any
                  </option>
                  <option value="9">9+</option>
                  <option value="8">8+</option>
                  <option value="7">7+</option>
                  <option value="6">6+</option>
                  <option value="5">5+</option>
                  <option value="4">4+</option>
                  <option value="3">3+</option>
                  <option value="2">2+</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bootcamps;
