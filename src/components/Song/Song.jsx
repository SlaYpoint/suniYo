import React from "react";
import "./Song.css";

import { getTime } from "../../helpers/getTime";

import { FaHeart, FaRegHeart, FaPlay, FaPause } from "react-icons/fa";

const Song = ({currentTrack, isPlaying, setIsPlaying, audioRef, liked, setLiked}) => {
    
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
      <div className="song">
        <div className="song__card">
          <figure className="song__cover">
            <img
              src={currentTrack.album.cover_medium}
              alt={currentTrack.title_short}
            />
          </figure>
          <div className="song__details">
            <h2 className="song__title">{currentTrack.title_short}</h2>
            <h4 className="song__artist">{currentTrack.artist.name}</h4>
          </div>
        </div>
        
        <div className="song__sub-details">
            <button className="btn song__btn" onClick={playHandler}>
                {isPlaying ? <FaPause/> : <FaPlay/>}
            </button>
            <div className="song__duration"> {getTime(currentTrack.duration)} min</div>
            <button className="btn song__btn" onClick={() => setLiked(!liked)}>
                {liked? <FaHeart/> : <FaRegHeart/>}
            </button>   
        </div>
      </div>
    );
}

export default Song;