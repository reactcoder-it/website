import React from "react";
import styled, { keyframes } from "styled-components";

const MockupKeyframes = (mockupScale = 3) => keyframes`
  0% {
    transform: scale(${mockupScale});
  }
  100% {
    transform: scale(1);
  }
`;

const ScaleLogo = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const ScaleBackground = (backgroundScale = 2.4) => keyframes`
  0% {
    transform: scale(${backgroundScale});
  }
  100% {
    transform: scale(0.766);
  }
`;

const animateTerminal = (adjustTransform = -250) => keyframes`
  0% {
    transform: translate3d(-400px, ${adjustTransform}vh, 0) scale(2.2);
  }
  100% {
    transform: translate3d(-143px, -81px, 0) scale(1);
  }
`;

const animateNotepad = (adjustTransform = "22%") => keyframes`
  0% {
    transform: translate3d(-100vw, ${adjustTransform}, 0) scale(2.2);
  }
  100% {
    transform: translate3d(190px, 20px, 0) scale(1);
  }
`;

const animateCalculator = (adjustTransform = "-178%") => keyframes`
  0% {
    transform: translate3d(-100vw, ${adjustTransform}, 0) scale(2.2);
  }
  100% {
    transform: translate3d(-253px, 104px, 0) scale(1);
  }
`;

const animateToolbar = () => keyframes`
  0% {
    transform: translateY(312px);
    opacity:0;
  }
  100% {
    transform: translateY(281px);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;
  z-index: 1;
`;

const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  will-change: transform;
  animation: ${ScaleLogo} 1.9s cubic-bezier(0.66, 0, 0.2, 1) 0.433s forwards;
`;

const Logo = styled.img`
  filter: brightness(0) invert(1);
`;

const MockupContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  padding-top: 50px;
  align-items: center;
  will-change: transform;
  justify-content: center;
  overflow: hidden;
`;

const Mockup = styled.img`
  margin: 50px;
  height: auto;
  width: 1280px;
  will-change: transform;
  animation: ${MockupKeyframes()} 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
`;

const Background = styled.div`
  position: absolute;
  width: 1314px;
  height: 100%;
  bottom: -6px;
  background: url("/images/darkModeBackground.svg");
  background-repeat: no-repeat;
  background-size: 1314px;
  background-position: center;
  will-change: transform;
  z-index: 0;
  transform: scale(2.2);
  animation: ${ScaleBackground()} 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
`;
const Terminal = styled.div`
  position: absolute;
  height: 323px;
  width: 571px;
  background: url("/images/terminal.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  will-change: transform;
  z-index: 1;
  transform: translate3d(-400px, -250vh, 0) scale(2.2);
  animation: ${animateTerminal()} 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  animation-delay: 0.3s;
`;

const Notepad = styled.div`
  position: absolute;
  height: 356px;
  width: 557px;
  background: url("/images/textEditor.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  will-change: transform;
  z-index: 2;
  transform: translate3d(-100vw, 22%, 0) scale(2.2);
  animation: ${animateNotepad()} 1.8s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  animation-delay: 0.5s;
`;

const Calculator = styled.div`
  position: absolute;
  height: 296px;
  width: 305px;
  background: url("/images/calculator.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  will-change: transform;
  z-index: 3;
  transform: translate3d(-100vw, 178%, 0) scale(2.2);
  animation: ${animateCalculator()} 1.8s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  animation-delay: 0.6s;
`;

const Toolbar = styled.div`
  position: absolute;
  height: 100%;
  width: 1011px;
  background: url("/images/darkToolbar.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 0;
  opacity: 0;
  transform: translateY(312px);
  animation: ${animateToolbar} 1s cubic-bezier(0.66, 0, 0.2, 1) 0.133s forwards;
  animation-delay: 1.85s;
`;

const Intro = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo src="/images/logos/logo-color.png" draggable={false} />
      </LogoContainer>
      <MockupContainer>
        <Mockup src="/images/mockups/macbook.png" draggable={false} />
        <Background draggable={false} />
        <Calculator draggable={false} />
        <Terminal draggable={false} />
        <Notepad draggable={false} />
        <Toolbar draggable={false} />
      </MockupContainer>
    </Wrapper>
  );
};

export default Intro;
