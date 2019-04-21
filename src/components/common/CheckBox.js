import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CheckBoxContainer = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
`;

const StyledCheckBox = styled.input.attrs({
  type: "checkbox"
})`
  position: absolute;
  opacity: 0;
  margin: 0;
  width: 100%;
  height: 100%;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label::before {
    content: "";
    display: inline-block;
    vertical-align: text-top;
    width: 18px;
    height: 18px;
    background: transparent;
    border: 1px solid #ddd;
  }

  &:checked + label::before {
    background: #f44336;
    border-color: #f44336;
  }

  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  &:disabled + label::before {
    box-shadow: none;
    background: #ddd;
  }

  &:checked + label::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`;

function CheckBox(props) {
  const { checked, handleChange, id } = props;
  return (
    <CheckBoxContainer>
      <StyledCheckBox
        id={id}
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      <label htmlFor={id} />
    </CheckBoxContainer>
  );
}

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

CheckBox.defaultProps = {
  disabled: false,
  checked: false
};

export default CheckBox;
