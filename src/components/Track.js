import React from "react";
import styled from "styled-components";

const TrackContainer = styled.div`
  padding: 4rem 0;
`;

const TrackTitle = styled.h1`
  font-size: 6rem;
  color: transparent;
  -webkit-text-stroke: 2px var(--color-black);
`;

const MediaPlayer = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  background: var(--color-orange);
  color: white;
  font-size: 1rem;
  padding: .75em 0;
  min-width: 100px;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: .2em;
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
  pointer-events: none;
`;
const Timestamp = styled.span`
  padding: 0 1.5rem;
  letter-spacing: .1em;
`;

function Track(props) {
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [time, setTime] = React.useState({
    current: "0:00",
    total: "0:00"
  });

  function play(e) {
    if (!playing) {
      e.target.parentNode.parentNode.children[1].play();
      setPlaying(true);
    } else if (playing) {
      e.target.parentNode.parentNode.children[1].pause();
      setPlaying(false);
    }
  }

  function updateTimeline(e) {
    const duration = e.target.duration;
    const currentTime = e.target.currentTime;
    setTime({
      ...time, 
      current: formatTime(currentTime)
    });
    if (currentTime / duration === 1) return;
    setProgress(100 * (currentTime / duration));
  }

  function formatTime(sec) {
    let seconds = Math.floor(sec % 60);
    let minutes = Math.floor((sec - (sec % 60)) / 60);
    let timeArr = [minutes, seconds < 10 ? `0${seconds}` : seconds];
    return timeArr.join(":");
  }

  function displayDuration(e) {
    setTime({
      ...time,
      total: formatTime(e.target.duration)
    })
  }

  function handleClick(e) {
    e.stopPropagation();
    let timelineXPos = e.target.getBoundingClientRect().left;
    let diffInPos = e.clientX - timelineXPos;
    let prog = 100 * (diffInPos / e.target.getBoundingClientRect().width);
    let progTime = (prog / 100) * e.target.parentNode.parentNode.children[1].duration;
    setProgress(prog);
    setTime({
      ...time,
      current: formatTime(progTime) 
    });
    e.target.parentNode.parentNode.children[1].currentTime = progTime;
  }

  return (
    <TrackContainer>
      <TrackTitle>{props.title}</TrackTitle>
      <audio preload="auto" src={props.track} id={props.id} onTimeUpdate={updateTimeline} onLoadedData={displayDuration}></audio>
      <MediaPlayer>
        <PlayButton onClick={play} style={{background: playing ? "var(--color-black)" : "var(--color-orange)"}}>{playing ? "stop" : "play"}</PlayButton>
        <Timestamp>{time.current}/{time.total}</Timestamp>
        <Timeline onClick={handleClick}>
          <Playhead style={{width: `${progress}%`}}/>
        </Timeline>
      </MediaPlayer>
    </TrackContainer>
  );
}

export default Track;