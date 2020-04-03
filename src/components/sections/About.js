import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const AboutSection = styled.div`
  background: var(--color-bg);
  padding-top: 16rem;
  p {
    width: 50%;
  }
  @media (max-width: 1200px) { 
    p {width: 80%;}
    padding-top: 8rem;
  }
  @media (max-width: 768px) { 
    p {width: 100%;}
  }
  a {
    font-family: 'Merriweather', serif;
    font-weight: normal;
  }
`;

function About() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {title: {eq: "about"}}}) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);
  let { html } = data.allMarkdownRemark.edges[0].node;

  return (
    <AboutSection>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </AboutSection>
  );
}

export default About;