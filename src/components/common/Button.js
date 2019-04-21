import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: border-box;
  border: 1px solid #c90904;
  border-radius: 20px;
  background: ${({ primary }) => (primary ? "#C90904" : "#ffffff")};
  font-size: 16px;
  line-height: normal;
  padding: 10px 16px;
  margin: 0;
  color: ${({ primary }) => (primary ? "#ffffff" : "#C90904")};
  cursor: pointer;
  font-weight: 600;

  & ~ & {
    margin-left: 10px;
  }

  &:disabled {
    opacity: 0.6;
  }
  @media (max-width: 360px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

function Button(props) {
  return (
    <StyledButton
      onClick={props.handleClick}
      disabled={props.disabled}
      primary={props.primary}
    >
      {props.value}
    </StyledButton>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  disabled: false,
  primary: false,
  type: "button"
};

export default Button;
