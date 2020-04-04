import React from "react"
import styled from "styled-components";
import Transition from "../components/Transition";
import SEO from "../components/seo";
import { Link } from "gatsby";

const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 20vh 0;
  background: var(--color-hero-bg);
`;

const NotFoundTitle = styled.h1`
  font-size: 16rem;
  letter-spacing: 1rem;
  color: transparent;
  -webkit-text-stroke: 2px var(--color-black);
  line-height: 1em;
  span {
    color: var(--color-black);
    text-stroke: 0;
  }

  @media (max-width: 768px) {
    font-size: 50vw;
  }
`;

const NotFoundButton = styled.button`
  cursor: pointer;
  outline: none;
  background: var(--color-orange);
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 1em 1.5em;
  &:hover {
    background: var(--color-black);
  }
`;

const NotFoundPage = () => (
  <NotFoundContainer>
    <SEO title="404: Not found" />
    <Transition start type="fade-in-up">
      <NotFoundTitle>4<span>0</span>4</NotFoundTitle>
    </Transition>
    <Transition start type="fade-in-up" timeout={300}>
      <p style={{marginBottom: "1em"}}>You're in the wrong place!</p>
    </Transition>
    <Transition start type="fade-in-up" timeout={400}>
      <Link to="/">
        <NotFoundButton>
          Back to site
        </NotFoundButton>
      </Link>
    </Transition>
  </NotFoundContainer>
)

export default NotFoundPage;
