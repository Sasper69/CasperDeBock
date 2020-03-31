import React from "react";
import styled from "styled-components";
import {graphql} from "gatsby";

const HeroSection = styled.div`
  min-height: 100vh;
  background: #EBDCBB;
  .container {
    display: flex;
    align-items: center;
  }
`;

const BigTitle = styled.h1`
  font-size: 10rem;
  -webkit-text-stroke: ${props => props.outline ? "2px #171717" : null};
  color: ${props => props.outline ? "transparent" : "#171717"};
  line-height: 1em;
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 0;
  font-size: .9rem;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  line-height: 1rem;
  min-height: calc(1.5rem + 40px);
  letter-spacing: .2em;
  .scroll {
    margin-top: .5rem;
    margin-left: calc(50% - 1px);
    width: 2px;
    height: 40px;
    background: #171717;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% {
      height: 0;

    }
    50% {
      height: 40px;
      transform: translate(0, 0);
      opacity: 1;
    }
    80% {
      transform: translate(0, 40px);
      height: 0;
      opacity: .5;
    }
    100% {
      height: 0;
    }
  }
`

function Hero() {
  return (
    <HeroSection>
      <div className="container" style={{minHeight: "100vh"}}>
        <BigTitle>
          <span style={{WebkitTextStroke: "2px #171717", color: "transparent", display: "block"}}>Casper</span> De Bock
        </BigTitle>
        <ScrollDown>Scroll Down <div className="scroll"></div></ScrollDown>
      </div>
    </HeroSection>
  );
}

export default Hero;