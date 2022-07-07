import React from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './reviews.css';

const Reviews = () => {
  return (
    <div className="review-show">
      <Container>
        <Row>
          <Col md={8}>
            <Link
              to="/bootcamps/bootcampId"
              target="_blank"
              className="btn btn-secondary my-3"
            >
              <i className="fas fa-chevron-left" /> Bootcamp Info
            </Link>
            <h1 className="mb-4">DevWorks Bootcamp Reviews</h1>
            <Card className="mb-3">
              <h5 className="card-header bg-dark text-white">
                Fantastic Bootcamp
              </h5>
              <Card.Body>
                <Card.Title>
                  Rating: <span className="text-success">10</span>
                </Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi similique mollitia, praesentium, animi harum officia
                  dolores corporis ex tempore consequuntur dolorem ullam dolorum
                  magnam corrupti quaerat tempora repudiandae! Similique,
                  molestiae. Iste, blanditiis recusandae unde tenetur eius
                  exercitationem rerum a fuga.
                </Card.Text>
                <p className="text-muted">Writtern By Kevin Smith</p>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <h5 className="card-header bg-dark text-white">Learned a Lot</h5>
              <Card.Body>
                <Card.Title>
                  Rating: <span className="text-success">9</span>
                </Card.Title>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi similique mollitia, praesentium, animi harum officia
                  dolores corporis ex tempore consequuntur dolorem ullam dolorum
                  magnam corrupti quaerat tempora repudiandae! Similique,
                  molestiae. Iste, blanditiis recusandae unde tenetur eius
                  exercitationem rerum a fuga.
                </p>
                <p className="text-muted">Writtern By Jill Samson</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h1 className="text-center my-4">
              <Badge bg="success" className="rounded-circle p-3">
                8.8
              </Badge>{' '}
              Rating
            </h1>
            <div className="d-grid gap-2">
              <Link
                to="/bootcamps/bootcampId/add-review"
                className="btn btn-primary btn-block my-3"
              >
                <i className="fas fa-pencil-alt" />
                Review This Bootcamp
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
