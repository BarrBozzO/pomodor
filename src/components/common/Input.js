import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #ddd;
  font-size: 14px;
  padding: 11px;
  color: #333;
  border-radius: 4px;
`;

function Input(props) {
  const { name, disabled, value, type, placeholder, handleChange } = props;
  return (
    <StyledInput
      name={name}
      type={type}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  disabled: false,
  primary: false,
  placeholder: "",
  type: "text" // text or number
};

export default Input;
