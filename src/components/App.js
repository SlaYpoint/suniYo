import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import data from "../helpers/data";
import Player from "./Player/Player";
import TrackList from "./TrackList/TrackList";
import Header from "./Header/Header";
import Song from "./Song/Song";
import { getPlaylist, getResults } from '../utils/makeAxiosCalls';


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
          let newTracks = data.slice(0, 25).map((obj) => obj);
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

  
  const searchSubmitHandler = (event, query) => {
    event.preventDefault();

    setLoading(true);
    if (query !== ' ' && query !== null && typeof(query) !== undefined) {
      getResults(query)
        .then(data => {
          let result = data.map((val) => val);
          setTracks(result);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    } else {
      console.log("no input");
    }
  }

  
  return (
    <div className="container">
      <Header searchSubmitHandler={searchSubmitHandler} />
      <main>
        <TrackList
          loading={loading}
          tracks={tracks}
          setCurrentTrack={setCurrentTrack}
          audioRef={audioRef}
          isPlaying={isPlaying}
        />
        <div className="music__container">
          <div className="song__container">
            <Song
              currentTrack={currentTrack}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
            />
          </div>
          <div className="audio__container">
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
        </div>
      </main>
    </div>
  );
  
}

export default App;
