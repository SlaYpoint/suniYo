//eslint-disable-next-line
import React, { useState, useRef } from "react";
import "./App.css";
//eslint-disable-next-line
import data from "./data";
import Player from "./components/Player/Player";

function App() {
  const audioRef = useRef(null);
  //eslint-disable-next-line
  const [tracks, setTracks] = useState(data);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackInfo, setTrackInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setTrackInfo({ ...trackInfo, currentTime, duration });
  };

  const trackHandler = async () => {
    const currentIndex = tracks.findIndex(
      (track) => track.id === currentTrack.id
    );
    const nextTrack = tracks[(currentIndex + 1) % tracks.length];
    await setCurrentTrack(nextTrack);

    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="App">
      <h1>suniYo</h1>
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        audioRef={audioRef}
        trackInfo={trackInfo}
        setTrackInfo={setTrackInfo}
        tracks={tracks}
      />
      <audio
        onLoadedMetaData={timeUpdateHandler}
        onEnded={trackHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentTrack.audio}
      />
    </div>
  );
}

export default App;
