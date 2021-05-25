import React from "react";
import "./Player.css";
//eslint-disable-next-line
import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Player = ({
    isPlaying,
    setIsPlaying,
    currentTrack,
    //eslint-disable-next-line
    setCurrentTrack,
    audioRef,
    trackInfo,
    setTrackInfo
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

    return (
      <div className="player__container">
        {/* <div className="audio__img-container">
                <img src="" alt="" className="audio__img"/>
            </div> */}
        <div className="track__progress">
          <p>{getTime(trackInfo.currentTime || 0)}</p>
          <div
            className="track"
            style={{background : `linear-gradient(to right, ${currentTrack.color[0]}, ${currentTrack.color[1]})`}}
          >
            <input type="range" onChange={dragHandler} min={0} max={trackInfo.duration} value={trackInfo.currentTime}/>
            <div className="track__progress-bar" style={{transform : `translateX(${Math.round((trackInfo.currentTime*100)/ trackInfo.duration)+"%"})`}}></div>
          </div>
          <p>{getTime(trackInfo.duration || 0)}</p>
        </div>

        <div class="player__controls">
          <button>
            <FaAngleLeft />
          </button>
          <button onClick={playHandler}>
            {isPlaying ? <FaPause/> : <FaPlay/>}
          </button>
          <button>
            <FaAngleRight />
          </button>
        </div>
      </div>
    );
}

export default Player;