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

    return (
      <div className="player__container">
        {/* <div className="audio__img-container">
                <img src="" alt="" className="audio__img"/>
            </div> */}
        <div className="track__progress">
          <p>0:00</p>
          <div className="track">
            <input type="range" name="" id="" />
            <div className="track__progress-bar"></div>
          </div>
          <p>2:13</p>
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