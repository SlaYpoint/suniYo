import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import data from "./data";
import Player from "./components/Player/Player";
import Header from "./components/Header/Header";
import Preloader from "./components/Preloader/Preloader";
import { getPlaylist } from './utils/makeAxiosCalls';


function App() {
  const audioRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState(data);
  const [currentTrack, setCurrentTrack] = useState(data[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackInfo, setTrackInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  
  useEffect(() => {
    const fetchDefaultTracks = () => {
      setLoading(true);
      
      getPlaylist()
        .then(data => {
          let newTracks = data.slice(0, 10).map((obj) => obj);
          if (newTracks.length !== 0) {
            setTracks(newTracks);
            setLoading(false);
            setCurrentTrack(newTracks[0]);
          }
        })
        .catch(e => {
          setLoading(false);
          console.log(e)
        });
      
    }
    fetchDefaultTracks()
  },[]);

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

  if (!loading) {
    return (
      <main className="App">
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
      </main>
    );
  }
  return (
    <main className="App">
        <Header />
        <Preloader/>
    </main>
  );
}

export default App;
