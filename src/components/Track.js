import React from "react";
import styled from "styled-components";

const MediaPlayer = styled.div`
  display: flex;
  justify-items: center;
`;

const PlayButton = styled.button`
  background: var(--color-orange);
  color: white;
  font-size: 1rem;
  padding: .75em 0;
  width: 100px;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const Timeline = styled.div`
  width: 50%;
  height: .75rem;
  background: white;

`;

const Playhead = styled.div`
  background: var(--color-black);
  height: 100%;
`;
const Timestamp = styled.span``;

function Track(props) {
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  function play(e) {
    if (!playing) {
      e.target.parentNode.parentNode.children[0].play();
      setPlaying(true);
    } else if (playing) {
      e.target.parentNode.parentNode.children[0].pause();
      setPlaying(false);
    }
  }

  function updateTimeline(e) {
    const duration = e.target.duration;
    const currentTime = e.target.currentTime;
    if (currentTime / duration === 1) return;
    setProgress(100 * (currentTime / duration));
  }

  return (
    <div>
      <audio controls preload="auto" src={props.track} id={props.id} onTimeUpdate={(e) => updateTimeline(e)}></audio>
      <MediaPlayer>
        <PlayButton onClick={(e) => play(e)}>{playing ? "stop" : "play"}</PlayButton>
        <Timestamp>{Math.floor(progress)}</Timestamp>
        <Timeline>
          <Playhead style={{width: `${progress}%`}}/>
        </Timeline>
      </MediaPlayer>
    </div>
  );
}

export default Track;