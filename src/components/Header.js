import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import tomatoLogo from "../assets/svg/tomato.svg";

const StyledHeader = styled.header`
  width: 100%;
  margin-bottom: 15px;
  text-align: left;
`;

const Logo = styled.img.attrs({
  src: tomatoLogo,
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

const logoKeyFrames = [
  {
    transform: "rotate(0deg)",
  },
  {
    transform: "rotate(360deg)",
  },
];

const logoTiming = {
  duration: 1000,
  iterations: Infinity,
};

export default function Header() {
  const logoRef = useRef(null);
  const animation = useRef(null);
  const timerState = useSelector((state) => state.pomodorTimer.state);

  useEffect(() => {
    if (logoRef.current) {
      animation.current = logoRef.current.animate(logoKeyFrames, logoTiming);

      if (timerState !== "started") {
        animation.current.pause();
      }

      return () => animation.current.cancel();
    }
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (timerState === "started") {
        animation.current.play();
      } else {
        animation.current.pause();
        if (timerState === "stopped") {
          animation.current.currentTime = 0;
        }
      }
    }
  }, [timerState]);

  return (
    <StyledHeader>
      <Logo ref={logoRef} />
      <StyledHeaderText>Pomodor</StyledHeaderText>
    </StyledHeader>
  );
}
