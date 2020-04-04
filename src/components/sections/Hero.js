import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Transition from "../Transition";

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

  @media (max-width: 1200px) { 
    overflow: hidden;
  }
  @media (max-width: 992px) { 
    height: 100vh;
    .container {
      display: block;
    }
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
    z-index: 3;
  }
  z-index: 1;

  @media (max-width: 992px) { 
    position: relative;
    width: 120%;
    top: 0;
    right: auto;
    margin-left: -10%;
    h1 {display: none;}
  }
`;

const Avatar = styled(Img)`
  -webkit-filter: grayscale(100%) contrast(120%) brightness(110%);
  z-index: 2;
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

  @media (max-width: 992px) { 
    top: 20%;
    right: 20%;
  }
`;

const Slogan = styled.img`
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 6rem;
  animation: rotate 20s linear infinite;

  @media (max-width: 1500px) { 
    left: -1em;
  }
  @media (max-width: 992px) { 
    top: 40%;
    left: -3rem;
  }

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

  @media (max-width: 1200px) { 
    font-size: 8rem;
  }
  @media (max-width: 992px) { 
    font-size: 20vw;
    text-align: center;
    display: block;
    padding: 4rem 0;
  }
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
  color: var(--color-black);
  .scroll {
    margin-top: .5rem;
    margin-left: calc(50% - 1px);
    width: 2px;
    height: 40px;
    background: var(--color-black);
    animation: pulse 2s infinite;
  }

  @media (max-width: 992px) { 
    display: none;
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
      allMarkdownRemark(filter: {frontmatter: {title: {eq: "hero"}}}) {
        edges {
          node {
            frontmatter {
              firstName
              lastName
              avatar {
                childImageSharp {
                  fluid(maxWidth: 1201) {
                    src
                    srcSet
                    aspectRatio
                    base64
                    sizes
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
  const [avatarLoaded, setAvatarLoaded] = React.useState(false);

  return (
    <HeroSection>
      <div className="container" style={{minHeight: "100vh"}}>
        <BigTitle>
          <Transition start type="fade-in-up" timeout={200}>
            <span style={{WebkitTextStroke: "2px #171717", color: "transparent", display: "block"}}>{firstName}</span>
          </Transition>
          <Transition start type="fade-in-up" timeout={500}>
            {lastName}
          </Transition>
        </BigTitle>
        <AvatarContainer>
          <Avatar fluid={avatar.childImageSharp.fluid} alt="Casper De Bock" fadeIn={false} onLoad={() => setAvatarLoaded(true)} className={avatarLoaded ? "anim--fade-in-up" : ""}/>
          <MediumTitle>This is me</MediumTitle>
          <Transition start type="pop" timeout={1000}>
            <Circle/>
          </Transition>
        </AvatarContainer>
        <ScrollDown>Scroll Down <div className="scroll"></div></ScrollDown>
      </div>
      <Slogan src={sloganSVG} alt="I make beats & I love it"/>
    </HeroSection>
  );
}

export default Hero;