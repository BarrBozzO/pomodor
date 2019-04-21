import React from "react";
import styled from "styled-components";

import tomatoLogo from "../assets/svg/tomato.svg";

const StyledHeader = styled.header`
  width: 100%;
  margin-bottom: 15px;
  text-align: left;
`;

const Logo = styled.img.attrs({
  src: tomatoLogo
})`
  width: 50px;
  height: 50px;
  vertical-align: middle;

  @media (max-width: 550px) {
    width: 32px;
    height: 32px;
  }
`;

const StyledHeaderText = styled.h1`
  display: inline-block;
  margin: 0;
  vertical-align: middle;
  margin-left: 15px;
  text-transform: uppercase;

  @media (max-width: 550px) {
    font-size: 24px;
    margin-left: 10px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <StyledHeaderText>Pomodor</StyledHeaderText>
    </StyledHeader>
  );
}
