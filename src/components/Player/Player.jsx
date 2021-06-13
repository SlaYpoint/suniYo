import React from "react";
import "./Player.css";

import limitTitle from "../../helpers/limitTitle";
import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Player = ({
    isPlaying,
    setIsPlaying,
    currentTrack,
    setCurrentTrack,
    audioRef,
    trackInfo,
    setTrackInfo,
    tracks
}) => {

    const playHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const getTime = (time) => {
      let min = Math.floor(time / 60);
      let sec = ("0" + Math.floor(time % 60)).slice(-2);
      return `${min}:${sec}`;
    }
  
    const dragHandler = (e) =>{
      audioRef.current.currentTime = e.target.value;
      setTrackInfo({ ...trackInfo, currentTime: e.target.value });
    }

    const skipHandler = async (dir) => {
      let currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);
      if (dir === "forward") {
        await setCurrentTrack(tracks[(currentIndex + 1) % tracks.length]);
      } else if (dir === "backward") {
        if ((currentIndex - 1) % tracks.length === -1) {
          await setCurrentTrack(tracks[tracks.length - 1]);
        } else {
          await setCurrentTrack(tracks[(currentIndex - 1) % tracks.length]);
        }
      }

      if (isPlaying) {
        audioRef.current.play();
      }
    }
    
    return (
      <div className="player__container">
        <div className="player_track__img-container">
          <img
            src={currentTrack.album.cover}
            alt={limitTitle(currentTrack.title_short)}
            className="player_track-img"
            style={{ animationPlayState: isPlaying ? "running" : "paused" }}
          />
        </div>

        <div className="player_track__container">
          <div className="player_track__info">
            <div className="player_track__title">
              {limitTitle(currentTrack.title_short)}
            </div>
            <div className="player_track__artist">
              {currentTrack.artist.name}
            </div>
          </div>
          <div className="player">
            <div className="player__track">
              <p>{getTime(trackInfo.currentTime || 0)}</p>
              <div className="player_audio">
                <input
                  type="range"
                  onChange={dragHandler}
                  min={0}
                  max={trackInfo.duration || 0}
                  value={trackInfo.currentTime}
                />
                <div
                  className="player_audio__progress-bar"
                  style={{
                    transform: `translateX(${
                      Math.round(
                        (trackInfo.currentTime * 100) / trackInfo.duration
                      ) + "%"
                    })`,
                  }}
                ></div>
              </div>
              <p>{getTime(trackInfo.duration || 0)}</p>
            </div>

            <div className="player__controls">
              <button className="btn" onClick={() => skipHandler("backward")}>
                <FaAngleLeft />
              </button>
              <button className="btn" onClick={playHandler}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button className="btn" onClick={() => skipHandler("forward")}>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Player;