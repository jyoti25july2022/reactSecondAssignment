import React from 'react';
import PropTypes from 'prop-types';

const ChildComponent = ({ message }) => {
  return <h2>{message}</h2>;
};

ChildComponent.propTypes = {
  message: PropTypes.string.isRequired
};

export default ChildComponent;
