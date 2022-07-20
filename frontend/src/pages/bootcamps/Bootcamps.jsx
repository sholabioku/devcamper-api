import React, { useEffect, useReducer, useState } from 'react';
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';

import Pagination from '../../components/Pagination';
// import data from '../../data';
import './bootcamps.css';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { getError } from '../../utils';
import { Helmet } from 'react-helmet-async';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FECTCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FECTCH_SUCCESS':
      return {
        ...state,
        loading: false,
        bootcamps: action.payload,
      };
    case 'FECTCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const Bootcamps = () => {
  // const [bootcamps, setBootcamps] = useState([]);
  const [{ loading, error, bootcamps }, dispatch] = useReducer(
    logger(reducer),
    {
      bootcamps: [],
      loading: true,
      error: null,
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FECTCH_REQUEST' });
      try {
        const {
          data: { data },
        } = await axios.get('/api/v1/bootcamps');
        dispatch({ type: 'FECTCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FECTCH_FAILURE', payload: getError(error) });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bootcamps-show">
      <Container>
        <Helmet>
          <title>Bootcamps</title>
        </Helmet>
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
                  <div className="d-grid gap-2 mt-3">
                    <Button type="submit">Find Bootcamps</Button>
                  </div>
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
              <div className="d-grid gap-2 mb-3">
                <Button type="submit">Find Bootcamps</Button>
              </div>
            </Form>
          </Col>
          {/* Main Col */}
          <Col md={8}>
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              bootcamps.map((bootcamp) => (
                <Card className="mb-3" key={bootcamp._id}>
                  <Row className="no-gutters">
                    <Col md={4}>
                      <img
                        src={bootcamp.photo}
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
              ))
            )}
            <Pagination />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bootcamps;
