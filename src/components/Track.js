import React from "react";
import styled from "styled-components";



const Audio = styled.audio`
  &::-webkit-media-controls-play-button {
    background: #F53E26;   
  }
  &::-webkit-media-controls-overlay-enclosure {display: none;}
`;

function Track() {
  return (
    <>
      <Audio controls preload="auto"></Audio>
    </>
  );
}

export default Track;