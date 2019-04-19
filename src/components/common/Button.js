import React from 'react';
import PropTypes from 'prop-types';

function Button(props){
  return (
    <button onClick={props.handleClick} disabled={props.disabled} >{props.value}</button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false
};

export default Button;
