import React from 'react';
import {
  Badge,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Pagination,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image_1 from '../../assets/img/image_1.jpg';
import image_2 from '../../assets/img/image_2.jpg';
import image_3 from '../../assets/img/image_3.jpg';
import image_4 from '../../assets/img/image_4.jpg';
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

              {/* Budget */}
              <Form.Group className="mb-3">
                <Form.Label> Budget</Form.Label>
                <Form.Select className="mb-2">
                  <option value="any" selected>
                    Any
                  </option>
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
            {/* Bootcamps */}
            <Card className="mb-3">
              <Row className="no-gutters">
                <Col md={4}>
                  <img src={image_1} className="card-img" alt="..." />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>
                      <Link style={{ textDecoration: 'none' }} to="/bootcamp">
                        Devworks Bootcamp
                        <Badge bg="success" className="float-end">
                          8.8
                        </Badge>
                      </Link>
                    </Card.Title>
                    <Badge className="mb-2" bg="dark">
                      Boston, MA
                    </Badge>
                    <Card.Text>
                      Web Development, UI/UX, Mobile Development
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-3">
              <Row className="no-gutters">
                <Col md={4}>
                  <img src={image_2} className="card-img" alt="..." />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>
                      <Link style={{ textDecoration: 'none' }} to="/bootcamp">
                        ModernTech Bootcamp
                        <Badge bg="success" className="float-end">
                          7.5
                        </Badge>
                      </Link>
                    </Card.Title>
                    <Badge className="mb-2" bg="dark">
                      Boston, MA
                    </Badge>
                    <Card.Text>
                      Web Development, UI/UX, Mobile Development
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-3">
              <Row className="no-gutters">
                <Col md={4}>
                  <img src={image_3} className="card-img" alt="..." />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>
                      <Link style={{ textDecoration: 'none' }} to="/bootcamp">
                        Codemasters
                        <Badge bg="success" className="float-end">
                          9.2
                        </Badge>
                      </Link>
                    </Card.Title>
                    <Badge className="mb-2" bg="dark">
                      Burlington, VT
                    </Badge>
                    <Card.Text>
                      Web Development, Data Science, Marketing
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-3">
              <Row className="no-gutters">
                <Col md={4}>
                  <img src={image_4} className="card-img" alt="..." />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>
                      <Link style={{ textDecoration: 'none' }} to="/bootcamp">
                        DevCentral Bootcamp
                        <Badge bg="success" className="float-end">
                          6.4
                        </Badge>
                      </Link>
                    </Card.Title>
                    <Badge className="mb-2" bg="dark">
                      Kingston, RI
                    </Badge>
                    <Card.Text>
                      Web Development, UI/UX, Mobile Development, Marketing
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Nav
              aria-label="Page navigation example"
              className="pagination mb-3"
            >
              <Nav.Item className="page-item">
                <Nav.Link className="page-link">Previous</Nav.Link>
              </Nav.Item>
              <Nav.Item className="page-item">
                <Nav.Link className="page-link">1</Nav.Link>
              </Nav.Item>
              <Nav.Item className="page-item">
                <Nav.Link className="page-link">2</Nav.Link>
              </Nav.Item>
              <Nav.Item className="page-item">
                <Nav.Link className="page-link">3</Nav.Link>
              </Nav.Item>
              <Nav.Item className="page-item">
                <Nav.Link className="page-link">Next</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bootcamps;
