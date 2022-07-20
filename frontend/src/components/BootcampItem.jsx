import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BootcampItem = ({ bootcamp }) => {
  return (
    <Card className="mb-3">
      <Row className="no-gutters">
        <Col md={4}>
          <img src={bootcamp.photo} className="card-img" alt={bootcamp.name} />
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
                  {bootcamp.averageRating}
                </Badge>
              </Link>
            </Card.Title>
            <Badge className="mb-2" bg="dark">
              {bootcamp.location.formattedAddress}
            </Badge>
            <Card.Text>
              {bootcamp.careers.map((career, ind) => (
                <span key={ind}>{`${career}, `}</span>
              ))}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BootcampItem;
