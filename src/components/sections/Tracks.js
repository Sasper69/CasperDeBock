import React from "react";
import styled from "styled-components";
import {useStaticQuery, graphql} from "gatsby";

import Track from "../Track";

const TracksSection = styled.div`
  background: var(--color-bg);
  padding: 6rem 0;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

function Tracks() {
  const tracks = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "track"}}}) {
        edges {
          node {
            frontmatter {
              src {
                publicURL
              }
              id
              title
            }
          }
        }
      }
    }
  `);

  return (
    <TracksSection>
      <div className="container">
        {tracks.allMarkdownRemark.edges.map((track, index) => {
          return (
            <Track 
              id={track.node.frontmatter.id} 
              title={track.node.frontmatter.title}
              track={track.node.frontmatter.src.publicURL}
              key={index}
            />
            );
        })}
      </div>
    </TracksSection>
  );
}

export default Tracks;