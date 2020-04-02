import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import sloganSVG from "../../images/slogan.svg";
import spikesSVG from "../../images/spikes.svg";

const HeroSection = styled.div`
  min-height: 100vh;
  background: var(--color-hero-bg);
  .container {
    display: flex;
    align-items: center;
  }
  &::before {
    content: '';
    background: url(${spikesSVG});
    height: 10px;
    width: 100%;
    position: absolute;
    background-repeat: repeat-x;
    animation: roll-in 1s ease;
  }

  @keyframes roll-in {
    from {
      top: -10px;
      width: 0;
      opacity: 0;
    }
    to {
      top: 0;
      width: 100%;
      opacity: 1;
    }
  }
`;

const AvatarContainer = styled.div`
  width: 601px;
  position: absolute;
  right: 0;
  top: 10vh;
  h1 {
    display: inline-block;
    width: auto;
    position: absolute;
    bottom: -1.4rem;
    left: 10%;
  }
  z-index: 1;
`;

const Avatar = styled(Img)`
  -webkit-filter: grayscale(100%) contrast(120%) brightness(110%);
`;

const Circle = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 8rem;
  background: var(--color-orange);
  position: absolute;
  top: 210px;
  right: 140px;
  z-index: -1;
`;

const Slogan = styled.img`
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 6rem;
  animation: rotate 20s linear infinite;
  @keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg)
    }
  }
`;

const BigTitle = styled.h1`
  font-size: 10rem;
  -webkit-text-stroke: ${props => props.outline ? "2px var(--color-black)" : null};
  color: ${props => props.outline ? "transparent" : "var(--color-black)"};
  line-height: 1em;
`;

const MediumTitle = styled.h1`
  font-size: 6rem;
  color: var(--color-orange);
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
    background: var(--color-black);
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
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              firstName
              lastName
              avatar {
                childImageSharp {
                  fluid(maxWidth: 1201) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const { avatar, firstName, lastName } = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <HeroSection>
      <div className="container" style={{minHeight: "100vh"}}>
        <AvatarContainer>
          <Avatar fluid={avatar.childImageSharp.fluid} alt="Casper De Bock"/>
          <MediumTitle>This is me</MediumTitle>
          <Circle/>
        </AvatarContainer>
        <BigTitle>
          <span style={{WebkitTextStroke: "2px #171717", color: "transparent", display: "block"}}>{firstName}</span> {lastName}
        </BigTitle>
        <ScrollDown>Scroll Down <div className="scroll"></div></ScrollDown>
      </div>
      <Slogan src={sloganSVG} alt="I make beats & I love it"/>
    </HeroSection>
  );
}

export default Hero;