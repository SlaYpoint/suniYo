import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import Player from "./components/Player/Player";
import Header from "./components/Header/Header";

import { getPlaylist } from './utils/makeAxiosCalls';


function App() {
  const audioRef = useRef(null);
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackInfo, setTrackInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const fetchDefaultTracks = () => {
    setLoading(true);
    try {
      const newTracks = getPlaylist();
      newTracks.then((data) => setTracks(data));
      setLoading(false);
      // console.log(tracks);
      setCurrentTrack(tracks[0]);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    fetchDefaultTracks();
  }, []);

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
      <Header />
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
        onLoadedMetadata={timeUpdateHandler}
        onEnded={trackHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentTrack.preview}
      />
    </div>
  );
}

export default App;
