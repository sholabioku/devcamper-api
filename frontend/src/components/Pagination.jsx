import React from 'react';
import { Nav } from 'react-bootstrap';

const Pagination = () => {
  return (
    <>
      <Nav aria-label="Page navigation example" className="pagination mb-3">
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
    </>
  );
};

export default Pagination;
