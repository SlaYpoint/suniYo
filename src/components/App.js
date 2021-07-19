import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../contexts/globalContext";

import "./App.css";
import Player from "./Player/Player";
import TrackList from "./TrackList/TrackList";
import Header from "./Header/Header";
import Song from "./Song/Song";

import { getPlaylist, getResults } from '../utils/makeAxiosCalls';

function App() {
  const { audioRef, tracks, setTracks, currentTrack, setCurrentTrack, isPlaying} = useGlobalContext();

  const [loading, setLoading] = useState(false);

  const [trackInfo, setTrackInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  
  useEffect(() => {
    const fetchDefaultTracks = async () => {

      setLoading(true);
      try {
        let playlist = await getPlaylist();
        setTracks(playlist);
        setLoading(false);
        setCurrentTrack(playlist[0]);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
      
    } 
    fetchDefaultTracks()
    // eslint-disable-next-line
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
 
  const searchSubmitHandler = async (event, query) => {
    event.preventDefault();

    setLoading(true);
    if (query !== ' ' && query !== null && typeof(query) !== undefined) {
      
      try{
        let result = await getResults(query);
        setTracks(result);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
      
    } 
  }

  // const [likes, setLikes] = useState([]);

  // if (localStorage.getItem('likes') === null) {
  //   setLikes([]);
  // } else {
  //   setLikes(JSON.parse(localStorage.getItem('likes')));
  // }

  // const playLiked = async (id) => {
  //   setLoading(true);
  //   console.log('clicked');
  //   try {
  //     let likedSong = await getSong(id);
  //     console.log(likedSong);
  //     setCurrentTrack(likedSong);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //     setLoading(false);
  //   }
  // }
  
  return (
    <>
      <Header
        searchSubmitHandler={searchSubmitHandler}
      />
      <main>
        <TrackList
          loading={loading}
        />
        <section className="music__container">
          <div className="song__container">
            <Song/>
          </div>
          <div className="audio__container">
            <Player
              trackInfo={trackInfo}
              setTrackInfo={setTrackInfo}
            />
            <audio
              onLoadedMetadata={timeUpdateHandler}
              onEnded={trackHandler}
              onTimeUpdate={timeUpdateHandler}
              ref={audioRef}
              src={currentTrack.preview}
            />
          </div>
        </section>
      </main>
    </>
  );
  
}

export default App;
