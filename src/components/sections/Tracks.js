import React from "react";
import styled from "styled-components";

import Track from "../Track";

const TracksSection = styled.div`
  background: #F2F0ED;
  padding: 10rem 0;
  p {
    width: 50%;
  }
  @media (max-width: 1199.98px) { 
    p {width: 80%;}
  }
  @media (max-width: 767.98px) { 
    p {width: 100%;}
  }
  a {
    font-family: 'Merriweather', serif;
    font-weight: normal;
  }
`;

function Tracks() {
  return (
    <TracksSection>
      <div className="container">
        <p>I’m Casper De Bock, a 16 year old beat producer. I’m eager to learn new techniques and enhance my capabilities. All tips and tricks are welcome @ <a href="#">Twitter</a>, <a href="#">Soundcloud</a>, <a href="#">Instagram</a>.</p>
      </div>
      <Track/>
    </TracksSection>
  );
}

export default Tracks;