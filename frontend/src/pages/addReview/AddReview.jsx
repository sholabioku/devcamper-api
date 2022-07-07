import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './addReview.css';

const AddReview = () => {
  return (
    <div className="addReview-show">
      <Container>
        <Row>
          <Col md={8} className="m-auto">
            <Card className="bg-white py-2 px-4">
              <Card.Body>
                <Link
                  style={{ textDecoration: 'none' }}
                  to="/bootcamps/bootcampId"
                  className="btn btn-link text-secondary my-3"
                >
                  <i className="fas fa-chevron-left" /> Bootcamp Info
                </Link>
                <h1 className="mb-2">DevWorks Bootcamp</h1>
                <h3 className="text-primary mb-4">Write a Review</h3>
                <p>
                  You must have attended and graduated this bootcamp to review
                </p>
                <Form>
                  <Form.Group>
                    <Form.Label>
                      Rating: <span className="text-primary">8</span>
                    </Form.Label>
                    <Form.Range />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Review title"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      name="review"
                      rows="10"
                      placeholder="Your review"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="submit"
                      value="Submit Review"
                      className="btn btn-dark btn-block"
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

export default AddReview;
