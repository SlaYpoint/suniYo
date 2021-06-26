import React, {useState} from "react";
import "./Song.css";

import { getTime } from "../../helpers/getTime";
import { limitTitle } from "../../helpers/limitTitle";

import { FaHeart, FaRegHeart, FaPlay, FaPause } from "react-icons/fa";

const toLocalStore = (data) => {
  localStorage.setItem("likes", JSON.stringify(data));
}

const Song = ({currentTrack, isPlaying, setIsPlaying, audioRef, likes, setLikes}) => {
    
    const [liked, setLiked] = useState(false);

    const playHandler = () => {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(!isPlaying);
        } else {
          audioRef.current.play();
          setIsPlaying(!isPlaying);
        }
    }

    const addToLikes = () => {
      
      const like = {
        id: currentTrack.id,
        title: limitTitle(currentTrack.title_short),
        artist: currentTrack.artist.name,
        cover : currentTrack.album.cover_small
      }
      setLikes([...likes, like]);
      toLocalStore(likes);
    }
    
    const likeToggler = () => {
      if (!liked) {
        addToLikes();
        setLiked(true);
      } else {
        let newLikes = likes.filter(item => item.id !== currentTrack.id);
        setLikes(newLikes);
        toLocalStore(likes);
        setLiked(false); 
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
            <button className="btn song__btn" onClick={likeToggler}>
                {liked? <FaHeart/> : <FaRegHeart/>}
            </button>   
        </div>
      </div>
    );
}

export default Song;