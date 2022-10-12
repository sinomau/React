import Spinner from 'react-bootstrap/Spinner';
import React from 'react'

export const loading = () => {
    return(
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>)
}