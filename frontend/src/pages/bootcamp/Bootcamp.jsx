import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './bootcamp.css';

const Bootcamp = () => {
  const params = useParams();
  const { id: bootcampId } = params;
  return (
    <div className="bootcamp-show">
      <Container>
        <Row>
          {/* Main Col */}
          <Col md={8}>
            <h1>DevWorks Bootcamp</h1>
            {/* Description */}
            <p>
              Devworks is a full stack JavaScript Bootcamp located in the heart
              of Boston that focuses on the technologies you need to get a high
              paying job as a web developer
            </p>
            {/* Avg cost */}
            <p className="lead mb-4">
              Average Course Cost: <span className="text-primary">$10,000</span>
            </p>
            {/* Courses */}
            <Card className="mb-3">
              <h5 className="card-header bg-primary text-white">
                Front End Web Development
              </h5>
              <Card.Body>
                <Card.Title>Duration: 8 Weeks</Card.Title>
                <Card.Text>
                  This course will provide you with all of the essentials to
                  become a successful frontend web developer. You will learn to
                  master HTML, CSS and front end JavaScript, along with tools
                  like Git, VSCode and front end frameworks like Vue
                </Card.Text>
                <ListGroup className="mb-3">
                  <ListGroup.Item>Cost: $8,000 USD</ListGroup.Item>
                  <ListGroup.Item>Skill Required: Beginner</ListGroup.Item>
                  <ListGroup.Item>
                    Scholarship Available:{' '}
                    <i className="fas fa-check text-success"></i>{' '}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <h5 className="card-header bg-primary text-white">
                Full Stack Web Development
              </h5>
              <Card.Body>
                <Card.Title>Duration: 12 Weeks</Card.Title>
                <Card.Text>
                  In this course you will learn full stack web development,
                  first learning all about the frontend with HTML/CSS/JS/Vue and
                  then the backend with Node.js/Express/MongoDB
                </Card.Text>
                <ListGroup className="mb-3">
                  <ListGroup.Item>Cost: $10,000 USD</ListGroup.Item>
                  <ListGroup.Item>Skill Required: Intermediate</ListGroup.Item>
                  <ListGroup.Item>
                    Scholarship Available:{' '}
                    <i className="fas fa-times text-danger"></i>{' '}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          {/* Sidebar */}
          <Col md={4}>
            <img
              src="/images/image_1.jpg"
              alt="..."
              className="img-thumbnail"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bootcamp;
