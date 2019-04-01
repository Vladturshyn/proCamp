import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text,className }) => (
  <button onClick={onClick} className={`short-card__link short-card__link${className}`} >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Button;
