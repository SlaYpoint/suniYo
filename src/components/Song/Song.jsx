import React, { useState } from "react";
import { useGlobalContext } from "../../contexts/globalContext";

import "./Song.css";
import { FaHeart, FaRegHeart, FaPlay, FaPause } from "react-icons/fa";
import { getTime } from "../../helpers/index";

const Song = () => {
    const { currentTrack, isPlaying, playSong, pauseSong, audioRef} = useGlobalContext();
    // const likedSong = likes.filter((item)=> item.id === currentTrack.id);

    const [liked, setLiked] = useState(false);

    const playHandler = () => {
        if (isPlaying) {
          audioRef.current.pause();
          pauseSong();
        } else {
          audioRef.current.play();
          playSong();
        }
    }

    // const addToLikes = () => {
      
    //   const like = {
    //     id: currentTrack.id,
    //     title: limitTitle(currentTrack.title_short),
    //     artist: currentTrack.artist.name,
    //     cover: currentTrack.album.cover_small,
    //     isLiked : true
    //   }
    //   setLiked(true);
    //   setLikes([...likes, like]);
    // }
    
    const likeToggler = () => {
      liked ? setLiked(false) : setLiked(true);
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
            <button className="btn song__btn" onClick={likeToggler}>
                {liked? <FaHeart/> : <FaRegHeart/>}
            </button>   
        </div>
      </div>
    );
}

export default Song;