import React from 'react';
import { Badge, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Pagination from '../../components/Pagination';
import data from '../../data';
import './bootcamps.css';

const Bootcamps = () => {
  return (
    <div className="bootcamps-show">
      <Container>
        <Row>
          {/* Side Col */}
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
                <Form.Select
                  aria-label="Default select example"
                  className="custom-select mb-2"
                >
                  <option>Any</option>
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

              {/* Budget */}
              <Form.Group className="mb-3">
                <Form.Label> Budget</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="mb-2"
                >
                  <option>Any</option>
                  <option value="20000">$20,000</option>
                  <option value="15000">$15,000</option>
                  <option value="10000">$10,000</option>
                  <option value="8000">$8,000</option>
                  <option value="6000">$6,000</option>
                  <option value="4000">$4,000</option>
                  <option value="2000">$2,000</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="submit"
                  value="Find Bootcamps"
                  className="btn btn-primary btn-block"
                />
              </Form.Group>
            </Form>
          </Col>
          {/* Main Col */}
          <Col md={8}>
            {data.bootcamps.map((bootcamp) => (
              <Card className="mb-3" key={bootcamp._id}>
                <Row className="no-gutters">
                  <Col md={4}>
                    <img
                      src={bootcamp.image}
                      className="card-img"
                      alt={bootcamp.name}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>
                        <Link
                          style={{ textDecoration: 'none' }}
                          to={`/bootcamps/${bootcamp._id}`}
                        >
                          {bootcamp.name}
                          <Badge bg="success" className="float-end">
                            {bootcamp.rating}
                          </Badge>
                        </Link>
                      </Card.Title>
                      <Badge className="mb-2" bg="dark">
                        {bootcamp.city}
                      </Badge>
                      <Card.Text>{bootcamp.careers}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
            <Pagination />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bootcamps;
