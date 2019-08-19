import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children, heading, type }) => (
  React.createElement(heading, { className: `title title--${type}` }, children)
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  heading: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
}

export default Title;
