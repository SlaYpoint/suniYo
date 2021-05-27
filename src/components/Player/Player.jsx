import React from "react";
import "./Player.css";
//eslint-disable-next-line
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
        <div className="track__img-container">
          <img
            src={currentTrack.cover}
            alt={currentTrack.name}
            className="track-img"
            style={{ animationPlayState: isPlaying ? 'running' : 'paused'}}
          /> 
        </div>

        <div className="track__container">
          <div className="track__info">
            <div className="track__title">{currentTrack.name}</div>
            <div className="track__artist">{currentTrack.artist}</div>
          </div>
          <div className="player">
            <div className="player__track">
              <p>{getTime(trackInfo.currentTime || 0)}</p>
              <div
                className="audio"
                style={{
                  background: `linear-gradient(to right, ${currentTrack.color[0]}, ${currentTrack.color[1]})`,
                }}
              >
                <input
                  type="range"
                  onChange={dragHandler}
                  min={0}
                  max={trackInfo.duration}
                  value={trackInfo.currentTime}
                />
                <div
                  className="audio__progress-bar"
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
              <button onClick={() => skipHandler("backward")}>
                <FaAngleLeft />
              </button>
              <button onClick={playHandler}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={() => skipHandler("forward")}>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Player;