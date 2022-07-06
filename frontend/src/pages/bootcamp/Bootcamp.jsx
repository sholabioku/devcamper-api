import React from 'react';
import { useParams } from 'react-router-dom';
import './bootcamp.css';

const Bootcamp = () => {
  const params = useParams();
  const { id: bootcampId } = params;
  return <div className="bootcamp-show">{bootcampId}</div>;
};

export default Bootcamp;
